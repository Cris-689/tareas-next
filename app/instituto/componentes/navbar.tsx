'use client';

import { Dropdown, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export function NavbarInstituto() {
  return (
    <Nav as="ul" className="justify-content-center bg-white border border-danger rounded shadow-sm p-1 navbar-instituto">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">inicio</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href='/instituto/inicio/plan_centro'>
            Plan de centro
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/inicio/plan_actuacion_digital'>
            Plan actuacion digital
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/inicio/otros_documentos'>
            otros documentos de funcionamiento interno
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">noticias</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href='/instituto/noticias/Jefatura_de_estudios'>
            Jefatura de estudios
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/noticias/igualdad_y_paz'>
            Plan de igualdad y Escuela: espacio de paz
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/noticias/trofeo_director'>
            Trofeo Director
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/noticias/adultos'>
            Adultos
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/noticias/Videos_y_fotos'>
            Videos y fotos
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">Oferta Educativa</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href='/instituto/ofertaEducativa/Oferta_Educativa'>
            Oferta Educativa
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/ofertaEducativa/Departamentos'>
            Departamentos
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/ofertaEducativa/btopa'>
            BTOPA Director
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/ofertaEducativa/espa'>
            ESPA
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" className="text-decoration-none fw-bold text-danger">Biblioteca Escolar</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href='/instituto/bibliotecaEscolar/biblioweb'>
            BiblioWeb
          </Dropdown.Item>
          <Dropdown.Item as={Link} href='/instituto/bibliotecaEscolar/blog'>
            Blog
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Item as="li">
        <Nav.Link as={Link} href="/instituto/contacto" className='fw-bold text-danger'>Contacto</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}