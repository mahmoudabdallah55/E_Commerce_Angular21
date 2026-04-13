import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramStories } from './instagram-stories';

describe('InstagramStories', () => {
  let component: InstagramStories;
  let fixture: ComponentFixture<InstagramStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
