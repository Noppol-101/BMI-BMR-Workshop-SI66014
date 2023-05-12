import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmipagePage } from './bmipage.page';

describe('BmipagePage', () => {
  let component: BmipagePage;
  let fixture: ComponentFixture<BmipagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BmipagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
