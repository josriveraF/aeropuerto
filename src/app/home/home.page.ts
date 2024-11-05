import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  vista:boolean=true;
  eliminaa:boolean=true;
  eliminaa2:boolean=true;
  borrar1:boolean=true;
  borrar2:boolean=true;
  vistaa(){
    this.vista=!this.vista;
    console.log("negativo")
  }
  Eliminar1(){
    this.borrar1=!this.borrar1;
    this.eliminaa=true;
    console.log("negativo")

  }
  Eliminar2(){
    this.borrar2=!this.borrar2;
    this.eliminaa2=true;
    console.log("negativo")

  }
  vista2(){this.eliminaa=!this.eliminaa
    console.log("negativo")

  }
  vista3(){this.eliminaa2=!this.eliminaa2
    console.log("negativo")

  }
}

