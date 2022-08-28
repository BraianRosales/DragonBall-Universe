import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
  ],
})
export class MaterialModule {}
