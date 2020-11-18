import { combineReducers } from "redux";
import canvas from "./canvas";
import dice from "./dice";
import room from "./room";
import socket from "./socket";
import theme from "./theme";
import user from "./user";

export default combineReducers({
	canvas,
	dice,
	room,
	socket,
	theme,
	user,
});
