import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const imburseCheckout = this.elementRef.nativeElement.querySelector('imburse-checkout');

    const handleEvent = (event: CustomEvent) => {
      console.log({
        type: event.type,
        payload: event.detail
      })
    };

    imburseCheckout?.addEventListener('imburse_checkout:component_loaded', handleEvent);
    imburseCheckout?.addEventListener('imburse_checkout:session_success', handleEvent);
    imburseCheckout?.addEventListener('imburse_checkout:session_failed', handleEvent);
  }

  token = 'TOKEN';
  returnURL = 'http://localhost:4200';
  language = 'en';
  mode = 'sandbox';
}
