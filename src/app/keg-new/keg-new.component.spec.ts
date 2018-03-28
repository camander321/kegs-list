import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegNewComponent } from './keg-new.component';

describe('KegNewComponent', () => {
  let component: KegNewComponent;
  let fixture: ComponentFixture<KegNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
