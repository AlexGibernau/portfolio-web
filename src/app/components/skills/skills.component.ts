import { Component } from '@angular/core';
import {
    CircleProgressOptions,
    NgCircleProgressModule,
} from 'ng-circle-progress';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [NgCircleProgressModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
    providers: [
        {
            provide: CircleProgressOptions,
            useValue: {
                radius: 65,
                outerStrokeWidth: 10,
                innerStrokeWidth: 5,
                innerStrokeColor: '#e7e8ea',
                animation: true,
                animationDuration: 300,
                showSubtitle: false,
                showUnits: false,
                showBackground: false,
                showImage: true,
                imageHeight: 60,
                imageWidth: 60,
                imagePosition: 'center',
            },
        },
    ],
})
export class SkillsComponent {
    skills = [
        {
            name: 'Angular',
            level: 90,
            logo: 'assets/images/skillsLogos/angular_logo.png',
        },
        {
            name: 'TypeScript',
            level: 85,
            logo: 'assets/images/skillsLogos/typescript.png',
        },
        {
            name: 'HTML5',
            level: 90,
            logo: 'assets/images/skillsLogos/html.png',
        },
        { name: 'CSS3', level: 85, logo: 'assets/images/skillsLogos/css.png' },
        { name: 'Java', level: 75, logo: 'assets/images/skillsLogos/java.png' },
        {
            name: 'Spring Boot',
            level: 70,
            logo: 'assets/images/skillsLogos/spring-boot-logo.png', // Fallback to Java logo
        },
        {
            name: 'SQL',
            level: 70,
            logo: 'assets/images/skillsLogos/mysql.png',
        },
    ];

    getGradientColor(level: number): string {
        const startColor = { r: 59, g: 133, b: 44 }; // Verde oscuro #3b852c
        const endColor = { r: 68, g: 226, b: 36 }; // Verde claro #44e224

        const r = startColor.r + (endColor.r - startColor.r) * (level / 100);
        const g = startColor.g + (endColor.g - startColor.g) * (level / 100);
        const b = startColor.b + (endColor.b - startColor.b) * (level / 100);

        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }
}
