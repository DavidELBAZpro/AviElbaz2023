import { AppHeader } from './cmps/app-header'
import { Biography } from './cmps/biography'
import { VideosWatcher } from './cmps/videos-watcher'
import { SpotifyEmbed } from './cmps/spotify-embed'
import { Footer } from './cmps/footer'

function App() {
  return (
    <>
      <AppHeader />
      <Biography />
      <VideosWatcher />
      <SpotifyEmbed />
      <Footer />
    </>
  )
}

export default App
