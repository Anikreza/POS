import './App.css';
import Home from "./views/Home";
import AddMore from "./components/button/AddMore";
import { AiOutlinePlus } from 'react-icons/ai';
import Button from "./components/button/Button";
import SidebarBase from "./components/sidebar/SidebarBase";
import DineIn from "./components/forms/DineIn";
import CartItem from "./components/contents/cartItem";
import {RecipeData} from "./data/Recipe";

function App() {
  return (
    <div className="App">
      <Home header={'Home Page Header'} title={'Title'}/>
      {/*
       <AddMore color={'white'} background={'#EA7C69'} name={<AiOutlinePlus size='21px'/>}/>
      <br/>
       <Button color={'white'} name={'Confirm Payment'} background={'#EA7C69'}/>
       <DineIn title={'Dine In'}/>
      */}
        <SidebarBase/>
        <CartItem data={RecipeData}/>
    </div>
  );
}

export default App;

