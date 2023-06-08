import React from 'react';
import Sort from './Sort';
import project from '.././project.json';


// import Category from '../components/Category';
// import Group from '../components/Group';
// import Pagination from '../components/Pagination';
import BlockForm from '../components/BlockForm';
// import Skeleton from '../components/BlockForm/Skeleton'
// import { SearchContext } from '../App';

const Home = () => {
  return (<div className="container">
<div className="content__top">
<div class="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мультипликация</li>
                <li>Фильмы</li>
                <li>Сериалы</li>
                <li>Клипы</li>
                <li>Шортс</li>
              </ul>
            </div>
{/* <Categories/> */}
<Sort/>
</div>
{/* <h2 className="content__title">Все</h2> */}
<div className="content__items">
{project.map((obj) => ( 
<BlockForm 
key={obj.title} {...obj}
/>
))}
</div>
</div>
  );
};

export default Home;