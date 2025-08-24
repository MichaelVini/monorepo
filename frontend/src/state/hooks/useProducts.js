import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/product/product.service';
import { getRandomPreferences, getRandomFeatures } from '../../services/product/product.helpers';

const useProducts = () => {
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);

        const allPreferences = getRandomPreferences(products);
        const allFeatures = getRandomFeatures(products);

        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products };
};

export default useProducts;