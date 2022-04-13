
import './styles.css';
import Routers from './router';

// Biblioteca Toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className='app'>
      <Routers />

      <ToastContainer autoClose={3000} />
      
    </div>
  );
}

export default App;
