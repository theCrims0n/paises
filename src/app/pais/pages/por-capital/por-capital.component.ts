import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  hayError  : boolean = false;
  termino : string = '';
  capitales : Country[] = [];

  constructor(private paisService : PaisService) 
  {
    //this.capitales  = JSON.parse(localStorage.getItem('capitales')!) || [];
  }

  buscar(termino : string)
  {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe((capitales) => {

    console.log(capitales);
    this.capitales = capitales;
    //localStorage.setItem('capitales', JSON.stringify(this.capitales));
    }, (err) => {this.hayError = true; this.capitales = [];});
  }

  sugerencias(termino : string)
  {
    if(termino.trim() === '')
    {
      this.hayError = false;
      this.capitales = [];
    }
    else
    {
      this.hayError = false;
      this.buscar(termino)
    }
  }

}
