import { combineReducers } from "redux";
import canvas from "./canvas";
import dice from "./dice";
import socket from "./socket";
import theme from "./theme";
import user from "./user";

export default combineReducers({
	canvas,
	dice,
	socket,
	theme,
	user,
});
