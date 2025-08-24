import useProducts from './useProducts';
import useForm from './useForm';
import useRecommendations from './useRecommendations';

export default function useRecommendationFlow() {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });
  const { getRecommendations, setRecommendations, recommendations } = useRecommendations(products);

  function handleSubmit(e) {
    e?.preventDefault?.();
    const data = getRecommendations(formData);
    setRecommendations(data);
  }

  function resetRecommendations() {
    setRecommendations([]);
  }

  return { preferences, features, formData, handleChange, handleSubmit, recommendations, resetRecommendations };
}
