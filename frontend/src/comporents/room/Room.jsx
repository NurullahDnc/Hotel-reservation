import React from 'react';
import RoomCart from '../general/RoomCart';
import roomData from '../../data/RoomData';
import PageTitleImage from '../general/PageTitleImage';

const Room = () => {
  return (
    <div>
      <PageTitleImage image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title={"Odalar"} />

      {roomData.rooms.map((room) => (
        <RoomCart key={room.id} roomInfo={room} />
      ))}
    </div>
  );
};

export default Room;
