import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramCard } from './instagram-card';

describe('InstagramCard', () => {
  let component: InstagramCard;
  let fixture: ComponentFixture<InstagramCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
