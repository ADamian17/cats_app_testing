import React, {useState} from 'react'
import { Card, Button, Col } from 'react-bootstrap';

import Heart from '../SvgIcons/Heart';
import HeartRed from '../SvgIcons/HeartRed';

const CardComponent = ({name, phone, email, image, favoured}) => {
  const [isFavoured, setIsFavoured] = useState(favoured);

  return(
    <Col>
      <Card
        data-testid="card" 
        className='shadow-sm'>
        <Card.Img 
          variant='top' 
          src={image.url} 
          alt={image.alt} 
          data-testid="card-image" />

        <Card.Body>
          <Card.Title data-testid="card-heading">{name}</Card.Title>
          <Card.Subtitle data-testid="card-subheading">{phone}</Card.Subtitle>
          <Card.Text data-testid="card-copy">{email}</Card.Text>

          <Button
            onClick={() => setIsFavoured(!isFavoured)} 
            variant="outline-secondary" 
            data-testid="card-btn-fav">
            {
              isFavoured ? <HeartRed data-testid="card-btn-fav-heart-red" /> : <Heart data-testid="card-btn-fav-heart" />
            }
          </Button>

        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent;
