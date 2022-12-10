import "./widget.scss"
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({ type }) => {
    let data;

    //tam thoi
    const amount = 10000;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "Khách hàng",
                isMoney: false,
                link: "Xem tất cả khách hàng",
                icon: (
                    <PersonOutlineIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: " rgba(255, 0, 0, 0.2)",
                    }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "Đơn hàng",
                isMoney: false,
                link: "Xem tất cả đơn hàng",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon"
                        style={{
                            backgroundColor: " rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "Doanh thu",
                isMoney: true,
                link: "Xem doanh thu",
                icon: (
                    <MonetizationOnOutlinedIcon className="icon"
                        style={{
                            backgroundColor: " rgba(0, 128, 0, 0.2)",
                            color: "green",
                        }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See detail",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128, 0, 128, 0.2)",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }




    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "VNĐ"} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
