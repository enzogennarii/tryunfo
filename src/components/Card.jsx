import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="section-page">
        <h2 className="subtitle">Pré-visualização</h2>
        <section id="card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="rare-card">{ cardRare }</p>
          <p data-testid="description-card">{ cardDescription }</p>
          <div className="atribute-container">
            <p>Attr1</p>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
          </div>
          <div className="atribute-container">
            <p>Attr2</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
          </div>
          <div className="atribute-container">
            <p>Attr3</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
          { cardTrunfo ? (
            <p data-testid="trunfo-card">Super Trunfo</p>
          ) : (
            <p />
          ) }
        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;