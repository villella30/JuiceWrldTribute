import React from 'react'
import "../styles/Albums.css";

export default function Albums() {
  return (
    <div className='album_container' id='albums'>
      <section className="albums">

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_kBiZlNm_vcQ5ervdG3U6RmFmLMlJ1Xv-U' target='_blank' rel="noreferrer">

          <div className="card_albums">
            <img className="detalle" src='/WoD.jpg' alt='WoD' />
            <p className="titulo_album">Wrld on Drugs</p>
            <p className="titulo_album">16 Canciones</p>
            <p className="titulo_album">(2018)</p>
          </div>

        </a>

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_mQiT0JSaOVpcFT6Wa24YNMMKeCX8_9-PU' target='_blank' rel="noreferrer">

          <div className="card_albums">
            <img className="detalle" src='/GB&GR.jpg' alt='GB&GR' />
            <p className="titulo_album">Goodbye & Good Riddance</p>
            <p className="titulo_album">17 Canciones</p>
            <p className="titulo_album">(2018)</p>
          </div>

        </a>

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_nLOIXxxxLZncjq1gSIW-GvhboblseCpZg' target='_blank' rel="noreferrer">

          <div className="card_albums">
            <img className="detalle" src='/DRFL.png' alt='DRFL' />
            <p className="titulo_album">Death Race for Love</p>
            <p className="titulo_album">23 Canciones</p>
            <p className="titulo_album">(2019)</p>
          </div>

        </a>

      </section >

      <section className='albums'>

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_lfvPhayqdOxEPlyyZ-BNpFGKhPtbiAJLk' target='_blank' rel="noreferrer">
          <div className="card_albums">
            <img className="detalle" src='/LND.png' alt='LND' />
            <p className="titulo_album">Legends Never Die</p>
            <p className="titulo_album">22 Canciones</p>
            <p className="titulo_album">(2020)</p>
          </div>
        </a>

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_kZ2MLSNGjLRXP7OfUMs23Qv57SBRTIZIk' target='_blank' rel="noreferrer">
          <div className="card_albums">
            <img className="detalle" src='/FD.png' alt='FD' />
            <p className="titulo_album">Fighting Demons</p>
            <p className="titulo_album">23 Canciones</p>
            <p className="titulo_album">(2022)</p>
          </div>

        </a>

        <a href='https://www.youtube.com/playlist?list=OLAK5uy_nw82D86n7vX4tE7MBmPQeZdHPrc_26kIc' target='_blank' rel="noreferrer">
          <div className="card_albums">
            <img className="detalle" src='/TPNE.png' alt='TPNE' />
            <p className="titulo_album">The Party Never Ends</p>
            <p className="titulo_album">19 Canciones</p>
            <p className="titulo_album">(2024)</p>
          </div>
        </a>
      </section>
    </div >
  )
}
