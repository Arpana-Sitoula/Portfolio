import React from 'react'

const Button = ({title, btn, onClick}) => {
  return (
    <button className={`${btn}`} onClick={onClick}>{title}</button>
  )
}

export default Button