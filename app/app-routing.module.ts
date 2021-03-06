import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component'
import { LlistComponent } from './llist/llist.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'create', component:CreateComponent},
{path:'list',component:LlistComponent},
{path:'edit/:id',component:EditComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
