import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    isMenuOpen = signal(false);

    toggleMenu() {
        this.isMenuOpen.set(!this.isMenuOpen());
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
