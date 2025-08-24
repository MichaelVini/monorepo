import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-1"
          />
          <label htmlFor="SingleProduct" className="mr-4 text-lg">Produto Único</label>
        </div>
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-1"
          />
          <label className="text-lg" htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
