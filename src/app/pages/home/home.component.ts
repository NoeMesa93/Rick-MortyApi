import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {

  ngOnInit() {
    const section = document.querySelector('section');
    if (section) {
      setTimeout(() => {
        section.classList.add('visible'); // Agrega la clase para hacer visible la sección
      }, 30); // Retraso de 100 ms
    }
  }


}
