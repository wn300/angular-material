import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-traceability',
  templateUrl: './ui-traceability.component.html',
  styleUrls: ['./ui-traceability.component.css']
})
export class UiTraceabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
