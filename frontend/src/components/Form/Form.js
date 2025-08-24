import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useRecommendationForm from '../../state/hooks/useRecommendationForm';

export function Form({ preferences = [], features = [], onChange, onSubmit }) {
  const {
    errors,
    errorRef,
    handleFormSubmit,
    onPreferenceChange,
    onFeatureChange,
    onRecommendationTypeChange,
  } = useRecommendationForm({ onChange, onSubmit });

  return (
    <form
      className="flex flex-col p-6 bg-tertiary rounded-lg shadow-md"
      onSubmit={handleFormSubmit}
      ref={errorRef}
    >
      {errors.formError && (
        <div className="mb-4 text-lg text-red-400">
          {errors.formError.message}
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:gap-28">
        <Preferences
          preferences={preferences}
          onPreferenceChange={onPreferenceChange}
        />
        <Features
          features={features}
          onFeatureChange={onFeatureChange}
        />
      </div>

      <RecommendationType
        onRecommendationTypeChange={onRecommendationTypeChange}
      />

      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
