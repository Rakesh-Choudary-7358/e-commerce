import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({imgSrc, title, price, category,stockQuantity}) => {
  return (
    <Card style={{ width: '18rem', float:'left', marginRight:'10px' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{price}</Card.Subtitle>
        <p>{`Stock left :${stockQuantity}`}</p>
        <Card.Text>
          {category}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard