import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styleUrls: ['./capital-input.component.css']
})
export class CapitalInputComponent implements OnInit {

  //Output para recibir datos de un metodo de otro componente
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  //onDebounce evento similar al keyPress donde entramos al metodo al dejar de escribir.
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  termino : string = '';
  debouncer : Subject<string> = new Subject();
  constructor() { }

  ngOnInit(): void 
  {
    //pipe() sirve como un metodo intermediario para transformar la forma en la 
    //que el subscribe devuelva el valor.
    this.debouncer.pipe(debounceTime(300)).subscribe( valor => {this.onDebounce.emit(valor)})
  }

  buscar()
  {
    //emit es para emitir los datos de un componente a otro hacia su metodo
    this.onEnter.emit(this.termino);
  }

  teclaPresionada()
  {
    this.debouncer.next(this.termino);
  }

}
