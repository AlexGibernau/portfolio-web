import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftSkillsComponent } from './components/softSkills/softSkills.component';

export const routes: Routes = [
    { path: '', component: AboutComponent }, // No redirigir para mantener la SPA de una sola página
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'soft-skills', component: SoftSkillsComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
