import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyledemoComponent } from "./styledemo/styledemo.component";
import { StudentdemoComponent } from "./studentdemo/studentdemo.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyledemoComponent, StudentdemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Attrdemo';
}
