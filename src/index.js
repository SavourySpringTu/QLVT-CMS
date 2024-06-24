import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './views/Login';
import Home from './views/Home'
import VatTu from './views/VatTu.jsx'
import PhieuNhap from './views/PhieuNhap.jsx'
import CTPN from './views/CTPN.jsx'
import Kho from './views/Kho.jsx'
import DatHang from './views/DatHang.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/QLVT-CMS/" element={< Login />} />
        <Route path="/QLVT-CMS/trangchu" element={<Home />} />
        <Route path="/QLVT-CMS/vattu" element={<VatTu />} />
        <Route path="/QLVT-CMS/kho" element={<Kho />} />
        <Route path="/QLVT-CMS/dathang" element={<DatHang />} />
        <Route path="/QLVT-CMS/phieunhap" element={< PhieuNhap />} />
        <Route path="/QLVT-CMS/chitietphieunhap" element={< CTPN />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
