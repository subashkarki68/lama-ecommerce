import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid gray;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`;
const SearchInput = styled.input`
    border: none;
    margin: 5px;
    &:focus {
        outline: none;
    }
`;
const SearchIconStyled = styled(SearchIcon)`
    cursor: pointer;
    color: gray;
`;
const Center = styled.div`
    flex: 1;
    justify-content: center;
    text-align: center;
`;
const Logo = styled.h1`
    font-size: 40px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    margin-left: 25px;
    cursor: pointer;
`;

function Navbar() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>
                            EN
                        </Language>
                        <SearchContainer>
                            <SearchInput />
                            <SearchIconStyled />
                        </SearchContainer>
                    </Left>
                    <Center><Logo>Ramro Store</Logo></Center>
                    <Right>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;