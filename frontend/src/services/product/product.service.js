import getProducts from '../../api/product.api';

export const getAllProducts = async () => {
  const products = await getProducts();
  return products;
};

const ProductService = {
  getAllProducts
};

export default ProductService;