import './style.css'
import BoxDepoimentos from '../../componentes/BoxDepoimentos';


const SecaoDepoimentos = () => {
    return(
        <section className="secao-depoimentos">
        <div className='container'>
            <BoxDepoimentos>
                <img src='/img/ana.avif'/>
                <span> Isabela, 23 anos</span>
                <p>
                "Usar aparelho foi a melhor decisão para meu sorriso. Além da estética, sinto mais confiança e percebo melhorias na minha saúde bucal."
                </p>
            </BoxDepoimentos>

            <BoxDepoimentos>
                <img src='/img/hugo.avif'/>
                <span>João, 32 anos</span>
                <p>
                "Com o aparelho, percebi mudanças incríveis. Não só corrigiu meus dentes, mas resolveu dores na mandíbula. Valeu cada investimento!"
                </p>
            </BoxDepoimentos>

            <BoxDepoimentos>
                <img src='/img/maria.avif'/>
                <span>Camila, 25 anos</span>
                <p>
                "Aos 25, decidi pelo aparelho. O resultado não só transformou meu sorriso, mas trouxe uma melhoria na minha postura e autoestima."
                </p>
            </BoxDepoimentos>

            <BoxDepoimentos>
            <img src='/img/oriental.avif'/>
                <span>Pedro, 30 anos</span>
                <p>
                "Usar aparelho foi essencial. Além de corrigir o alinhamento, melhorou minha mordida e trouxe uma mudança notável no meu rosto."
                </p>
            </BoxDepoimentos>

            <BoxDepoimentos>
            <img src='/img/renata.jpg'/>
                <span>Isabela, 25 anos</span>
                <p>
                "Decidi pelo aparelho aos 29. Além da estética, corrigiu meu problema de mordida, proporcionando uma melhoria incrível na minha saúde bucal."
                </p>
            </BoxDepoimentos>

            <BoxDepoimentos>
            <img src='/img/asas.jpg'/>
                <span>Hugo, 28 anos</span>
                <p>
                "Usar aparelho foi a melhor decisão para meu sorriso. Além da estética, sinto mais confiança e percebo melhorias na minha saúde bucal."
                </p>
            </BoxDepoimentos>
            </div>
        </section>
    )
}
export default SecaoDepoimentos;