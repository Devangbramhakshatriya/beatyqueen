import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productdetails/:id" element={<ProductDetails/>}/>
        </Routes>
    )
}
export default AllRoutes;