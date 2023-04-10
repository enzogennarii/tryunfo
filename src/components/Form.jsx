import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      title,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2 className="subtitle">{ title }</h2>
        <Input
          id="name-input"
          legend="Nome"
          name="cardName"
          onChange={ onInputChange }
          type="text"
          value={ cardName }
        />

        <TextArea
          id="description-input"
          legend="Descrição"
          name="cardDescription"
          onChange={ onInputChange }
          value={ cardDescription }
        />

        <Input
          id="attr1-input"
          legend="Atributo 1"
          max="90"
          min="0"
          name="cardAttr1"
          onChange={ onInputChange }
          type="number"
          value={ cardAttr1 }
        />

        <Input
          id="attr2-input"
          legend="Atributo 2"
          max="90"
          min="0"
          name="cardAttr2"
          onChange={ onInputChange }
          type="number"
          value={ cardAttr2 }
        />

        <Input
          id="attr3-input"
          legend="Atributo 3"
          max="90"
          min="0"
          name="cardAttr3"
          onChange={ onInputChange }
          type="number"
          value={ cardAttr3 }
        />

        <Input
          id="image-input"
          legend="Imagem"
          name="cardImage"
          onChange={ onInputChange }
          type="text"
          value={ cardImage }
        />

        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (<Input
          checked={ cardTrunfo }
          legend="Super Trybe Trunfo"
          id="trunfo-input"
          name="cardTrunfo"
          onChange={ onInputChange }
          type="checkbox"
        />) }

        <Button
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          text="Salvar"
          type="button"
        />
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
