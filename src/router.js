import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header'
import Filme from "./pages/Filme";
import Favoritos from './pages/Favoritos';
import Erro from "./pages/Erro";

const Routers = () => {
    return(
        <Router>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro} />
            </Switch>
        </Router>
    )
}

export default Routers;