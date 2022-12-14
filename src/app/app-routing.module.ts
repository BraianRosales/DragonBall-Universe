import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path:'universe/:number',
    loadChildren: () => import('./navbar/views-navbar/universes/universes.module').then(m => m.UniversesModule)
  },
  {
    path:'fighters',
    loadChildren: () => import('./navbar/views-navbar/z-fighters/z-fighters.module').then(m => m.ZFightersModule)
  },
  {
    path:'favorites',
    loadChildren: () => import('./navbar/views-navbar/favorites/favorites.module').then(m => m.FavoritesModule)
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
