import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { checked, id, legend, max, min, name, onChange, type, value } = this.props;

    return (
      <label htmlFor={ id }>
        { legend }
        <input
          checked={ checked }
          data-testid={ id }
          id={ id }
          max={ max }
          min={ min }
          name={ name }
          onChange={ onChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  checked: false,
  max: '',
  min: '',
  value: '',
};

Input.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
