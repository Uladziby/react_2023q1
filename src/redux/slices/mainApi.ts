/** @format */
import { base_url } from '../../api/api';
import { ICard } from '../../components/ACard/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ICard[], void>({
      query: () => `products`,
    }),
    //filterProducts: builder.mutation<ICard[], ICard[]>({}),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = mainApi;
