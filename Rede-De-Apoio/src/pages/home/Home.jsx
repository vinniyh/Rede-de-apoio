
// MEUS COMPONENTES
import AppHeader from '../../components/Header'
import HomeMain from '../../components/HomeMain'
import FAQ from '../../components/Faqs'

function Home() {
  return (
    <div className="page-layout">
      <AppHeader />
      <HomeMain />
      <FAQ />
    </div>
  );
}

export default Home;

