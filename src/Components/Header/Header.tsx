import React from 'react'
import cls from './Header.module.css'

interface HeaderProps {
  todoCount:number
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => {
  return (
    <div className={cls.headerContainer}>
      <div className={cls.todoCount}>
        TodoCount: {todoCount}
      </div>
    </div>
  )
}
