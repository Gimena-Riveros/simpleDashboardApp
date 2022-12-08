import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [
    {user: "hyalejandria", name: "Hypatia", surname: "deAlejandria", sex: "Female"},
    {user: "leodavinci", name: "Leonardo", surname: "daVinci", sex: "Male"},
    {user: "lfSoto", name: "Lucas", surname: "Soto", sex: "Male"},
    {user: "macurie", name: "Marie", surname: "Curie", sex: "Female"},
    {user: "jperalta", name: "John", surname: "Peralta", sex: "Male"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "GimeOK", name: "Gimena", surname: "Riveros", sex: "Female"},
    {user: "ngarcia", name: "Noe", surname: "Garcia", sex: "Male"},
    {user: "alturing", name: "Allan", surname: "Turing", sex: "Male"},
    {user: "jsmith", name: "John", surname: "Smith", sex: "Male"},
  ];

  displayedColumns: string[] = ['user', 'name', 'surname', 'sex', 'actions'];
  dataSource = new MatTableDataSource(this.listUsers);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
