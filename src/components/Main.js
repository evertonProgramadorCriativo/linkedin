import styled from "styled-components";

const Main = (props) => {
    return (<Container>
        <ShareBox>Share
            <div>
                <img src="/images/user.svg" alt="" />
                <button>Start a post</button>
            </div>
            <div>
                <button>
                    <img src="/images/application--icon1.png" alt="" />
                    <span>Photo</span>
                </button>
                <button>
                    <img src="/images/play-button--icon3.png" alt="" />
                    <span>video</span>
                </button>
                 
                <button>
                    <img src="/images/calendar--icon2.png" alt="" />
                    <span>Event</span>
                </button>
                <button>
                    <img src="/images/gallery--icon4.png" alt="" />
                    <span>Write article</span>
                </button>
            </div>
        </ShareBox>
    </Container>);
};

const Container = styled.div`
grid-area: main;`;

const CommonCard = styled.div`
text-align: center ;
overflow: hidden ;
margin-bottom: 8px ;
background-color: #fff ;
border-radius: 5px ;
position: relative ;
border: none ;

box-shadow:0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%) ;

`;

const ShareBox = styled(CommonCard)`
display: flex ;
flex-direction: column ;
color: #958b7b ;
margin: 0 0  8px;
background-color: white ;
div {
    button {
outline: none ;
color: rgb(0 , 0, 0, 0.6);
font-size: 14px ;
line-height: 1.5 ;
min-height: 48px ;
background-color: transparent ;
border: none;
display: flex ;
align-items:center ;
font-weight: 600 ;

img {
    width: 16px ;
}
    }

    &:first-child {
        display: flex ;
        align-items:center ;
        padding: 8px 16 0px 16px ;
        img{
            width: 48px ;
            border-radius: 50% ;
            margin-right: 8px ;
        }
        button {
            margin: 4px 0 ;
            flex-grow: 1 ;
            padding-left: 16px;
            border: 1px solid rgba(0, 0, 0, 0.15) ;
            border-radius: 35px ;
            background-color: white ;
            text-align:left ;
        }
    }
    &:nth-child(2) {
        display: flex ;
        flex-wrap:wrap ;
        justify-content:space-around ;
        padding-bottom: 4px;
        button {
            img {
                margin :0  4px 0 -2px;
            }
            span {
                color: #70b5f9;
            }
        }
    }
}
`;

export default Main;