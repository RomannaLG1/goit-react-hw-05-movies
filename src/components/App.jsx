// import { toast, ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom/dist';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { ProductDetails } from '../Pages/ProductDetails';
import { Products } from '../Pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
