import { render, screen } from '@testing-library/react'; 
import { PetsContext } from '../../Pets';

import Cards from '..';

import cats from '../../../mocks/cats.json';

describe("Cards Component", ()=>{
  test('length should be equal to data items', () => {
    render(
      <PetsContext.Provider value={{cats, setCats: () => {}}}>
        <Cards />
      </PetsContext.Provider> 
    );

    expect(screen.getAllByTestId('card').length === cats.length).toBeTruthy();
  })
});
