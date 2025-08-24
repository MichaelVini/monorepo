import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function useRecommendationForm({ onChange, onSubmit }) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    },
  });

  const errorRef = useRef(null);

  useEffect(() => {
    register('selectedPreferences');
    register('selectedFeatures');
    register('selectedRecommendationType');
  }, [register]);

  useEffect(() => {
    if (errors.formError && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [errors.formError]);

  const submit = () => {
    const {
      selectedPreferences = [],
      selectedFeatures = [],
      selectedRecommendationType = '',
    } = getValues();

    if (!selectedPreferences.length && !selectedFeatures.length) {
      setError('formError', { message: 'Selecione ao menos uma preferência ou funcionalidade' });
      return;
    }

    if (!selectedRecommendationType) {
      setError('formError', { message: 'Selecione o tipo de recomendação' });
      return;
    }

    onSubmit?.(getValues());
  };

  const onPreferenceChange = (value) => {
    onChange?.('selectedPreferences', value);
    setValue('selectedPreferences', value);
    clearErrors('formError');
  };

  const onFeatureChange = (value) => {
    onChange?.('selectedFeatures', value);
    setValue('selectedFeatures', value);
    clearErrors('formError');
  };

  const onRecommendationTypeChange = (value) => {
    onChange?.('selectedRecommendationType', value);
    setValue('selectedRecommendationType', value);
    clearErrors('formError');
  };

  return {
    errors,
    errorRef,
    handleFormSubmit: handleSubmit(submit),
    onPreferenceChange,
    onFeatureChange,
    onRecommendationTypeChange,
  };
}
