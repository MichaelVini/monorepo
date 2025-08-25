import React from 'react';
import Checkbox from '../../../shared/Checkbox/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-1"
          >
            Produto Único
          </Checkbox>
        </div>
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-1"
          >
            Múltiplos Produtos
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
