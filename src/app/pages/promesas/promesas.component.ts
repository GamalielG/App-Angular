import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  usuarios: any;
 

  constructor() {}

  ngOnInit(): void {

    this.getUsuarios().then(datosUsuario => {
      this.usuarios = datosUsuario;
      console.log(datosUsuario);
    });

    this.obtenerNest().then(conectarNest => {
      return conectarNest;//unir angular con nest
    });

    //this.getUsuarios2();

    /*const promesa = new Promise((resolve, reject) => {
      //console.log('Una nueva promesa');

      if(false) {
        resolve('Una nueva promesa');
      }
      else {
        reject('ocurrió un error');
      }

    });

    promesa
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });

    console.log("Fin de ngOnInit");*/

  }

  getUsuarios() {
    const promesa = new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => resolve(res.data))
    });
    
    return promesa;

  }

  obtenerNest() {
    const nest = new Promise(resolve =>{
      fetch('https://nest-appp.herokuapp.com/')
      .then(res => res.json())
      .then(res => resolve(res))
    });
    
    return nest;

  }
}
