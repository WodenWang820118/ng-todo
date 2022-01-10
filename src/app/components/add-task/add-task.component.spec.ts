import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiService } from 'src/app/services/ui.service'; // import the UiService to be mocked
import { Observable, Subject } from 'rxjs';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let service: UiService
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [UiService],
      declarations: [ AddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use UiService', () => {
    service = TestBed.inject(UiService);
    expect(service).toBeTruthy();
  });

  it('should get the observable from the UiService', () => {
    service = TestBed.inject(UiService);
    const subject = spyOn(service, 'onToggle').and.returnValue(new Subject().asObservable());
    // expect the service to return the subject as an observable
    // close properly
    expect(service.onToggle().subscribe((value)=>{
      expect(value).toBe(subject);
    }).closed).toBeFalsy();
  })

  it('should call the onSubmit method when clicks the button', () => {
    // TODO: how to access the DOM element
    // console.log(component);
  })
});
