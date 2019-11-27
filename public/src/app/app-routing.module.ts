import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'read',component: ReadComponent},
  {path: 'new',component: CreateComponent},
  {path: 'edit/:id',component: UpdateComponent},
  {path: '', pathMatch: 'full', redirectTo: '/read'},
  {path: 'notFound', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/read'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
