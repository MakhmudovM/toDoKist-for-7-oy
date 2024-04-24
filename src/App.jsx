import { useState } from 'react';
import { addTodo, removeTodo } from './features/todos/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [text, setText] = useState('')

  const { todos } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  function ToggleClassComponent() {
    // Используем useState для хранения текущего состояния класса
    const [isActive, setIsActive] = useState(false);
  
    // Функция для переключения состояния
    const toggleClass = () => {
      setIsActive(!isActive);
    };
  
    // Устанавливаем класс в зависимости от состояния
    const className = isActive ? 'item' : 'compleateItem';
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) { 
      dispatch(
        addTodo({
          id: uuidv4(),
          text,
        })
      );
      setText(""); 
    }
  };

  return (
    <div className='bd'>
      <div className='card'>
        <div className='top'>
          <img src="../public/back-svgrepo-com.svg " className='img' alt="" width={30} height={30} />
          <img src="../public/menu-svgrepo-com.svg" className='img' alt=""  width={30} height={30}/>
        </div>
        <h1 className='title'>Todos</h1>
        <div className='line'></div>
        <form onSubmit={handleSubmit}>
          <input className='input' placeholder='+ Add to do!' onChange={(e) => setText(e.target.value)} type="text" value={text}/>
          <button className='btn'>Add</button>
        </form>

        <ul className='list'>
          {todos &&
            todos.map((todo) => {
              return (
                <li className='item' key={todo.id}>
                  <h4 className='todo-text'>{todo.text}</h4>
                  <div className='bottom'>
                    <label htmlFor="">
                      <span className='text'>completed:</span>
                      <input    type="checkbox"  />
                    </label>
                    <button className='del-btn' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  )
};

export default App;
