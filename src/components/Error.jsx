const Error = ({mensaje}) => {
    return (
        <div className={"text-white bg-red-800 text-center p-3 uppercase font-bold mb-3 rounded"}>
            <p>{mensaje}</p>
        </div>
    )
}
export default Error