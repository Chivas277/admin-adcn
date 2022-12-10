import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import styled from 'styled-components';

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 2px 4px 10px 1px black;
    box-shadow: 2px 4px 10px 1px rgb(201, 201, 201,0.47);
    padding: 10px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const BottomChart = styled.div`
    width: 100px;
    height: 100px;
`;

const TitleBottom = styled.div`
    font-weight: 500;
    color: gray;
`;

const AmountBottom = styled.div`
    font-size: 30px;
`;

const DescBottom = styled.div`
    font-size: 12px;
    font-weight: 300;
    color: gray;
`;

const Summary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ItemSummary = styled.div`
    text-align: center;
`;

const ItemTitle = styled.div`
    font-size: 14px;
    color: gray;
`
const ItemResult = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;

    &.positive{
        color: green;
    }
    &.negative{
        color: red;
    }
`
const ResultAmount = styled.div``

const featured = () => {
    return (
        <Container>
            <Top>
                <Title>Tổng doanh thu</Title>
                <MoreVertOutlinedIcon fontSize="small" />
            </Top>
            <Bottom>
                <BottomChart>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </BottomChart>
                <TitleBottom>Tổng doanh thu hôm nay</TitleBottom>
                <AmountBottom>40.000.000 VNĐ</AmountBottom>
                <DescBottom>Doanh thu trước đó</DescBottom>

                <Summary>
                    <ItemSummary>
                        <ItemTitle>Mục tiêu</ItemTitle>
                        <ItemResult className="negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <ResultAmount >500.000.000 VNĐ</ResultAmount>
                        </ItemResult>
                    </ItemSummary>
                    <ItemSummary>
                        <ItemTitle>Tuần trước</ItemTitle>
                        <ItemResult className="positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <ResultAmount>45.000.000 VNĐ</ResultAmount>
                        </ItemResult>
                    </ItemSummary>
                    <ItemSummary>
                        <ItemTitle>Tháng trước</ItemTitle>
                        <ItemResult className="positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <ResultAmount >1.000.000.000 VNĐ</ResultAmount>
                        </ItemResult>
                    </ItemSummary>
                </Summary>
            </Bottom>
        </Container>
    )
}

export default featured
