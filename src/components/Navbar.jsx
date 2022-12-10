
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useContext } from "react";
import styled from 'styled-components';
import { DarkModeContext } from './../context/darkModeContext';

const Container = styled.div`
  height: 50px;
    border-bottom: 0.5px solid rgb(231, 228, 228);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Search = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 3px;
`
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;

  &::placeholder{
      font-size: 12px;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`
const Icon = styled.div`
  font-size: 20px;
`
const Counter = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
`
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search....." />
          <SearchOutlinedIcon />
        </Search>
        <ItemWrapper>
          <Item>
            <Icon>
              <LanguageOutlinedIcon />
            </Icon>
            Tiếng việt
          </Item>
          <Item >
            <Icon>
              <DarkModeOutlinedIcon onClick={() => dispatch({ type: "TOGGLE" })} />
            </Icon>
          </Item>
          <Item >
            <Icon>
              <FullscreenExitOutlinedIcon />
            </Icon>
          </Item>
          <Item >
            <Icon>
              <NotificationsNoneOutlinedIcon />
            </Icon>
            <Counter>1</Counter>
          </Item>
          <Item>
            <Icon>
              <ChatBubbleOutlineOutlinedIcon />
            </Icon>
            <Counter>2</Counter>
          </Item>
          <Item >
            <Icon>
              <FormatListBulletedOutlinedIcon />
            </Icon>
          </Item>
          <Item>
            <Img src="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=1280" alt="" />
          </Item>
        </ItemWrapper>
      </Wrapper>
    </Container>
  )
}

export default Navbar
