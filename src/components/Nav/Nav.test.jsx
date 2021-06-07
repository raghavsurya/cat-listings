import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Nav from './Nav';

test('Nav renders Home link correctly', () => {
    render(<Nav />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });

  test('Nav renders correctly', () => {
    render(<Nav />);
    expect(screen.getByText(/Upload image/)).toBeInTheDocument();
  });

