import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper'

import { videosLinks } from '../data/videos-links'
import Iframe from 'react-iframe'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export function VideosWatcher() {
  return (
    <section id="videos" className="video-section text-center">
      <div className="video-sect">
        <h2>Videos</h2>
        <Swiper
          className="container testimonials-container"
          modules={[Pagination, Navigation, EffectFade]}
          spaceBetween={80}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          effect="fade"
          position="absolute"

          // EffectCards
        >
          {videosLinks.map(({ id, link, rename }, index) => {
            return (
              <SwiperSlide key={id} className="testimonials">
                <div key={index}>
                  {/* <h3>"{rename}"</h3> */}
                  <div className="video-container">
                    <Iframe
                      url={link}
                      title={rename}
                      width="940px"
                      height="520px"
                      className=""
                      display="block"
                      position="relative"
                      frameBorder="0"
                      allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
