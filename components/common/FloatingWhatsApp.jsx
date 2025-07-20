"use client";

import { getPhone } from "@/actions/main";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";

export default function FloatingWhatsApp({
  message = "Hello! I'm interested in your products",
  position = "bottom-right",
}) {
  const locale = useLocale();

  const { data: phones, isLoading: phoneLoading } = useQuery({
    queryKey: ["phones"],
    queryFn: getPhone,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const phoneNumber = phones?.[0]?.mobile;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(
      locale === "ar" ? "مرحبا! أنا مهتم بمنتجاتكم" : message
    );
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const getPositionClasses = () => {
    const isRTL = locale === "ar";

    switch (position) {
      case "bottom-left":
        return isRTL ? "bottom-0 end-0" : "bottom-0 start-0";
      case "bottom-right":
      default:
        return isRTL ? "bottom-0 start-0" : "bottom-0 end-0";
    }
  };

  return (
    <div
      className={`position-fixed ${getPositionClasses()}`}
      style={{
        marginBottom: "100px",
        marginRight: "40px",
        zIndex: 1050,
        // animation: "float 3s ease-in-out infinite",
      }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "var(--whatsapp-cl, #25D366)",
          border: "none",
          transition: "all 0.3s ease",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        }}
        aria-label={
          locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"
        }
        title={locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
      >
        <i className="icon-whatsapp text-white" style={{ fontSize: "20px" }} />
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
