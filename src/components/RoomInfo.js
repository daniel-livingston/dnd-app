import React from "react";
import { connect } from "react-redux";
import { leaveRoom } from "../actions/room";

class RoomInfo extends React.Component {
	onClickLeaveRoom() {
		this.props.leaveRoom();
	}
	render() {
		return (
			<div className='form room-info'>
				<h2 className='room-info__title'>
					Room Code: <span className='accent-color'>{this.props.roomCode}</span>
				</h2>
				<div className='room-info__users'>
					{this.props.users.map((user) => (
						<div key={user} className='room-info__user'>
							{user}
						</div>
					))}
				</div>
				<button className='form__button' onClick={this.onClickLeaveRoom}>
					Leave room
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	roomCode: state.room.name,
	users: state.room.users,
});

const mapDispatchToProps = (dispatch) => ({
	leaveRoom: () => dispatch(leaveRoom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);
