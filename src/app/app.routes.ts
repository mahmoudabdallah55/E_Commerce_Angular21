import { ForgetPassword } from './account/forget-password/forget-password';
import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path:"public",
  loadChildren: () => import('./public/public-module').then(m => m.PublicModule)
},
{
  path:"login",
  loadComponent: () => import('./account/login/login').then(m => m.Login)

},

{
  path:"forget-password",
  loadComponent: () => import('./account/forget-password/forget-password').then(m => m.ForgetPassword)

},
{
  path:"register",
  loadComponent: () => import('./account/register/register').then(m => m.Register)

},
{
  path:"",
  pathMatch:"full",
  redirectTo:"public",

}

];
