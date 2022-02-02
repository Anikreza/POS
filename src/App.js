import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tabs from "./components/tabs/tabs";
import Home from "./views/Home";
import Dish from "./components/contents/dish";
import RecipeData from "./data/Recipe";
import CartItem from "./components/contents/cartItem";
import MostOrdered from "./components/contents/mostOrdered";
import BusinessSummary from "./components/contents/businessSummary";
import Sidebar from "./components/sidebar";


function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={ <Home/>} />
                    <Route path="/Restaurant" element={ <Tabs title={'Dine In'} active={true}/>} />
                </Routes>
            </Router>

            {/*<AddMore color={'white'} background={'#EA7C69'} name={<AiOutlinePlus size='21px'/>}/>*/}
            {/*<br/>*/}
            {/*<Button color={'white'} name={'Confirm Payment Payment'} background={'#EA7C69'}/>*/}
            {/*<DineIn title={'Dine In'}/>*/}
            {/*<CartItem data={RecipeData}/>*/}
            {/*<Dish data={RecipeData} Admin={true} Availability={'Bowls Available'}/>*/}
            {/*<Tabs title={'Dine In'} active={true}/>*/}
            {/*<MostOrdered data={RecipeData}/>*/}
            {/*<BusinessSummary data={RecipeData} title={'Total Revenue'}/>*/}

        </div>
    );
}

export default App;

