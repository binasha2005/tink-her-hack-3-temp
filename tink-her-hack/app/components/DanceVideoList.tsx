"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { DanceVideo } from "../../data/danceData"

interface DanceVideoListProps {
  videos: DanceVideo[]
  selectedEventType: string
  setSelectedEventType: (eventType: string) => void
}

export function DanceVideoList({ videos, selectedEventType, setSelectedEventType }: DanceVideoListProps) {
  const filteredVideos =
    selectedEventType === "All" ? videos : videos.filter((video) => video.eventType === selectedEventType)

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Dance Tutorials</h2>
      <Select value={selectedEventType} onValueChange={setSelectedEventType}>
        <SelectTrigger className="w-[180px] mb-4">
          <SelectValue placeholder="Filter by event" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Events</SelectItem>
          <SelectItem value="Wedding">Wedding</SelectItem>
          <SelectItem value="Cultural Fest">Cultural Fest</SelectItem>
          <SelectItem value="Birthday">Birthday</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-4">
              <img
                src={video.thumbnailUrl || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.eventType}</p>
              <a
                href={video.videoUrl}
                className="text-purple-600 hover:text-purple-800 hover:underline text-sm transition-colors duration-200"
              >
                Watch Tutorial
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

