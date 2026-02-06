'use client';

interface LogoProps {
  enlace: string;
  imagen: string;
}

export function LogosFooter({enlace, imagen}: LogoProps) {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <a href={enlace}><img width="50" height="50"  src={imagen} alt="" /></a>
        </div>
    );
}