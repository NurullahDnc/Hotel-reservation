import React from 'react';
import RoomCart from '../general/RoomCart';
import roomData from '../../data/RoomData';
import PageTitleImage from '../general/PageTitleImage';

const Room = () => {
  return (
    <div>
      <PageTitleImage image={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Odalar"} />

      {roomData.rooms.map((room) => (
        <RoomCart key={room.id} roomInfo={room} />
      ))}
    </div>
  );
};

export default Room;
