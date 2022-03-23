import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() msgFromParent: any;
  // @Input() msgFromParent2:any
  @Output() callParent = new EventEmitter();
  currentMsgToParent: any='Hello Message from Child';
  msgFromChild: any = [];
  constructor() {}

  ngOnInit(): void {}
  // msgToParent() {
  //   this.msgFromChild.push(this.currentMsgToParent);
  // }
  msgToParent() {
    this.callParent.emit(this.currentMsgToParent);
  }
}
