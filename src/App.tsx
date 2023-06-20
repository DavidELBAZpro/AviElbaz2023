import { ToggleHamburger } from './cmps/toggle-hamburger'
import { Biography } from './cmps/biography'
import { VideosWatcher } from './cmps/videos-watcher'
import { SpotifyEmbed } from './cmps/spotify-embed'
import { Contact } from './cmps/contact'
import { Footer } from './cmps/footer'
import { MainImg } from './cmps/main-img'
import.meta.glob(['../images/**'])

function App() {
  return (
    <>
      {/* <AppHeader /> */}
      <ToggleHamburger />
      <MainImg />

      {/* <Biography /> */}
      <VideosWatcher />
      <SpotifyEmbed />
      <Contact />
      <Footer />
    </>
  )
}

export default App
