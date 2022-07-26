import React from 'react'
import cls from './Button.module.css'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'Orange' | 'Blue' | 'Red' 
}

export const Button:React.FC<ButtonProps> = ({children,color,onClick,...props}) => {

const className = `${cls.button} ${cls[`button${color}`]}`

  return (
   <button className={className} onClick={onClick} {...props} >
    {children}
   </button>
  )
}
