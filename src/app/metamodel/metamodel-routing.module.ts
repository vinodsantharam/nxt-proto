import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetamodelComponent } from './metamodel/metamodel.component';

const routes: Routes = [{path:':id/metamodel', component: MetamodelComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetamodelRoutingModule { }
