import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import Login from './views/Login';
import Home from './views/Home'
import VatTu from './views/VatTu.jsx'
import PhieuNhap from './views/PhieuNhap.jsx'
import Kho from './views/Kho.jsx'
import DatHang from './views/DatHang.jsx'
import KhachHang from './views/KhachHang.jsx'
import PhieuXuat from './views/PhieuXuat.jsx'

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/QLVT-CMS" element={< Login />} />
          <Route path="/QLVT-CMS/trangchu" element={<Home />} />
          <Route path="/QLVT-CMS/vattu" element={<VatTu />} />
          <Route path="/QLVT-CMS/kho" element={<Kho />} />
          <Route path="/QLVT-CMS/dathang" element={<DatHang />} />
          <Route path="/QLVT-CMS/phieunhap" element={< PhieuNhap />} />
          <Route path="/QLVT-CMS/khachhang" element={<KhachHang />} />
          <Route path="/QLVT-CMS/phieuxuat" element={<PhieuXuat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
//  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
