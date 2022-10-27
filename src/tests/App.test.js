import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import  App  from '../App';
import { Footer } from '../components/Footer';
import Editing from '../components/Editing'


test('renders landing page', () =>{
  render(<App />);
})

test("Footer Navbar components is rendered", () => {
  render(<Footer />);
  const footerComponent = document.querySelector("#footer");
  expect(footerComponent).toHaveClass('footer');
  expect
});
test('input field', () =>{
  render(<Editing />);
  expect(getByTestId('input')).toHaveFocus()
})