import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, id, onClick, text } = this.props;

    return (
      <button
        className={ id }
        data-testid={ id }
        disabled={ disabled }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
