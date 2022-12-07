import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';


const listUsers: User[] = [
  {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
  {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
  {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
  {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
  {user: "jperalta", name: "John", surname: "Peralta", sex: "Male"},
  {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
  {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
  {user: "ngarcia", name: "Noe", surname: "Garcia", sex: "Male"},
  {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
  {user: "MarceloOK", name: "Claudio", surname: "Imberlina", sex: "Male"},
  {user: "jsmith", name: "John", surname: "Smith", sex: "Male"},
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['user', 'name', 'surname', 'sex'];
  dataSource = listUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
