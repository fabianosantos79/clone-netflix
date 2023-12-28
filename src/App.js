import './App.css';
import { categories } from './categories';
import Banner from './components/Banner';
import Header from './components/Header';
import ListMovies from './components/ListMovies';

function App() {
  return (
    <div className="App">
      <Header />
      {categories.map(category => (
        category.name === "trending" &&
        <Banner
          key={category.name}
          title={category.title}
          path={category.path}
        />
      ))}
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
