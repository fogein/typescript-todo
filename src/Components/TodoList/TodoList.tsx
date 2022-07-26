import React from 'react'
import { TodoPanel } from '../todoPanel/TodoPanel';
import { TodoItem } from './TodoItem/TodoItem'

interface TodoListProps {
  todos: Todo[],
  checkedTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  todoIdForEdit:Todo['id'] | null
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkedTodo, deleteTodo,selectTodoIdForEdit,todoIdForEdit ,changeTodo}) => {
  return (
    <>
      {
        todos.map((todo) => {
          if (todo.id === todoIdForEdit) return <TodoPanel 
          changeTodo={changeTodo}
          mode='edit' 
          key={todo.id}
          editTodo={{name:todo.name,description:todo.description}}
          />

          return <TodoItem
            key={todo.id}
            todo={todo}
            checkedTodo={checkedTodo}
            deleteTodo={deleteTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        })
      }
    </>
  )
}
