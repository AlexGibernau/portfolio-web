import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterOutlet,
} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftSkillsComponent } from './components/softSkills/softSkills.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet,
        HeaderComponent,
        SoftSkillsComponent,
        AboutComponent,
        ProjectsComponent,
        SkillsComponent,
        ContactComponent,
    ],
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private viewportScroller: ViewportScroller
    ) {}

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const fragment = this.route.snapshot.fragment;
                if (fragment) {
                    this.viewportScroller.scrollToAnchor(fragment);
                }
            }
        });
    }
}
