import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'user',
        loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule)
      },
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
