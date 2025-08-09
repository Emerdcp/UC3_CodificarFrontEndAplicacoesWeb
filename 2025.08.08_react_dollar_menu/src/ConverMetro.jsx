import { FaTape } from "react-icons/fa6";
import './ConverMetro.css'

function ConverMetro(){     

    const calcularCm = (function(){
        const metro = document.getElementById('metro').value
        const cm = metro * 100

        if(metro.trim() === ''){
            alert(`O campo de "metro(s)" está vazio, poderia realizar o preenchimento.`);
          } else {
            alert(`A quantidade de ${metro} metro(s) é o equivalem a ${cm} cm (centímetros).`)
        }
        
    })

    return (
        <>
            <div className='card w-25 m-auto mt-5'>
                <div className='card-body'>
                    <form className='pt-5 pb-5'>
                        <div className='form-group mb-3 text-center'>
                            <h2>Conversor Metros</h2>
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='metro'>Coloque o(s) Metro(s)</label>
                            <input type="text" className='form-control' id='metro' />
                        </div>
                        <button type='button' onClick={calcularCm} className='btn btn-primary w-100'> <FaTape size={20} color='white'/> Calcular</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ConverMetro