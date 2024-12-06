import React from 'react';
import "../styles/Content.css";


export default function Content() {

    return (
        <div>
            <div className="content" id='home' >
                <img className="img_header" src="/juiceContent.jpg" alt="JuiceContent" />
                <main className="info_header">
                    <h1 className="card-title">
                        <samp>Juice</samp><br /> WRLD
                    </h1>
                    <a href='https://www.youtube.com/channel/UC0BletW9phE4xHFM44q4qKA' target='_blank' rel="noreferrer">
                    <button type="button" className="btn" data-bs-toggle="button">
                        Escuchar canciones
                    </button>
                    </a>
                </main>
                <span className="fondo_azul"></span>
            </div>

            <section className="biography" id='content'>
                <div className="card-biography">
                    <article class="nacimiento_edad_pais">
                        <div class="info_nac_edad_pais">
                            <div class="bandera">
                                <p class="detalle">Estados Unidos</p>
                            </div>
                            <p class="titulo_detalle">País de Nacimiento</p>
                        </div>
                        <div class="info_nac_edad_pais">
                            <p class="detalle">02/12/1998</p>
                            <p class="titulo_detalle">Nacido</p>
                        </div>
                        <div class="info_nac_edad_pais">
                            <p class="detalle">08/12/2019</p>
                            <p class="titulo_detalle">Fallecimiento</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className='biography-Text'>
                <h1 className='biography-title'>
                    Biografía de Juice WRLD.
                </h1>
                <p className='biography-description'>
                    Jarad Anthony Higgins, mejor conocido como Juice WRLD. Rapero y compositor estadounidense, famoso por “Lucid Dreams”, “All Girls Are the Same” y “Bandit”. Tras darse a conocer en 2015 por medio de Soundcloud, Juice WRLD debuta en 2018 con el álbum “Goodbye & Good Riddance” y sus sencillos lanzados previamente “Lucid Dreams” y “All Girls Are the Same”. Pronto alcanzó la fama, colaborando con Future en su álbum “Wrld on Drugs”. En 2019, publicó “Death Race for Love”, álbum con el alcanzó el puesto N° 1 del Billboard 200.
                </p>
                <h1 className='biography-title'>
                    Primeros años.
                </h1>
                <p className='biography-description'>
                    Nació en Chicago y se crió en a Homewood. Sus padres se divorciaron cuando era pequeño y él y su hermano quedaron bajo el cuidado de su madre. Durante su niñez, se mudó constantemente, lo cual cambio al llegar a la secundaria. Entonces cursaría estudios en la Homewood-Flossmoor High School.
                </p>
                <h1 className='biography-title'>
                    Inicios.
                </h1>
                <p className='biography-description'>
                    Su interés por la música nació cuando era pequeño; a los cuatro años comenzó a tocar el piano, luego aprendió a tocar guitarra y más tarde la batería. Fue el trompetista de la banda de su escuela y en la secundaria abrió su canal de Soundcloud. Gracias a este comenzó a ganar reconocimiento en 2015 con el tema “Forever”. A este le seguiría “Too Much Cash” en 2017.
                </p>
                <h1 className='biography-title'>
                    Trayectoria de Juice WRLD.
                </h1>
                <p className='biography-description'>
                    Poco después del lanzamiento de “Too Much Cash”, Juice WRLD haría su debut con el EP “999” (2017) y el sencillo “Lucid Dreams”. Este tema hizo que el número de sus seguidores creciera exponencialmente, por lo que pronto firmó contrato con Internet Money Records. A finales de ese mismo año Juice WRLD, lanzaría su segundo EP “Nothings Different”, el cual fue promocionado a través de red. El EP incluye 3 temas, entre estos el exitoso y controversial “All Girls Are the Same”, cuyo vídeo producido por Cole Bennett fue lanzado en 2018.
                    Tras el lanzamiento del videoclip, Juice WRLD, firmó contrato con Interscope Récords por tres millones de dólares. Pocos meses después hizo su debut con “Goodbye & Good Riddance” (2018), trabajo musical que incluiría los hits “All Girls Are the Same” y “Lucid Dreams”. Estos se posicionaron el top del Billboard Hot 100 en cuestión de horas.
                    Continuando con su racha de éxitos, ese mismo año publicaría el EP “Too Soon” y la colaboración con Lil Uzi Vert, “Wasted”. A continuación, emprendió su primera gira The WRLD Domination Tour (julio-septiembre). Colaboró además en el álbum de Travis Scott, “Astroworld”; en “Wrld on Drugs” de Future y en el sencillo “Hide” para la película Spider‐Man: Into the Spider‐Verse.                </p>

            </section>
            

        </div>


    );
}
