import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'surname', 'sex', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _userService:UserService, private _snackBar: MatSnackBar) { }

  /* AL INICIAR EL COMPONENTE, CARGO LOS USUARIOS DESDE EL SERVICIO */
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.listUsers = this._userService.getUser();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number) {
    console.log(index);
    this._userService.deleteUser(index);
    this.loadUsers();

    this._snackBar.open('User delete successfully.','', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
