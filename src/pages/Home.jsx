import Featured from "../components/Featured"
import Chart from "../components/Chart"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/widget/Widget"
import Table from "../components/table/Table"
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const ContainerHome = styled.div`
    flex: 6;
`

const Wigets = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
`

const Charts = styled.div`
    display: flex;
    gap: 20px;
    padding: 5px 20px;
`
const ListContainer = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px black;
    box-shadow: 2px 4px 10px 1px rgb(201, 201, 201, 0.47);
    padding: 20px;
    margin: 20px;
`

const ListTitle = styled.div`
    font-weight: 500;
    color: gray;
    margin-bottom: 15px;
`

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <ContainerHome >
                <Navbar />
                <Wigets>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </Wigets>
                <Charts>
                    <Featured />
                    <Chart />
                </Charts>
                <ListContainer>
                    <ListTitle>Bán chạy</ListTitle>
                    <Table />
                </ListContainer>
            </ContainerHome>
        </Container>
    );
}

export default Home
