import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Loader from './Loader';

test('Loader renders correctly', () => {
    render(<Loader />);
    expect(screen.getByRole('loader')).toBeInTheDocument();
  });
