import "./style.css";




const SecaoLocalizacao = () => {
  return (
    <div className="secao-localizacao">
      <div className="titulo-localizacao">
        <h3>ONDE ESTAMOS</h3>
        <span>LOCALIZADOS</span>
      </div>
      <p>
        Avenida Ayrton Senna, 3000 Barra da Tijuca, Rio de Janeiro-RJ, CEP:22775-904
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1168145531924!2d-43.363467925738306!3d-22.98273154058767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003!5e0!3m2!1spt-BR!2sbr!4v1706417317291!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};
export default SecaoLocalizacao;
