import { useState } from "react";
import { COLORS, FONTS } from "@styles";
import { useLocale } from "@i18n";

export const Newsletter = ({ compact }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const { t, lang } = useLocale();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const labels = {
    title: t("newsletter_title"),
    sub: t("newsletter_sub"),
    placeholder: t("newsletter_placeholder"),
    btn: t("newsletter_btn"),
    successTitle: t("newsletter_success_title"),
    successSub: t("newsletter_success_sub"),
  };

  if (status === "success") {
    return (
      <div style={{
        background: "linear-gradient(135deg, rgba(58,106,58,0.1), rgba(212,168,83,0.05))",
        border: `1px solid ${COLORS.greenBg}`,
        borderRadius: "14px",
        padding: compact ? "20px" : "40px",
        textAlign: "center",
        animation: "fadeIn 0.4s ease"
      }}>
        <div style={{ fontSize: "2rem", marginBottom: "12px" }}>✉️</div>
        <h3 style={{ fontFamily: FONTS.serif, color: COLORS.text, margin: "0 0 8px 0" }}>{labels.successTitle}</h3>
        <p style={{ fontFamily: FONTS.sans, color: COLORS.textMuted, fontSize: "0.85rem", margin: 0 }}>{labels.successSub}</p>
      </div>
    );
  }

  return (
    <div style={{
      background: COLORS.bgCardAlt,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: compact ? "24px" : "48px 32px",
      textAlign: compact ? "left" : "center",
      margin: "40px 0",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.03, fontSize: "120px", pointerEvents: "none" }}>✈️</div>

      {!compact && (
        <p style={{
          fontFamily: FONTS.sans,
          fontSize: "0.65rem",
          fontWeight: 700,
          color: COLORS.gold,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: "12px"
        }}>
          Newsletter
        </p>
      )}
      
      <h3 style={{
        fontFamily: FONTS.serif,
        fontSize: compact ? "1.4rem" : "2rem",
        color: COLORS.text,
        marginBottom: "10px",
        fontWeight: 600
      }}>
        {labels.title}
      </h3>
      
      <p style={{
        fontFamily: FONTS.sans,
        color: COLORS.textMuted,
        fontSize: compact ? "0.82rem" : "0.95rem",
        maxWidth: "480px",
        margin: compact ? "0 0 20px 0" : "0 auto 28px",
        lineHeight: 1.6
      }}>
        {labels.sub}
      </p>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: compact ? "column" : "row",
        gap: "10px",
        maxWidth: "460px",
        margin: compact ? "0" : "0 auto"
      }}>
        <input
          type="email"
          required
          placeholder={labels.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            background: COLORS.bgInput,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "8px",
            padding: "12px 16px",
            color: COLORS.text,
            fontFamily: FONTS.sans,
            fontSize: "0.88rem",
            outline: "none",
            transition: "border-color 0.2s"
          }}
          onFocus={(e) => e.target.style.borderColor = COLORS.goldBorder}
          onBlur={(e) => e.target.style.borderColor = COLORS.border}
        />
        <button
          disabled={status === "loading"}
          style={{
            background: COLORS.gold,
            color: COLORS.bg,
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontFamily: FONTS.sans,
            fontSize: "0.88rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "transform 0.15s, opacity 0.15s",
            whiteSpace: "nowrap"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
          onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          {status === "loading" ? "..." : labels.btn}
        </button>
      </form>

      {status === "error" && (
        <p style={{
          marginTop: "12px",
          fontFamily: FONTS.sans,
          fontSize: "0.82rem",
          color: "#8B2500",
        }}>
          {lang === "en"
            ? "Something went wrong. Please try again."
            : "Algo ha fallado. Por favor, inténtalo de nuevo."}
        </p>
      )}

      {!compact && (
        <p style={{
          marginTop: "20px",
          fontFamily: FONTS.sans,
          fontSize: "0.7rem",
          color: COLORS.textVeryFaint
        }}>
          {t("newsletter_no_spam")}
        </p>
      )}
    </div>
  );
};
