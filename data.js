/**
 * MOVIEHUB DYNAMIC DATABASE — data.js (Single Example Template)
 * ------------------------------------------------------------------
 * Direct Single Movie / Video Format (BINA EPISODES KE):
 * Host this file on GitHub Raw!
 */

window.MOVIEHUB_DATA = {
  // 1. Featured Spotlight Hero Banner (Top Main Screen)
  featured: {
    id: "feat-1",
    title: "Avatar: The Way of Water",
    year: 2024,
    rating: "8.9",
    genre: ["Action", "Sci-Fi"],
    duration: "3h 12m",
    quality: "4K Ultra HD",
    audio: "Hindi • English",
    sound: "Dolby Atmos",
    badge: "BLOCKBUSTER",
    description: "Jake Sully lives with his newfound family formed on Pandora.",
    poster: "https://cdn.kinocheck.com/i/nh244snarv.jpg",
    backdrop: "https://cdn.kinocheck.com/i/nh244snarv.jpg",
    videoUrl: "https://files.catbox.moe/mdzv2p.mp4"
  },

  // 2. Movie Category Rows
  categories: [
    {
      name: "Trending Movies",
      type: "portrait", // Use "portrait" for vertical posters OR "landscape" for 16:9 widescreen posters
      movies: [
        {
          id: "m1",
          title: "minecraft triller",
          year: 2024,
          rating: "8.6",
          genre: ["Sci-Fi", "romactic"],
          duration: "2h 46m",
          quality: "4K UHD",
          audio: "Hindi • English",
          sound: "Dolby Atmos",
          badge: "POPULAR",
          description: "Paul Atreides unites with Chani and the Fremen while seeking revenge.",
          poster: "https://files.catbox.moe/kw9v3j.png",
          backdrop: "ttps://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&h=1080&q=80",
          videoUrl: "https://files.catbox.moe/mdzv2p.mp4"
        }
      ]
    }
  ]
};
