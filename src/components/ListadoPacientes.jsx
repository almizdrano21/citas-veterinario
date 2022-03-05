import {useEffect} from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente}) => {

    return (
        <div className={"md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"}>

            {pacientes.length !== 0 ? (
                <>
                    <h2 className={"font-black text-3xl text-center"}>Listado Pacientes</h2>
                    <p className={"text-center mt-5 mb-10"}>
                        Administra tus
                        <span className={"text-indigo-600 font-bold"}> Pacientes y citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className={"font-black text-3xl text-center"}>No hay pacientes</h2>
                </>
            )}
        </div>
    )
}
export default ListadoPacientes