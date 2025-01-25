import { Card, CardContent } from "@/components/ui/card"
import type { MusicSuggestion } from "../../data/danceData"

interface MusicSuggestionsProps {
  suggestions: MusicSuggestion[]
  selectedEventType: string
}

export function MusicSuggestions({ suggestions, selectedEventType }: MusicSuggestionsProps) {
  const filteredSuggestions =
    selectedEventType === "All"
      ? suggestions
      : suggestions.filter((suggestion) => suggestion.eventType === selectedEventType)

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Music Suggestions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuggestions.map((suggestion) => (
          <Card
            key={suggestion.id}
            className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-purple-50"
          >
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1">{suggestion.title}</h3>
              <p className="text-sm text-gray-600">Artist: {suggestion.artist}</p>
              <p className="text-sm text-purple-600">Event: {suggestion.eventType}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

