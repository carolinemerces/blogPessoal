import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css'],
})
export class PostTemaComponent implements OnInit {
  listaTemas: Tema[];
  tema: Tema = new Tema();

  constructor(private temaService: TemaService,
     private router: Router,
      private alert: AlertasService
     ) {}

  ngOnInit() {
    this.findAllTemas()
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  cadastrar(){
    if(this.tema.descricao == null){
      this.alert.showAlertWarning('Preencha o campo de nome do tema corretamente')

    }
    else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
        this.tema = resp
        this.alert.showAlertSuccess('Novo tema cadastrado com sucesso!')
        this.router.navigate(['/feed'])
      })
    }
  }

  voltar(){
    this.router.navigate(['/feed'])
  }
}
