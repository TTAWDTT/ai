import { useEffect, useMemo, useState } from "react";
import { backgrounds } from "./data/backgrounds";
import { type FateFormValue, FateForm } from "./components/FateForm";
import { DrawCard } from "./components/DrawCard";
import { RejectionView } from "./components/RejectionView";
import { ResultView, type ResultStage } from "./components/ResultView";
import { SakuraFall } from "./components/SakuraFall";
import { AudioPlayer } from "./components/AudioPlayer";
import { assetPath } from "./lib/assetPath";
import { drawFate, type DrawResult } from "./lib/draw";
import { songs } from "./data/songs";
import "./styles.css";

type AppStage = "form" | "rejected" | "drawing" | "result";

function getInitialBackground() {
  const index = new Date().getDate() % backgrounds.length;
  return backgrounds[index];
}

export default function App() {
  const [appStage, setAppStage] = useState<AppStage>("form");
  const [resultStage, setResultStage] = useState<ResultStage>("card");
  const [result, setResult] = useState<DrawResult | null>(null);
  const [activeSong] = useState(() => songs[new Date().getDate() % songs.length]);
  const [playSignal, setPlaySignal] = useState(0);

  const currentBackground = result?.background ?? getInitialBackground();
  const sakuraIntensity = appStage === "drawing" ? "fast" : resultStage === "openLetter" ? "slow" : "normal";

  useEffect(() => {
    const resumeMusic = () => setPlaySignal((value) => value + 1);
    window.addEventListener("pointerdown", resumeMusic, { once: true });
    window.addEventListener("touchstart", resumeMusic, { once: true });
    return () => {
      window.removeEventListener("pointerdown", resumeMusic);
      window.removeEventListener("touchstart", resumeMusic);
    };
  }, []);

  const appClassName = useMemo(
    () => [
      "app",
      `app--${appStage}`,
      resultStage === "openLetter" ? "app--letter-open" : "",
      currentBackground.tone === "dark" ? "app--dark-bg" : "",
    ].filter(Boolean).join(" "),
    [appStage, currentBackground.tone, resultStage],
  );

  function startDraw(value: FateFormValue) {
    if (!value.isSingle) {
      setResult(null);
      setAppStage("rejected");
      return;
    }

    setAppStage("drawing");
    setResultStage("card");

    window.setTimeout(() => {
      setResult(drawFate({ name: value.name, gender: value.gender, birthday: value.birthday }));
      setAppStage("result");
    }, 2150);
  }

  function reset() {
    setResult(null);
    setResultStage("card");
    setAppStage("form");
  }

  return (
    <main
      className={appClassName}
      style={
        {
          "--app-bg": `url("${assetPath(currentBackground.src)}")`,
        } as React.CSSProperties
      }
    >
      <div className="background-layer" />
      <SakuraFall intensity={sakuraIntensity} />
      <AudioPlayer song={activeSong} autoPlay playSignal={playSignal} />
      <div className="app-content">
        {appStage === "form" ? <FateForm onSubmit={startDraw} /> : null}
        {appStage === "rejected" ? <RejectionView onReset={reset} /> : null}
        {appStage === "drawing" ? <DrawCard /> : null}
        {appStage === "result" && result ? (
          <ResultView
            result={result}
            stage={resultStage}
            onStageChange={setResultStage}
            onCloseLetter={() => setResultStage("sealedLetter")}
          />
        ) : null}
      </div>
    </main>
  );
}
