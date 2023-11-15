import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { VendedorService } from './vendedor.service';
import { Vendedor } from './vendedor';

@Component({
  selector: 'app-formvendedor',
  templateUrl: './formvendedor.component.html',
  styleUrls: ['./formvendedor.component.css']
})
export class FormvendedorComponent implements OnInit {

  vendedor:Vendedor = new Vendedor(); //se hace una instancia de vendedor (para poder acceder a sus atributos)

  //al constructor se le pasa el vendedor service (donde se encuentran los metodos y la ruta )
  constructor(private vendedorService: VendedorService , private router:Router, private activatedRoute:ActivatedRoute){ //activated router se utiliza para acceder a la información de la ruta actualmente activa

  }

  ngOnInit(): void {
    this.cargar();
  }

  //metodo para mostrar la información que se va a actualizar
  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if (id) {
          this.vendedorService.get(id).subscribe(
            es=>this.vendedor=es
          );
        }
      }
    );
    
  }

  //metodo create , cuando se presione el boton en el formulario aplicará éste metodo
  create():void{
    console.log(this.vendedor); 
    this.vendedorService.create(this.vendedor).subscribe( //de vendedor service accede al metodo crear se le pasa como parametro el vendedor y se suscribe
      res=>this.router.navigate(['vendedor']) //al crear un nuevo vendedor dirige a la ruta vendedor
    );
    
  }

  //metodo actualizar
  update():void{
    this.vendedorService.update(this.vendedor).subscribe( //se crea una instancia del servicio se manda llamar el metodo update se le pasa como parametro el vendedor 
      e=>this.router.navigate(['vendedor']) //una vez que se haya actualziado manda a la ruta vendedor
    );
  }

  




}
