import React from 'react'
import { Spotify } from 'react-spotify-embed'
import { InstagramEmbed } from 'react-social-media-embed'

export const SpotifyEmbed = () => {
  // const view = 'list' // or 'coverart'
  // const theme = 'black' // or 'white'
  // const size = {
  //   width: '100%',
  //   height: 300,
  // }

  return (
    <>
      <div className="spotify-container">
        <Spotify
          link="https://open.spotify.com/artist/685hPNHRqpXQjisA0h78qx"
          width={328}
        />
      </div>
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/tv/ChsHPYLFkG4/?igshid=MmJiY2I4NDBkZg=="
          width={328}
        />
      </div>
    </>
  )
}
