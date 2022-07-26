import React from 'react'
import { Button } from '../../Button/Button'
import cls from './TodoItem.module.css'

interface TodoItemProps {
  todo: Todo,
  checkedTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkedTodo, deleteTodo,selectTodoIdForEdit }) => {
  return (
    <div className={cls.todoItemContainer}>
      <div>
        <div
          onClick={() => checkedTodo(todo.id)}
          aria-hidden
          style={{
            opacity: todo.checked ? .5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          className={cls.todoItemTitle}>
          {todo.name}
        </div>
        <div
          aria-hidden
          style={{
            opacity: todo.checked ? .5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          className={cls.todoItemDescription}>
          {todo.description}
        </div>
      </div>
      <div
        className={cls.todoItemButtonContainer}>
        <Button onClick={() => selectTodoIdForEdit(todo.id)} color='Orange'>
          Edit
        </Button>
        <Button
        onClick={() => deleteTodo(todo.id)}
        color='Red'>
          Delete
        </Button>
      </div>
    </div>
  )
}
