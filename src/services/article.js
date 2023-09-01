import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '2f7a37451emsh7cb4c35b0bdb642p17e011jsncb1f513a117e',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

export const articleApi = createApi({
    reducePath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''https://article-extractor-and-summarizer.p.rapidapi.com/'
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })
})