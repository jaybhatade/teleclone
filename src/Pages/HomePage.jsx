import {Link} from 'react-router-dom'; // Chat List
import { MdEdit } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

export default function TelegramUI() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const chats = [
    {
      id: 1,
      name: "FYDS(24-25)",
      lastMessage: "Tomorrow come to college",
      time: "12:30 PM",
      unread: 2,
    },
    {
      id: 2,
      name: "Krrish",
      lastMessage: "See you tomorrow!",
      time: "11:45 AM",
      unread: 0,
    },
    {
      id: 3,
      name: "Work Group",
      lastMessage: "Alice: The meeting is at 3 PM",
      time: "10:20 AM",
      unread: 5,
    },
    {
      id: 4,
      name: "Family",
      lastMessage: "Mom: Don't forget to call grandma",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 5,
      name: "Best Friends",
      lastMessage: "Tom: Who's up for pizza tonight?",
      time: "Yesterday",
      unread: 1,
    },
  ];

  // Array of light gradients for the avatars
  const gradients = [
    "bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300",
    "bg-gradient-to-r from-red-300 via-red-400 to-red-400",
    "bg-gradient-to-r from-green-300 via-green-400 to-teal-300",
    "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-500",
  ];

  // Function to get the gradient in order based on chat index
  const getGradientByIndex = (index) => {
    return gradients[index % gradients.length];
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-gray-100"
      }  mx-auto min-h-screen flex flex-col`}
    >
      {/* Header */}
      <header
        className={`p-4 w-full flex justify-between items-center fixed top-0 backdrop-blur-xl ${
          isDarkMode ? "bg-zinc-700/80 text-white" : "bg-blue-500 text-white"
        }`}
      >
        <div className="flex items-center">
          <FaBars className="h-5 w-5 mr-4 cursor-pointer" />
          <h1 className="text-xl font-semibold">Telegram</h1>
        </div>
        <div className="flex items-center">
          <MdSearch className="h-6 w-6 cursor-pointer" />
          {/* <button onClick={toggleTheme} className="text-sm border border-white rounded px-2 py-1">
            {isDarkMode ? 'Light' : 'Dark'}
          </button> */}
        </div>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div className="h-14 bg-black"></div>
        {chats.map((chat, index) => (
          <Link
            to={`/xyz/${chat.id}`}
            key={chat.id}
            className={`flex items-center p-4 border-b ${
              isDarkMode
                ? "border-black bg-[#141414] hover:bg-zinc-900"
                : "border-gray-200 bg-white"
            } `}
          >
            {/* Avatar with Gradient based on Index */}
            <div
              className={`h-12 w-12 mr-4 rounded-full flex items-center justify-center text-white text-xl font-bold ${getGradientByIndex(
                index
              )}`}
            >
              {chat.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <h2
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {chat.name}
                </h2>
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {chat.time}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } truncate`}
                >
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[3.8rem] h-[3.8rem] bg-blue-400 flex text-center justify-center items-center rounded-full fixed bottom-5 right-5">
        <MdEdit className="text-white h-6 w-6" />
      </div>
    </div>
  );
}
