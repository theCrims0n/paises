import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
//switchMap sirve para recibir un observable y regresar otro obseravable

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  //! se usa para decir que una variable puede ser null
  pais : Country[] = [];
  //ActivatedRoute es para poder suscribirnos (.suscribe()) a cualquier parte de una URL
  constructor
  (
    private activateRoute : ActivatedRoute, 
    private paisService : PaisService
  ) { }

  ngOnInit(): void 
  {
    this.activateRoute.params
    .pipe(
      //cuando usamos '{}' desestructuramos los parametros del json que recibimos en params o en subscribe
      switchMap( ({id}) => this.paisService.getPaisAlpha( id )),
      //switchMap envia una variable al metodo paisAlpha();
      tap(console.log))
      .subscribe( (pais) => this.pais = pais);
  } 
}
