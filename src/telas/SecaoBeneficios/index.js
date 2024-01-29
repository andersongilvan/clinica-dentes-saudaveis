import "./style.css";
import BoxBeneficios from "../../componentes/BoxBeneficios";

const SecaoBeneficios = () => {
  return (
    <section className="secao-beneficios">
      <div className="titulo-beneficios">
        <h2>POR QUE USAR </h2>
        <span>APARELHO?</span>
      </div>
      <img src="https://img.freepik.com/fotos-gratis/mulher-jovem-sorridente-com-aparelho-nos-dentes_651396-2564.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais" />
      <div className="container-beneficios">
        <BoxBeneficios>
          <span>Sorriso Estético</span>
          <p>
            O aparelho dental não só alinha os dentes, mas também proporciona um
            sorriso mais bonito, elevando a autoestima e a confiança.
          </p>
        </BoxBeneficios>
        <BoxBeneficios>
          <span> Saúde Bucal Fortalecida</span>
          <p>
            Além da estética, o aparelho corrige problemas ortodônticos,
            melhorando a função mastigatória e prevenindo complicações como
            cáries e doenças periodontais.
          </p>
        </BoxBeneficios>
        <BoxBeneficios>
          <span>Melhoria da Qualidade de Vida</span>
          <p>
            Com benefícios estéticos e funcionais, o uso de aparelho dental
            contribui para uma vida mais saudável e satisfatória, promovendo um
            sorriso bonito e duradouro.
          </p>
        </BoxBeneficios>
      </div>
    </section>
  );
};
export default SecaoBeneficios;
