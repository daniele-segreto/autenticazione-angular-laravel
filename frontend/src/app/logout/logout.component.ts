import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

    constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout()
      .subscribe(
        response => {
          console.log('Logout effettuato con successo', response);
          // Effettua eventuali azioni aggiuntive, come reindirizzamento alla pagina di login
        },
        error => {
          console.error('Errore durante il logout', error);
          // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
        }
      );
  }
}
