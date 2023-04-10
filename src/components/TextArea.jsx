import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { cols, id, legend, name, onChange, rows, value } = this.props;
    return (
      <label htmlFor={ id }>
        { legend }
        <textarea
          cols={ cols }
          rows={ rows }
          data-testid={ id }
          id={ id }
          name={ name }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.defaultProps = {
  cols: '',
  rows: '',
};

TextArea.propTypes = {
  cols: PropTypes.string,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextArea;
