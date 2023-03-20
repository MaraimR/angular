import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewprodectComponent } from './add-newprodect.component';

describe('AddNewprodectComponent', () => {
  let component: AddNewprodectComponent;
  let fixture: ComponentFixture<AddNewprodectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewprodectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewprodectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
