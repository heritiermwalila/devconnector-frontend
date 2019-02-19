import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextArea = ({
    name,
    onChange,
    error,
    info,
    value,
    placeholder
}) => {
  return (
    <div className="form-group">
        <textarea className={classnames('form-control form-control-lg', {
            'is-invalid':error
        })}  name={name} value={value} onChange={onChange} placeholder={placeholder}/>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

TextArea.propTypes = {
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    error:PropTypes.string,
    info:PropTypes.string,
    value:PropTypes.string.isRequired
}


export default TextArea
