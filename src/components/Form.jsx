import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <div className="card-name">
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="name-input"
              name="name-input"
              id="name-input"
            />
            Nome da carta
          </label>
        </div>
        <div className="card-desc">
          <label htmlFor="description-input">
            <textarea
              data-testid="description-input"
              name="description-input"
              id="description-input"
              cols="30"
              rows="10"
            />
            Descrição da carta
          </label>
        </div>
        <div className="card-stats">
          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1-input"
              id="attr1-input"
            />
            Attr01
          </label>
          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2-input"
              id="attr2-input"
            />
          </label>
          Attr02
          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3-input"
              id="attr3-input"
            />
            Attr03
          </label>
        </div>
        <div className="card-img">
          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              name="image-input"
              id="image-input"
            />
            Imagem
          </label>
        </div>
        <div className="card-rarity">
          <label htmlFor="rare-input">
            <select
              data-testid="rare-input"
              name="rare-input"
              id="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
            Raridade
          </label>
        </div>
        <div className="card-trump">
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
              id="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
        </div>
        <div className="save-btn">
          <button
            type="submit"
            data-testid="save-button"
            name="save-btn"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
