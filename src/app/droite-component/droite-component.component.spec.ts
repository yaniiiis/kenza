import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroiteComponentComponent } from './droite-component.component';

describe('DroiteComponentComponent', () => {
  let component: DroiteComponentComponent;
  let fixture: ComponentFixture<DroiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroiteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
