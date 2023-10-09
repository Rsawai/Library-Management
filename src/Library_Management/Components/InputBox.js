import React from 'react'

const InputBox = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  FocusInput,
  className,
  minLength,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={FocusInput}
      required
      minLength={minLength ? minLength : '5'}
      className={className ? className : 'form-control'}
    />
  )
}

export default InputBox
