
import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css']
})
export class ElementFormComponent {
  contactName: string = '';
  contactFirstname: string = '';
  contactEmail: string = '';
  sortOption: string = 'name';

  constructor(private contactService: ContactService) {}

  addContact() {
    this.contactService.addContact({
      name: this.contactName,
      firstname: this.contactFirstname,
      email: this.contactEmail
    });
    this.contactName = '';
    this.contactFirstname = '',
    this.contactEmail = '';

    console.log(this.addContact);
  }
}



