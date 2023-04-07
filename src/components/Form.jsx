import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <h2>Adicione nova carta</h2>
        <form>
          <label htmlFor="name-input">
            Nome
            <input type="text" id="name-input" data-testid="name-input" />
          </label>

          <label htmlFor="description-input">
            Descrição
            <textarea
              id="description-input"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            Attr01
            <input type="number" id="attr1-input" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2-input">
            Attr02
            <input type="number" id="attr2-input" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3-input">
            Attr03
            <input type="number" id="attr3-input" data-testid="attr3-input" />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input type="text" id="image-input" data-testid="image-input" />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select id="rare-input" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Imagem
            <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
          </label>

          <button id="btn-submit" data-testid="save-button">Salvar</button>
        </form>
      </>
    );
  }
}

export default Form;
