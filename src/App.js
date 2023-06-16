import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";


function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>

        <Route path='/' exact element={<Home/>}  />

        <Route path='/users' exact element={<UserList/>}  />

        <Route path='/users/:userId' exact element={<User/>}  />

        <Route path='/newUser' exact element={<NewUser/>}  />

        <Route path='/products' exact element={<ProductList/>}  />

        <Route path='/product/:productId' exact element={<Product/>}  />

        <Route path='/newproduct' exact element={<NewProduct/>}  />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;  