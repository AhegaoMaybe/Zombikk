import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  entered:boolean;
  constructor() { }

  ngOnInit() {
    this.login = 'admin1';
    this.password = 'admin1';
    this.entered= false;
  }

  MakeLogin(){
    console.log(this.login);
    console.log(this.password);
    if (this.login === 'admin' && this.password === 'admin'){
      console.log('Всё норм');
      this.entered=true;
    }
    else{
      const pass = localStorage.getItem('password');
      const log = localStorage.getItem('login');
    if(log === this.login && pass === this.password){
      console.log('Всё хорошо вы вошли');
      this.entered=true;
    }
    else{
      this.entered = false;
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }

  }
}
}
