import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.valitadeSaveButton = this.valitadeSaveButton.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  onInputChange({ target }) {
    const handleCheckBox = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: handleCheckBox }, this.valitadeSaveButton);
  }

  valitadeSaveButton() {
    const maxSum = 210;
    const min = 0;
    const max = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      cardName !== ''
      && cardRare !== ''
      && cardDescription !== ''
      && cardAttr1 >= min
      && cardAttr1 <= max
      && cardAttr2 >= min
      && cardAttr2 <= max
      && cardAttr3 >= min
      && cardAttr3 <= max
      && cardImage !== ''
      && sum <= maxSum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  saveButton(event) {
    event.preventDefault();
    const card = this.state;

    this.setState((prevState) => ({ cardList: [...prevState.cardList, card] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
    });
    this.setState((prevState) => (
      { hasTrunfo: prevState.cardList.some(({ cardTrunfo }) => cardTrunfo) }));
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
    } = this.state;
    return (
      <div>
        <nav>
          <h1>Tryunfo</h1>
        </nav>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ this.saveButton }
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
        </main>
      </div>
    );
  }
}

export default App;
// commit line
