import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EndComponent } from './end/end.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent ,RouterOutlet , HeaderComponent , EndComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fristapp';
}
