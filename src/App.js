import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename="/JeremiePiard_14_02112022">
        <Routes>
          <Route exact path="/JeremiePiard_14_02112022/" element={<Form />} />
          <Route
            exact
            path="/JeremiePiard_14_02112022/employee-list"
            element={<Table />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
