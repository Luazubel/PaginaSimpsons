import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';

const Frase = () => {
    return (
        <Container>
            <Card>
                <Row>
                    <Col xs={4}> 
                    <Card.Img variant="start" src="https://trello.com/1/cards/6328e276517f8e0208590f76/attachments/632b887c5d55fc04a2c53b56/previews/632b887d5d55fc04a2c53b5d/download/image.png">
                    </Card.Img>
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Title>
                                Homero Simpsons
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, labore excepturi mollitia ratione voluptatem molestias.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Frase;