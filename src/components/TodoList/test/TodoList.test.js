import { screen, fireEvent } from '@testing-library/react';
import {render} from '../../../utils/test-utils'
import TodoList from '../TodoList.jsx';
import { TodosProvider } from '../../../contexts/TodoContext';

describe('TodoList component', () => {

  test('renders TodoList component', () => {
    render(<TodosProvider><TodoList /></TodosProvider>);
    const todoList = screen.getByTestId(/todoList/i);
    expect(todoList).toBeInTheDocument();
  });

  test('submit fails if input has no value', async () => {
    render(<TodosProvider><TodoList /></TodosProvider>);

    // grab reference to form

    const form = screen.getByTestId('form');

    //submit form with empty input

    fireEvent.submit(form);

    //display error notification message

    expect( await screen.findByText('No value')).toBeInTheDocument();

  });

  test('todo is added if input has value', () => {
    render(<TodosProvider><TodoList /></TodosProvider>);

    // grab reference to form

    const form = screen.getByTestId('form');

    //grab reference to input

    const input = screen.getByRole('textbox', {name: 'Add Todo'});

    // insert value into input

    fireEvent.change(input, { target: { value: 'walk dog' } })

    //submit form with empty input

    fireEvent.submit(form);

    // expect that there is no error notification message

    expect(screen.queryByText('No value')).not.toBeInTheDocument();

    // expect that new todo is in list

    expect(screen.getByText('walk dog')).toBeInTheDocument();


  });

})
