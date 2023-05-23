import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// app.component.ts
  title = 'HTTP using native fetch API';
  private url: string = 'http://103.13.231.185:8080/api/v1/test_login/';
  loginForm!: FormGroup;
  ResData: any=[];
  myProperty = '';
  constructor(private _httpClient: HttpClient,private loginSer: LoginService,private _fb: FormBuilder) {
    
   }
  
  ngOnInit(): void {
    localStorage.clear()

    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.loginSer.login(this.loginForm.value).pipe(map((response: any) => response)).subscribe((data) => {
      
      //console.log(data);

      this.ResData = data;
      //console.log(this.title_suc.response_data);
    })
    }
}
  

