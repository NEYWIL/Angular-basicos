import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // ,
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Contador App';

  numero: number = 10;

  // sumar() {
  //   this.numero += 1;
  // }

  // restar() {
  //   this.numero -= 1;
  // }

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
