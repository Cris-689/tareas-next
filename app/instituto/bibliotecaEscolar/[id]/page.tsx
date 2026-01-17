import { HeaderInstituto } from "../../componentes/header";

interface PageProps { params: Promise<{ id: string }> }
export default async function Page({ params }: PageProps) {
    const { id } = await params; //Necesita leer el parámetro de entrada
    return (
        <div>
            <HeaderInstituto/>
            <h1>
                Estas en la pagina con ID: {id}
            </h1>
        </div>
    )
}