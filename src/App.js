import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import Sidebar from "./components/sidebar";
import Category from "./views/categories";
import RecipeData from "./data/Recipe";


function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar/>
                <Routes>
                    <Route path="/POS" element={<Home data={RecipeData}/>}/>
                    <Route path="/categories/:key" element={<Category/>}/>
                </Routes>
            </Router>

            {/*<AddMore color={'white'} background={'#EA7C69'} name={<AiOutlinePlus size='21px'/>}/>*/}
            {/*<br/>*/}
            {/*<Button color={'white'} name={'Confirm Payment Payment'} background={'#EA7C69'}/>*/}
            {/*<SelectOption title={'Dine In'}/>*/}
            {/*<CartItem data={RecipeData}/>*/}
            {/*<Dish data={RecipeData} Admin={true} Availability={'Bowls Available'}/>*/}
            {/*<Index title={'Dine In'} active={true}/>*/}
            {/*<MostOrdered data={RecipeData}/>*/}
            {/*<BusinessSummary data={RecipeData} title={'Total Revenue'}/>*/}

        </div>
    );
}

export default App;

