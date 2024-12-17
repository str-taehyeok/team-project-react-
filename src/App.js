import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/global";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router";
import { HeartProvider } from './context/heartContext';
import { ProductProvider } from './context/productContext';
import { CommunityProvider } from './context/communityContext';

function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
            <ProductProvider>
                <CommunityProvider>
                  <HeartProvider>
                      <GlobalStyle />
                      <RouterProvider router={router} future={{ v7_startTransition: true }} />
                  </HeartProvider>
                </CommunityProvider>
            </ProductProvider>
          </ThemeProvider>
      </>
  );
}

export default App;
