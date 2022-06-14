import "./App.css";
import { Routes, Route } from "react-router-dom";
import NFTdetail from "./page/NFTdetail";
import Home from "./page/Home";
import Navbar from "./component/Navbar";

//1. 전체 페이지, nft 디테일 페이지 => 라우터
//1-1 Navigation bar 추가
//2. 전체 상품페이지에서는 전체 상품을 봄
//3. nft를 누르면 nft 디테일 페이지가 나온다
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="NFTdetail/:id" element={<NFTdetail />} />
      </Routes>
    </div>
  );
}

export default App;
