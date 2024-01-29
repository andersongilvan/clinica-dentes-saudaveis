import "./style.css";
import OpcoesServicos from "../../componentes/OpcoesServicos";



const SecaoApresentacao = () => {
  return (
    <section className="secao-apresentacao">
    
    <div className="container-titulo-apresentacao">
      <h2>OS MELHORES </h2>
      <span>APARELHOS DENTÁRIOS!</span>
    </div>
    <h3>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</h3>
      <div className="limitar-secao-apresentacao">
        

        <OpcoesServicos>
            <img src="https://cdn-icons-png.flaticon.com/512/819/819280.png"/>
            <span>Pré-avaliação</span>
        </OpcoesServicos>

        <OpcoesServicos>
        <img src="https://cdn-icons-png.flaticon.com/512/819/819280.png"/>
        <span>aparelhos Dentários</span>
        </OpcoesServicos>

        <OpcoesServicos>
        <img src="https://cdn-icons-png.flaticon.com/512/819/819280.png"/>
        <span>Raio-X digital</span>
        </OpcoesServicos>

        <OpcoesServicos>
        <img src="https://cdn-icons-png.flaticon.com/512/819/819280.png"/>
        <span>Clareamento dental</span>
        </OpcoesServicos>
      </div>
    </section>
  );
};
export default SecaoApresentacao;
