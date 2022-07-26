import React, { useState } from 'react';
import cls from './App.module.css';
import { Header } from './Components/Header/Header';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoPanel } from './Components/todoPanel/TodoPanel';

const DefaultTodo = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  { id: 3, name: 'task 3', description: 'long description 3 long description 3 long description 3 long description 3 long description 3 ', checked: true },
]

export const App = () => {

  const [todo, setTodo] = useState(DefaultTodo)
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo['id'] | null>(null)

  

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id)
  }

  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodo([...todo, { id: todo[todo.length - 1].id + 1, description, name, checked: false }])
  }
  const checkedTodo = (id: Todo['id']) => {
    setTodo(todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked }
      }
      return todo
    }))
  }

  const deleteTodo = (id: Todo['id']) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }
  const changeTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodo(todo.map((todo) => {
      if (todo.id === todoIdForEdit) {
        return { ...todo, name, description }
      }
      return todo
    }))
    setTodoIdForEdit(null)
  }

  return (
    <div className={cls.appContainer}>
      <div className={cls.container}>
        <Header
          todoCount={todo.length}
        />
        <div>
          <TodoPanel
            mode='add'
            addTodo={addTodo}

          />
        </div>
        <TodoList
          changeTodo={changeTodo}
          checkedTodo={checkedTodo}
          todos={todo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          todoIdForEdit={todoIdForEdit}
        />

      </div>
    </div>
  );
}
