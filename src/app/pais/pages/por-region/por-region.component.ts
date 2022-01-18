import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regionesArray : Country[] = [];
  regionString : string = '';
  hayError : boolean = false;
  constructor(private regiones : PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(regionesString : string)
  {
    this.hayError = false;
    this.regionString = regionesString;
    this.regiones.getRegion(this.regionString)
    .subscribe((regiones) => {

    console.log(regiones);
    this.regionesArray = regiones;
    localStorage.setItem('paises', JSON.stringify(this.regionesArray));
    }, (err) => {this.hayError = true; this.regionesArray = [];});
  }

}
