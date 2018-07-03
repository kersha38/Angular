import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() nombre: string;
  @Input() urlImagen: string;
  @Output() seleccionoCuenta: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  ejecutarDioClick(){
    this.seleccionoCuenta.emit(this.nombre);

  }

}
