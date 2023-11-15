import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedoresComponent } from './vendedores/vendedores.component';

//Funcionamiento de Http cliente 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormvendedorComponent } from './vendedores/formvendedor.component';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component'; //importar para uso de rutas 

const routes:Routes =[
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'', component:HomeComponent},
  //{path:'', redirectTo:'/vendedor', pathMatch:'full'},
  {path:'vendedor', component:VendedoresComponent},
  {path:'vendedor/form', component:FormvendedorComponent},
  {path:'vendedor/form/:id', component:FormvendedorComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    VendedoresComponent,
    FormvendedorComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
