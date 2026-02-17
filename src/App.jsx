import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ThreatFeed from "./components/ThreatFeed";

import InputPanel from "./components/InputPanel";
import UrlAnalyzer from "./components/UrlAnalyzer";
import FileUpload from "./components/FileUpload";
import DragDropUpload from "./components/DragDropUpload";
import CredentialDetector from "./components/CredentialDetector";
import PromptInjectionTester from "./components/PromptInjectionTester";
import VoiceAnalyzer from "./components/VoiceAnalyzer";
import AutoBattle from "./components/AutoBattle";
import DefensePanel from "./components/DefensePanel";
import ExplainDrawer from "./components/ExplainDrawer";
import AboutUs from "./components/AboutUs";

export default function App() {

  const [active, setActive] = useState("Text");
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("");
  const [logs, setLogs] = useState([]);
  const [risk, setRisk] = useState(0);
  const [explanation, setExplanation] = useState([]);

  // 🔥 Backend-connected analyze function
  const analyze = async (text) => {
    try {
      const response = await fetch("https://aegis-x-backend-1.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      setContent(text);
      setRisk(data.risk);
      setExplanation(data.explanation);

      setLogs((prev) => [
        `Risk: ${data.risk}`,
        ...prev,
      ]);

    } catch (error) {
      console.error("Backend error:", error);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      <Sidebar
        active={active}
        setActive={setActive}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopBar />

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "20px",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <ThreatFeed logs={logs} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >

              {active === "Text" && (
                <>
                  <InputPanel onAnalyze={analyze} />
                  <DefensePanel
                    content={content}
                    risk={risk}
                    explanation={explanation}
                  />
                  <CredentialDetector content={content} />
                  <ExplainDrawer text={content} />
                </>
              )}

              {active === "URL" && (
                <>
                  <UrlAnalyzer onAnalyze={analyze} />
                  <DefensePanel
                    content={content}
                    risk={risk}
                    explanation={explanation}
                  />
                  <ExplainDrawer text={content} />
                </>
              )}

              {active === "Files" && (
                <>
                  <FileUpload onLoad={analyze} />
                  <DragDropUpload onLoad={analyze} />
                  <DefensePanel
                    content={content}
                    risk={risk}
                    explanation={explanation}
                  />
                  <ExplainDrawer text={content} />
                </>
              )}

              {active === "Prompt" && (
                <PromptInjectionTester />
              )}

              {active === "Voice" && (
                <VoiceAnalyzer />
              )}

              {active === "Auto" && (
                <AutoBattle onAttack={analyze} />
              )}

              {active === "About" && (
                <AboutUs />
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
