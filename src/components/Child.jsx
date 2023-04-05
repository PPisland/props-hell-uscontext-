import { useContext } from "react";
import GrandChild from "./GrandChild";
import { AppContext } from "../App";

const Child = () => {
  const { gift, setGift } = useContext(AppContext);
  return (
    <div>
      <div className="w-40 h-40 bg-pink-300">Child : {gift}</div>
      <GrandChild />
    </div>
  );
};

export default Child;
