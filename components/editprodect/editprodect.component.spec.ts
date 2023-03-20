import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodectComponent } from './editprodect.component';

describe('EditprodectComponent', () => {
  let component: EditprodectComponent;
  let fixture: ComponentFixture<EditprodectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprodectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprodectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
