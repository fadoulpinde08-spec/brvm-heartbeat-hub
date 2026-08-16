import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { brvmHtml } from "@/lib/brvm-markup";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    const existing = document.getElementById("brvm-academy-script");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "brvm-academy-script";
    script.src = "/brvm-academy.js";
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: brvmHtml }} />;
}
