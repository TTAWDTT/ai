import { MailOpen, ScrollText, X } from "lucide-react";
import { type DrawResult } from "../lib/draw";
import { CardSymbol } from "../lib/icons";

export type ResultStage = "card" | "sealedLetter" | "openLetter";

type ResultViewProps = {
  result: DrawResult;
  stage: ResultStage;
  onStageChange: (stage: ResultStage) => void;
  onCloseLetter: () => void;
};

export function ResultView({ result, stage, onStageChange, onCloseLetter }: ResultViewProps) {
  const isLetterOpen = stage === "openLetter";

  return (
    <section className={`result-view result-view--${stage}`}>
      <div className="result-content">
        <article className={`fate-card-display card-palette-${result.card.palette}`}>
          <div className="card-corners" aria-hidden="true" />
          <p className="card-badge">{result.card.subtitle}</p>
          <h2>{result.card.title}</h2>
          <div className="card-illustration">
            <CardSymbol symbol={result.card.symbol} />
          </div>
          <div className="card-copy">
            <p className="copy-label">命运判词</p>
            <p>“{result.verdict}”</p>
          </div>
        </article>

        {stage !== "card" ? (
          <button
            className={`sealed-envelope ${isLetterOpen ? "sealed-envelope--open" : ""}`}
            type="button"
            onClick={() => onStageChange(isLetterOpen ? "sealedLetter" : "openLetter")}
            aria-label={isLetterOpen ? "收起情书" : "拆开今日情书"}
          >
            <span className="envelope-flap" />
            <span className="envelope-body" />
            <span className="wax-seal" />
            <span className="envelope-flower" aria-hidden="true">
              ✿
            </span>
          </button>
        ) : null}
      </div>

      {isLetterOpen ? (
        <article className="letter-paper" aria-live="polite">
          <button
            className="letter-close"
            type="button"
            onClick={onCloseLetter}
            aria-label="收起情书"
          >
            <X size={14} aria-hidden="true" />
          </button>
          <p className="letter-eyebrow">致你的一封信</p>
          <h2>{result.letter.title}</h2>
          <div className="letter-body">
            {result.letter.body.map((paragraph, index) => (
              <p key={paragraph} style={{ animationDelay: `${180 + index * 120}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>
          <p className="letter-signature">-- {result.letter.signature}</p>
        </article>
      ) : null}

      {stage === "card" ? (
        <div className="action-bar action-bar--single">
          <button className="primary-button primary-button--compact" type="button" onClick={() => onStageChange("sealedLetter")}>
            <ScrollText size={16} aria-hidden="true" />
            展开信封
          </button>
        </div>
      ) : (
        <div className="action-bar action-bar--single">
          <button
            className="primary-button primary-button--compact"
            type="button"
            onClick={() => onStageChange(isLetterOpen ? "sealedLetter" : "openLetter")}
          >
            <MailOpen size={16} aria-hidden="true" />
            {isLetterOpen ? "收起情书" : "拆开今日情书"}
          </button>
        </div>
      )}
    </section>
  );
}
