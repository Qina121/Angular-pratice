import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailThreeComponent } from './detail-three.component';

describe('DetailThreeComponent', () => {
  let component: DetailThreeComponent;
  let fixture: ComponentFixture<DetailThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
