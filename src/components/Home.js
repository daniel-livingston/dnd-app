import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import RoomInfo from "./RoomInfo";

export const Home = (props) => {
	const signInForm = {
		sections: [
			{
				header: "You are not signed in",
				items: [
					{
						title: "Create an account",
						description: "Create an account if you don't already have one.",
						type: "link",
						to: "/signup",
						value: "Sign up",
					},
					{
						title: "Log in",
						description: "Log in to an existing account.",
						type: "link",
						to: "/login",
						value: "Log in",
					},
				],
			},
		],
	};

	const joinRoomForm = {
		sections: [
			{
				header: "Create or join a room",
				items: [
					{
						title: "Create a room",
						description: "Create a room with the settings you want.",
						type: "link",
						to: "/create",
						value: "Create",
					},
					{
						title: "Join a room",
						description: "Join an existing room using a room code.",
						type: "link",
						to: "/join",
						value: "Join",
					},
				],
			},
		],
	};
	return (
		<div className='home-container'>
			<div className='home'>
				{props.isLoggedIn ? null : <Form {...signInForm} />}
				{props.inRoom ? <RoomInfo /> : <Form {...joinRoomForm} />}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	inRoom: state.room.inRoom,
	isLoggedIn: state.user.isLoggedIn,
	username: state.user.username,
});

export default connect(mapStateToProps)(Home);
