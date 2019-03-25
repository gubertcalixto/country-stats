import { CdkDragSortEvent, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CsBase } from '../../../../shared/cs-base.component';

@Component({
  selector: 'cs-widgets-settings',
  templateUrl: './widgets-settings.component.html',
  styleUrls: ['./widgets-settings.component.scss']
})
export class WidgetsSettingsComponent extends CsBase implements OnInit {
  form: FormGroup;
  widgetsLayout: WidgetLayout = { rows: [{ cols: [0], alignVertical: 'flex-start', alignHorizontal: 'flex-start' }] };
  layoutColLimit = 8;
  layoutRowLimit = 8;

  constructor(@Inject(FormBuilder) private _formBuilder: FormBuilder) {
    super();
    this.form = this._formBuilder.group({
      enabledDragWidgets: [false]
    });
  }

  ngOnInit() {
  }

  addLayoutRow() {
    this.widgetsLayout.rows.push({ cols: [0], alignVertical: 'flex-start', alignHorizontal: 'flex-start' });
  }

  removeLayoutRow() {
    this.widgetsLayout.rows.pop();
  }

  alterLayoutRowColumns(rowIndex: number, count: number = 1) {
    if (count === 1) {
      if (this.widgetsLayout.rows[rowIndex].cols.length < this.layoutColLimit) {
        this.widgetsLayout.rows[rowIndex].cols.push(this.widgetsLayout.rows[rowIndex].cols.length);
      }
    }
    else {
      this.widgetsLayout.rows[rowIndex].cols.pop();
    }
  }

  dropColumn(rowIndex: number, event: CdkDragSortEvent) {
    moveItemInArray(this.widgetsLayout.rows[rowIndex].cols, event.previousIndex, event.currentIndex);
  }

}

export interface WidgetLayout {
  rows: {
    cols: number[],
    alignHorizontal: string,
    alignVertical: string
  }[]
}