import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe(
        response => {
          console.log('Accesso effettuato con successo', response);
          // Effettua eventuali azioni aggiuntive, come reindirizzamento alla home
        },
        error => {
          console.error('Errore durante l\'accesso', error);
          // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
        }
      );
  }
}
