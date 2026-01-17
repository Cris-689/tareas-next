'use client';

import { Card, Row, Col } from 'react-bootstrap';

interface CardProps {
  titulo: string;
  color: string;
  imagen?: string;
}

export function CardInstituto({ titulo, color, imagen }: CardProps) {
  return (
    <Card className="h-100 shadow-sm border-0" style={{ borderTop: `4px solid ${color}`, borderRadius: '8px' }}>
      <Card.Body className="d-flex flex-column">
        <small className="text-uppercase fw-bold mb-2" style={{ color: color, fontSize: '0.75rem' }}>
          IES CURA VALERA
        </small>
        <Card.Title className="fs-5 mb-3" style={{ color: color, fontWeight: '600' }}>
          {titulo}
        </Card.Title>
        <div className="mt-auto rounded" style={{ height: '160px', backgroundColor: '#f8f9fa' }}>
          {imagen ? (
            <img src={imagen} alt={titulo} className="w-100 h-100 object-fit-cover" />
          ) : (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
              [IMAGEN NO HABER]
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export const NOTICIAS = [
  { id: 1, titulo: "Nueva aula ATECA en el IES Cura Valera", color: "#d9534f" },
  { id: 2, titulo: "Taller de prevención contra el acoso y ciberacoso", color: "#5cb85c" },
  { id: 3, titulo: "Feliz Navidad y Próspero Año", color: "#5e50a1" },
  { id: 4, titulo: "El IES Cura Valera con nuestros mayores", color: "#d9534f" },
  { id: 5, titulo: "Charlas de Sanidad en el IES Cura Valera", color: "#5cb85c" },
  { id: 6, titulo: "4D Día de la bandera", color: "#5e50a1" },
];

export function SeccionNoticias() {
  return (
    <Row className="g-4">
      {NOTICIAS.map((noticia) => (
        <Col key={noticia.id} xl={4} lg={6} md={12}>
          <CardInstituto 
            titulo={noticia.titulo} 
            color={noticia.color} 
          />
        </Col>
      ))}
    </Row>
  );
}