import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers: User[] = [
    {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
    {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
    {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
    {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
    {user: "jperalta", name: "John", surname: "Peralta", sex: "Male"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
    {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
    {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
    {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "ngarcia", name: "Noe", surname: "Garcia", sex: "Male"},
    {user: "alturing", name: "Allan", surname: "Turing", sex: "Male"},
    {user: "jsmith", name: "John", surname: "Smith", sex: "Male"},
  ];

  constructor() { }

  getUser() {
    return this.listUsers.slice();
  }

  deleteUser(index: number) {
    this.listUsers.splice(index, 1);
  }
}
/*
listUsers: User[] = [
    {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
    {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
    {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
    {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
    {user: "jperalta", name: "John", surname: "Peralta", sex: "Male"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
    {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
    {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
    {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "ngarcia", name: "Noe", surname: "Garcia", sex: "Male"},
    {user: "alturing", name: "Allan", surname: "Turing", sex: "Male"},
    {user: "jsmith", name: "John", surname: "Smith", sex: "Male"},
  ];
*/