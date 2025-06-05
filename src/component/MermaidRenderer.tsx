// MermaidRenderer.tsx
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidRendererProps = {
  chart: string;
};

const MermaidRenderer = ({ chart }: MermaidRendererProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = "mermaid-" + Math.random().toString(36).slice(2);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose", // ← 중요한 설정
    });
    try {
      console.log("📋 chart to render:", chart);
      mermaid.render(id, chart, (svgCode) => {
        if (ref.current) {
          ref.current.innerHTML = svgCode;
          console.log("✅ Mermaid 렌더링 성공");
        }
      });
    } catch (err) {
      console.error("❌ Mermaid render failed", err);
      console.log("📄 chart 내용:", chart);
    }
  }, [chart]);

  return <div ref={ref} className="my-4" />;
};

export default MermaidRenderer;