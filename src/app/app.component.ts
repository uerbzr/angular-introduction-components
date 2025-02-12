import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-introduction-components';
  newPet: string | null = null;
  favs: string[] = [];
  pets: string[] = ['Dog', 'Cat', 'Bird', 'Fish'];
  favorite: string | null = null;

  addPet() {
    if (!this.newPet) {
      return;
    }
    this.pets.push(this.newPet);
    this.newPet = null;
  }
  addFav(p: string) {
    console.log(p);
    if (this.favs.indexOf(p) === -1) {
      this.favs.push(p);
    }
  }
  deleteFav(p: string) {
    this.favs = this.favs.filter((item) => item !== p);
  }
  isinFav(p: string) {
    if (this.favs.indexOf(p) === -1) {
      return false;
    }
    return true;
  }
}
