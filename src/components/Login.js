import styled from "styled-components"

const Login = (props) => {
    return ( 
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Join Now</SignIn>
                </div>
            </Nav>
        </Container>
    );
}

const Container = styled.div`
padding: 0;`

const Nav = styled.div`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

  & > a {
      width:  135px;
  }
  @media (max-width: 768px) {
      padding: 0 5px;
  }
`;

const Join = styled.a`
padding: 10px 12px;
font-size:16px;
text-decoration:none;
color: rgba(0, 0, 0, 0.6);
margin-right: 12px;
border-radius: 4px;

&:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
}

`

const SignIn =  styled.a `
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
transition-duration: 167ms;
border-radius: 24px;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0, 0, 0, 0);
&:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
    color: #0a66c2;
}
`;

export default Login