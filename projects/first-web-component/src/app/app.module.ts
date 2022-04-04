import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomButtonComponent } from './custom-button/custom-button.component';
import { createCustomElement } from "@angular/elements";
import { CustomButtonComponent2 } from "./custom-button-2/custom-button.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomButtonComponent2
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const customButtonComponent = createCustomElement(CustomButtonComponent, {injector: this.injector});
    customElements.define('custom-button', customButtonComponent);

    const customButtonComponent2 = createCustomElement(CustomButtonComponent2, {injector: this.injector});
    customElements.define('custom-other-button', customButtonComponent2);
  }
}
