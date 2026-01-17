'use client';

import { Navbar, Container } from 'react-bootstrap';

export function HeaderInstituto() {
    return (
        <Navbar className="bg-transparent">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        alt="Logo Instituto"
                        src="/logoinstituto.png"
                        width="100"
                        height="100"
                        className="d-inline-block"
                    />
                    <h1 className="ms-3 m-0 fs-4">IES Cura Valera</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}