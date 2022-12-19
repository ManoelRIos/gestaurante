import { Component } from '@angular/core';
import { LoginService } from './services/Login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  constructor(public loginService: LoginService){}

  a = true;
  title = 'Gestaurante';

}
