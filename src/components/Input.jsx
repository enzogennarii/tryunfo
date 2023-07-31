import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      checked,
      disabled,
      id,
      legend,
      max,
      min,
      name,
      onChange,
      placeholder,
      type,
      value,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { legend }
        <input
          checked={ checked }
          data-testid={ id }
          disabled={ disabled }
          id={ id }
          max={ max }
          min={ min }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  checked: false,
  disabled: false,
  legend: '',
  max: '',
  min: '',
  placeholder: '',
  value: '',
};

Input.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
