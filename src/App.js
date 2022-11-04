import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/employee-list" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
