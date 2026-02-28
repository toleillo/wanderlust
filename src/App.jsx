import React from "react";
import { Routes, Route } from "react-router-dom";
import { GLOBAL_CSS } from "@styles";
import { Header, Footer } from "@components/layout";
import { HomeView } from "./views/HomeView.jsx";
import { DetailView } from "./views/DetailView.jsx";
import { GuideView } from "./views/GuideView.jsx";
import { LegalView } from "./views/LegalView.jsx";
import { CookieBanner } from "@components/ui";
import { usePageTracking } from "@hooks";

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
      <div style={{ minHeight: "100vh", background: "#0e0c09", color: "#e8e0d4" }}>
        <style>{GLOBAL_CSS}</style>
        <Header />
        <main style={{ maxWidth: "1140px", margin: "0 auto", padding: "36px 22px 80px" }}>
          <Routes>
            <Route path="/"                  element={<HomeView />} />
            <Route path="/en"                element={<HomeView />} />
            <Route path="/guia/:slug"        element={<GuideView />} />
            <Route path="/en/guide/:slug"    element={<GuideView />} />
            <Route path="/privacidad"        element={<LegalView page="privacy" />} />
            <Route path="/cookies"           element={<LegalView page="cookies" />} />
            <Route path="/en/privacy"        element={<LegalView page="privacy" />} />
            <Route path="/en/cookies-policy" element={<LegalView page="cookies" />} />
            <Route path="/:slug"             element={<DetailView />} />
            <Route path="/en/:slug"          element={<DetailView />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
}
