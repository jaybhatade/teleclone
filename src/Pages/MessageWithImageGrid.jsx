import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function MessageWithImageGrid({ messageData }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track the image to show in full screen

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image for full screen
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setSelectedImage(null); // Reset the selected image
  };

  return (
    <div className="relative w-full">
      {/* Message Block */}
      <div className="flex items-end justify-start mb-4">
        <div className="h-10 w-10 rounded-full mr-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">A</span>
        </div>
        <div className="max-w-[77%] rounded-lg p-2 bg-zinc-800">
          <p className="font-bold text-orange-400">{messageData.sender}</p>

          {/* Image Grid (Up to 4 Images) */}
          {messageData.images && messageData.images.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {messageData.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="h-32 w-32 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`message ${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="text-xs mt-0 w-full justify-end flex text-gray-400">
            {messageData.time}
          </div>
        </div>
      </div>

      {/* Full-Screen Image Overlay */}
      {isFullScreen && selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center p-5 z-50">
          <IoCloseSharp
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={handleCloseFullScreen}
          />
          <div className="max-w-full max-h-full bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="full screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
