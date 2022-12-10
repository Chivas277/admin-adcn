import "./newProduct.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { addProduct } from "../../redux/apiRequest";
import styled from 'styled-components';

const Error = styled.span`
    color:red;
`;

const Success = styled.span`
    color:green;
`;

export default function NewProduct() {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        //console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
          console.log(product);
        });
      }
    );

  }

  const { isFetching, error } = useSelector((state) => state.product);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <h1 className="addProductTitle">Thêm sản phẩm</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Hình ảnh</label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="addProductItem">
            <label>Tên sản phẩm</label>
            <input id="title" name="title" type="text" placeholder="tên sản phẩm" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>Loại</label>
            <input type="text" placeholder="loại" onChange={handleCat} />
          </div>
          <div className="addProductItem">
            <label>Giá</label>
            <input name="price" type="number" placeholder="giá" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>Mô tả</label>
            <input name="desc" type="text" placeholder="mô tả" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>Tồn kho</label>
            <input name="inStock" type="text" placeholder="số lượng" onChange={handleInputs} />
          </div>
          <button onClick={handleClick} disabled={isFetching} className="addProductButton">Thêm</button>
          {(error && <Error>Thêm không thành công</Error>) || (!error && <Success>Thêm thành công</Success>)}
        </form>
      </div>
    </div>
  );
}