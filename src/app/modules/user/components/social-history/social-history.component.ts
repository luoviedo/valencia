import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstDiagnosticLayerComponent } from '../first-diagnostic-layer/first-diagnostic-layer.component';

@Component({
  selector: 'app-social-history',
  templateUrl: './social-history.component.html',
  styleUrls: ['./social-history.component.scss'],
})
export class SocialHistoryComponent {
  constructor(public dialog: MatDialog) {}

  public onAdd() {
    const dialogRef = this.dialog.open(FirstDiagnosticLayerComponent);
  }
}
