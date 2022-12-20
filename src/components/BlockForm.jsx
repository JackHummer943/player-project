import React from 'react';



function BlockForm({title, age, imageUrl, param, type}) {
  const [FormCount, setFormCount] = React.useState(0);
  const typeNames = ['Классическая озвучка',',Выберите язык'];
  const onClickAddButton = () => {
    setFormCount(FormCount+1);
  };

  return (
  <div className="block-form">
  <img
    className="block-form__image"
    src={imageUrl}
    alt="Project"
  />
  <h4 className="block-form__title">{title}</h4>
  <div className="block-form__selector">
    <ul>
      <li className="active">Классическая озвучка</li>
      <li>Выберите язык</li>
    </ul>
    <ul>
    {
      param.map(param => <li> {param}</li>)
    }
    </ul>
  </div>
  <div className="block-form__bottom">
    <div className="block-form__price">от {age}</div>
    <button onClick={onClickAddButton} className="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>{/* Здесь возможно будет место в очереди
       на просмотр, учитывается количество 
       проектов которые уже добавлены и при новом
        добавлении проекта, проект встает 
        в очередь*/}
        {FormCount}
        </i>
    </button>
  </div>
  </div> 
  );
}

export default BlockForm;