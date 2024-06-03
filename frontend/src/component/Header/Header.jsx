import React from 'react'
import './styles.css'
import video from '../../assets/videos/ocean_video.mp4'

export default function Header() {
  return (
    <section className='header'>
        <video playsInline autoPlay muted loop id="bgVideo"> 
         <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1280_720_30fps.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
        <div className='overlay'></div>
        <div style={{"paddingTop":"180px"}}>
        <div className='header-content'>
            <h1 >Join  Beaches Go Green to Protect Oceans and Reduce Plastics.</h1>
            <p>Beaches Go Green, a 501(c)(3) non-profit, focuses on educating about waste and its planetary impact, particularly targeting single-use plastics and ocean conservation. We encourage small steps to reduce plastic use and waste, believing that collective minor changes can lead to significant environmental improvements.</p>
            <div className='container-btn'>
                <a href='#' className='btn-donate-header'>
                    Make a Donation
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}
