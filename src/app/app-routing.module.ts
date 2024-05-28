import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { RecipeComponent } from './recipe';
import { AboutUsComponent } from './about-us';
import { RateUsComponent } from './rateus';


// Lazy loaded modules
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const recipesModule  = () => import('./admin/recipes/recipes.module').then(x => x.recipesModule);
const RateUsModule = () => import('./rateus/rateus.module').then(x => x.RateUsModule);



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'recipe', component: RecipeComponent, canActivate: [AuthGuard] },
    { path: 'rateus', component: RateUsComponent, canActivate: [AuthGuard] },
    { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
    { path: 'recipes', loadChildren: recipesModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: '**', redirectTo: '' },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
