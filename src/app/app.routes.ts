import { Routes } from "@angular/router";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { HomeComponent } from "./home.component";
import { ListaComprasComponent } from "./lista-compras/lista-compras.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "calculadora", component: CalculadoraComponent },
	{ path: "lista-compras", component: ListaComprasComponent },
	{ path: "**", redirectTo: "" },
];
