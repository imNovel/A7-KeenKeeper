import Banner from "@/components/Banner";
import Friends from "@/components/ui/Friends";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const friendsPromise = async() =>{
  const res = await fetch('http://localhost:3000/friends.json')
  const data = await res.json();
  return data;
}

const Home = async() => {
  
  const friends = await friendsPromise();

  return (
    <div className="container mx-auto">
      <Banner/>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {
            friends.map(friend => <Friends key={friend.id} friend={friend} />)
          }
        </div>
      </div>
    </div>

  );
}
export default Home;