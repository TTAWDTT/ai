import { RotateCcw } from "lucide-react";

type RejectionViewProps = {
  onReset: () => void;
};

export function RejectionView({ onReset }: RejectionViewProps) {
  return (
    <section className="rejection-view" aria-live="polite">
      <div className="anger-mark" aria-hidden="true">
        ╬
      </div>
      <div className="rejection-word">滚</div>
      <p>本系统仅服务孤独灵魂。</p>
      <button className="ghost-button" type="button" onClick={onReset}>
        <RotateCcw size={16} aria-hidden="true" />
        我重新做人
      </button>
    </section>
  );
}
