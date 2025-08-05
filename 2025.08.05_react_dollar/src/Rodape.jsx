import './Rodape.css'

function Rodape() {
    return (
        <>
            <footer className='text-center bg-dark text-white p-3'>
                <p>
                    Desenvolvido por &nbsp;
                    <a href='https://www.linkedin.com/in/emerdcp/'
                        target='blank' className='text-danger'>Emerson Carvalho</a>
                    &nbsp; no &nbsp;
                    <a href='https://github.com/Emerdcp'
                        target='blank' className='text-danger'>Git Hub</a>
                </p>
            </footer>
        </>
    )

}

export default Rodape