import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import Forgetpassword from "../Forgetpassword/Forgetpassword";
import ScrollButton from "../ScrollButton/Scrollbutton";

function Homepage() {
    const [visible, setVisible] = useState(true);

    function toggle() {
        setVisible(!visible);
    }
    return (
        <>
            <Router forceRefresh={false} basename="/react_admin/">
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/forgetpassword">
                        <Forgetpassword/>
                    </Route>
                    <Route path="/">
                        <ScrollButton scrollStepInPx="20" delayInMs="16.66"/>
                        <Navbar toggle={toggle} visible={visible} setVisible={setVisible}/>
                        <div className={["page-content", visible ? "sidebar-xs" : ""].join(" ")}>
                            <Sidebar toggle={toggle} visible={visible} setVisible={setVisible}/>
                            <Content/>
                        </div>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Homepage;
