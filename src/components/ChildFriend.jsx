import { useContext } from "react";
import { AppContext } from "../App";

const ChildFriend = () => {
  const { gift, setGift } = useContext(AppContext);
  return <div className="w-40 h-40 bg-red-300">ChildFreind : {gift}</div>;
};

export default ChildFriend;
