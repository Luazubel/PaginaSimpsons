import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';

const Frase = ({personaje}) => {
    return (
        <Container>
            <Card>
                <Row>
                    <Col md={4}> 
                    {/* <Card.Img variant="start" src="https://trello.com/1/cards/6328e276517f8e0208590f76/attachments/632b887c5d55fc04a2c53b56/previews/632b887d5d55fc04a2c53b5d/download/image.png">
                    </Card.Img> */}
                    <img src={personaje.image} alt={personaje.character}></img>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>
                               {personaje.character}
                            </Card.Title>
                            <Card.Text>
                                {personaje.quote}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Frase;