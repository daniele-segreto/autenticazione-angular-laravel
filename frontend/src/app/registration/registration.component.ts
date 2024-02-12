import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  register(): void {
    this.authService.register({ name: this.name, email: this.email, password: this.password })
      .subscribe(
        response => {
          console.log('Registrazione avvenuta con successo', response);
          // Effettua eventuali azioni aggiuntive, come reindirizzamento alla pagina di login
        },
        error => {
          console.error('Errore durante la registrazione', error);
          // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
        }
      );
  }
}
