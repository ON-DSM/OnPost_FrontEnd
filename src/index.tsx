import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import ScrollTop from './utils/constant/ScrollTop';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <ScrollTop />
        <App />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>
);
