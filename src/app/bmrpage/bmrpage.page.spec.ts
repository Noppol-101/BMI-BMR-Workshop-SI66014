import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmrpagePage } from './bmrpage.page';

describe('BmrpagePage', () => {
  let component: BmrpagePage;
  let fixture: ComponentFixture<BmrpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BmrpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
