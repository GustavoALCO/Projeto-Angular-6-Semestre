import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnderecoComponent } from './dialog-endereco.component';

describe('DialogEnderecoComponent', () => {
  let component: DialogEnderecoComponent;
  let fixture: ComponentFixture<DialogEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
