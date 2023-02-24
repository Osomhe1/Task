import Home from './components/Home';
import TableData from './components/table/TableData'
import TableData2 from './components/table/TableData2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFOund from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="table" element={<TableData />} />
          <Route path="table2" element={<TableData2 />} />
          <Route path="/*" element={<NotFOund />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
