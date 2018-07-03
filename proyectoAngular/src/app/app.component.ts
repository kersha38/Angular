import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "¿Quién esta viendo ahora?";
  nombreBoton="Administrar";
  nombre: String = 'Paola';
  apellido: String = 'Guamani';

  mostrar = false;
  arregloNumeros = [5,4,3,2,1];

  nombreImagen = 'nyx.jpg';

  anchoImagen = 200;

  perfiles = [
    {
      id:0,
      nombrePerfil:'Carlos',
      nombreImagen:'1.PNG'
    },
    {
      id:1,
      nombrePerfil:'Luna',
      nombreImagen:'2.PNG'
    },
    {
      id:2,
      nombrePerfil:'Bobi',
      nombreImagen:'3.PNG'
    },
    {
      id:3,
      nombrePerfil:'Alguien',
      nombreImagen:'4.PNG'
    },
    {
      id:4,
      nombrePerfil:'Mr.X',
      nombreImagen:'5.PNG'
    },
  ];

  aumentarTamano(){
    this.anchoImagen += 10;
  }

  cambiarTamanoImagen(tamanoCambio: number){
    this.anchoImagen += tamanoCambio;
  }

  irAAdministrarPerfiles() {
    console.log('Ir a administrar');
  }

  irACuenta(nombreCuenta:string){
    console.log("Ir a cuenta "+ nombreCuenta);

  }

}
