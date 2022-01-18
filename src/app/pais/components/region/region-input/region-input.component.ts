import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisService } from 'src/app/pais/services/pais.service';

@Component({
  selector: 'app-region-input',
  templateUrl: './region-input.component.html',
  styleUrls: ['./region-input.component.css']
})
export class RegionInputComponent implements OnInit {

  regionesBoton : string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 
  'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva : string = '';
  constructor(private regiones : PaisService) { }
  @Output() onEnter : EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  getClass (region : string) : string
  {
    return (region === this.regionActiva) ? 'btn btn-primary mr-1' : 'btn btn-outline-primary mr-1';
  }

  activarRegion(region : string)
  {
    this.regionActiva = region;

    this.onEnter.emit(this.regionActiva);
  }
}
