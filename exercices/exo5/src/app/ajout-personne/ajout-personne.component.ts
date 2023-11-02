import { Component, OnInit } from '@angular/core';

interface Personne {
  nom: string;
  prenom: string;
  age: number;
}

@Component({
  selector: 'app-gestion-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})

export class GestionPersonneComponent implements OnInit {
  personnes: Personne[] = [];

  ajouterPersonne(personne: Personne): void {
    this.personnes.push(personne);
  }

  ngOnInit(): void {
  }
}
