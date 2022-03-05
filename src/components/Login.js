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
            <Section>
                <Hero>
                     <h1>welcome to your professional community</h1>
                     <img src="./images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                     <Google>
                         <img src="/images/google.svg" alt="" />
                         Sign in With Google
                     </Google>
                </Form>
            </Section>
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

const Section =  styled.section `
 display: flex;
 align-content: flex-start;
 min-height: 700px;
 padding-bottom: 138px;
 padding-top: 40px;
 padding: 60px 0;
 position: relative;
 flex-wrap: wrap;
 width: 100%;
 max-width: 1128px;
 align-items: center;
 margin: auto;
 @media (max-width: 768) {
     margin: auto;
     min-height: 0px;
 }
`;

const Hero = styled.div `
width: 100%;
h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    }
}

img {
    z-index: -1;
    width: 700px;
position: absolute;
bottom: -2px;
right: -150px;
@media (max-width: 768px) {
    top: 230px;
    width: initial;
    position: initial;
    height: initial;
}
}
`

export default Login