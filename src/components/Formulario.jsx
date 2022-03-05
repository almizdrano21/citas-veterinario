import {useState, useEffect} from "react";
import Error from  "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombreMascota, setNombreMascota] = useState("")
    const [nombrePropietario, setNombrePropietario] = useState("")
    const [mail, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    useEffect( () => {
            setNombreMascota(paciente.nombreMascota)
            setNombrePropietario(paciente.nombreMascota)
            setEmail(paciente.mail)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
    }, [paciente])

    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validación formulario
        if ([nombreMascota, nombrePropietario, mail, fecha, sintomas].includes("")) {
            console.log("Hay al menos un campo vacío")
            setError(true)
            return;
        }

        setError(false)

        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            mail,
            fecha,
            sintomas,
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        //REINICIAR FORM
        setNombreMascota("")
        setNombrePropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")


    }

    return (
        <div className={"md:w-1/2 lg:w-2/5"}>
            <h2 className={"font-black text-3xl text-center"}>Seguimiento pacientes</h2>
            <p className={"text-lg mt-5 text-center mb-10"}>
                Añade pacientes y
                <span className={"font-bold text-indigo-600"}>Administralos</span>
            </p>
            <form
                action=""
                className={"bg-white shadow-md rounded-lg p-10 mb-10"}
                onSubmit={handleSubmit}
            >
                {error && <Error mensaje={"Todos los campos son obligatorios"}/>}
                <div className={"mb-5"}>
                    <label htmlFor="nombreMascota" className={"font-bold block text-gray-700"}>NOMBRE MASCOTA</label>
                    <input
                        type="text"
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        placeholder={"Nombre de la mascota"}
                        name={"nombreMascota"}
                        id={"nombreMascota"}
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label htmlFor="nombrePropietario" className={"font-bold block text-gray-700"}>NOMBRE PROPIETARIO</label>
                    <input
                        type="text"
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        placeholder={"Nombre del propietario"}
                        name={"nombrePropietario"}
                        id={"nombrePropietario"}
                        value={nombrePropietario}
                        onChange={ (e) => setNombrePropietario(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label htmlFor="mail" className={"font-bold block text-gray-700"}>EMAIL</label>
                    <input
                        type="mail"
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        placeholder={"Email contacto propietario"}
                        name={"mail"}
                        id={"mail"}
                        value={mail}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label htmlFor="alta" className={"font-bold block text-gray-700"}>ALTA</label>
                    <input
                        type="date"
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        name={"alta"}
                        id={"alta"}
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label htmlFor="sintomas" className={"font-bold block text-gray-700"}>SÍNTOMAS</label>
                    <textarea
                        name="sintomas"
                        id="sintomas"
                        rows="4"
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        placeholder={"Describe los síntomas"}
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    className={"w-full rounded-md bg-indigo-600 text-white font-bold p-3 hover:bg-indigo-700 cursor-pointer transition-all"}
                    type={"submit"}
                    value={ paciente.id ? "EDITAR PACIENTE" : "AGREGAR PACIENTE" }
                />
            </form>
        </div>
    )
}

export default Formulario