import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import Swal from 'sweetalert2';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  })
  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

  }

  getErrorMessage(e) {
    if (e == 'username') {
      return this.loginForm.get("username").hasError('required') ? 'Username is required' : 'Enter a valid name (2-50 characters)';
    }
    if (e == 'password') {
      return this.loginForm.get("password").hasError('required') ? 'Password is required' : 'Enter a valid password (6-20 characters)';
    }

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.reset();
      Swal.fire({
        title: "User logged successfully",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      })
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500)

    }
  }


  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
