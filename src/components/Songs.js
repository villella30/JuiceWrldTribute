import React from 'react'
import "../styles/Songs.css";

export default function Songs() {
    return (
        <div>

            <section className="songs" id='songs'>
                <div className="card-songs">
                    <h2 className='title_songs'>Más reproducciones en Spotify</h2>
                    <article class="mas_reproducciones">
                        <div class="info_mas_reproducciones">
                            <p class="titulo_detalle">#1 Lucid Dreams</p>
                            <div class="song_img">
                                <img class="detalle" src='/GB&GR.jpg' alt='Lucid Dreams' />
                            </div>
                        </div>
                        <div class="info_mas_reproducciones">
                            <p class="titulo_detalle">#2 All Girls Are The Same</p>
                            <div class="song_img">
                                <img class="detalle" src='/GB&GR.jpg' alt='All Girls Are The Same' />
                            </div>
                        </div>
                        <div class="info_mas_reproducciones">
                            <p class="titulo_detalle">#3 Robbery</p>
                            <div class="song_img">
                                <img class="detalle" src='/DRFL.png' alt='Robbery' />
                            </div>
                        </div>
                        <div class="info_mas_reproducciones">
                            <p class="titulo_detalle">#4 Wishing Well</p>
                            <div class="song_img">
                                <img class="detalle" src='/LND.png' alt='Wishing Well' />
                            </div>
                        </div>
                        <div class="info_mas_reproducciones">
                            <p class="titulo_detalle">#5 Lean Wit Me</p>
                            <div class="song_img">
                                <img class="detalle" src='/GB&GR.jpg' alt='Lean Wit Me' />
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className='frase'>
                <h1 className='h1_Juice'>"I wanna change the world."</h1>
                <h3 className='h3_Jarad'>Jarad Anthony Higgins</h3>
            </section>

        </div>
    )
}
