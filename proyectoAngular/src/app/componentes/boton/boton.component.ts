import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() nombreBoton:string;
  // Evento
  @Output() dioClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // otra forma
    this.nombreBoton = this.nombreBoton.toLocaleUpperCase();
  }

  ejecutarEvento(){
    console.log("emitiendo");
    this.dioClick.emit();
  }

}
