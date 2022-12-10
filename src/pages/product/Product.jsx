import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/Chart";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";


export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );




  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="productTitleContainer">
          <h1 className="productTitle">Sửa sản phẩm</h1>
          <Link to="/products/new">
            <button className="productAddButton">Thêm</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={product.img} alt="" className="productInfoImg" />
              <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{product._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">LTên sản phẩm:</span>
                <span className="productInfoValue">{product.title}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Tồn kho:</span>
                <span className="productInfoValue">{product.inStock}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Tên sản phẩm</label>
              <input type="text" placeholder={product.title} />
              <label>Mô tả</label>
              <input type="text" placeholder={product.desc} />
              <label>Giá</label>
              <input type="text" placeholder={product.price} />
              <label>Tồn kho</label>
              <input name="inStock" type="text" placeholder={product.inStock} />
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}
