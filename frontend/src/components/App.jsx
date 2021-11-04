import "./App.css";
import Form from "./Form";
import {Provider} from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
