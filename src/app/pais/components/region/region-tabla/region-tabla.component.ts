import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.css']
})
export class RegionTablaComponent implements OnInit {

  constructor() { }
  @Input() regionesArray : Country[] = [];

  ngOnInit(): void {
  }

}
