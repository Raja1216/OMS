import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './features/account-details/account-details.component';
import { AccountComponent } from './features/account/account.component';
import { ContainerComponent } from './features/container/container.component';

const routes: Routes = [
  {
    path: 'oms',
    component: ContainerComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/oms',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
