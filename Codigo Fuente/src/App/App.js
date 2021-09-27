import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import store from "./state/store/configStore";
import Layout from "./modules/layout/Layout";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="" component={Layout} />
            </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
