import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { CharacterDetailComponent } from './views/character-detail/character-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'character/:name',
    loadChildren: () => import('./views/character-detail/character-detail.module').then(m => m.CharacterDetailModule)
  },
  {
    path: '404',
    loadChildren: () => import('./views/error-page/error-page.module').then(m => m.ErrorPageModule)
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
