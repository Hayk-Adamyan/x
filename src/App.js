import "./App.css";
import Nav from "./component/nav/Nav";
import Profile from "./component/profile//Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./component/mine/header/Header";
import store from "./component/redux/State";

function App(props) {

    return (
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile posts={props.State.posts} AddPost={props.AddPost} />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs

                            Dialogs={props.State.Dialogs}
                            Massagess={props.State.Massagess}

                        />
                    )}
                />
            </div>
        </div>
    );
}

export default App;
