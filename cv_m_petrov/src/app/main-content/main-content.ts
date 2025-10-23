import { Component } from '@angular/core';
import { LeftColumn } from "./left-column/left-column";
import { RightColumn } from "./right-column/right-column";

@Component({
  selector: 'app-main-content',
  imports: [LeftColumn, RightColumn],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {

}
