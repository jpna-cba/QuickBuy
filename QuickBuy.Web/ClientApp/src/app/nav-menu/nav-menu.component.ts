import { Component } from '@angular/core';
import { Usuario } from '../modelo/usuairo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router: Router) {

  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {

    return sessionStorage.getItem("usuario-autenicado") == "1";

    //var usuairoLogado = sessionStorage.getItem("usuario-autenicado");
    //if (usuairoLogado == "1") {
    //return true;
    //}
    //return false;
  }
  sair() {
    sessionStorage.setItem("usuario-autenicado", "");
    this.router.navigate(['/'])
  }
}
