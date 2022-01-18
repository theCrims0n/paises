import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent implements OnInit {

  constructor() { }
  @Input() capitales : Country[] = [];

  ngOnInit(): void {
  }

}
