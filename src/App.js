import './index.css';
import Body from './components/Body';
import {Provider} from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Cards/>
      },
      {
        path:"/yourcart",
        element:<Cart/>
      }
    ]
  }])
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
