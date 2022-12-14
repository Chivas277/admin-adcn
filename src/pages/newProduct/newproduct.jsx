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
        <h1 className="addProductTitle">Th??m s???n ph???m</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>H??nh ???nh</label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="addProductItem">
            <label>T??n s???n ph???m</label>
            <input id="title" name="title" type="text" placeholder="t??n s???n ph???m" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>Lo???i</label>
            <input type="text" placeholder="lo???i" onChange={handleCat} />
          </div>
          <div className="addProductItem">
            <label>Gi??</label>
            <input name="price" type="number" placeholder="gi??" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>M?? t???</label>
            <input name="desc" type="text" placeholder="m?? t???" onChange={handleInputs} />
          </div>
          <div className="addProductItem">
            <label>T???n kho</label>
            <input name="inStock" type="text" placeholder="s??? l?????ng" onChange={handleInputs} />
          </div>
          <button onClick={handleClick} disabled={isFetching} className="addProductButton">Th??m</button>
          {(error && <Error>Th??m kh??ng th??nh c??ng</Error>) || (!error && <Success>Th??m th??nh c??ng</Success>)}
        </form>
      </div>
    </div>
  );
}