import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private formbuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
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
      this.fakeLoading();
      //  RESET AL FORMULARIO UNA VEZ INGRESAMOS.
      this.form.reset();
    }
    else {
      //  MOSTRAMOS UN  MENSAJE DE  ERROR.
      this.error();
      //  RESET AL FORMULARIO AL ERRAR INGRESO.
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('User or password invalid.','', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      //  AGREGAR REDIRECCIONAMIENTO A DASHBOARD.
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
