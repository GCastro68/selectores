import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContinentePipe } from './pipes/continente.pipe';

@NgModule({
  declarations: [SelectorPageComponent, ContinentePipe],
  imports: [CommonModule, ReactiveFormsModule, PaisesRoutingModule],
})
export class PaisesModule {}
