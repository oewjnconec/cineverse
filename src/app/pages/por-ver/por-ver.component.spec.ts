import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorVerComponent } from './por-ver.component';

describe('PorVerComponent', () => {
  let component: PorVerComponent;
  let fixture: ComponentFixture<PorVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
