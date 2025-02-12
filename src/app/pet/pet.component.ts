import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet',
  standalone: false,
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input() name: string = '';
}
