
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    border-right: 0.5px solid rgb(230, 227, 227);
    min-height: 100vh;
    //background-color: white;
`;

const SidebarTop = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6439ff;
`;

const Hr = styled.hr`
    height: 0;
    border: 0.5px solid rgb(230, 227, 227);
`;

const SidebarCenter = styled.div`
    padding-left: 10px;
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &:hover{
        background-color: #ece8ff;
    }
`;

const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const Icon = styled.div`
    font-size: 18px;
    color: #7451f8;
`

const ItemSidebar = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
`;

const SidebarBottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const ColorOption = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #7451f8;
    cursor: pointer;
    margin: 5px;

    &:nth-child(1){
        background-color: whitesmoke;
    }
    &:nth-child(2){
        background-color: #333;
    }
    &:nth-child(3){
        background-color: darkblue;
    }    
`;

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <Container>
            <SidebarTop >
                <Link to="/admin" style={{ textDecoration: "none" }}>
                    <Logo>Smart 4.0</Logo>
                </Link>
            </SidebarTop>
            <Hr />
            <SidebarCenter >
                <Ul>
                    <Title>Tổng quan</Title>
                    <Link to={"/admin"} style={{ textDecoration: "none" }}>
                        <Li>
                            <Icon>
                                <DashboardIcon />
                            </Icon>
                            <ItemSidebar>Doanh thu</ItemSidebar>
                        </Li>
                    </Link>
                    <Title>Danh sách</Title>
                    <Link to="/Users" style={{ textDecoration: "none" }}>
                        <Li>
                            <Icon>
                                <AccountCircleOutlinedIcon />
                            </Icon>
                            <ItemSidebar>Khách hàng</ItemSidebar>
                        </Li>
                    </Link>
                    <Link to="/Products" style={{ textDecoration: "none" }}>
                        <Li>
                            <Icon>
                                <InventorySharpIcon />
                            </Icon>
                            <ItemSidebar>Sản phẩm</ItemSidebar>
                        </Li>
                    </Link>
                    <Li>
                        <Icon>
                            <BorderColorIcon />
                        </Icon>
                        <ItemSidebar>Đơn hàng</ItemSidebar>
                    </Li>
                    <Li>
                        <Icon>
                            <LocalShippingIcon />
                        </Icon>
                        <ItemSidebar>Vận chuyển</ItemSidebar>
                    </Li>
                    <Title>Tiện ích</Title>
                    <Li>
                        <Icon>
                            <QueryStatsSharpIcon />
                        </Icon>
                        <ItemSidebar>Thống kê</ItemSidebar>
                    </Li>
                    <Li>
                        <Icon>
                            <NotificationsNoneOutlinedIcon />
                        </Icon>
                        <ItemSidebar>Thông báo</ItemSidebar>
                    </Li>
                    <Title>Dịch vụ</Title>
                    <Li>
                        <Icon>
                            <SettingsSystemDaydreamOutlinedIcon />
                        </Icon>
                        <ItemSidebar>Chăm sóc khách hàng</ItemSidebar>
                    </Li>
                    <Li>
                        <Icon>
                            <PsychologyOutlinedIcon />
                        </Icon>
                        <ItemSidebar>Nhật ký</ItemSidebar>
                    </Li>
                    <Li>
                        <Icon>
                            <SettingsIcon />
                        </Icon>
                        <ItemSidebar>Cài đặt</ItemSidebar>
                    </Li>
                    <Title>Tài khoản</Title>
                    <Li>
                        <Icon>
                            <AccountBoxOutlinedIcon />
                        </Icon>
                        <ItemSidebar>Trang cá nhân</ItemSidebar>
                    </Li>
                    <Li>
                        <Icon>
                            <LogoutOutlinedIcon />
                        </Icon>
                        <ItemSidebar>Đăng xuất</ItemSidebar>
                    </Li>
                </Ul>
            </SidebarCenter>
            <SidebarBottom>
                <ColorOption
                    onClick={() => dispatch({ type: "LIGHT" })}></ColorOption>
                <ColorOption
                    onClick={() => dispatch({ type: "DARK" })}></ColorOption>
            </SidebarBottom>
        </Container>
    )
}

export default Sidebar