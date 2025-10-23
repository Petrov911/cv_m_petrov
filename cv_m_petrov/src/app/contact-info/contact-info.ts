import { Component } from '@angular/core';

import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact-info',
  imports: [ContactForm],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.css',
})
export class ContactInfo {

  isAddingEmail = false;
onClickEmail() {
    this.isAddingEmail = true;
}

onClickCloseEmail() {
    this.isAddingEmail = false;
}

}
