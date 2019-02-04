import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextField = ({
    name,
    placeholder,
    onChange,
    error,
    info,
    type,
    disabled,
    value
}) => {
  return (
    <div className="form-group">
        <input type={type} className={classnames('form-control form-control-lg', {
            'is-invalid':error
        })} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled}/>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

TextField.propTypes = {
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    error:PropTypes.string,
    info:PropTypes.string,
    type:PropTypes.string.isRequired,
    disabled:PropTypes.string,
    value:PropTypes.string.isRequired
}

TextField.defaultProps = {
    type:'text'
}

export default TextField
