import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import FileTable from './components/Table';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Selection />
        <FileTable />
      </Container>
    </div>
  );
}

export default App;
