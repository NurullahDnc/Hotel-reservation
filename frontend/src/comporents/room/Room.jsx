import React from 'react';
import RoomCart from '../general/RoomCart';
import roomData from '../../data/RoomData';

const Room = () => {
  return (
    <div>
      {roomData.rooms.map((room) => (
        <RoomCart key={room.id} roomInfo={room} />
      ))}
    </div>
  );
};

export default Room;
