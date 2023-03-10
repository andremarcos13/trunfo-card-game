import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="main-form">
        <h2>Adicionar nova carta</h2>
        <div className="card-name">
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Nome da Carta"
            />
          </label>
        </div>
        <div className="card-desc">
          <label htmlFor="description-input">
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="description-input"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Descriçao da Carta"
            />
          </label>
        </div>
        <div className="card-stats">
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              placeholder="Atributo 01"
            />
          </label>
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              placeholder="Atributo 02"
            />
          </label>
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              placeholder="Atributo 03"
            />
          </label>
        </div>
        <div className="card-img">
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              placeholder="Inserir link da Imagem"
            />
          </label>
        </div>
        <div className="card-rarity">
          <label htmlFor="rare-input">
            Definir raridade:
            <br />
            <select
              data-testid="rare-input"
              name="cardRare"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        { hasTrunfo
          ? (<p className="trump-check">Você já tem um Super Trunfo em seu baralho</p>)
          : (
            <div className="card-trump">
              <label htmlFor="trunfo-input">
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  id="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>
            </div>
          )}

        <div className="save-btn">
          <button
            type="submit"
            data-testid="save-button"
            name="save-btn"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
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
