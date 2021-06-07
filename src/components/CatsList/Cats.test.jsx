import {
    QueryClient,
    QueryClientProvider,
    useQuery
  } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'

export function useCustomHook() {
    return useQuery('customHook', () => 'Hello');
}

test('Cats list should get the data and render properly', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
    const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual("Hello");
});