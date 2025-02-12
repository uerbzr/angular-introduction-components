import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet',
  standalone: false,
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(n: string) {
    this.addFav.emit(n);
  }
  deleteFromFavs(n: string) {
    console.log(n);
    this.deleteFav.emit(n);
  }
}
