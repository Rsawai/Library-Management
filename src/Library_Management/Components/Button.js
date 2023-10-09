import React from 'react'

const Button = (props) => {
  const { children, className, type, onChange } = props
  return (
    <button
      className={className ? className : 'Submit'}
      type={type ? type : 'submit'}
      onChange={(e) => onChange(e)}

      // onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  )
}

export default Button
