import React, { useState } from 'react'
import './CalcDollar.css'

function CalcDollar() {

    /* ============= CONVERSOR PARA APRESENTAR VALOR DE R$ PADRONIZADO ================== */
    const [reais, setReais] = useState('')/** Estado para armazenar o valor em reais formatado */
 
    function formatarMoeda(valor) { /** Função que formata o valor digitado no padrão R$ ###.###,## */
        const valorNumerico = valor.replace(/\D/g, '') /** Remove tudo que não for número */

        const valorFormatado = (Number(valorNumerico) / 100).toLocaleString('pt-BR', {/** Converte para número com duas casas decimais */
            style: 'currency',
            currency: 'BRL',
        })

        return valorFormatado
    }

    function handleChangeReais(e) {/** Lida com a digitação no campo de reais */
        const valorDigitado = e.target.value
        const valorFormatado = formatarMoeda(valorDigitado)
        setReais(valorFormatado)
    }

    /* ============= CONVERSOR PARA APRESENTAR VALOR DE R$ PADRONIZADO ================== */

    /* ============= FORMULARIO PARA APRESENTAÇÃO JSX ================== */
    return (
    <>
      <form className='w-25 m-auto pt-5 pb-5'>
        <div className='form-group mb-3'>
          <label htmlFor='reais'>Valor em Reais</label>
          <input
            type='text'
            className='form-control'
            id='reais'
            value={reais} /** Valor controlado pelo estado */
            onChange={handleChangeReais} /** Evento para aplicar formatação ao digitar */
          />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor='cotacao'>Cotação do Dólar</label>
          <input
            type='text'
            className='form-control'
            id='cotacao'
          />
        </div>

        <button type='button' className='btn btn-primary w-100'>Calcular</button>
      </form>
    </>
  )
}

export default CalcDollar