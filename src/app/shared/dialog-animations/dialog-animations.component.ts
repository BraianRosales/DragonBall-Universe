import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StateAppService } from 'src/app/services/stateApp.service';

@Component({
  selector: 'app-dialog-animations',
  templateUrl: './dialog-animations.component.html',
  styleUrls: ['./dialog-animations.component.css'],
})
export class DialogAnimationsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsComponent>,
    private stateAppService: StateAppService
  ) {}

  ngOnInit(): void {}

  cleanFavorites() {
    this.stateAppService.clean();
  }
}
