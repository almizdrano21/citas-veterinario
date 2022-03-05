
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombreMascota, nombrePropietario, mail, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm("¿Deseas eliminar este paciente?")
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return(
            <div className={"m-3 bg-white shadow-md px-5 py-10 rounded-xl"}>
                <p className={"font-bold mb-3 text-gray-700 uppercase"}>Nombre:
                    <span className={"font-normal normal-case"}>{nombreMascota}</span>
                </p>

                <p className={"font-bold mb-3 text-gray-700 uppercase"}>Propietario:
                    <span className={"font-normal normal-case"}>{nombrePropietario}</span>
                </p>

                <p className={"font-bold mb-3 text-gray-700 uppercase"}>Email:
                    <span className={"font-normal normal-case"}>{mail}</span>
                </p>

                <p className={"font-bold mb-3 text-gray-700 uppercase"}>Alta:
                    <span className={"font-normal normal-case"}>{fecha}</span>
                </p>

                <p className={"font-bold mb-3 text-gray-700 uppercase"}>Síntomas:
                    <span className={"font-normal normal-case"}>{sintomas}</span>
                </p>
                <div className={"flex justify-between"}>
                    <button
                        type="button mt-10"
                        className={"py-2 px-10 bg-indigo-600 text-white font-bold uppercase rounded-lg hover:bg-indigo-700"}
                        onClick={ () => setPaciente(paciente)}
                    > Editar
                    </button>
                    <button
                        type="button"
                        className={"py-2 px-10 bg-red-600 text-white font-bold uppercase rounded-lg hover:bg-red-700"}
                        onClick={handleEliminar}
                    > Eliminar
                    </button>
                </div>
            </div>
    )
}

export default Paciente