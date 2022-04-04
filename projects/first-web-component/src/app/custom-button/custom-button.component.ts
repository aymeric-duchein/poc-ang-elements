import {Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {

  constructor(private httpClient: HttpClient) { }

  testClick() {
    this.httpClient.get('https://catfact.ninja/fact').subscribe(fact => console.log(fact), console.error);
  }
}

