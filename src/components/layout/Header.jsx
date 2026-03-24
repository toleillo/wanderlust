import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { ARTICLES } from "@data";
import { useLocale } from "@i18n";

export const Header = () => {
  const { lang, t } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const home = lang === "en" ? "/en" : "/";
  const isHome   = location.pathname === "/" || location.pathname === "/en";
  const isEvents = location.pathname === "/eventos" || location.pathname === "/en/events";
  const isGuide  = location.pathname.includes("/guia/") || location.pathname.includes("/guide/");
  const isToolkit = location.pathname === "/toolkit" || location.pathname === "/en/toolkit";

  const getAltUrl = () => {
    const path = location.pathname;
    if (lang === "en") {
      if (path === "/en/events") return "/eventos";
      if (path === "/en/toolkit") return "/toolkit";
      if (path.startsWith("/en/event/")) return path.replace(/^\/en\/event\//, "/evento/");
      const slug = path.replace(/^\/en\/?/, "");
      if (!slug) return "/";
      const article = ARTICLES.find((a) => a.enSlug === slug);
      if (article) return `/${article.slug}`;
      const guideSlug = path.replace(/^\/en\/guide\//, "");
      return guideSlug ? `/guia/${guideSlug}` : "/";
    } else {
      if (path === "/eventos") return "/en/events";
      if (path.startsWith("/evento/")) return path.replace(/^\/evento\//, "/en/event/");
      const slug = path.replace(/^\//, "");
      if (!slug) return "/en";
      const article = ARTICLES.find((a) => a.slug === slug);
      if (article) return `/en/${article.enSlug}`;
      const guideSlug = path.replace(/^\/guia\//, "");
      return guideSlug ? `/en/guide/${guideSlug}` : "/en";
    }
  };

  const scrollToGuides = () => {
    const el = document.getElementById("guides-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const eventsPath = lang === "en" ? "/en/events" : "/eventos";
  const toolkitPath = lang === "en" ? "/en/toolkit" : "/toolkit";
  const guidesHref = lang === "en" ? "/en#guides-section" : "/#guides-section";

  const handleNav = (key) => {
    setMenuOpen(false);
    if (key === "events") {
      navigate(eventsPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "toolkit") {
      navigate(toolkitPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "guides") {
      if (isHome) {
        scrollToGuides();
      } else {
        navigate(home, { state: { scrollTo: "guides" } });
      }
    } else {
      navigate(home);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { key: "destinations", label: t("nav_destinations"), active: isHome,   href: home },
    { key: "toolkit",      label: lang === "en" ? "Toolkit" : "Recursos",  active: isToolkit, href: toolkitPath },
    { key: "events",       label: t("nav_events"),       active: isEvents,  href: eventsPath },
    { key: "guides",       label: t("nav_guides"),       active: isGuide,   href: guidesHref },
  ];

  const NavLink = ({ item, mobile }) => (
    <a
      href={item.href}
      onClick={(e) => { e.preventDefault(); handleNav(item.key); }}
      style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: mobile ? "1.05rem" : "0.82rem",
        color: item.active ? "#d4a853" : (mobile ? "#c4b89a" : "#5e5648"),
        background: "none", border: "none", cursor: "pointer",
        fontWeight: item.active ? 700 : 500,
        padding: mobile ? "14px 0" : "4px 0",
        borderBottom: mobile ? "1px solid #1e1c18" : "none",
        width: mobile ? "100%" : "auto",
        textAlign: mobile ? "left" : "center",
        transition: "color 0.15s",
        display: "flex", alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        ...(item.active && !mobile ? { borderBottom: "1px solid #d4a853", paddingBottom: "3px" } : {}),
      }}
    >
      {item.label}
    </a>
  );

  return (
    <>
      <header style={{
        borderBottom: "1px solid #1a1714", padding: "0 22px",
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(14,12,9,0.95)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
      }}>
        <div style={{
          maxWidth: "1140px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: "66px",
        }}>
          {/* Logo */}
          <a
            href={home}
            onClick={(e) => { e.preventDefault(); navigate(home); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: "9px", cursor: "pointer", textDecoration: "none" }}
          >
            <I.Globe />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 700, color: "#e8e0d4", letterSpacing: "-0.03em" }}>
              ElTechoEncima
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="header-nav">
            {navItems.map((item) => <NavLink key={item.key} item={item} mobile={false} />)}
            <a
              href={getAltUrl()}
              onClick={(e) => { e.preventDefault(); navigate(getAltUrl()); }}
              style={{
                fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#8a7e6b", background: "rgba(255,255,255,0.04)",
                border: "1px solid #2a2520", borderRadius: "6px",
                padding: "5px 11px", cursor: "pointer", transition: "all 0.15s",
                marginLeft: "8px", textDecoration: "none",
              }}
            >
              {t("lang_switch")}
            </a>
          </nav>

          {/* Mobile: lang + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href={getAltUrl()}
              onClick={(e) => { e.preventDefault(); navigate(getAltUrl()); }}
              className="header-hamburger"
              style={{
                fontFamily: "'Source Serif 4', serif", fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                color: "#8a7e6b", background: "rgba(255,255,255,0.04)",
                border: "1px solid #2a2520", borderRadius: "6px",
                padding: "5px 10px", cursor: "pointer", textDecoration: "none",
              }}
            >
              {t("lang_switch")}
            </a>
            <button
              className="header-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menú"
            >
              {menuOpen ? <I.Close /> : <I.Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: "66px 0 0 0", zIndex: 99,
            background: "rgba(10,9,7,0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            display: "flex", flexDirection: "column",
            padding: "8px 22px 32px",
            animation: "fadeSlideUp 0.18s ease",
          }}
        >
          {navItems.map((item) => <NavLink key={item.key} item={item} mobile={true} />)}
        </div>
      )}
    </>
  );
};
