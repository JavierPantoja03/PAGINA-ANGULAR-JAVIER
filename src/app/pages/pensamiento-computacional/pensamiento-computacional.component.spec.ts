import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamientoComputacionalComponent } from './pensamiento-computacional.component';

describe('PensamientoComputacionalComponent', () => {
  let component: PensamientoComputacionalComponent;
  let fixture: ComponentFixture<PensamientoComputacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensamientoComputacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensamientoComputacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
