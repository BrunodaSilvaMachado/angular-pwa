import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-predicate-example',
  templateUrl: './predicate-example.component.html',
  styleUrls: ['./predicate-example.component.less']
})
export class PredicateExampleComponent {
  allList = [1,2,3,4,5,6,7,8];
  evenList = [10];
  oddsList = [9];

  drop(event: CdkDragDrop<number[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  oddsPredicate(item: CdkDrag<number>) {
    return item.data % 2 != 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
}
