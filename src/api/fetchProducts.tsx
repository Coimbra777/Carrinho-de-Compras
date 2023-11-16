interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const fetchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Erro na requisição à API");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export default fetchProducts;
