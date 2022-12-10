import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from './../redux/apiRequest';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;        
`

const ListContainer = styled.div`
    flex: 6;
`

const Datatable = styled.div`
    height: 600px;
    padding: 20px;
`

const DatatableTitle = styled.div`
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Links = styled.div`
    text-decoration: none;
    color: green;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid green;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`

const ProductList = styled.div`
    flex: 4;
`

const ProductListItem = styled.div`
    display: flex;
    align-items: center;  
`

const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const ProductListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const List = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "titlte",
            headerName: "Tên sản phẩm",
            width: 250,
            renderCell: (params) => {
                return (
                    <ProductListItem >
                        <ProductListImg src={params.row.img} alt="" />
                        {params.row.title}
                    </ProductListItem>
                );
            },
        }, { field: "categories", headerName: "Loại", width: 190 },
        { field: "inStock", headerName: "Tồn kho", width: 200 },
        {
            field: "price",
            headerName: "Giá",
            width: 160,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/products/` + params.row._id}>
                            <ProductListEdit >Edit</ProductListEdit>
                        </Link>
                        <DeleteOutline style={{
                            color: "red",
                            cursor: "pointer"
                        }}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];


    return (
        <Container >
            <Sidebar />
            <ListContainer>
                <Navbar />
                <Datatable>
                    <DatatableTitle>
                        Danh sách người dùng
                        <Link to="/products/new" style={{ textDecoration: "none" }}>
                            <Links>
                                Thêm
                            </Links>
                        </Link>
                    </DatatableTitle>
                    <ProductList>
                        <DataGrid
                            rows={products}
                            disableSelectionOnClick
                            columns={columns}
                            getRowId={(row) => row._id}
                            pageSize={8}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                            autoHeight
                        />
                    </ProductList>
                </Datatable>
            </ListContainer>
        </Container>
    )
}

export default List
