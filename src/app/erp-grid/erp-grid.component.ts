import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp-grid',
  templateUrl: './erp-grid.component.html',
  styleUrls: ['./erp-grid.component.css']
})
export class ERPGridComponent implements OnInit {

  constructor() { }

  title = 'app';

  columnDefs = [
      {headerName: 'Generic Name', field: 'make', editable: true, pinned: 'left' },
      {headerName: 'Brand', field: 'modbrand', pinned: 'left' },
      {headerName: 'Type', field: 'type', pinned: 'left'},
      {headerName: 'SKU_size', field: 'sku_size', pinned: 'left'},
      {headerName: 'Vendor Name', field: 'type'},
      {headerName: 'Type', field: 'type'},
      

  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnInit() {
  }

}
