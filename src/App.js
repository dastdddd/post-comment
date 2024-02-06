import './App.css';
import AddComent from './components/addComent';
import ImagesLike from './components/images-like';
import List from './components/list';


function App() {


  return (
    <div className="App">
      <div className="img-like">
        <ImagesLike />
      </div>
      <div className="comm-lis">
        <AddComent/>
        <List/>
      </div>
    </div>
  );
}

export default App;
