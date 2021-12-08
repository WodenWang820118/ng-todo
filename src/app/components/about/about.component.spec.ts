import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TasksComponent } from '../tasks/tasks.component';
import { appRoutes } from 'src/app/app.module';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    // need to import the RouterTestingModule to be able to use the Router
    // declarations necessary to bringing in the related interacting components
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [ AboutComponent, TasksComponent ],
    })
    .compileComponents();
  });

  // default setting to create the component instance (mounting on the DOM) for future tests
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    // the dectectChanges method is necessary to detect the changes on the DOM after mounting
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it ('should contains the wording "Task Tracker"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Task Tracker');
  })

  it ('has a route link text "Home"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Home');
  })

  it ('should contain route to home page with TasksComponent showing up the undone tasks', () => {
    const expectedRoute = { path: '', component: TasksComponent };
    expect(appRoutes).toContain(expectedRoute);
  })
});
