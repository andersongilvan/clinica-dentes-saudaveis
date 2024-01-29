import './style.css'



const CardInformacoes = (props) => {
    return(
        <div className='card-informacoes'>
            <h3>INFORMAÇÕES</h3>
            <div className='conteudo'>
                { props.children }
            </div>
        </div>
    )
}
export default CardInformacoes;