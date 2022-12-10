import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';

const List = () => {
    const products = useSelector((state) => state.product.products);
    return <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Tên sản phẩm</TableCell>
                    <TableCell className="tableCell">Loại</TableCell>
                    <TableCell className="tableCell">Giá</TableCell>
                    <TableCell className="tableCell">Tồn kho</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((row) => (
                    <TableRow key={row._id}>
                        <TableCell className="tableCell">{row._id}</TableCell>
                        <TableCell className="tableCell">
                            <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.title}
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.categories}</TableCell>
                        <TableCell className="tableCell">{row.price}</TableCell>
                        <TableCell className="tableCell">{row.inStock}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>;
}

export default List
