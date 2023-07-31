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
      <section className="card-container">
        <div className="border-card">
          <div className="card">
            <h3 data-testid="name-card" className="name-card">{ cardName }</h3>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="img-card"
            />
            <p data-testid="rare-card" className="rare-card">{ cardRare }</p>
            <p
              data-testid="description-card"
              className="description-card"
            >
              { cardDescription }
            </p>

            <div className="atribute-container">
              <p className="atribute-name">Attr1</p>
              <p data-testid="attr1-card" className="atribute-value">{ cardAttr1 }</p>
            </div>
            <div className="atribute-container">
              <p className="atribute-name">Attr2</p>
              <p data-testid="attr2-card" className="atribute-value">{ cardAttr2 }</p>
            </div>
            <div className="atribute-container">
              <p className="atribute-name">Attr3</p>
              <p data-testid="attr3-card" className="atribute-value">{ cardAttr3 }</p>
            </div>

            { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p /> }
          </div>
        </div>
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
