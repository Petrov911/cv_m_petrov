import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactInfo } from "./contact-info/contact-info";
import { MainContent } from "./main-content/main-content";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContactInfo, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'cv_m_petrov';
}
