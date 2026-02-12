import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-softSkills',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './softSkills.component.html',
    styleUrl: './softSkills.component.css',
})
export class SoftSkillsComponent {
    softSkills = [
        {
            name: 'Effective communication',
            logo: 'assets/images/softSkillsLogos/effective_communication.png',
        },
        {
            name: 'Teamwork',
            logo: 'assets/images/softSkillsLogos/teamwork.png',
        },
        {
            name: 'Problem solving',
            logo: 'assets/images/softSkillsLogos/problem_solving.png',
        },
        {
            name: 'Adaptability and Flexibility',
            logo: 'assets/images/softSkillsLogos/adaptability_and_flexibility.png',
        },
        {
            name: 'Critical thinking',
            logo: 'assets/images/softSkillsLogos/critical_thinking.png',
        },
        {
            name: 'Time management',
            logo: 'assets/images/softSkillsLogos/time_management.png',
        },
        {
            name: 'Creativity and Innovation',
            logo: 'assets/images/softSkillsLogos/creativity_innovation.png',
        },
        {
            name: 'Attention to detail',
            logo: 'assets/images/softSkillsLogos/attention_to_detail.png',
        },
        {
            name: 'Empathy and Interpersonal Skills',
            logo: 'assets/images/softSkillsLogos/empathy_interpersonal.png',
        },
        {
            name: 'Continuous learning',
            logo: 'assets/images/softSkillsLogos/continuous_learning.png',
        },
    ];
}
