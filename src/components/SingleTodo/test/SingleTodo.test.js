import { screen } from '@testing-library/react';
import {render} from '../../../utils/test-utils'
import SingleTodo from '../SingleTodo.jsx';
import { TodosProvider } from '../../../contexts/TodoContext';

describe('singleTodo component', () => {

  test('renders singleTodo component', () => {
    render(<TodosProvider><SingleTodo /></TodosProvider>);
    const singleTodo = screen.getByTestId(/singleTodo/i);
    expect(singleTodo).toBeInTheDocument();
  });

  test('renders singleTodo name', () => {
    render(<TodosProvider><SingleTodo todo={{id: 1, name: "Wash car" }} /></TodosProvider>);
    const singleTodoName = screen.getByText(/Wash car/i);
    expect(singleTodoName).toBeInTheDocument();
  });

  test('renders singleTodo component without todo prop', () => {
    render(<TodosProvider><SingleTodo /></TodosProvider>);
    const singleTodoName = screen.getByText(/No result/i);
    expect(singleTodoName).toBeInTheDocument();
  });

})
