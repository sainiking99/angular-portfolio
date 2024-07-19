import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PNFComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path: "", redirectTo: 'home', pathMatch:"full"
    },
    {
        path: "home", component:HomeComponent, title:"Home"
    },
    {
        path: "about", component:AboutComponent, title:"About"
    },
    {
        path: "projects", component:ProjectsComponent, title:"Projects"
    },
    {
        path: "skills", component:SkillsComponent, title:"Skills"
    },
    {
        path: "education", component:EducationComponent, title:"Education"
    },
    {
        path: "contact" , component:ContactComponent, title:"Contact"
    },
    {
        path: "**", component:PNFComponent, title:"Page Not Found"
    }
];
