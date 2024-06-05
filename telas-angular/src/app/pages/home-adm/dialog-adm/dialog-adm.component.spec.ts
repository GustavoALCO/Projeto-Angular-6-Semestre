import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdmComponent } from './dialog-adm.component';

describe('DialogAdmComponent', () => {
  let component: DialogAdmComponent;
  let fixture: ComponentFixture<DialogAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
