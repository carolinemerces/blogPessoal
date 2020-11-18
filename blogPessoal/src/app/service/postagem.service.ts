import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')),
  }

  getAllPostagens(){
    return this.http.get('https://blogpessoal-backend.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id:number){
    return this.http.get(`https://blogpessoal-backend.herokuapp.com/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem){
    return this.http.post('https://blogpessoal-backend.herokuapp.com/postagens', postagem, this.token)
  }
  
  putPostagem(postagem: Postagem){
    return this.http.put('https://blogpessoal-backend.herokuapp.com/postagens', postagem, this.token)
  }

deletePostagem(id:number){
  return this.http.delete(`https://blogpessoal-backend.herokuapp.com/postagens/${id}`, this.token)
}

getByTituloPostagem(titulo: string){
  return this.http.get(`https://blogpessoal-backend.herokuapp.com/postagens/titulo/${titulo}`, this.token)
}
}
