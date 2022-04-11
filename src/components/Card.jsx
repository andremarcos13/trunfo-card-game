import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <article>
        <h2>Pré-visualização</h2>
        <div className="preview-name">
          <h3 data-testid="name-card">{ cardName }</h3>
        </div>
        <div className="preview-img">
          <img
            className="img-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="preview-desc">
          <h5 data-testid="description-card">{ cardDescription }</h5>
        </div>
        <div className="preview-attr">
          <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
          <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
          <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
        </div>
        <div className="preview-rarity">
          <h5 data-testid="rare-card">{ cardRare }</h5>
        </div>
        <div className="preview-trump">
          { cardTrunfo && <h4 data-testid="trunfo-card"> Super Trunfo </h4>}
        </div>
      </article>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
