import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoadComponent, pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}