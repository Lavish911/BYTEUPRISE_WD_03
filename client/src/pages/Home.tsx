import { AppTabs } from "@/components/AppTabs";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Time Tools by Lavish</title>
        <meta name="description" content="A responsive web-based application with stopwatch and timer functionality, featuring sound alerts and keyboard shortcuts" />
      </Helmet>
      <div className="bg-gradient-to-br from-purple-50 to-violet-100 min-h-screen font-sans text-gray-800 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-gradient">Time Tools</h1>
        <AppTabs />
      </div>
    </>
  );
}
