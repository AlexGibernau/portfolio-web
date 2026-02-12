import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    projects = [
        {
            title: 'NFC Smart Wardrobe',
            description:
                'IoT solution for tracking wardrobe inventory using NFC tags and a tablet interface, with real-time synchronization via Firebase Firestore.',
            image: '/assets/images/projectsLogos/storage-ia-logo.png', // Logo temporal (puedes cambiarlo)
            technologies: ['Angular', 'Firebase', 'Firestore', 'NFC', 'IoT'],
            link: '#',
        },
        {
            title: 'Luxory Barber',
            description:
                'Modern web platform for a barbershop where users can meet the barbers, view services and prices, and book appointments with their preferred professional.',
            image: '/assets/images/projectsLogos/luxory-barber-logo.png', // Temporary placeholder
            technologies: ['Angular', 'TypeScript', 'CSS3', 'Booking System'],
            link: '#',
        },
        {
            title: 'Portfolio Web',
            description:
                'Personal portfolio built with Angular 17, featuring SSR and modern design practices.',
            image: '/assets/images/logo-page.png',
            technologies: ['Angular', 'TypeScript', 'CSS3'],
            link: '#',
        },
    ];
}
