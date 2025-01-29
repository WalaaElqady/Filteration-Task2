import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { TestymonialsComponent } from './testymonials/testymonials.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent, title: 'Landing' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'work', component: WorkComponent, title: 'Work' },
  { path: 'testymonials', component: TestymonialsComponent, title: 'Testymonials' },
  { path: 'recipes', component: RecipesComponent, title: 'Recipes' },
  {path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
