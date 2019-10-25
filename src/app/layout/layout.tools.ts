import { Component, Input } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material";
@Component({
  selector: "layout-tools",
  template: `
    <ng-container
      *ngTemplateOutlet="
        !medyaQueryParent.matches ? not_responsive : responsive
      "
    >
    </ng-container>
    <ng-template #not_responsive let-lessonsCounter="estimate">
      <button mat-icon-button>
        <mat-icon
          class="example-icon"
          aria-hidden="false"
          matBadge="15"
          matBadgeColor="warn"
          (click)="openBottomSheet()"
          >notification_important</mat-icon
        >
      </button>
      <button mat-icon-button>
        <mat-icon mat-icon-button class="example-icon" aria-hidden="false"
          >exit_to_app</mat-icon
        >
      </button>
    </ng-template>
    <ng-template #responsive let-lessonsCounter="estimate">
      <button mat-menu-item  (click)="openBottomSheet()">
        <mat-icon
          class="example-icon"
          aria-hidden="false"
          matBadge="4"
          matBadgeColor="warn"         
          >notification_important</mat-icon
        >
        Notificaciones
      </button>
      <button mat-menu-item>
        <mat-icon mat-icon-button class="example-icon" aria-hidden="false"
          >exit_to_app</mat-icon
        >
        Salir
      </button>
    </ng-template>
  `
})
export class LayoutToolsComponent {
  @Input() medyaQueryParent: MediaQueryList;
  @Input() varl: string = "mat-menu-item";
  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit() {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: "bottom-sheet-overview-example-sheet",
  template: `
    <mat-nav-list>
      <a
        href="https://keep.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Keep</span>
        <span mat-line>Add to a note</span>
      </a>

      <a
        href="https://docs.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Docs</span>
        <span mat-line>Embed in a document</span>
      </a>

      <a
        href="https://plus.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Plus</span>
        <span mat-line>Share with your friends</span>
      </a>

      <a
        href="https://hangouts.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Hangouts</span>
        <span mat-line>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
