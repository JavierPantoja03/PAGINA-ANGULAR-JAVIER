// services/herramientas.service.ts
import { Injectable } from '@angular/core';

export interface Herramienta {
  nombre: string;
  descripcion: string;
  url: string;
  imagen?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {
  private herramientas: Herramienta[] = [
    {
      nombre: 'Scratch',
      descripcion: 'Plataforma visual para programar historias interactivas y juegos mediante bloques. Ideal para principiantes sin experiencia en programación.',
      url: 'https://scratch.mit.edu/',
      imagen: 'assets/images/scratch.png'
    },
    {
      nombre: 'Code.org',
      descripcion: 'Sitio educativo con cursos de programación para todas las edades, utilizando personajes populares como Minecraft y Frozen.',
      url: 'https://code.org/',
      imagen: 'assets/images/codeorg.png'
    },
    {
      nombre: 'Alice',
      descripcion: 'Entorno de programación 3D que facilita la creación de animaciones y juegos mientras se aprenden conceptos de programación orientada a objetos.',
      url: 'https://www.alice.org/',
      imagen: 'assets/images/alice.png'
    },
    {
      nombre: 'Blockly',
      descripcion: 'Biblioteca de Google que añade un editor de programación visual a aplicaciones web y móviles, perfecto para enseñar lógica y resolución de problemas.',
      url: 'https://developers.google.com/blockly',
      imagen: 'assets/images/blockly.png'
    },
    {
      nombre: 'Tynker',
      descripcion: 'Plataforma de aprendizaje que enseña a los niños a programar mediante juegos y actividades interactivas adaptadas a distintas edades.',
      url: 'https://www.tynker.com/',
      imagen: 'assets/images/tynker.png'
    }
  ];

  constructor() { }

  getHerramientas(): Herramienta[] {
    return this.herramientas;
  }
}