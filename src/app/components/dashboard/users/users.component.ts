import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';


const listUsers: User[] = [
  {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
  {user: "MarceloOK", name: "Claudio", surname: "Imberlina", sex: "Male"},
 
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
