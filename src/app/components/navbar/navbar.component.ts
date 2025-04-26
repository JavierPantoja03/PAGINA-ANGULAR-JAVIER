// components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <h1>Pensamiento Computacional</h1>
        </div>
        <ul class="nav-links">
          <li>
            <a routerLink="/inicio" routerLinkActive="active">Inicio</a>
          </li>
          <li>
            <a routerLink="/herramientas" routerLinkActive="active">Herramientas</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #3f51b5;
      color: white;
      padding: 0.5rem 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-links li {
      margin-left: 1.5rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    .nav-links a:hover, .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class NavbarComponent {}