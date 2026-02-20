import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923138368689"; // Format: country code without + followed by number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:bg-green-600 text-white p-0.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <img className="w-[58px] hover:rotate-12" src="https://static.vecteezy.com/system/resources/previews/016/716/468/original/whatsapp-icon-free-png.png" />
    </a>
  );
};
export default WhatsAppButton;

