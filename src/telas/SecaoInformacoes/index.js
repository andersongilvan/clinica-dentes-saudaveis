import "./style.css";
import CardInformacoes from "../../componentes/CardInformacoes";





const SecaoInformacoes = () => {
  return (
    <div className="secao-informacoes">
      <div className="limitar-secao-informacoes">

        <CardInformacoes>
          <ul>
            <li>Seguda - 09:00 às 18:00</li>
            <li>Tesça - 09:00 às 18:00</li>
            <li>Quarta - 09:00 às 18:00</li>
            <li>Quinta - 09:00 às 18:00</li>
            <li>Sexta - 09:00 às 17:00</li>
            <li>Sábado - 09:00 às 12:00</li>
            <li>Domingo - FECHADO</li>
          </ul>
        </CardInformacoes>
        <CardInformacoes>
          <div className="box-informacoes">
            <img src="/img/dra.avif" />
            <p>Dra.Ana Ortondentista. SEgunda à sexta.</p>
          </div>
          <div className="box-informacoes">
          <img src="/img/medico2.jpg" />
            <p>Dr.Carlos Ortondentista. Teças eQuartas.</p>
          </div>
        </CardInformacoes>
        <CardInformacoes>
          
            <p>Ligue para agendar uma consulta</p>
            <p>(21) 3699-9999</p>
            <p>(21) 3655-8778</p>
            
          
        </CardInformacoes>
    
      </div>
    </div>
  );
};
export default SecaoInformacoes;
