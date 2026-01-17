import { Container, Row, Col } from 'react-bootstrap';
import { SeccionNoticias } from './componentes/card';
import { Sidebar } from './componentes/sidebar';

export default function InstitutoPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={9} md={8}>
          <SeccionNoticias />
        </Col>
        <Col lg={3} md={4} className="mt-5 mt-md-0">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}