import React, { forwardRef } from 'react';
import './WhatAreSolarStorms.css';

const WhatAreSolarStorms = forwardRef((props, ref) => {
  return (
    <>
      {/* <nav className="navbar">
        <div className="nav-link">Home</div>
        <div className="nav-link">Info</div>
        <div className="nav-link">Contacto</div>
      </nav> */}
      <div className=" page-background">
    <div class="content-container">
    <section ref={ref} className="main-content fondo">

    <div class="seccion-borrosa">
      <h2>El Sol</h2>
      <p>
        Es la estrella de nuestro sistema solar, gracias a ella tanto la Tierra como otros cuerpos celestes es que nos mantenemos en su orbita. 
        Si la Tierra fuera del tamaño de una pelota de futbol, el sol seria del tamaño de un edificio de 20 metros.
      </p>
    </div>

    <div class="seccion-borrosa">
      <div class="manchas">
        <div class="info">
          <h3>Manchas Solares</h3>
          <p>
            Son pequeñas pecas que tienden aparecer en el sol cuando hay mucha concentración de 
            líneas de campo magnético.
          </p>
        </div>
        <img src="https://spaceweather.com/images2024/05oct24/hmi200.gif" alt="Manchas solares del 05/10/2024" />
      </div>
    </div>

    <div class="seccion-borrosa">
      <h2>¿Qué son las tormentas solares?</h2>
      <p>
        Son tormentas causadas por “tormentas solares”, esas tormentas causan perturbaciones mayores al campo magnético de la Tierra. Todo esto produce efectos como interrupciones en la radio, apagones de energía y muy hermosas auroras.
      </p>
      <p>
        Se dividen en escalas, que la G1 seria la menos potente, teniendo la G5 como el de mayores consecuencias. A continuación se muestra una tabla donde se enlista los efectos de cada una y su índice de Kp.
      </p>
      <img src="https://spaceweather.com/glossary/g5.jpg" alt="tabla_escalas" />
    </div>
     <div class="seccion-borrosa">
          <h3>Llamaradas</h3>
          <p>
            Son explosiones gigantes en la superficie del Sol que ocurre cuando las líneas de campo magnético 
            de las manchas solares se enredan y erupcionan. Se define como una variacion repentina,
            rápida e intensa del brillo.
            La cantidad de energía liberada es equivalente a millones de bombas nucleares explotanto
            al mismo tiempo.
          </p>
          </div>
          <div class="seccion-borrosa">
          <h3>CME</h3>
          <p>
            Es un evento solar, se denomina eyección de masa coronal o CME es una nube gigante 
            de plasma solar empapada con líneas de campo magnético (radiación).
          </p>
          </div>
          <div class="seccion-borrosa">
          <p>
            DIFERENCIAS <br />
            La diferencia entre una llamarada y un CME, es que la primera se identifica como un destello
            de luz que abarca todo el espectro electromagnético mientras que las CME son 
            cumulos de nubes de plasma.
          </p>

          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OZx6BRPoTEE?si=usrwHxNKH-Pv3edi" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </div>
          <div class="seccion-borrosa">
          <h2>Tormentas Geomagnéticas Mayo 2024</h2>
          <p>
          El 8 de mayo de 2024 se empezó a registrar tormentas solares estimadas entre las categorías G2-G3, causado por la enorme mancha solar AR3664.
          Para esa fecha registro la más grande tormenta geomagnética en los últimos 20 años, estimada en una categoría G2 – G3 para esa fecha. Causado por la mancha solar AR3664.
          Para esa fecha se estimaba que el choque del CME ocurriría el 11 de mayo. Para el siguiente 
          día, el 9 de mayo ya se tenía contemplado que llegarían múltiples vientos solares, convirtiéndose 
          en un “CME Canibal”. Y la tormenta geomagnética fue ascendida de puesto de G2 a G4. 
          Debido a que la mancha solar AR3664 seguia desprendiendo CMEs hacia la tierra. 
          Para el 10 y 11 de mayo las 6 CMEs impactaron con la tierra de categoría G4 y G5.
          </p>
        </div>
          <h3>Galeria</h3>
          <img src = "https://spaceweather.com/images2024/08may24/halocme.gif" alt=""
          style = {{
            width: '500px'
          }}></img> <br />
          
          <img src = "https://spaceweather.com/images2024/08may24/roiling_crop_opt.gif" alt = ""
          style = {{
            width: '500px'
          }}></img><br />
          
          {props.children}
        </section>
        </div>
      </div>
      
        

    </>
  );
});

export default WhatAreSolarStorms;
