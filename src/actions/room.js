export const JOIN_ROOM = "JOIN_ROOM";
export const joinRoom = (roomData) => ({
	type: JOIN_ROOM,
	data: roomData,
});

export const LEAVE_ROOM = "LEAVE_ROOM";
export const leaveRoom = () => ({
	type: LEAVE_ROOM,
});
