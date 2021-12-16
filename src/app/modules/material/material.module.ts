import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [MatCardModule, FlexLayoutModule, MatChipsModule],
  exports: [MatCardModule, FlexLayoutModule, MatChipsModule],
})
export class MaterialModule {}
