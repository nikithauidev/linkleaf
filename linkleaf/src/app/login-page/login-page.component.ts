import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthGuardService } from '../auth-guard.service';
import { LogoHeaderComponent } from '../Components/logo-header/logo-header.component';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  public userName: string;
  public password: string;
  passwordMatch = false;


  constructor(private router: Router,
              private formBuilder: FormBuilder, private authservice: AuthGuardService) {
                this.createLoginForm();
              }

  ngOnInit() {}
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: null,
      password: null
    });
  }
  credentialMatch( ) {
    let flag = true;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.authservice.userAccess.length; i++) {
      // tslint:disable-next-line:max-line-length
      if (this.loginForm.value.userName === this.authservice.userAccess[i].user && this.loginForm.value.password === this.authservice.userAccess[i].password) {
        this.authservice.isLoggedIn = true;
        this.authservice.loginUser = this.authservice.userAccess[i].user;
        this.goToHomePage();
        flag = false;
      }

    }

    if (flag) {
      this.authservice.isLoggedIn = false;
      this.passwordMatch = true;
      this.loginForm.reset();
    }

  }

  goToHomePage() {
    this.router.navigate(['welcome']);
  }

}
