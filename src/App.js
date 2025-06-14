
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/Cart/CartPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import WishlistPage from './pages/WishlistPage/WishlistPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OTPVerificationPage from './pages/OtpVerificationPage/OtpVerificationPage';
import  AddressSelectionPage from './pages/AddressSelectionPage/AddressSelectionPage'
import PaymentPage from './pages/PaymentPage/PaymentPage';
import OrderSuccessPage from './pages/OrderSuccessPage/OrderSuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/profile" element={<UserProfilePage />}/>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/address-selection" element={<AddressSelectionPage />} />
        <Route path="/payment" element={<PaymentPage />} /> {/* <-- Add this */}
        <Route path='/Sucess' element={<OrderSuccessPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
