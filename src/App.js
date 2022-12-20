import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BlockForm from './components/BlockForm';
import project from '../src/project.json'



function App() {
  return (
    <div className="wrapper">
<Header/>
    <div className="content">
      <div className="container">
        <div className="content__top">
<Categories/>
<Sort/>
        </div>
        <h2 className="content__title">Все</h2>
        <div className="content__items">
        {project.map((obj) => ( 
   <BlockForm 
   title={obj.title} 
   age={obj.age} 
   imageUrl={obj.imageUrl} 
   param={obj.param}
   type={obj.type}
  />
        ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
