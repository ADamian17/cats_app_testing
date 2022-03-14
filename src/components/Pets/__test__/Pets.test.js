import { render, screen, within } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Pets from '..';

import cats from '../../../mocks/cats.json';

const server = setupServer(
  rest.get('http://localhost:4000/cats', (req, res, ctx) => {
  return res(
    ctx.json(cats)
  )
  }),
);

beforeAll(() => server.listen());
// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<Pets />))
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Pets Component", ()=>{
  test('should render correct amount of cards', async () => {
    const cards = await screen.findAllByTestId('card')
    expect(cards.length).toBe(5);
  });

  test('should filter for male cards', async () => {
    const cards = await screen.findAllByTestId('card');

    userEvent.selectOptions( screen.getByTestId('filter-gender'), 'male');
  
    expect(screen.getAllByTestId('card')).toStrictEqual([cards[1], cards[3]]);
  })

  test('should filter for female cards', async () => {
    const cards = await screen.findAllByTestId('card');

    userEvent.selectOptions( screen.getByTestId('filter-gender'), 'female');
  
    expect(screen.getAllByTestId('card')).toStrictEqual([cards[0], cards[2], cards[4]]);
  });

  test('should filter for favoured cats', async () => {
    const cards = await screen.findAllByTestId('card');

    userEvent.click(within(cards[0]).getByTestId('card-btn-fav'));
    userEvent.click(within(cards[3]).getByTestId('card-btn-fav'));

    userEvent.selectOptions( screen.getByTestId('filter-favorite'), 'favoured');

    expect(screen.getAllByTestId('card')).toStrictEqual([cards[0], cards[3]]);
  });

  test('should filter for not favoured cats', async () => {
    const cards = await screen.findAllByTestId('card');

    userEvent.click(within(cards[0]).getByTestId('card-btn-fav'));
    userEvent.click(within(cards[3]).getByTestId('card-btn-fav'));

    userEvent.selectOptions( screen.getByTestId('filter-favorite'), 'not favoured');

    expect(screen.getAllByTestId('card')).toStrictEqual([cards[1], cards[2], cards[4]]);
  });

  test('should filter for favoured male cats', async () => {
    const cards = await screen.findAllByTestId('card');

    userEvent.click(within(cards[0]).getByTestId('card-btn-fav'));
    userEvent.click(within(cards[3]).getByTestId('card-btn-fav'));

    userEvent.selectOptions( screen.getByTestId('filter-favorite'), 'favoured');
    userEvent.selectOptions( screen.getByTestId('filter-gender'), 'male');

    expect(screen.getAllByTestId('card')).toStrictEqual([cards[3]]);
  });
});
