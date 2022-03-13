import { getAllByTestId, render, screen } from '@testing-library/react'; 

import Cards from '..';

import cats from '../../../mocks/cats.json';

describe("Cards Component", ()=>{
  test('length should be equal to data items', () => {
    render(<Cards cats={cats} />);

    expect(screen.getAllByTestId('card').length === cats.length).toBeTruthy();
  })
});
