import { useState, useEffect, useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FiPaperclip } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { TbSticker2 } from "react-icons/tb";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Demochat() {
  const [message, setMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const messagesEndRef = useRef(null); // Ref for the last message
  const navigate = useNavigate();
  const location = useLocation(); // Use location to get the URL path

  // Extract contact name from the URL
  const contactName = location.pathname.split("/").pop().replace(/%20/g, " ");

  const handleSend = () => {
    if (message.trim()) {
      setMessage(""); // Clear the input field after sending
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const gradients = [
    "bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300",
    "bg-gradient-to-r from-red-300 via-red-400 to-red-400",
    "bg-gradient-to-r from-green-300 via-green-400 to-teal-300",
    "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-500",
  ];

  const getGradientByIndex = (index) => {
    return gradients[index % gradients.length];
  };

  // Scroll to bottom when component loads
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="mx-auto w-full text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/bg_black.png')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fix the background
      }}
    >
      {/* Header */}
      <header className={`w-full px-4 py-2 flex items-center fixed top-0 backdrop-blur-md ${
          isDarkMode ? "bg-zinc-900/90 text-white" : "bg-blue-500 text-white"
        }`}>
        <Link to="#" onClick={() => navigate(-1)}>
          <FaArrowLeft className="h-5 w-5 mr-4 cursor-pointer" />
        </Link>
        <div className={`h-10 w-10 mr-4 rounded-full flex items-center justify-center text-white text-xl font-bold ${getGradientByIndex(0)}`}>
          {contactName?.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{contactName}</h1>
          <p className="text-sm opacity-80">online</p>
        </div>
        <BsThreeDotsVertical className="h-5 w-5 cursor-pointer" />
      </header>

      {/* Placeholder div for month */}
      <div className="w-full flex justify-center items-center mt-20">
        <div className="text-center text-sm text-white bg-zinc-900/60 rounded-lg w-fit p-2 mb-4">
          {contactName} Joined Telegram!
        </div>
      </div>

      {/* Empty div to scroll to */}
      <div ref={messagesEndRef} className="flex-1" />

      {/* Message Input */}
      <div className={`w-full px-4 py-2 flex items-center fixed bottom-0 backdrop-blur-xl ${
          isDarkMode ? "bg-zinc-900 text-white" : "bg-blue-500 text-white"
        }`}>
        <TbSticker2 className="h-[26px] w-[26px] text-gray-500 cursor-pointer" />
        <input
          type="text"
          className={`flex-1 mx-2 p-2 rounded-lg ${isDarkMode ? "bg-zinc-700 text-white" : "bg-white text-black"}`}
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <FiPaperclip className="h-5 w-5 text-gray-500 cursor-pointer" />
        <button
          onClick={handleSend}
          className="ml-2 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <PiPaperPlaneRightFill className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
