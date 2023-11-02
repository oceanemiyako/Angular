import { Component } from '@angular/core';
import Cat from '../../../models/Cat.model';

@Component({
  selector: 'app-component-animal',
  templateUrl: './component-animal.component.html',
  styleUrls: ['./component-animal.component.css']
})

export class CatFormComponent {
  firstname = ""
  lastname = ""
  email = ""
  phoneNumber = ""
  age = 0

  contacts: Cat[] = []

  catFormSubmitHandler(event: Event) {
    event.preventDefault()

    const newCat = new Cat(
      this.firstname,
      this.lastname,
      this.age
    )

    this.cats.push(newCat)

    this.firstname = ""
    this.lastname = ""
    this.age = 0
  }

  deleteCatHandler(cat: Cat) {
    this.cats = [...this.cats.filter(c => c !== cat)]
  }
}
