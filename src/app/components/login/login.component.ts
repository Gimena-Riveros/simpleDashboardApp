import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private formbuilder: FormBuilder, private _snackBar: MatSnackBar) { 
    this.form = this.formbuilder.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  //  FUNCION PARA INGRESAR A MI DASHBOARD APP
  signin() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    console.log(user);
    console.log(password);
    //  HARDCODEAMOS  LOGIN POR FALTA DE  BACKEND.
    if(user=="GimenaOK" && password=="admin321") {
      //  REDIRECCIONAMOS A DASHBOARD APP.
    }
    else {
      //  MOSTRAMOS UN  MENSAJE DE  ERROR.
      this.error();
    }
  }

  error() {
    this._snackBar.open('User or password invalid.','', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
