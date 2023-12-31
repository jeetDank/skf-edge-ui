import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { FeatureComponent } from './modules/feature/feature.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
    import('./modules/auth/auth.module').then((m) => m.AuthModule),
    
      
  },
  {
    path: '',
    component:FeatureComponent,

    loadChildren: () =>
      import('./modules/feature/feature.module').then((m) => m.FeatureModule),
    canActivateChild: [authGuard],
  
    
  },
 
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
