import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducePath: 'articleApi',
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })
})