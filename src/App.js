import { connect } from "react-redux"
import { useEffect } from "react";
import Login from "./components/Login"
 import { BrowserRouter as Router , Routes ,  Route } from "react-router-dom"
import './App.css';  
import Header from "./components/Header";
import Home from "./components/Home";
import { getUserAuth } from "./actions/index"

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
       <Router>
         <Routes>
            <Route exact path="/" element={<Login/>}   />
         </Routes>
         <Routes>
            <Route  path="/home" element={<><Header/> <Home /></>}    />
           
         </Routes>
       </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    user: state.userState.user,
    articles: state.articleState.loading,
    loading: state.articleState.loading,
  };
};

const mapDispatchToProps = (dispatch) =>  ({
  getUserAuth: () => dispatch(getUserAuth()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
