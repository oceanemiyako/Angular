import { Component } from '@angular/core';

@Component({
  selector: 'app-component-animal',
  templateUrl: './component-animal.component.html',
  styleUrls: ['./component-animal.component.css']
})

export class AppComponent {
  newContact = {
    name: '',
    species: '',
    age: 0
  };
  contacts: any[] = [];

  addContact() {
    this.contacts.push({ ...this.newContact }); 
    this.newContact = {
      name: '',
      species: '',
      age: 0
    };
  }
}
