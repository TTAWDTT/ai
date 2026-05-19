import { Sparkles } from "lucide-react";

type DrawCardProps = {
  reroll?: boolean;
};

export function DrawCard({ reroll = false }: DrawCardProps) {
  return (
    <section className="draw-view" aria-live="polite">
      <div className="draw-copy">
        <h2>{reroll ? "重新抽取中..." : "命运正在翻转..."}</h2>
        <p>{reroll ? "新的命运正在到来" : "请稍候片刻"}</p>
      </div>
      <div className={`tarot-stage ${reroll ? "tarot-stage--blue" : ""}`}>
        <div className="magic-ring" />
        <div className="tarot-card">
          <div className="tarot-border">
            <Sparkles size={20} aria-hidden="true" />
            <div className="tarot-flower">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}
