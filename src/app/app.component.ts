import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const imburseCheckout = this.elementRef.nativeElement.querySelector('imburse-checkout');
    const handleLoaded = () => {
      console.log('imburse_checkout:component_loaded')
    };

    const handleSuccess = () => {
      console.log('imburse_checkout:payment_success')
    };

    const handleFailure = () => {
      console.log('imburse_checkout:payment_failed')
    };

    imburseCheckout?.addEventListener('imburse_checkout:component_loaded', handleLoaded);
    imburseCheckout?.addEventListener('imburse_checkout:payment_success', handleSuccess);
    imburseCheckout?.addEventListener('imburse_checkout:payment_failed', handleFailure);
  }

  token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZWxhdGlvbmlkIjoiMEhNOFVRRDFFUUVJUzowMDAwMDAwMiIsInRlbmFudGlkIjoiMzhmNmQ0OTctOWU0MS00M2Q1LTg3NTctYTRkNGI2ZWExYjUwIiwib3JkZXJyZWYiOiJEQU5fT1JERVIiLCJpbnN0cnVjdGlvbnJlZiI6IkRBTl9JTlNUUlVDVElPTl83MCIsImN1c3RvbWVycmVmIjoiREFOIiwianRpIjoiYTMyZmUzZGUtMWZhNS00MzJmLTg0ZGMtY2ZiZjQyOTU2MmQ4Iiwicm9sZSI6InRlbmFudC10cmFuc2FjdGlvbi1yZWFkIiwiYmlsbGluZ2NpdHkiOiJDaXR5IiwiYmlsbGluZ3N0YXRlIjoiU3RhdGUiLCJiaWxsaW5nY291bnRyeSI6IkdCIiwiYmlsbGluZ3N0cmVldDEiOiIxIFRlc3QgU3RyZWV0IiwiYmlsbGluZ3N0cmVldDIiOiJBbm90aGVyIFN0cmVldCIsImJpbGxpbmdwb3N0Y29kZSI6IjEyMyBBQkMiLCJjdXN0b21lcmVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImNhcmRob2xkZXJuYW1lIjoiTVIgVCBFU1QiLCJuYmYiOjE2MjU4MjE5NzYsImV4cCI6MTYyNTgyODAzNiwiaXNzIjoiaHR0cHM6Ly9jaS1vcGVuaWQuaW1idXJzZS5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9jaS1hcGkuaW1idXJzZS5uZXQvIn0.WYTOrFflNCjs5sF1xqiBEKcX72ZlZM78W-1BELMTSEOUZ8yrPKuV7ARyyax_SJtoUWXNQhb0Bzywe8LTjKH9XYy-j7Wqcl3cbZaw01jnxfBxpghIlD8jCxJCkDUjqFS9caY1XiwJ8VywJlJHhsHcdQael8rIwW09MdDbd4M0Ou9_egtTwqp3ERITdzzSKP6_h9JVwOiAUWYEoKXALXt09Ti8cJyg-MgJvcIPnfrwYuEiC7tJG1xWyUZ2ePL6h3nCSXsFM5npkXpunitz2VoUOhUDAD7VXepNG82i_smIes7NU2cCsemIrGgq13RggnMchDk3MG4LSo99TSx-m-EvrQ';
  returnURL = 'http://localhost:4200';
  language = 'EN';
  themeID = 'YOUR_THEME_ID';
}
