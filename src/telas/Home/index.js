import "./style.css";
import SecaoApresentacao from "../SecaoApresentacao";
import SecaoBeneficios from "../SecaoBeneficios";
import SecaoDepoimentos from "../SecaoDepoimentos";
import SecaoInformacoes from "../SecaoInformacoes";
import SecaoLocalizacao from "../SecaoLocalizacao";


  
  


 
const Home = () => {

  
  return (
    <main>
      <SecaoApresentacao/>
      <SecaoBeneficios/>
      <SecaoDepoimentos/>
      <SecaoInformacoes/>
      <SecaoLocalizacao/>
    </main>
  );
};
export default Home;
