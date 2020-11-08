import React, { Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import io from "socket.io-client";
import Sidebar from "./Sidebar";
// import LoadingPage from "./LoadingPage";
// const HomePage = React.lazy(() => import("./HomePage"));
// const LoginPage = React.lazy(() => import("./LoginPage"));
// const CanvasPage = React.lazy(() => import("./CanvasPage"));
const DiceView = React.lazy(() => import("./DiceView"));
const SettingsView = React.lazy(() => import("./SettingsView"));
// const SignupPage = React.lazy(() => import("./SignupPage"));
import { setHistory, addToHistory } from "../actions/dice";
import { setSocket } from "../actions/socket";
import { setUser } from "../actions/user";

export class App extends React.Component {
	render() {
		return (
			<div className={`app ${this.props.className}`}>
				<BrowserRouter>
					<Sidebar />
					<Suspense fallback={<div>Loading</div>}>
						<Switch>
							<Route path='/' exact>
								<h1>Home</h1>
							</Route>
							<Route path='/canvas' exact>
								<h1>Canvas</h1>
							</Route>
							<Route path='/dice' exact>
								<DiceView />
							</Route>
							<Route path='/login' exact>
								<h1>Login</h1>
							</Route>
							<Route path='/settings' exact>
								<SettingsView />
							</Route>
							<Route path='/signup' exact>
								<h1>Sign up</h1>
							</Route>
							<Route>
								<h1>404 - Not found</h1>
							</Route>
						</Switch>
					</Suspense>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	className: state.theme.className,
	isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
	setSocket: (socket) => dispatch(setSocket(socket)),
	setHistory: (history) => dispatch(setHistory(history)),
	addToHistory: (roll) => dispatch(addToHistory(roll)),
	setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
