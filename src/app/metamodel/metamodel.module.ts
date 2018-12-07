import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetamodelRoutingModule } from './metamodel-routing.module';
import { MetamodelComponent } from './metamodel/metamodel.component';

@NgModule({
  declarations: [MetamodelComponent],
  imports: [
    CommonModule,
    MetamodelRoutingModule
  ]
})
export class MetamodelModule { }
