import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { Layout } from "./../layouts/Layout";
import { Home } from "./../pages/home/Home";
import { Carbon } from "../pages/carbon/Carbon";
import { Ecodesign } from "../pages/ecodesign/Ecodesign";
import { Faq } from "../pages/faq/Faq";
import { PagesCO2 } from "../pages/pagesCO2/PagesCO2";
import { PagesCO2site } from "../pages/pagesCO2site/PagesCO2site";
Faq
PagesCO2
PagesCO2site

export const AppRouter = () => (
  <BrowserRouter>

    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Navigate to="/home"/>} />
 
        <Route path="/home" element={<Home />} />

        <Route path="/carbon" element={<Carbon />} />
        <Route path="/ecodesign" element={<Ecodesign />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pagesco2" element={<PagesCO2 />} />
        <Route path="/pagesco2site/:page" element={<PagesCO2site />} />

      </Route>
    </Routes>

  </BrowserRouter>
);
