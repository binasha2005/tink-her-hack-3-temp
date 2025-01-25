export interface DanceVideo {
    id: string
    title: string
    eventType: "Wedding" | "Cultural Fest" | "Birthday" | "Other"
    thumbnailUrl: string
    videoUrl: string
  }
  
  export const danceVideos: DanceVideo[] = [
    {
      id: "1",
      title: "Elegant Wedding First Dance",
      eventType: "Wedding",
      thumbnailUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wed.png-lIZ09BJf7VDPpA1PiUHhTomTX5JQnQ.jpeg",
      videoUrl: "#",
    },
    {
      id: "2",
      title: "Energetic Cultural Fest Performance",
      eventType: "Cultural Fest",
      thumbnailUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cul.png-xeMvrEMdC8t7DnNxXSaOdZyfULDJQe.jpeg",
      videoUrl: "#",
    },
    {
      id: "3",
      title: "Fun Birthday Party Choreography",
      eventType: "Birthday",
      thumbnailUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/birth.png-MHu5vH6Gefs2VLmnCtzf8Sx6cui2Km.jpeg",
      videoUrl: "#",
    },
    {
      id: "4",
      title: "Contemporary Dance Showcase",
      eventType: "Other",
      thumbnailUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-vKu6AIAnNQzwDCcLKQY8o8p2o4dTJS.jpeg",
      videoUrl: "#",
    },
    {
      id: "5",
      title: "Modern Fusion Dance",
      eventType: "Cultural Fest",
      thumbnailUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic.png-gVYuOdBaf4gGfmWlNXP1mi4vk5ydUA.jpeg",
      videoUrl: "#",
    },
  ]
  
  export interface MusicSuggestion {
    id: string
    title: string
    artist: string
    eventType: "Wedding" | "Cultural Fest" | "Birthday" | "Other"
  }
  
  export const musicSuggestions: MusicSuggestion[] = [
    {
      id: "1",
      title: "Perfect",
      artist: "Ed Sheeran",
      eventType: "Wedding",
    },
    {
      id: "2",
      title: "Jai Ho",
      artist: "A.R. Rahman",
      eventType: "Cultural Fest",
    },
    {
      id: "3",
      title: "Happy",
      artist: "Pharrell Williams",
      eventType: "Birthday",
    },
    {
      id: "4",
      title: "Mehendi Laga Ke Rakhna",
      artist: "Bollywood Classic",
      eventType: "Wedding",
    },
    {
      id: "5",
      title: "Desi Girl",
      artist: "Vishal-Shekhar",
      eventType: "Cultural Fest",
    },
    {
      id: "6",
      title: "Can't Stop the Feeling!",
      artist: "Justin Timberlake",
      eventType: "Birthday",
    },
    {
      id: "7",
      title: "Marry You",
      artist: "Bruno Mars",
      eventType: "Wedding",
    },
    {
      id: "8",
      title: "Udi Udi Jaye",
      artist: "Sukhwinder Singh, Bhoomi Trivedi",
      eventType: "Cultural Fest",
    },
    {
      id: "9",
      title: "Birthday",
      artist: "Katy Perry",
      eventType: "Birthday",
    },
    {
      id: "10",
      title: "Nachde Ne Saare",
      artist: "Jasleen Royal, Siddharth Mahadevan",
      eventType: "Wedding",
    },
    {
      id: "11",
      title: "Gallan Goodiyaan",
      artist: "Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar",
      eventType: "Cultural Fest",
    },
    {
      id: "12",
      title: "Birthday Bash",
      artist: "Yo Yo Honey Singh",
      eventType: "Birthday",
    },
    {
      id: "13",
      title: "Aaj Mere Yaar Ki Shaadi Hai",
      artist: "Anil Kapoor, Juhi Chawla",
      eventType: "Wedding",
    },
    {
      id: "14",
      title: "London Thumakda",
      artist: "Labh Janjua, Neha Kakkar, Sonu Kakkar",
      eventType: "Cultural Fest",
    },
    {
      id: "15",
      title: "It's My Birthday",
      artist: "will.i.am ft. Cody Wise",
      eventType: "Birthday",
    },
  ]
  
  