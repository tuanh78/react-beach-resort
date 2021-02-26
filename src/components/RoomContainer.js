import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsList from "./RoomsList";
// import RoomsFilter from "./RoomsFilter";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <p>hello from room container</p>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}<option value="single">single</option>
//     </RoomConsumer>
//   );
// }
