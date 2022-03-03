
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import {useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
      <div className={"container mx-auto mt-20 bg-gray-100"}>
        <Header />
        <div className={"mt-12 lg:flex"}>
            <Formulario
                pacientes={pacientes}
                setPacientes={setPacientes}
            />
            <ListadoPacientes
                pacientes={pacientes}
            />
        </div>

      </div>
  )
}

export default App
