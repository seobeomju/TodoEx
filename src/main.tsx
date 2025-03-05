
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "./pages/mainPage.tsx";
import AboutPage from "./pages/aboutPage.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
  </BrowserRouter>,
)
