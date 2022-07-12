import logo from './logo.svg';
import './App.css';
// ---------------------------------------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Views/Layout/Layout';
import { Provider } from "react-redux";
import mainStore from './Stores/Redux/MainStore';
import DPPage from './Views/Pages/Products/DigitalsProducts/DPPage';
import SPPage from './Views/Pages/Products/SportsProducts/SPPage';
import UPPage from './Views/Pages/Products/UtilsProducts/UPPage';
import ShoppingBasket from './Views/Pages/PagesComponents/ShoppingBasket';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuProvider } from './Stores/Context/MenuContext';




function App() {
  return (
    <div>
      <Provider store={mainStore} >

          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />} >
                <Route path="/digitalProduct" element={<DPPage />} />
                <Route path="/sportProduct" element={<SPPage />} />
                <Route path="/utilityProduct" element={<UPPage />} />
                <Route path="/shoppingBasket" element={<ShoppingBasket />} />
                <Route path="" />
                <Route path="" />
              </Route>
            </Routes>
          </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
