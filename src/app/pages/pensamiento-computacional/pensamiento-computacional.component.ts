// pages/pensamiento-computacional/pensamiento-computacional.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pensamiento-computacional',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="bubbles-container">
      @for (bubble of bubbles; track bubble.id) {
        <div class="bubble" 
             [style.width.px]="bubble.size" 
             [style.height.px]="bubble.size" 
             [style.left.%]="bubble.x" 
             [style.animation-duration.s]="bubble.duration"
             [style.animation-delay.s]="bubble.delay"
             [style.background]="bubble.color">
        </div>
      }
    </div>

    <section class="pc-container">
      <div class="hero">
        <h1>Pensamiento Computacional</h1>
        <p class="subtitle">Una aventura de aprendizaje para el futuro</p>
      </div>
      
      <div class="content">
        <div class="info-card">
          <h2>¿Qué es el Pensamiento Computacional?</h2>
          <p>
            El pensamiento computacional es como tener superpoderes para resolver problemas. 
            Te ayuda a pensar como un computador para encontrar soluciones creativas y divertidas.
            ¡No solo sirve para programar, sino para todo en la vida!
          </p>
        </div>

        <div class="pillars">
          <h2>Los 4 superpoderes del Pensamiento Computacional</h2>
          
          <div class="pillar-cards">
            <div class="pillar-card">
              <h3>Descomposición</h3>
              <p>Dividir problemas grandes en partes pequeñitas, ¡como armar un rompecabezas!</p>
              <div class="pillar-icon">🧩</div>
            </div>
            
            <div class="pillar-card">
              <h3>Reconocimiento de Patrones</h3>
              <p>Encontrar pistas y similitudes entre cosas, como un detective super inteligente.</p>
              <div class="pillar-icon">🔍</div>
            </div>
            
            <div class="pillar-card">
              <h3>Abstracción</h3>
              <p>Quedarse con lo importante y dejar de lado lo que no ayuda, ¡como escoger los mejores dulces!</p>
              <div class="pillar-icon">💭</div>
            </div>
            
            <div class="pillar-card">
              <h3>Algoritmos</h3>
              <p>Crear instrucciones paso a paso, como una receta mágica para resolver cualquier desafío.</p>
              <div class="pillar-icon">📝</div>
            </div>
          </div>
        </div>

        <div class="benefits">
          <h2>¿Por qué es tan genial?</h2>
          <ul>
            <li>Te convierte en un super resolvedór de problemas</li>
            <li>Hace que tu cerebro piense de forma ordenada y divertida</li>
            <li>Despierta tu creatividad e imaginación</li>
            <li>Te prepara para los trabajos del futuro</li>
            <li>Te enseña a no rendirte cuando las cosas se ponen difíciles</li>
          </ul>
        </div>

        <div class="cta-section">
          <h2>¡Descubre juegos y herramientas increíbles!</h2>
          <p>
            Explora nuestra colección de plataformas divertidas donde puedes aprender a programar
            mientras juegas y creas tus propias historias, juegos y animaciones.
          </p>
          <a routerLink="/herramientas" class="cta-button">¡Ver Herramientas Mágicas!</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pc-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .bubbles-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }
    
    .bubble {
      position: absolute;
      bottom: -100px;
      border-radius: 50%;
      opacity: 0.6;
      animation: float linear infinite;
    }
    
    @keyframes float {
      0% {
        transform: translateY(0);
        opacity: 0.2;
      }
      50% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0.2;
      }
    }
    
    .hero {
      text-align: center;
      margin-bottom: 2rem;
      padding: 2rem;
      background-color: rgba(232, 234, 246, 0.9);
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(63, 81, 181, 0.2);
      border: 3px solid #c5cae9;
    }
    
    .hero h1 {
      font-size: 2.8rem;
      color: #3f51b5;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .subtitle {
      font-size: 1.4rem;
      color: #5c6bc0;
    }
    
    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-card {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1.8rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 2px solid #e8eaf6;
    }
    
    .info-card h2 {
      color: #3f51b5;
      margin-top: 0;
      font-size: 1.8rem;
    }
    
    .info-card p {
      font-size: 1.1rem;
      line-height: 1.6;
    }
    
    .pillar-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    
    .pillar-card {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
      border: 2px solid #e8eaf6;
    }
    
    .pillar-card:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 8px 25px rgba(63, 81, 181, 0.2);
    }
    
    .pillar-card h3 {
      color: #3f51b5;
      font-size: 1.4rem;
    }
    
    .pillar-icon {
      font-size: 3.5rem;
      margin-top: 1rem;
    }
    
    .benefits {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1.8rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 2px solid #e8eaf6;
    }
    
    .benefits h2 {
      color: #3f51b5;
      font-size: 1.8rem;
    }
    
    .benefits ul {
      padding-left: 1.5rem;
      line-height: 1.8;
      font-size: 1.1rem;
    }
    
    .benefits li {
      margin-bottom: 0.8rem;
    }
    
    .cta-section {
      background: linear-gradient(135deg, #5c6bc0 0%, #3f51b5 100%);
      color: white;
      padding: 2.2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(63, 81, 181, 0.3);
      border: 3px solid #c5cae9;
    }
    
    .cta-section h2 {
      font-size: 1.8rem;
      margin-top: 0;
    }
    
    .cta-section p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .cta-button {
      display: inline-block;
      background-color: white;
      color: #3f51b5;
      padding: 0.9rem 1.8rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      transition: all 0.3s;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    .cta-button:hover {
      background-color: #e8eaf6;
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    }
  `]
})
export class PensamientoComputacionalComponent implements OnInit {
  bubbles: any[] = [];
  
  ngOnInit(): void {
    // Generar burbujas aleatorias
    this.generateBubbles();
  }
  
  generateBubbles(): void {
    const bubbleCount = 30; // Cantidad de burbujas
    const colors = [
      'linear-gradient(135deg, #a5b4fc, #818cf8)',
      'linear-gradient(135deg, #93c5fd, #60a5fa)',
      'linear-gradient(135deg, #c4b5fd, #a78bfa)',
      'linear-gradient(135deg, #fbcfe8, #f9a8d4)',
      'linear-gradient(135deg, #fde68a, #fcd34d)'
    ];
    
    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 60 + 20; // Tamaño entre 20px y 80px
      
      this.bubbles.push({
        id: i,
        size: size,
        x: Math.random() * 100, // Posición horizontal (0-100%)
        duration: Math.random() * 15 + 10, // Duración animación (10-25s)
        delay: Math.random() * 15, // Retraso inicio (0-15s)
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
}