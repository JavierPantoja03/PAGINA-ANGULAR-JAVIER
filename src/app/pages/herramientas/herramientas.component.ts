// pages/herramientas/herramientas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientasService, Herramienta } from '../../services/herramientas.service';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="herramientas-container">
      <!-- Objetos flotantes simplificados -->
      <div class="floating-icons">
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div class="float-icon icon-{{i}}">
            <span [innerHTML]="iconSymbols[i-1]"></span>
          </div>
        }
      </div>
      
      <div class="hero">
        <h1>¡Herramientas Mágicas!</h1>
        <p class="subtitle">Descubre juegos y apps geniales para convertirte en un maestro de la programación</p>
      </div>
      
      <div class="tools-grid">
        @for (herramienta of herramientas; track herramienta.nombre) {
          <div class="tool-card">
            <div class="tool-image">
              <img src="{{ herramienta.imagen || '/assets/images/default-tool.png' }}" alt="{{ herramienta.nombre }}">
            </div>
            <div class="tool-content">
              <h2>{{ herramienta.nombre }}</h2>
              <p>{{ herramienta.descripcion }}</p>
              <a [href]="herramienta.url" target="_blank" class="tool-button">¡Explorar ahora!</a>
            </div>
          </div>
        }
      </div>
      
      <div class="info-section">
        <h2>¿Por qué te encantarán estas herramientas?</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">🎮</div>
            <h3>Aprender jugando</h3>
            <p>Estas herramientas convierten la programación en una aventura divertida, donde puedes crear tus propios juegos e historias.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">🧠</div>
            <h3>Ejercita tu cerebro</h3>
            <p>Resolviendo desafíos y creando proyectos, desarrollarás habilidades para resolver problemas creativamente.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">🚀</div>
            <h3>Prepárate para el futuro</h3>
            <p>La programación y el pensamiento computacional son habilidades muy importantes para los trabajos del mañana.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">👨‍👩‍👧‍👦</div>
            <h3>Diversión para todos</h3>
            <p>Estas plataformas son para niños de todas las edades, ¡incluso tus padres y profesores pueden aprender contigo!</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .herramientas-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      position: relative;
    }
    
    /* Estilos para iconos flotantes simplificados */
    .floating-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
    
    .float-icon {
      position: absolute;
      font-size: 40px;
      opacity: 0.5;
      animation: float-simple 20s linear infinite;
    }
    
    .icon-1 {
      top: 15%;
      left: 10%;
      color: #8c9eff;
      animation-duration: 18s;
      font-size: 50px;
    }
    
    .icon-2 {
      top: 60%;
      left: 85%;
      color: #ffab40;
      animation-duration: 22s;
      font-size: 45px;
    }
    
    .icon-3 {
      top: 30%;
      left: 80%;
      color: #ff80ab;
      animation-duration: 20s;
      font-size: 35px;
    }
    
    .icon-4 {
      top: 70%;
      left: 20%;
      color: #69f0ae;
      animation-duration: 25s;
      font-size: 30px;
    }
    
    .icon-5 {
      top: 10%;
      left: 60%;
      color: #b388ff;
      animation-duration: 23s;
      font-size: 35px;
    }
    
    @keyframes float-simple {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(20px, 20px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    
    .hero {
      text-align: center;
      margin-bottom: 2rem;
      padding: 2.5rem;
      background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(63, 81, 181, 0.2);
      border: 3px solid #9fa8da;
      position: relative;
      z-index: 1;
    }
    
    .hero h1 {
      font-size: 3rem;
      color: #3f51b5;
      margin-bottom: 0.8rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .subtitle {
      font-size: 1.4rem;
      color: #5c6bc0;
    }
    
    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }
    
    .tool-card {
      background-color: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      border: 3px solid #e8eaf6;
    }
    
    .tool-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(63, 81, 181, 0.2);
    }
    
    .tool-image {
      height: 180px;
      overflow: hidden;
    }
    
    .tool-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    
    .tool-card:hover .tool-image img {
      transform: scale(1.1);
    }
    
    .tool-content {
      padding: 1.8rem;
    }
    
    .tool-content h2 {
      color: #3f51b5;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.6rem;
    }
    
    .tool-content p {
      margin-bottom: 1.8rem;
      color: #666;
      font-size: 1.1rem;
      line-height: 1.5;
    }
    
    .tool-button {
      display: inline-block;
      background: linear-gradient(135deg, #5c6bc0 0%, #3f51b5 100%);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s;
      box-shadow: 0 4px 10px rgba(63, 81, 181, 0.3);
    }
    
    .tool-button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(63, 81, 181, 0.4);
    }
    
    .info-section {
      background-color: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      border: 3px solid #e8eaf6;
      position: relative;
      z-index: 1;
    }
    
    .info-section h2 {
      color: #3f51b5;
      margin-top: 0;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 2rem;
    }
    
    .benefit-item {
      text-align: center;
      padding: 1.5rem;
      background-color: #f5f7ff;
      border-radius: 12px;
      transition: transform 0.3s;
    }
    
    .benefit-item:hover {
      transform: translateY(-5px);
    }
    
    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .benefit-item h3 {
      color: #3f51b5;
      margin-top: 0;
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }
    
    .benefit-item p {
      margin: 0;
      color: #666;
      line-height: 1.5;
    }
  `]
})
export class HerramientasComponent implements OnInit {
  herramientas: Herramienta[] = [];
  iconSymbols: string[] = [
    '{ }', // Código
    '★',   // Estrella
    '♥',   // Corazón
    '●',   // Círculo
    '■'    // Cuadrado
  ];

  constructor(private herramientasService: HerramientasService) {}

  ngOnInit(): void {
    this.herramientas = this.herramientasService.getHerramientas();
  }
}