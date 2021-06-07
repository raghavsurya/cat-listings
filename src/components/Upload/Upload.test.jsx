import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Upload from './Upload';

test('Nav renders correctly', () => {
    render(<Upload />);
    expect(screen.getByText(/Choose images/i)).toBeInTheDocument();
});

