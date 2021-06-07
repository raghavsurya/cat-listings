import React from 'react';
import logo from './logo.svg';
import Cats from './Cats';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();

function List() {
    return (
        <QueryClientProvider client={queryClient}>
            <Cats />
        </QueryClientProvider>
    );
}

export default List;