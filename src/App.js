import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/Home'
import Home from './containers/pages/Home'


function App() {
  return (
    <Router>
      <Routes>
        {/* Error Display */}
        <Route path="*" element={<Error404 />} />

        {/* Home Display */}
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
