import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetamodelRoutingModule } from './metamodel-routing.module';
import { MetamodelComponent } from './metamodel/metamodel.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MetamodelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MetamodelRoutingModule
  ]
})
export class MetamodelModule { }
