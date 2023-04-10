import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, id, name, onClick, text, type } = this.props;

    return (
      <button
        className={ id }
        data-testid={ id }
        disabled={ disabled }
        name={ name }
        onClick={ onClick }
        type={ type }
      >
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  name: '',
  type: 'button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
