import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
