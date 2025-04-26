// components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2025 Taller de Desarrollo Web con Angular</p>
        <p>Fomentando el Pensamiento Computacional en la educación</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #303f9f;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer p {
      margin: 0.5rem 0;
    }
  `]
})
export class FooterComponent {}