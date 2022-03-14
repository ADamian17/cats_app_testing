import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Filter from "..";

describe('Filter Component', () => {
  test('should be able to change value of favorite select', () => {
    render(<Filter />);

    const filterFavorite = screen.getByTestId('filter-favorite'); 

    expect(filterFavorite.value).toBe('any')

    userEvent.selectOptions(filterFavorite, 'favoured')
    expect(filterFavorite.value).toBe('favoured')

    userEvent.selectOptions(filterFavorite, 'not favoured')
    expect(filterFavorite.value).toBe('not favoured')
  });

  test('should be able to change value of gender select', () => {
    render(<Filter />);

    const filterFavorite = screen.getByTestId('filter-gender'); 

    expect(filterFavorite.value).toBe('any')

    userEvent.selectOptions(filterFavorite, 'male')
    expect(filterFavorite.value).toBe('male')

    userEvent.selectOptions(filterFavorite, 'female')
    expect(filterFavorite.value).toBe('female')
  });
});
