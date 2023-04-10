import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends Component {
  render() {
    const { deck } = this.props;

    return (
      <section className="saved-cards-section">
        <h2 className="deck-title">Todas as cartas</h2>
        <ul>
          {deck.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </ul>
      </section>
    );
  }
}

SavedCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default SavedCards;
