import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Vendedor } from './vendedor';
import { VendedorService } from './vendedor.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {


  vendedores:Vendedor[] = []; //Se inicializa una variable y se le pasa el objeto vendedor como un arreglo

  constructor(
    private vendedorService:VendedorService //al constructor se le pasa como parametro el vendedor service para poder acceder a sus metodos previamente creados
  ){}

  ngOnInit():void{

    this.vendedorService.getAll().subscribe( //de vendedor service va a obtener todo se suscribe
      e =>this.vendedores=e //con una arrow function se le pasa la variable previamente creada
    )

  }

  //metodo eliminar
  delete(vendedor:Vendedor):void{ //se le pasa como parametro el objeto vendedor
    //console.log("hello from delete"); //para hacer la prueba de que funciona el botón

    var resultado = window.confirm("Estas seguro de eliminar?"); //muestra un mensaje si desea eliminar el elemento

    if (resultado){ //si resultado es verdadero
      this.vendedorService.delete(vendedor.id).subscribe( //de vendedor service se manda llamar el metodo eliminar y se le pasa el id se suscribe
      res=>this.vendedorService.getAll().subscribe(
        response=>this.vendedores=response
      )
    );
    }

    
  }


}
