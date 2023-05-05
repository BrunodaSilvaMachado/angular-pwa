import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicateExampleComponent } from './predicate-example.component';

describe('PredicateExampleComponent', () => {
  let component: PredicateExampleComponent;
  let fixture: ComponentFixture<PredicateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredicateExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredicateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
