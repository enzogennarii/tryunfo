import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
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
    };
  }

  render() {
    const handlerBtnDisable = () => {
      const isEmpty = (str) => str.length === 0;

      const maxValue = 90;
      const maxTotalValue = 210;
      const maxAndMinValues = (arr) => !(
        (arr.every((num) => num >= 0 && num <= maxValue))
        && (arr.reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0) <= maxTotalValue)
      );

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
          isSaveButtonDisabled: (validateTexts && validateAtributes),
        };
      });
    };

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
    } = this.state;

    const onInputChange = ({ target }) => {
      this.setState({
        [target.name]: target.name === 'cardTrunfo' ? target.checked : target.value,
      }, handlerBtnDisable);
    };

    return (
      <div>
        <h1 className="title-page">Tryunfo</h1>
        <section className="main-content">
          <Form
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
            onInputChange={ onInputChange }
            onSaveButtonClick={ () => {} }
          />
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
      </div>
    );
  }
}

export default App;
