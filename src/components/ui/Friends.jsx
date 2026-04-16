import Image from "next/image";
import React from "react";

const Friends = ({ friend }) => {
  return (
    <div>
      <div key={friend.id} className="bg-base-100 shadow-sm mb-4">
        <div className="flex flex-col items-center text-center p-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full my-4"
          />
          <div className="space-y-2">
            <h2>{friend.name}</h2>
            <p>{friend.days_since_contact}d ago</p>
            <div className="flex flex-wrap gap-2">
              {friend.tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-soft badge-success text-green-900"
                >
                  {tag}
                </div>
              ))}
            </div>

              <div
                className={`badge rounded-2xl p-2 
                        ${friend.status === "overdue" && "bg-red-500 text-white"}
                        ${friend.status === "almost due" && "bg-yellow-500 text-white"}
                        ${friend.status === "on-track" && "bg-green-900 text-white"}
                    `}
              >
                {friend.status}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
