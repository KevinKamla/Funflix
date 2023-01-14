import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface User {
  name: string;
  email: string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class BdFilmService {

  Email: any;
  password: any;
  constructor(
    //private firestore: Firestore
    private angularfireAuth: AngularFireAuth,
    private storage: Storage
    ) { }



  getRegister( email: any, password: any): any{
    return this.angularfireAuth.createUserWithEmailAndPassword(email, password);
  }

  async initDataBase() {
    await this.storage.create();
    await this.storage.defineDriver(CordovaSQLiteDriver)
  }

  insetData(name: string, obj: any) {
    this.storage.set(name, obj)
  }

  async getData(tabName: string) {
    return await this.storage.get(tabName)
  }

  async isObjectExist(tabName: string, objet: any) {
    let dataExite = await this.getData(tabName)
    if (dataExite) {
      let objetexist = dataExite.filter((elt: { Title: any }) => elt.Title == objet.Title)[0]
      if (objetexist) {
        return 1
      } else {
        return 0
      }
    }
  }

  async setData(tabName: string, objet: any) {
    const dataExite = await this.getData(tabName)
    if (!dataExite) { // Si le tableau des données existant est vide   
      let tabStudent: any[] = []
      tabStudent.push(objet)
      this.insetData(tabName, tabStudent)
    } else {
      if (await this.isObjectExist(tabName, objet) == 0) {
        let newTabStudents: any[] = []
        newTabStudents = dataExite
        newTabStudents.push(objet)
        this.insetData(tabName, newTabStudents)
      }
    }
  }

  async removeItem(tabName: string, item: any) {
    const dataExite = await this.getData(tabName)
    console.log("dataExite ", dataExite);
    let newTabStudents: any[] = dataExite.filter((elt: { Title: any }) => elt.Title != item.Title);
    this.insetData(tabName, newTabStudents)
  }

  async remove(tabName: string) {
    this.storage.remove(tabName)
  }

  async clear() {
    this.storage.clear();
  }

    // getUser(): Observable< User[]>{
  //   const userRef = collection(this.firestore, 'user');
  //   return collectionData(userRef, {idField: 'id'}) as Observable<User[]>;
  // }

  // getUserById(id: any): Observable <User>{
  //   const userDocRef = doc(this.firestore, 'user\${id}');
  //   return docData(userDocRef, {idField: 'id'}) as Observable<User>;
  // }

  // addUser(user: User){
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }

  // deleteUser(user: User){
  //   const userDocRef = doc(this.firestore, 'user\${id}');
  //   return deleteDoc(userDocRef)
  // }

  // updateUser(user: User){
  //   const userDocRef = doc(this.firestore, 'Users/${user.id}');
  //   return updateDoc(userDocRef, { email: user.email, name: user.name, password: user.password});
  // }

}
