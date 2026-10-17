import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
export default function App() {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products/:id" element={<ProductDetailsPage />}/>
      </Routes>
    </BrowserRouter>);
}
