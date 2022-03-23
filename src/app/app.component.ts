import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'passingdata';
  currentMsgToChild: any;
  //currentMsgToChild2:any
  currentMsgToParent: any;
  msgFromChild: any = [];
  msgToChild2 = [];
  msg: any;

  //ViewChild

  //ViewChild
  objname: Child2Component =new Child2Component();

  @ViewChild(Child2Component)
  child: Child2Component = new Child2Component();

  ngAfterViewInit() {}
  reset() {
    this.currentMsgToChild = '';
    //  this.currentMsgToChild2='';
  }
  getMsgFromBaby($event: any) {
    this.msg = $event;
  }

  increment() {
    this.child.increment();
  }
  decrement() {
    this.child.decrement();
  }
}
