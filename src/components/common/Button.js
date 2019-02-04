import React from 'react'
import PropTypes from 'prop-types'

 const Button = ({
     type,
     value
 }) => {
  return (
    <input type={type} className="btn btn-info btn-block mt-4" value={value}/>
  )
}

Button.propTypes = {
    type:PropTypes.string.isRequired
}

Button.defaultProps = {
    type:'submit'
}

export default Button;
