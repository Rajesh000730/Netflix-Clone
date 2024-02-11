import React from 'react'

function Button({name, paddingx, paddingy, width}) {
    const style = `${paddingx} ${paddingy} ${width}`
  return (
    <button className={style}>
    {name}
    </button>
  )
}

export default Button