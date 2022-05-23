import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";

function Routing() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="contacts" element={<ContactsPage />}></Route>
        </Routes>
    );
}

export default Routing;