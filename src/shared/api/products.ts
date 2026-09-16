import { Product } from '../types/Product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}api/products.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const getCategoryDetails = async (
  category: string,
): Promise<unknown[]> => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}api/${category}.json`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${category}`);
  }

  return response.json();
};

export const getProductById = async (
  category: string,
  itemId: string,
): Promise<unknown | null> => {
  const items = (await getCategoryDetails(category)) as Array<{ id: string }>;

  return items.find(item => item.id === itemId) || null;
};
