import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-element-listing',
  templateUrl: './element-listing.component.html',
  styleUrls: ['./element-listing.component.css']
})
export class ElementListingComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
  }

  deleteContact(index: number) {
    this.contactService.deleteContact(index);
  }
}
