
//recibe como prop el mensaje (normalmente una string) y devuelve el div rojo con el mensaje de error correspondiente
const Error = ({mensaje}) => {
    return (
        <div className={"text-white bg-red-800 text-center p-3 uppercase font-bold mb-3 rounded"}>
            <p>{mensaje}</p>
        </div>
    )
}
export default Error