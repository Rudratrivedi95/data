/**
 * MOVIEHUB DYNAMIC DATABASE — data.js (SonyLIV Ultra-Premium Edition)
 * ------------------------------------------------------------------
 * Host this file on your GitHub repository!
 * Raw URL format: https://raw.githubusercontent.com/username/repo/main/data.js
 */

window.MOVIEHUB_DATA = {
  // Hero Spotlight Banner Item
  featured: {
    id: "feat-1",
    title: "Maharani: Season 3",
    year: 2024,
    rating: "8.9",
    genre: ["Drama", "Political", "Thriller"],
    duration: "8 Episodes",
    quality: "4K Ultra HD",
    audio: "Hindi • Tamil • Telugu • Malayalam",
    sound: "Dolby Atmos",
    badge: "LIV ORIGINAL",
    description: "Rani Bharati, framed for crimes she did not commit, steps out of prison with a renewed vow of justice and vengeance. A high-stakes battle for power begins in the heart of political turf.",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&h=900&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&h=1080&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    episodes: [
      { id: "e1", title: "E1: The Awakening", duration: "48m", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { id: "e2", title: "E2: Trial by Fire", duration: "52m", thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { id: "e3", title: "E3: Political Gambit", duration: "50m", thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { id: "e4", title: "E4: Checkmate", duration: "55m", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" }
    ]
  },

  // Content Categories & Rows
  categories: [
    {
      name: "SonyLIV Exclusives & Originals",
      type: "landscape", // 16:9 widescreen cards
      movies: [
        {
          id: "orig-1",
          title: "Scam 1992: Harshad Mehta Story",
          year: 2020,
          rating: "9.3",
          genre: ["Biography", "Crime", "Drama"],
          duration: "10 Episodes",
          quality: "4K UHD",
          audio: "Hindi • English",
          sound: "5.1 Surround",
          badge: "LIV ORIGINAL",
          description: "Set in 1980s and 90s Bombay, Scam 1992 follows the meteoric rise and tragic fall of stockbroker Harshad Mehta.",
          poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          episodes: [
            { id: "s1e1", title: "E1: Calculated Risk", duration: "54m", thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
            { id: "s1e2", title: "E2: The Bull of Dalal Street", duration: "58m", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=225&q=80", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }
          ]
        },
        {
          id: "orig-2",
          title: "Rocket Boys",
          year: 2022,
          rating: "8.9",
          genre: ["Biography", "History", "Drama"],
          duration: "8 Episodes",
          quality: "4K UHD",
          audio: "Hindi • English • Tamil",
          sound: "Dolby Atmos",
          badge: "LIV ORIGINAL",
          description: "The story of two extraordinary men, Dr. Homi J. Bhabha and Dr. Vikram Sarabhai, who created history while building India's nuclear and space programs.",
          poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
          id: "orig-3",
          title: "Gullak: Season 4",
          year: 2024,
          rating: "9.1",
          genre: ["Comedy", "Drama", "Family"],
          duration: "5 Episodes",
          quality: "HD",
          audio: "Hindi",
          sound: "Stereo",
          badge: "BLOCKBUSTER",
          description: "Set in a quaint by-lane of North India, Gullak brings heartwarming and relatable tales of the Mishra family.",
          poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
          id: "orig-4",
          title: "Undekhi: Season 3",
          year: 2024,
          rating: "8.2",
          genre: ["Crime", "Thriller"],
          duration: "10 Episodes",
          quality: "HD",
          audio: "Hindi • Punjabi",
          sound: "5.1 Surround",
          badge: "POPULAR",
          description: "A gruesome murder at a high-profile wedding sparks a dangerous power struggle between corrupt elites and an uncompromising cop.",
          poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        }
      ]
    },
    {
      name: "Top 10 Blockbusters in India",
      type: "portrait", // 2:3 poster cards
      movies: [
        {
          id: "mov-1",
          title: "Dune: Part Two",
          year: 2024,
          rating: "8.6",
          genre: ["Sci-Fi", "Action", "Adventure"],
          duration: "2h 46m",
          quality: "4K UHD",
          audio: "English • Hindi • Tamil",
          sound: "Dolby Atmos",
          badge: "TOP 1",
          description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
          poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
          id: "mov-2",
          title: "Oppenheimer",
          year: 2023,
          rating: "8.9",
          genre: ["Biography", "Drama", "History"],
          duration: "3h 00m",
          quality: "4K UHD",
          audio: "English • Hindi",
          sound: "Dolby Atmos",
          badge: "TOP 2",
          description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
          poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        },
        {
          id: "mov-3",
          title: "Interstellar",
          year: 2014,
          rating: "8.7",
          genre: ["Sci-Fi", "Adventure", "Drama"],
          duration: "2h 49m",
          quality: "4K UHD",
          audio: "English • Hindi • Telugu",
          sound: "5.1 Surround",
          badge: "TOP 3",
          description: "When Earth becomes uninhabitable, a team of explorers undertakes the most important mission in human history.",
          poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        },
        {
          id: "mov-4",
          title: "The Dark Knight",
          year: 2008,
          rating: "9.0",
          genre: ["Action", "Crime", "Drama"],
          duration: "2h 32m",
          quality: "4K UHD",
          audio: "English • Hindi",
          sound: "5.1 Surround",
          badge: "TOP 4",
          description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests.",
          poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLoose.mp4"
        },
        {
          id: "mov-5",
          title: "Avatar: The Way of Water",
          year: 2022,
          rating: "7.6",
          genre: ["Action", "Adventure", "Sci-Fi"],
          duration: "3h 12m",
          quality: "4K UHD",
          audio: "English • Hindi • Tamil • Telugu",
          sound: "Dolby Atmos",
          badge: "TOP 5",
          description: "Jake Sully lives with his newfound family formed on Pandora. Once a familiar threat returns, Jake must work with the Na'vi race.",
          poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        }
      ]
    },
    {
      name: "SonyLIV Sports & Live Action",
      type: "landscape",
      movies: [
        {
          id: "sport-1",
          title: "UEFA Champions League Final",
          year: 2024,
          rating: "LIVE",
          genre: ["Football", "Sports"],
          duration: "Live Broadcast",
          quality: "4K 60FPS",
          audio: "English • Hindi",
          sound: "Stadium Surround",
          badge: "LIVE MATCH",
          description: "Watch the thrilling UEFA Champions League Final live in 4K 60FPS resolution with multi-cam angle commentary.",
          poster: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
        },
        {
          id: "sport-2",
          title: "India vs Australia — Border Gavaskar Trophy",
          year: 2024,
          rating: "LIVE",
          genre: ["Cricket", "Sports"],
          duration: "Day 3 Stream",
          quality: "HD 60FPS",
          audio: "Hindi • English • Tamil",
          sound: "Stereo",
          badge: "LIVE MATCH",
          description: "Border-Gavaskar Trophy Live Action directly from MCG with Hindi & English expert studio commentary.",
          poster: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&h=900&q=80",
          backdrop: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        }
      ]
    }
  ]
};
