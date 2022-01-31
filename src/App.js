import './App.css';
import Home from "./views/Home";
import AddMore from "./components/button/AddMore";
import { AiOutlinePlus } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Home header={'Home Page Header'} title={'Title'}/>
        <AddMore color={'#EA7C69'} name={<AiOutlinePlus/>}/>
    </div>
  );
}

export default App;

