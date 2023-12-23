import './App.css';
import { categories } from './categories';
import ListMovies from './components/ListMovies';

function App() {
  return (
    <div className="App">
      {categories.map(category => (
        <ListMovies
          key={category.name}
          title={category.title}
          path={category.path}
        />
      ))}
    </div>
  );
}

export default App;
