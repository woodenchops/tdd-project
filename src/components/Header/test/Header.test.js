import { screen, fireEvent } from '@testing-library/react';
import {render} from '../../../utils/test-utils'
import { TodosContext, TodosProvider } from '../../../contexts/TodoContext';

import Header from '../Header';


describe('Header component', () => {


  test('renders header component', () => {
    render(<TodosProvider><Header /></TodosProvider>);
    const header = screen.getByTestId(/header/i);
    expect(header).toBeInTheDocument();
  });

  test('renders default todo length - (one todo)', () => {
    render(<TodosProvider><Header /></TodosProvider>);
    const todolength = screen.getByTestId(/todolength/i);
    expect(todolength.textContent).toBe('1');
  });

  test('renders default todo length - (two todos)', () => {
    let store = {
      todos: [{id: 1, name: 'Wash car'}, {id: 2, name: 'get food'}],
      addTodo: jest.fn()
    }

    render(<TodosContext.Provider value={store}><Header /></TodosContext.Provider>);

    const todolength = screen.getByTestId(/todolength/i);
    expect(todolength).toHaveTextContent('2');
  });

})


