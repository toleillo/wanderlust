import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GLOBAL_CSS } from "@styles";
import { Header, Footer } from "@components/layout";
import { HomeView } from "./views/HomeView.jsx";
import { CookieBanner } from "@components/ui";
import { usePageTracking } from "@hooks";

const DetailView      = lazy(() => import("./views/DetailView.jsx").then(m => ({ default: m.DetailView })));
const GuideView       = lazy(() => import("./views/GuideView.jsx").then(m => ({ default: m.GuideView })));
const EventsView      = lazy(() => import("./views/EventsView.jsx").then(m => ({ default: m.EventsView })));
const EventDetailView = lazy(() => import("./views/EventDetailView.jsx").then(m => ({ default: m.EventDetailView })));
const ToolkitView     = lazy(() => import("./views/ToolkitView.jsx").then(m => ({ default: m.ToolkitView })));
const LegalView       = lazy(() => import("./views/LegalView.jsx").then(m => ({ default: m.LegalView })));

const PageLoader = () => (
  <div style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", color: "#B8860B", letterSpacing: "0.08em" }}>
      ···
    </span>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(err) { return { error: err }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "40px", color: "#e84040", fontFamily: "monospace",
                      background: "#0e0c09", minHeight: "100vh" }}>
          <h2 style={{ color: "#e84040" }}>Runtime Error</h2>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.85rem" }}>
            {this.state.error.toString()}
            {"\n\n"}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  usePageTracking();
  return (
    <ErrorBoundary>
      <div style={{ minHeight: "100vh", background: "#FAFAF7", color: "#1A1A18" }}>
        <style>{GLOBAL_CSS}</style>
        <Header />
        <main style={{ maxWidth: "1140px", margin: "0 auto", padding: "36px 22px 80px" }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"                  element={<HomeView />} />
              <Route path="/en"                element={<HomeView />} />
              <Route path="/guia/:slug"        element={<GuideView />} />
              <Route path="/en/guide/:slug"    element={<GuideView />} />
              <Route path="/eventos"           element={<EventsView />} />
              <Route path="/en/events"         element={<EventsView />} />
              <Route path="/evento/:slug"      element={<EventDetailView />} />
              <Route path="/en/event/:slug"    element={<EventDetailView />} />
              <Route path="/privacidad"        element={<LegalView page="privacy" />} />
              <Route path="/cookies"           element={<LegalView page="cookies" />} />
              <Route path="/en/privacy"        element={<LegalView page="privacy" />} />
              <Route path="/en/cookies-policy" element={<LegalView page="cookies" />} />
              <Route path="/toolkit"           element={<ToolkitView />} />
              <Route path="/en/toolkit"        element={<ToolkitView />} />
              <Route path="/:slug"             element={<DetailView />} />
              <Route path="/en/:slug"          element={<DetailView />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
}
