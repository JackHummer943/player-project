import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BlockForm from './components/BlockForm';



function App() {
  return (
    <div class="wrapper">
<Header/>
    <div class="content">
      <div class="container">
        <div class="content__top">
<Categories/>
<Sort/>
        </div>
        <h2 class="content__title">Все</h2>
        <div class="content__items">
<BlockForm/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
