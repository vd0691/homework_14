import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import siteLogo from './assets/logo.png';
import Routing from "./components/Routing";
import PropTypes from 'prop-types';

function App() {
  return (
    <div className={'wrapper'}>
      <Header logoImage={siteLogo} />
      <main>
          <Routing />
      </main>
      <Footer />
    </div>
  );
}

Header.propTypes = {
    logoImage: PropTypes.string
}

export default App;
