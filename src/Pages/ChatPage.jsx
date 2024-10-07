import { useState, useEffect, useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FiPaperclip } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TbSticker2 } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dayjs from "dayjs"; // Use dayjs for date formatting

export default function TelegramChatView() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Tomorrow batch 1 Python prac at 9.15 in lab 3 (318)", sent: false, time: "9:26 AM", date: new Date(2024, 8, 16), sender: "Avinash"},
    { id: 2, text: "Tomorrow batch 2 having DS practical at 9.15 in lab2(318)", sent: false, time: "11:48 AM", date: new Date(2024, 8, 16), sender: "Avinash" },
    { id: 3, text: "Tomorrow batch 3 having DS practical at 9.15 in jr.lab", sent: false, time: "11:50 AM", date: new Date(2024, 8, 16), sender: "Avinash" },
    { id: 4, text: "As scheduled by the teacher, Fyds students report straight for their practical.", sent: false, time: "11:50 AM", date: new Date(2024, 8, 16), sender: "Avinash" },
    { id: 5, text: "Batch 3 come in jr lab room no. 320", sent: false, time: "9:11 AM", date: new Date(2024, 8, 17), sender: "Avinash" },
    { id: 6, text: "As Rohan sir has mentioned about the presentation this msg is for the ones who are not aware Y'all have to make a grp of 4 (by choice) And present your topic", sent: false, time: "9:30 AM", date: new Date(2024, 8, 17), sender: "Avinash" },
    { id: 7, text: "Tommrow  after lecture stay in class i will come for  i card distribution", sent: false, time: "12:46 PM", date: new Date(2024, 8, 18), sender: "Avinash" },
    { id: 8, text: "Come in 328", sent: false, time: "9:11 AM", date: new Date(2024, 8, 19), sender: "Avinash" },
    { id: 9, text: "https://forms.gle/dSVEAwkTEzGDABD 19", sent: false, time: "10:18 AM", date: new Date(2024, 8, 19), sender: "Avinash" },
    { id: 9, text: "Mathmatics bridge course link above", sent: false, time: "10:18 AM", date: new Date(2024, 8, 19), sender: "Avinash" },
    { id: 10, text: "Student . come in 726", sent: false, time: "8:15 AM", date: new Date(2024, 8, 20), sender: "Avinash" },
    { id: 12, text: "Students will have tomorrow off since all staff members will be attending meetings with higher authorities. So tomorrow is no college.", sent: false, time: "9:15 PM", date: new Date(2024, 8, 20), sender: "Avinash" },
    { id: 13, text: "On monday fyds python batch 2 practical at 9.15am", sent: false, time: "2:20 PM", date: new Date(2024, 8, 21), sender: "Avinash" },
    { id: 14, text: "On monday fyds python batch 3 practical at 9.15am", sent: false, time: "10:10 AM", date: new Date(2024, 8, 22), sender: "Avinash" },
    { id: 15, text: "", sent: false, time: "11:50 AM", date: new Date(2024, 8, 2), sender: "Avinash" },
    { id: 16, text: "", sent: false, time: "11:50 AM", date: new Date(2024, 8, 2), sender: "Avinash" },
    { id: 17, text: "", sent: false, time: "11:50 AM", date: new Date(2024, 8, 2), sender: "Avinash" },

  ]);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const messagesEndRef = useRef(null); // Ref for the last message

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
        id: messages.length + 1,
        text: message,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date(),
        sender: "You",
        avatar: "", // Replace with your avatar if needed
      };

      setMessages([...messages, newMessage]);
      setMessage("");
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

  // Scroll to bottom when the component loads or new messages are sent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to check if the day has changed between messages
  const checkDayChange = (currentMessage, previousMessage) => {
    if (!previousMessage) return true; // Always show date for the first message
    return dayjs(currentMessage.date).format('YYYY-MM-DD') !== dayjs(previousMessage.date).format('YYYY-MM-DD');
  };

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
          {contact.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{contact.name}</h1>
          <p className="text-sm opacity-80">{contact.status}</p>
        </div>
        <BsThreeDotsVertical className="h-5 w-5 cursor-pointer" />
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 pt-[70px] pb-[50px] space-y-4">
        {messages.map((msg, index) => {
          const previousMessage = messages[index - 1];
          const showDate = checkDayChange(msg, previousMessage);
          
          return (
            <div key={msg.id}>
              {showDate && (
                <div className="w-full flex justify-center items-center">
                <div className="text-center text-sm text-white bg-zinc-900/60 rounded-lg w-fit p-2 mb-4">
                  {dayjs(msg.date).format("MMMM D, YYYY")}
                </div>
                </div>
              )}
              <div className={`flex items-end ${msg.sent ? "justify-end" : "justify-start"}`}>
                {!msg.sent && (
                  <div className={`h-10 w-10 rounded-full mr-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center`}>
                    <span className="text-2xl font-semibold text-white ">A</span>
                  </div>
                )}
                <div className={`max-w-[77%] rounded-lg p-2 ${msg.sent ? "bg-blue-500 text-white" : "bg-zinc-800"}`}>
                  <p className="font-bold text-orange-400">{msg.sender}</p>
                  <p>{msg.text}</p>
                  <div className={`text-xs mt-0 w-full justify-end flex ${msg.sent ? "text-blue-100" : "text-gray-400"}`}>
                    {msg.time}
                    {msg.sent && <IoCheckmarkDoneSharp className="h-4 ml-1" />}
                  </div>
                </div>
                {msg.sent && (
                  <img src={msg.avatar || "https://via.placeholder.com/32"} alt={msg.sender} className="h-8 w-8 rounded-full ml-2" />
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} /> {/* Empty div to scroll to */}
      </div>

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
