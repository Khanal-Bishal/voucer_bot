import { BadgeCent } from 'lucide-react';

const Card = () => {
  return (
    <div className="p-2 border  bg-blue-400 w-1/2 m-auto  text-center flex justify-center items-center rounded-md ">
      <div className="flex justify-center gap-2 items-center p-1">
        <div>{<BadgeCent className="text-blue-200" />}</div>
        <p className="text-white text-xl font-semibold">Redeem</p>
      </div>
    </div>
  );
};

export default Card;
