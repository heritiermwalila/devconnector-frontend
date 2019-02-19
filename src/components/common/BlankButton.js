import React from 'react'
import PropTypes from 'prop-types'

const BlankButton = ({
    type,
    value,
    onClick
}) => {
 return (
   <input type={type} className="btn btn-light mt-4" value={value} onClick={onClick}/>
 )
}

BlankButton.propTypes = {
   type:PropTypes.string.isRequired
}

BlankButton.defaultProps = {
   type:'submit'
}

export default BlankButton;
