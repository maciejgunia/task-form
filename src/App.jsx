import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import { useData } from "./helpers/data";

function App() {
    const [data, setData] = useData({});

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header></Header>
            <main style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
                <Routes>
                    <Route path="/" element={<UserForm data={data} setData={setData} />} />
                    <Route path="info" element={<UserInfo data={data} />} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
