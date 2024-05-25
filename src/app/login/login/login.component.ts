import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignDivVisiable: boolean = true;
  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();
  signupForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      pseudo: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],

    });
  }

  confirmationValidate = (control: FormGroup): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  onRegister() {
    // Your registration logic
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    alert('Registration Success');
    console.log(this.signupForm.value);
    // Redirect to login page after registration
    this.router.navigateByUrl('/login');
  }

  onLogin() {
    // Your login logic
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find((user: SignUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
      if (isUserPresent != undefined) {
        alert("User Found...");
        // Store logged-in user in localStorage
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        // Redirect to dashboard after login
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("No User Found")
      }
    }
  }
}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = "";
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}
