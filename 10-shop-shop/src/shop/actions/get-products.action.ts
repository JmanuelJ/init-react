import { shopApi } from '@/api/shopApi';
import type { ProductsResponse } from '@/types/products-response';

interface Options {
    limit?: string | number;
    offset?: string | number;
    gender?: string;
    sizes?: string;
    minPrice?: number;
    maxPrice?: number;
    query?: string;
}

export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {
    const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;
    const { data } = await shopApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            gender,
            sizes,
            minPrice,
            maxPrice,
            q: query
        },
    });    
    
    const productsWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map(
            (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        ),
    }));

    return {
        ...data,
        products: productsWithImageUrls,
    }
}