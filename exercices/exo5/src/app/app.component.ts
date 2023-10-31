import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  personnes: Array<{ nom: string, age: number }> = [];

  ajouterPersonne(personne: { nom: string, age: number }) {
    this.personnes.push(personne);
  }
}
