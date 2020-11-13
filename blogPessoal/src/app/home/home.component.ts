import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private alert: AlertasService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  btnFeed(){
    let token = localStorage.getItem('token')
      if(token==null){
        this.router.navigate(['/login'])
        this.alert.showAlertInfo('Faça login antes de entrar no Feed!')
      }
  }

}
