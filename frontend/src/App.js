import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import FileTable from './components/Table';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <FileTable />
      </Container>
    </div>
  );
}

export default App;
