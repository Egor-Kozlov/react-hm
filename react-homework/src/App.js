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


function App() {
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
    </div>
    
    </>
  );
}

export default App;
