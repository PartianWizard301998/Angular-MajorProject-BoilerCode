import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { passwordValidator } from '../Validators/password_pattern.validator';
import { AuthService } from '../../Services/auth.service';
import { error } from 'console';
import { ToastService } from '../../Services/toast.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export default class LoginFormComponent implements OnInit {

  authService =inject(AuthService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  router = inject(Router);
  loginForm !: FormGroup;
  


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', [Validators.required, passwordValidator()]],
    });

  }

  login() {
    if(this.loginForm.valid){

      this.authService.loginService(this.loginForm.value).subscribe( (result) =>{
        this.toastService.show(result.message, {type: 'success', autohide: false, showClose: true});
        localStorage.setItem('user', JSON.stringify(result.data));
        localStorage.setItem('access_token', result.access_token);
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['/dashboard']);
        this.loginForm.reset();
      }, error =>{
        this.toastService.show(error.error.message, {type: 'error', autohide: true, showClose: true});
      })

    }else{
      alert("Invalid Login Form")
    }
    }


}
