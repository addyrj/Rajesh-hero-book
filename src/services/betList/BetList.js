


// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import { dynamicBaseQuery } from "../badRequestHandler/BadRequestHandler"

// Define a service using a base URL and expected endpoints
export const betList = createApi({
    reducerPath: 'betList',
    baseQuery: dynamicBaseQuery,
    endpoints: (builder) => ({
        betList: builder.mutation({
            query: (body) => ({
                url: "v5/list-bt-ssn-mk",
                method: "POST",
                body
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useBetListMutation } = betList