import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/SavedCards';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handlerBtnDisable = this.handlerBtnDisable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
  }

  // Função de evento para desativar e ativar o botão Salvar de acordo com o preenchimento dos dados (Requisito 5)
  handlerBtnDisable() {
    // Função para verificar se o dado do input está vazio
    const isEmpty = (str) => str === '';

    // Função para verificar se os pontos dos atributos estão dentro dos limites
    const maxAndMinValues = (arr) => {
      const maxValue = 90;
      const maxTotalValue = 210;

      const verify0to90 = arr.some((num) => num < 0 || num > maxValue);
      const verifyLimit = (arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) > maxTotalValue);

      return (verify0to90 || verifyLimit);
    };

    this.setState(({
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    }) => {
      const inputTexts = [cardName, cardDescription, cardImage, cardRare];
      const validateTexts = inputTexts.some((text) => isEmpty(text));
      const atributes = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
      const validateAtributes = maxAndMinValues(atributes);
      return {
        isSaveButtonDisabled: (validateTexts || validateAtributes),
      };
    });
  }

  // Função de evento genérico para salvar os dados dos inputs no estado do componente App (Requisito 4)
  onInputChange({ target }) {
    this.setState({
      [target.name]: target.name === 'cardTrunfo' ? target.checked : target.value,
    }, this.handlerBtnDisable);
  }

  // Função de evento para salvar em um objeto os dados do formulário, no estado savedCards que é um array que guarda as cartas salvas (Requisito 6)
  onSaveButtonClick() {
    this.setState((prev) => {
      const cardSavedList = [...prev.savedCards];
      cardSavedList.push({
        cardName: prev.cardName,
        cardDescription: prev.cardDescription,
        cardAttr1: prev.cardAttr1,
        cardAttr2: prev.cardAttr2,
        cardAttr3: prev.cardAttr3,
        cardImage: prev.cardImage,
        cardRare: prev.cardRare,
        cardTrunfo: prev.cardTrunfo,
      });
      if (prev.cardTrunfo) {
        this.setState({
          hasTrunfo: true,
        });
      }
      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        savedCards: cardSavedList,
      };
    });
  }

  // Função de evento para remover cartas do baralho
  onRemoveButtonClick({ target }) {
    const { savedCards } = this.state;
    const { name } = target;

    const cardDeleted = savedCards.filter((card) => card.cardName === name)[0];
    console.log(cardDeleted);
    if (cardDeleted.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }

    this.setState({
      savedCards: savedCards.filter((card) => card.cardName !== name),
    });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;

    return (
      <div>
        <h1 className="title-page">Tryunfo</h1>
        <section className="main-content">
          <section className="section-page">
            <Form
              title="Adicione nova carta"
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              savedCards={ savedCards }
            />
          </section>
          <section className="section-page">
            <h2 className="subtitle">Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </section>

        {!(savedCards.length) ? <p>Baralho vazio!</p> : (
          <SavedCards
            deck={ savedCards }
            onClickRemoveBtn={ this.onRemoveButtonClick }
          />
        )}
      </div>
    );
  }
}

export default App;
