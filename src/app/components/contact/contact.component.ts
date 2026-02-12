import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
    linkedinUrl = 'https://www.linkedin.com/in/alex-gibernau';
    email = 'alex.gibernau.castro@gmail.com';
    emailCopied = false;

    copyEmail() {
        navigator.clipboard
            .writeText(this.email)
            .then(() => {
                this.emailCopied = true;
                setTimeout(() => {
                    this.emailCopied = false;
                }, 3000); // Ocultar mensaje después de 3 segundos
            })
            .catch((err) => {
                console.error('Error al copiar el correo electrónico: ', err);
            });
    }
}
