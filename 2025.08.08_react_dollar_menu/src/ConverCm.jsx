import { LuRuler } from "react-icons/lu";
import './ConverCm.css'

function ConverCm(){

    const calcularMetro = (function(){
        const cm = document.getElementById('cm').value
        const metro = cm / 100

        if(cm.trim() === ''){
            alert(`O campo de "centimetro(s)" está vazio, poderia realizar o preenchimento.`);
          } else {
            alert(`A quantidade de centímetros ${cm} cm equivalem a ${metro} metros.`)
        }
        
    })          

    return (
        <>
            <div className='card w-25 m-auto mt-5'>
                <div className='card-body'>
                    <form className='pt-5 pb-5'>
                        <div className='form-group mb-3 text-center'>
                            <h2>Conversor Centimetros</h2>
                        </div>
                        <div className='form-group mb-3 text-center'>
                            <label htmlFor='cm' >Coloque o(s) Centimetro(s)</label>
                            <input type="text" className='form-control' id='cm' />
                        </div>
                        <button type='button' onClick={calcularMetro} className='btn btn-primary w-100'> <LuRuler size={20} color='white'/> Calcular</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ConverCm
