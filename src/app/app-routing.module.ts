import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { RecipeComponent } from './recipe';


// Lazy loaded modules
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

//const ShoppingModule = () => import('./shopping-list/shoppinglist.module').then(x => x.ShoppingModule);
const ContactModule = () => import('./contactus/contact.module').then(x => x.ContactModule);
const RecipeModule = () => import('./recipe/recipe.module').then(m => m.RecipeModule);
const RateUsModule = () => import('./rateus/rateus.module').then(m => m.RateUsModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'contactus', loadChildren: ContactModule, canActivate: [AuthGuard] },
    { path: 'recipe', component: RecipeComponent, canActivate: [AuthGuard] },
    { path: 'rateus', loadChildren: RateUsModule, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
