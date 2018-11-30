import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  array3;

  public array = [
    {'img': '../assets/4.jpg'},
    {'img': '../assets/1.jpg'}
  ];

  array2 = [
    {'img': '../assets/2.jpg'},
    {'img': '../assets/3.jpg'}
  ];


  drop1(evento: CdkDragDrop<string[]>) {

      transferArrayItem(evento.container.data,
        evento.container.data,
        evento.previousIndex,
        evento.currentIndex);
      console.log( evento.previousIndex, evento.currentIndex);


  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else if (event.container.data.length === 3) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length <= 3) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else if (event.previousContainer.data.length === 1) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
