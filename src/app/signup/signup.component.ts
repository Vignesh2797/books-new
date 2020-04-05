import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  loading = false;
  signupForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>, private snackbar: MatSnackBar) { }

  ngOnInit(): void {

  }

  getErrorMessage(e) {
    if (e == 'username') {
      return this.signupForm.get("username").hasError('required') ? 'Username is required' : 'Enter a valid name (2-50 characters)';
    }
    if (e == 'password') {
      return this.signupForm.get("password").hasError('required') ? 'Password is required' : 'Enter a valid password (6-20 characters)';
    }
    if (e == 'email') {
      return this.signupForm.get("password").hasError('required') ? 'Email is required' : 'Enter a valid email';
    }
    if (e == 'mobile') {
      return this.signupForm.get("password").hasError('required') ? 'Mobile No is required' : 'Enter a valid mobile number';
    }

  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.snackbar.open('User ' + this.signupForm.value.username + ' created successfully', '', {
          duration: 5000
        });
        this.dialogRef.close();
      }, 3000);
      console.log(this.signupForm.value);
    }
  }

}
