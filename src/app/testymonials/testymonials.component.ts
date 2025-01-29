import { Component } from '@angular/core';

@Component({
  selector: 'app-testymonials',
  templateUrl: './testymonials.component.html',
  styleUrls: ['./testymonials.component.scss']
})
export class TestymonialsComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
}
}
}
