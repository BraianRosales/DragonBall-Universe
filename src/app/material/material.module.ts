import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports:[MatCardModule, MatListModule, MatButtonModule, MatSidenavModule],
  exports: [MatCardModule, MatListModule, MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}
