import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCardComponent } from './why-card.component';

describe('WhyCardComponent', () => {
  let component: WhyCardComponent;
  let fixture: ComponentFixture<WhyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
