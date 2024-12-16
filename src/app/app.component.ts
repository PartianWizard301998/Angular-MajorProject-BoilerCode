import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import  JoinusComponent from "./Components/joinus/joinus.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ToastComponent } from "./Components/toast/toast.component";
import ImagesliderComponent from "./Components/imageslider/imageslider.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar2Component } from "./Components/navbar2/navbar2.component";
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, ToastComponent, Navbar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComputerStore';
}
