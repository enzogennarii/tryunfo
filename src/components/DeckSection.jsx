import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import SavedCards from './SavedCards';

class DeckSection extends Component {
  render() {
    const {
      deck,
      totalCards,
      handleChange,
      nameFilter,
      rarityFilter,
      trunfoFilter,
      onClearFiltersClick,
      onClickRemoveBtn } = this.props;

    const hasFiltersApplied = nameFilter !== '' || rarityFilter !== 'todas' || trunfoFilter;

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

          { hasFiltersApplied && (
            <Button
              id="clear-filters-button"
              onClick={ onClearFiltersClick }
              text="Limpar filtros"
            />
          ) }
        </fieldset>

        { totalCards > 0 && (
          <p className="deck-count">
            { hasFiltersApplied
              ? `Exibindo ${deck.length} de ${totalCards} carta${totalCards === 1 ? '' : 's'}`
              : `${totalCards} carta${totalCards === 1 ? '' : 's'} no baralho` }
          </p>
        ) }

        {!deck.length ? (
          <p className="empty-deck">
            { totalCards === 0
              ? 'Baralho vazio!'
              : 'Nenhuma carta encontrada para os filtros aplicados.' }
          </p>
        ) : (
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
  onClearFiltersClick: PropTypes.func.isRequired,
  onClickRemoveBtn: PropTypes.func.isRequired,
  totalCards: PropTypes.number.isRequired,
};

export default DeckSection;
