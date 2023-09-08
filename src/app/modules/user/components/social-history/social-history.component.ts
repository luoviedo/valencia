import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstDiagnosticLayerComponent } from '../first-diagnostic-layer/first-diagnostic-layer.component';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-social-history',
  templateUrl: './social-history.component.html',
  styleUrls: ['./social-history.component.scss'],
})
export class SocialHistoryComponent {
  constructor(public dialog: MatDialog) {}

  public onAdd() {
    this.dialog.open(FirstDiagnosticLayerComponent, {
      width: '90%', // Set width to 60%  of the window's total width
      //height: '100%', // Set height to 50% of the window's total height
      position: { right },

      //panelClass: 'fullscreen-dialog',
    });
  }
}
