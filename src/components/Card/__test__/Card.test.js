import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CardComponent from "..";

describe('Card Component', () => {
  const cardProps = {
    idx: 1,
    name: 'jax',
    phone: '111-111-1111',
    email: 'jax@gmail.com',
    image: {
      url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      alt: 'cute cat'
    },
    favoured: false,
    updateFavorite: () => {}
  }
  test('should show card heading', () => {
    render(<CardComponent {...cardProps} />)

    expect(screen.getByTestId('card-heading')).toBeInTheDocument();
  }); 

  test('should show card subheading', () => {
    render(<CardComponent {...cardProps} />)

    expect(screen.getByTestId('card-subheading')).toBeInTheDocument();
  });

  test('should show card email', () => {
    render(<CardComponent {...cardProps} />)

    expect(screen.getByTestId('card-copy')).toBeInTheDocument();
  });
  
  describe('Image', () => {
    let image;

    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<CardComponent {...cardProps} />)
      image = screen.getByTestId('card-image');
    });

    test('should render card image', () => {
      expect(image).toBeInTheDocument();
    });
    
    test('card image src should not be empty', () => {
      expect(image.getAttribute('src')).toBeTruthy();
    });

    test('card image alt should not be empty', () => {
      expect(image.getAttribute('alt')).toBeTruthy();
    });
  });

  describe('Btn Favoured', () => {
    test('should show heart outline default', () => {
      render(<CardComponent {...cardProps} />)

      expect(screen.queryByTestId('card-btn-fav-heart-red')).not.toBeInTheDocument();
      expect(screen.getByTestId('card-btn-fav-heart')).toBeInTheDocument()
    });

    test('should show heart outline red', () => {
      render(<CardComponent {...cardProps} favoured={true} />)

      expect(screen.getByTestId('card-btn-fav-heart-red')).toBeInTheDocument();
      expect(screen.queryByTestId('card-btn-fav-heart')).not.toBeInTheDocument();
    });
    test('should toggle heart status', () => {
      render(<CardComponent {...cardProps} />)

      userEvent.click(screen.getByTestId('card-btn-fav'))

      expect(screen.getByTestId('card-btn-fav-heart-red')).toBeInTheDocument();
      expect(screen.queryByTestId('card-btn-fav-heart')).not.toBeInTheDocument();

      
      userEvent.click(screen.getByTestId('card-btn-fav'))
      
      expect(screen.queryByTestId('card-btn-fav-heart-red')).not.toBeInTheDocument();
      expect(screen.getByTestId('card-btn-fav-heart')).toBeInTheDocument()

    });
  });
});
