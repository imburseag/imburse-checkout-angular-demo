import { Component, ElementRef } from '@angular/core';

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

  token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZWxhdGlvbmlkIjoiMEhNOFVRRDFFUUVKMjowMDAwMDAwMiIsInRlbmFudGlkIjoiMzhmNmQ0OTctOWU0MS00M2Q1LTg3NTctYTRkNGI2ZWExYjUwIiwib3JkZXJyZWYiOiJEQU5fT1JERVIiLCJpbnN0cnVjdGlvbnJlZiI6IkRBTl9JTlNUUlVDVElPTl83MSIsImN1c3RvbWVycmVmIjoiREFOIiwianRpIjoiZTdjY2FiNjItNTkxMC00ZTMxLThjNDUtMGM3MTg4OGM5NDM4Iiwicm9sZSI6InRlbmFudC10cmFuc2FjdGlvbi1yZWFkIiwiYmlsbGluZ2NpdHkiOiJDaXR5IiwiYmlsbGluZ3N0YXRlIjoiU3RhdGUiLCJiaWxsaW5nY291bnRyeSI6IkdCIiwiYmlsbGluZ3N0cmVldDEiOiIxIFRlc3QgU3RyZWV0IiwiYmlsbGluZ3N0cmVldDIiOiJBbm90aGVyIFN0cmVldCIsImJpbGxpbmdwb3N0Y29kZSI6IjEyMyBBQkMiLCJjdXN0b21lcmVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImNhcmRob2xkZXJuYW1lIjoiTVIgVCBFU1QiLCJuYmYiOjE2MjYyNjg5MjEsImV4cCI6MTYyNjI3NDk4MSwiaXNzIjoiaHR0cHM6Ly9jaS1vcGVuaWQuaW1idXJzZS5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9jaS1hcGkuaW1idXJzZS5uZXQvIn0.QwUA6K3Yn1G21wmyXjTdAOhRSc4Ul-xG_He-lLd5DOvr5XmeIGwGcvQ5lZqL6GB_oeHC4HsS4GD92BQ3E1vHn883mBiTuBCNOEq1RH_vFVIe7amMjlkSbhF0xswMT3Fm1lGTVZi12o1RkFu5KxZ8H8Iw7liUUmxTfNRsqhSW0qfLUoSfPqJ1qbvYZuJATnYKRRqPLu71nJSHtuauqZx-G0y_cwyba5WjzTQznJUfJL13PPVKwAU_L7c7UWJeYGJDUU1NwRr9MbtDotTLMgYriEZ_icoEMEv6I9Dpil9SaXNGh_GBQabQZaIwjv_PohGdUlMqSrJ9GADRIf_i0s4q0w';
  returnURL = 'http://localhost:4200';
  language = 'EN';
  themeID = 'YOUR_THEME_ID';
}
