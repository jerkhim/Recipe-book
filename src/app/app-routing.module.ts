import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { RecipeComponent } from './recipe';
import { ShoppingListComponent } from './shopping-list';

// Lazy loaded modules
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const ShoppingListModule = () => import('./shopping-list/shopping-list.module').then(x => x.shoppingListModule);
const contactModule = () => import('./contactus/contact.module').then(x => x.ContactModule);
const recipeModule = () => import('./recipe/recipe.module').then(m => m.RecipeModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    //{ path: 'shopping-list', loadChildren: shoppingListModule, canActivate: [AuthGuard] },
    { path: 'contactus', loadChildren: contactModule, canActivate: [AuthGuard] },
    { path: 'recipe', component: RecipeComponent, canActivate: [AuthGuard] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
