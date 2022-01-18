import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  //Output para recibir datos de un metodo de otro componente
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  //onDebounce evento similar al keyPress donde entramos al metodo al dejar de escribir.
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  termino : string = '';
  debouncer : Subject<string> = new Subject();

  constructor() {}

  //
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
