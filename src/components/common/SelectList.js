import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SelectList = ({
    name,
    onChange,
    error,
    info,
    value,
    options
}) => {
    const selectoptions = options.map(option=>(
        <option key={option.label} value={option.value}>{option.label}</option>
    ))
  return (
    <div className="form-group">
        <select value={value} className={classnames('form-control form-control-lg', {
            'is-invalid':error
        })} name={name} onChange={onChange}>
        {selectoptions}
        </select>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

SelectList.propTypes = {
    name:PropTypes.string.isRequired,
    error:PropTypes.string,
    info:PropTypes.string,
    disabled:PropTypes.string,
    value:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired
}

export default SelectList
