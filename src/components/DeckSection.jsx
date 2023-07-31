import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SavedCards from './SavedCards';

class DeckSection extends Component {
  render() {
    const {
      deck,
      handleChange,
      nameFilter,
      rarityFilter,
      trunfoFilter,
      onClickRemoveBtn } = this.props;

    return (
      <section className="saved-cards-section">
        <h2 className="deck-title">Todas as cartas</h2>

        <fieldset>
          <legend>Filtros de busca:</legend>
          <Input
            disabled={ trunfoFilter }
            id="name-filter"
            name="nameFilter"
            onChange={ handleChange }
            placeholder="Nome da carta"
            type="text"
            value={ nameFilter }
          />

          <label htmlFor="rare-filter">
            Raridade:
            <select
              data-testid="rare-filter"
              disabled={ trunfoFilter }
              id="rare-filter"
              name="rarityFilter"
              onChange={ handleChange }
              value={ rarityFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <Input
            checked={ trunfoFilter }
            id="trunfo-filter"
            legend="Trunfo: "
            name="trunfoFilter"
            onChange={ handleChange }
            type="checkbox"
          />
        </fieldset>

        {!deck.length ? <p>Baralho vazio!</p> : (
          <SavedCards
            deck={ deck }
            onClickRemoveBtn={ onClickRemoveBtn }
          />
        )}

      </section>
    );
  }
}

DeckSection.propTypes = {
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
  handleChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onClickRemoveBtn: PropTypes.func.isRequired,
};

export default DeckSection;
