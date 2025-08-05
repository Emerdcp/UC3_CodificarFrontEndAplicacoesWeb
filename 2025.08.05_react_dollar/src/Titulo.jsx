import './Titulo.css'

function Titulo(){
    return(
        <>
            <div className='text-center'>
                <h1 className='display-3'>Calculadora Dólar</h1>
                <img src="/public/dollar.gif" width='50' className='img-fluid' />
            </div>
        </>
    )
}

export default Titulo