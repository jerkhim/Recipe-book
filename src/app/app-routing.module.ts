import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const RecipeModule = () => import('./recipes/recipe.module').then(x => x.RecipeModule);
const ShoppingModule = () => import('./shopping-list/shoppinglist.module').then(x => x.ShoppingModule);
const ContactModule = () => import('./contactus/contact.module').then(x => x.ContactModule);
const NewRecipeModule = () => import('./new-recipe/new-recipe.module').then(x => x.NewRecipeModule); // Import NewRecipeModule

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'recipes', loadChildren: RecipeModule, canActivate: [AuthGuard] },
    { path: 'shopping-list', loadChildren: ShoppingModule, canActivate: [AuthGuard] },
    { path: 'contactus', loadChildren: ContactModule, canActivate: [AuthGuard] },
    { path: 'new-recipe', loadChildren: NewRecipeModule, canActivate: [AuthGuard] }, // Add route for New Recipe

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
