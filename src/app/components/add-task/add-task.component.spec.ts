import { AddTaskComponent } from './add-task.component';
import { of } from 'rxjs';

import { render } from '@testing-library/angular';
import { createMock } from '@testing-library/angular/jest-utils';
import { UiService } from 'src/app/services/ui.service'; // import the UiService to be mocked

describe('AddTaskComponent', () => {

  it("The form renders with inputs, labels, button", async () => {
    const uiService = createMock(UiService);
    uiService.toggleAddTask.mockReturnValue(of(true)); // mock the toggleAddTask method to return true, so the form will be shown
    
    // four inputs should be rendered
    //render the component and access the HTML element
    const { getByTestId } = await render(AddTaskComponent, {
      declarations: [UiService],
      providers: [{ provide: UiService, useValue: uiService }]
    });
    // the label
    expect(getByTestId('label-task')).toBeTruthy();
    expect(getByTestId('label-time')).toBeTruthy();
    expect(getByTestId('label-reminder')).toBeTruthy();

    // the inputs
    expect(getByTestId('input-task')).toBeTruthy();
    expect(getByTestId('input-time')).toBeTruthy();
    expect(getByTestId('input-reminder')).toBeTruthy();

    // the button
    expect(getByTestId('input-save-task')).toBeTruthy();

  });

  // it("The form submit the data", async () => {
  //   const uiService = createMock(UiService);
  //   uiService.onToggle.mockReturnValue(of(true));

  //   const { getByText, getByPlaceholderText, getByTestId } = await render(AddTaskComponent, {
  //     declarations: [UiService],
  //     providers: [{ provide: UiService, useValue: uiService }]
  //   });
  //   // the input
  //   getByPlaceholderText('Add Task').innerHTML = 'Learning Angular Testing library';
  //   getByPlaceholderText('Add Day & TIme').innerHTML = '2022-01-10';
    
  //   // getByTestId('reminder').click();
    
  //   // the button
  //   // getByTestId('save-task').click();
  // })
})

