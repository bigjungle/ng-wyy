import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { SongSheet } from 'src/app/service/data.models';

@Component({
  selector: 'app-single-sheet',
  template: `
  <ng-container>
    <a class="cover">
      <img src="{{sheet.picUrl || sheet.coverImgUrl}}" alt="{{sheet.name}}">
      <div class="bottom">
        <div class="num">
          <i class="icon erji"></i>
          <span>{{sheet.playCount | PlayCount}}</span>
        </div>
        <i class="icon play" (click)="onPlay.emit(sheet.id)"></i>
      </div>
    </a>
    <a href="#" class="dec">{{sheet.name}}</a>
  </ng-container>`,
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent {
  @Input() sheet: SongSheet;
  @Output() onPlay = new EventEmitter<number>();
  constructor() { }
}
