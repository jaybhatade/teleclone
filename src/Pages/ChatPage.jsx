import { useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FiPaperclip } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TbSticker2 } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TelegramChatView() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sent: false, time: "10:00 AM" },
    { id: 2, text: "Hi! How are you?", sent: true, time: "10:01 AM" },
    { id: 3, text: "I'm good, thanks! How about you?", sent: false, time: "10:02 AM" },
    { id: 4, text: "I'm doing well too. Did you see the new movie that came out last week?", sent: true, time: "10:03 AM" },
    { id: 5, text: "No, I haven't had the chance yet. Is it good?", sent: false, time: "10:05 AM" },
    { id: 6, text: "Yes, it's amazing! We should go watch it together sometime.", sent: true, time: "10:06 AM" },
    { id: 7, text: "That sounds great! Let's plan for next weekend.", sent: false, time: "10:08 AM" },
    { id: 1, text: "Hey there!", sent: false, time: "10:00 AM" },
    { id: 2, text: "Hi! How are you?", sent: true, time: "10:01 AM" },
    { id: 3, text: "I'm good, thanks! How about you?", sent: false, time: "10:02 AM" },
    { id: 4, text: "I'm doing well too. Did you see the new movie that came out last week?", sent: true, time: "10:03 AM" },
    { id: 5, text: "No, I haven't had the chance yet. Is it good?", sent: false, time: "10:05 AM" },
    { id: 6, text: "Yes, it's amazing! We should go watch it together sometime.", sent: true, time: "10:06 AM" },
    { id: 7, text: "That sounds great! Let's plan for next weekend.", sent: false, time: "10:08 AM" },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const contact = {
    name: "FYDS(23-24)",
    status: "online",
    avatar: "https://jaybhatade.carrd.co/assets/images/image01.jpg?v=a1bd9279",
  };

  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1, // Generate a new ID
        text: message,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time
      };

      setMessages([...messages, newMessage]); // Update messages state
      setMessage(""); // Clear input
    }
  };

  const gradients = [
    "bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300",
    "bg-gradient-to-r from-red-300 via-red-400 to-red-400",
    "bg-gradient-to-r from-green-300 via-green-400 to-teal-300",
    "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-500",
  ];

  const getGradientByIndex = (index) => {
    return gradients[index % gradients.length];
  };

  return (
    <div
      className="mx-auto w-full text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/public/bg_black.png')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className={`w-full px-4 py-2 flex items-center fixed top-0 backdrop-blur-xl ${
          isDarkMode ? "bg-zinc-700/80 text-white" : "bg-blue-500 text-white"
        }`}>
        <Link to="#" onClick={() => navigate(-1)}>
          <FaArrowLeft className="h-5 w-5 mr-4 cursor-pointer" />
        </Link>
        <div className={`h-10 w-10 mr-4 rounded-full flex items-center justify-center text-white text-xl font-bold ${getGradientByIndex(0)}`}>
          {contact.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{contact.name}</h1>
          <p className="text-sm opacity-80">{contact.status}</p>
        </div>
        
        <BsThreeDotsVertical className="h-5 w-5 cursor-pointer" />
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 py-[70px] space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${msg.sent ? "bg-blue-500 text-white" : "bg-zinc-800"}`}>
              <p>{msg.text}</p>
              <div className={`text-xs mt-1 w-full justify-end flex ${msg.sent ? "text-blue-100" : "text-gray-400"}`}>
                {msg.time}<IoCheckmarkDoneSharp className="h-4"/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className={`w-full px-4 py-2 flex items-center fixed bottom-0 backdrop-blur-xl ${
          isDarkMode ? "bg-zinc-900 text-white" : "bg-blue-500 text-white"
        }`}>
        <TbSticker2 className="h-[26px] w-[26px] text-gray-500 cursor-pointer" />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-zinc-900 rounded-lg p-2 text-white focus:outline-none "
        />
        {message.trim() ? (
          <button onClick={handleSend} className="p-2 rounded-full text-white">
            <PiPaperPlaneRightFill className="h-6 w-6 text-blue-500 " />
          </button>
        ) : (
          <button className="p-2 rounded-full text-gray-500">
            <FiPaperclip className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
