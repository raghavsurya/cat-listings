import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Cat from './Cat';

test('renders Cat Component correctly', () => {
  render(<Cat imgSrc="" imageId="123" isFavourite={false} votes={4} upvotes={3} downvotes={1} />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
test('favouriting button is present in the component', async () => {
  const handleFavouriteSelection = jest.fn();
  render(<Cat imgSrc="" imageId="123" isFavourite={false} votes={4} upvotes={3} downvotes={1} />);
  expect(screen.getByRole('none')).toBeInTheDocument()

});

test('upvote button is present in the component', async () => {
  const handleFavouriteSelection = jest.fn();
  render(<Cat imgSrc="" imageId="123" isFavourite={false} votes={4} upvotes={3} downvotes={1} />);
  expect(screen.getByRole('upvote')).toBeInTheDocument()

});

test('downvote button is present in the component', async () => {
  const handleFavouriteSelection = jest.fn();
  render(<Cat imgSrc="" imageId="123" isFavourite={false} votes={4} upvotes={3} downvotes={1} />);
  expect(screen.getByRole('downvote')).toBeInTheDocument()

});

test('favouriting a cat image works correctly', async () => {
  const handleFavouriteSelection = jest.fn();
  render(<Cat imgSrc="" imageId="123" isFavourite={false} votes={4} upvotes={3} downvotes={1} />);
  fireEvent(
    screen.getByRole('favourite'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
  await waitFor(() => {
    expect(screen.getByRole('#FF69B4')).toBeInTheDocument()
  })

});

