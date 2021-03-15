import "./App.css";
// import template-tasks components
import TemplateTasks from './components/template-task/template-task';

// import Task-1 components
import Square from "./components/task-1/Squares";

// import Task-2 components
import CheckboxFontStyle from "./components/task-2/ChangeFontStile";

// import Task-3 components
import ButtonSignIn from "./components/task-3/ButtonSignIn";

// import Task-4 components
import OutputComponents from "./components/task-4/OutputСomponents";

// import Task-5 components
import SpinerAnimation from './components/task-5/SpinerAnimation';
import React from "react";

// import Task-6 components
import Buttons from './components/task-6/Buttons';
import { useState } from 'react';

// import Task-7 components
import InputChange from './components/task-7/InputChange';

// import Task-8 components
import RandomElementOfArray from './components/task-8/RandomElementOfArray';


function App() {

  // task-6 hook
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="wrap">
      {/* START TASK-1 */}
      <TemplateTasks 
        numberHomeWork = '1'
        trelloTaskUrl = 'https://trello.com/c/QQKWQ3ZF'
        trelloTaskName = 'Передаем пропсы'
        />
      <div className="squares-container">
        <Square 
          label="BIG square" 
          cssClass="big-square" 
        />
        <Square 
          label="A less square" 
          cssClass="medium-square" 
        />
        <Square 
          label="The smallest one" 
          cssClass="small-square" 
        />
      </div>
      {/* END TASK-1*/}
      {/* START TASK-2 */}
        <TemplateTasks 
        numberHomeWork = '2'
        trelloTaskUrl = 'https://trello.com/c/mET8NW0M'
        trelloTaskName = 'Работаем с setState'
        />
      <div className='text-container'>
        <CheckboxFontStyle />
      </div>
      {/* END TASK-2 */}
      {/* START TASK-3 */}
      <TemplateTasks 
        numberHomeWork = '3'
        trelloTaskUrl = 'https://trello.com/c/joewxuf8'
        trelloTaskName = 'Условный рендеринг с помощью тернарного оператора'
        />
      <ButtonSignIn />
      {/* END TASK-3 */}
      {/* START TASK-4 */}
      <TemplateTasks 
        numberHomeWork = '4'
        trelloTaskUrl = 'https://trello.com/c/LBVdhjhp'
        trelloTaskName = 'Выводим повторяющиеся компоненты циклом'
        />
        <OutputComponents/>
      {/* END TASK-4 */}
      {/* START TASK-5 */}
      <TemplateTasks 
        numberHomeWork = '5'
        trelloTaskUrl = 'https://trello.com/c/NcCleR7C'
        trelloTaskName = 'Работаем с setState 2 (Спинер)'
        />
        <SpinerAnimation />
      {/* END TASK-5 */}
      {/* START TASK-6 */}
      <TemplateTasks 
        numberHomeWork = '6'
        trelloTaskUrl = 'https://trello.com/c/X5iRe4ih'
        trelloTaskName = 'Модификация стейта из внутреннего компонента'
        />
        <div className = 'conter-container'>
        <Buttons 
        label = 'Plus'
        onClick = {() => setCount(count + 1)}
        />
        <p>{count}</p>
        <Buttons 
        label = 'Minus'
        onClick={() => setCount(count - 1)}
        />
        </div>
      {/* END TASK-6 */}
      {/* START TASK-7 */}
      <TemplateTasks 
        numberHomeWork = '7'
        trelloTaskUrl = 'https://trello.com/c/jawRBwXl'
        trelloTaskName = 'Двустороннее связывание'
        />
        <InputChange />
      {/* END TASK-7 */}
      {/* START TASK-8 */}
      <TemplateTasks 
        numberHomeWork = '8'
        trelloTaskUrl = 'https://trello.com/c/0WZplgyM'
        trelloTaskName = 'Модификация массива в стейте'
        />
        <RandomElementOfArray />
      {/* END TASK-8 */}
    </div>
    </>
  );
}

export default App;
