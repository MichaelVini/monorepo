export const getRandomPreferences = (products) => {
  const allPreferences = [];
  products.forEach((product) => {
    const productPreferences = product.preferences
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    allPreferences.push(...productPreferences);
  });
  return allPreferences;
};

export const getRandomFeatures = (products) => {
  const allFeatures = [];
  products.forEach((product) => {
    const productFeatures = product.features
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    allFeatures.push(...productFeatures);
  });
  return allFeatures;
};