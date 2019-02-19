import React from 'react'

const SocialField = ({
    icon,
    name,
    placeholder,
    onChange,
    value
    
}) => {
  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text">
            <i className={icon}></i>
        </span>
        </div>
        <input type="text" className="form-control form-control-lg" placeholder={placeholder} name={name} onChange={onChange} value={value}/>
    </div>
  )
}

export default SocialField
