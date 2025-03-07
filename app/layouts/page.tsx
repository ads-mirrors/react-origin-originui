import PageHeader from "@/components/page-header";
import Card from "./card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Layouts built with Tailwind CSS and React - Origin UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and React to help you get started with your next project.",
};

const cards = [
  {
    id: 3,
    title: "SaaS Dashboard",
    demoUrl: "https://crafted.is/exp3",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-03",
    imgHeight: 829,
  },
  {
    id: 2,
    title: "AI Chat",
    demoUrl: "https://crafted.is/exp2",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-02",
    imgHeight: 700,
  },
  {
    id: 1,
    title: "Dark Table",
    demoUrl: "https://crafted.is/exp1",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-01",
    imgHeight: 894,
  },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Layouts &amp; Experiments">
        Beautifully designed open-source layouts and UI experiments built with Origin UI and shadcn/ui.
      </PageHeader>

      {/* Cards */}
      <div className="space-y-16">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>      

    </>
  );
}
