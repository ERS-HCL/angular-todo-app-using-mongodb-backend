import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMessagesComponent } from './global-messages.component';

describe('GlobalMessagesComponent', () => {
  let component: GlobalMessagesComponent;
  let fixture: ComponentFixture<GlobalMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
