import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularMultiSelect } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

@Component({
  selector: 'one-root',
  template: `<div>
    hiii
    <angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings" (onSelect)="onItemSelect($event)" (onDeSelect)="OnItemDeSelect($event)"></angular2-multiselect>
  </div>`
})
export class OneComponent implements OnInit {
  dropdownList = [];
  selectedItems: any = [];
  dropdownSettings = {};

  @ViewChild(AngularMultiSelect) ams: AngularMultiSelect;

  constructor() {
    this.dropdownList = [
      { id: 1, itemName: 'India' },
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' },
      { id: 6, itemName: 'Germany' },
      { id: 7, itemName: 'France' },
      { id: 8, itemName: 'Russia' },
      { id: 9, itemName: 'Italy' },
      { id: 10, itemName: 'Sweden' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true
    };
  }

  ngOnInit() {
    this.selectedItems = [
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' }
    ];
  }

  onItemSelect(item) {
    console.log('Selected Item:');
    console.log(item);
  }

  OnItemDeSelect(item) {
    console.log('De-Selected Item:');
    console.log(item);
  }
}
