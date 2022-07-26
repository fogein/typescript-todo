import React, { useState } from 'react'
import { Button } from '../Button/Button'
import cls from './TodoPanel.module.css'

const DefaultTodo = {
  name: '',
  description: ''
}
interface AddTodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  mode: 'add'
}
interface EditTodoPanelProps {
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  mode: 'edit',
  editTodo: Omit<Todo, 'id' | 'checked'>
}
type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps


export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit'

  const [todo, setTodo] = useState(isEdit ? props.editTodo   :DefaultTodo)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description }
    if (isEdit) {
      return props.changeTodo(todoItem)
    }
    props.addTodo(todoItem)
    setTodo(DefaultTodo)
  }
  return (
    <div className={cls.todoContainer}>
      <div className={cls.fieldsContainer}>
        <div className={cls.fieldContainer}>
          <label htmlFor="name">
            <div>Name</div>
            <input type="text" name='name' id='name' value={todo.name} onChange={onChange} />
          </label>
        </div>
        <div className={cls.fieldContainer}>
          <label htmlFor="description">
            <div>Description</div>
            <input type="text" name='description' id='description' value={todo.description} onChange={onChange} />
          </label>
        </div>
      </div>
      <div className={cls.buttonContainer}>
        {
          isEdit && (<Button onClick={onClick} color='Orange' >EDIT</Button>)
        }
        {
          !isEdit && (<Button onClick={onClick} color='Blue' >ADD</Button>)
        }
      </div>
    </div>
  )
}
