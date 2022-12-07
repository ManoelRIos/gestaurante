import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Usuarios
{
  constructor(
    public id?: number,
    public nome?: string,
    public senha?: string,
    public pefil?: string) {}
}
