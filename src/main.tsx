
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "./pages/mainPage.tsx";
import {lazy, Suspense} from "react";

const About =
    lazy(() => import("./pages/aboutPage"))

const Loading = "<div>Loading..............</div>"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path="/"
                 element={<MainPage />} />
          <Route path="/about"
                 element = {<Suspense fallback={Loading}><About/></Suspense>} />
      </Routes>
  </BrowserRouter>,
)

