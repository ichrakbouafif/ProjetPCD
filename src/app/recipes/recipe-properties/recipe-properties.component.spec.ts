import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePropertiesComponent } from './recipe-properties.component';

describe('RecipePropertiesComponent', () => {
  let component: RecipePropertiesComponent;
  let fixture: ComponentFixture<RecipePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipePropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
