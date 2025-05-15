import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stopwatch } from "./Stopwatch";
import { TimerComponent } from "./TimerComponent";

export function AppTabs() {
  return (
    <div className="container max-w-md">
      <Tabs defaultValue="stopwatch" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gradient text-white">
          <TabsTrigger 
            value="stopwatch" 
            className="data-[state=active]:bg-white/10 rounded-lg py-2 font-semibold"
          >
            Stopwatch
          </TabsTrigger>
          <TabsTrigger 
            value="timer" 
            className="data-[state=active]:bg-white/10 rounded-lg py-2 font-semibold"
          >
            Timer
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stopwatch" className="mt-4">
          <Stopwatch />
        </TabsContent>
        <TabsContent value="timer" className="mt-4">
          <TimerComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
}