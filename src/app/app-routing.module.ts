import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetamodelComponent } from './metamodel/metamodel/metamodel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
//  {path:'metamodel', component: MetamodelComponent},
{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
