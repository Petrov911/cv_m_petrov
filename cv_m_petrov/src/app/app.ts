import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactInfo } from "./contact-info/contact-info";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContactInfo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'cv_m_petrov';
}
