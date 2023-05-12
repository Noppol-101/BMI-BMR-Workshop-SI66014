import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmepagePage } from './aboutmepage.page';

describe('AboutmepagePage', () => {
  let component: AboutmepagePage;
  let fixture: ComponentFixture<AboutmepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutmepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
