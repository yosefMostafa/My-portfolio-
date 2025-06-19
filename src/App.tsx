import Header from './components/header';
import ProjectList from './components/my work/project_list';
import Footer from './components/footer';
import './styles/main.scss';

function App() {
  return (
  <>
      <Header />
      <main>
        <ProjectList />
      </main>
      <Footer />
</>
  );
}

export default App;
