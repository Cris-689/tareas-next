import { HeaderInstituto } from "./componentes/header";
import { NavbarInstituto } from "./componentes/navbar";
import '../globals.css';
import Footer from "./componentes/footer";

export default function InstitutoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* lo que tiene el la imagen de fondo */}
      <section className="fondo-instituto-header text-white text-center">
          <div className="container py-5 d-flex flex-column justify-content-center h-100">
             <HeaderInstituto/>
             <NavbarInstituto/> 
          </div>
      </section>
    {/* lo que son las cards y el sidebar */}
      <main className="container my-5">
        {children}
      </main>
      <Footer/>
    </>
  )
}