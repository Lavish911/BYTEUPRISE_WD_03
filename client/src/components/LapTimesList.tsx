import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { formatTime, formatDiff } from "@/lib/stopwatchUtils";
import { Lap } from "@/hooks/useStopwatch";

interface LapTimesListProps {
  laps: Lap[];
}

export function LapTimesList({ laps }: LapTimesListProps) {
  return (
    <div className="border-t border-gray-200">
      <div className="lap-header px-5 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h2 className="font-semibold text-gray-700">Lap Times</h2>
        <Badge variant="outline" className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
          {laps.length}
        </Badge>
      </div>
      
      <ScrollArea className="max-h-60">
        {laps.length === 0 ? (
          <div className="py-6 px-5 text-center text-gray-500 italic">
            No laps recorded yet
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {laps.map((lap) => (
              <li key={lap.number} className="py-3 px-5 flex justify-between items-center">
                <div className="flex items-center">
                  <Badge className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Lap {lap.number}
                  </Badge>
                  <span className="text-gray-600">{formatTime(lap.time)}</span>
                </div>
                <span className="text-sm text-gray-500">{formatDiff(lap.diff)}</span>
              </li>
            )).reverse()}
          </ul>
        )}
      </ScrollArea>
    </div>
  );
}
