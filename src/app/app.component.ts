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

  pets: string[] = ['Dog', 'Cat', 'Bird', 'Fish'];

  addPet() {
    if (!this.newPet) {
      return;
    }
    this.pets.push(this.newPet);
    this.newPet = null;
  }
}
