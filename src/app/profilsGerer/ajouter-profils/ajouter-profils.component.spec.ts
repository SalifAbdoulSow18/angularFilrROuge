import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProfilsComponent } from './ajouter-profils.component';

describe('AjouterProfilsComponent', () => {
  let component: AjouterProfilsComponent;
  let fixture: ComponentFixture<AjouterProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
