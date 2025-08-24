// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../state/hooks/useProducts';
import useForm from '../../state/hooks/useForm';
import useRecommendations from '../../state/hooks/useRecommendations';

function Form({ onUpdateRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, setRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);
    onUpdateRecommendations(dataRecommendations);
  };

  return (
    <form
      className="flex flex-col p-4 bg-[#027389] rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col lg:flex-row lg:gap-28">
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
      </div>
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
