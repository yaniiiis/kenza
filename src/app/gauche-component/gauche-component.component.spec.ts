import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaucheComponentComponent } from './gauche-component.component';

describe('GaucheComponentComponent', () => {
  let component: GaucheComponentComponent;
  let fixture: ComponentFixture<GaucheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaucheComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaucheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
