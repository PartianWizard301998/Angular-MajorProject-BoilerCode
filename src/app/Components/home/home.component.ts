import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import ImagesliderComponent from '../imageslider/imageslider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImagesliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
