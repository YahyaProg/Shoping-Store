import ReactDOM from 'react-dom';
import App from "./App"
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

import {Provider} from "react-redux"
import {store} from "./redux/store/store"
ReactDOM.render(

<Provider store={store}>
    <App/>
</Provider>
 , document.getElementById("root")
 )
 