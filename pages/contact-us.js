import Head from 'next/head';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Phone from '../assets/icons/phone2.svg';
import Location from '../assets/icons/location.svg';
import Mail from '../assets/icons/mail.svg';
import styles from './contact-us.module.scss';

export default function Home() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const payload = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log(payload);
  };

  useEffect(() => {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API;
    const map = new mapboxgl.Map({
      container: 'company-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [106.82410315057548, -6.228448963987807],
      zoom: 14,
    });
    const popup = new mapboxgl.Popup({ offset: 25, className: styles['popup-text'] }).setText(
      'PT. NAP Info Lintas Nusa ( Matrix NAP Info )'
    );
    map.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([106.83180718798022, -6.232038504543818])
      .setPopup(popup)
      .addTo(map);
  }, []);

  return (
    <div className={styles['container']}>
      <Head>
        <title>Contact Us</title>
        <meta name='description' content='Matrix Contact Us Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles['contact-us-map']}>
        <div className={styles['mapbox']} id='company-map'></div>
        <div className={styles['company-address']}>
          <h1>Contact Us</h1>
          <div className={styles['phone']}>
            <div className={styles['icon']}>
              <Image alt='Phone' src={Phone} width={25} height={25} />
            </div>
            <p>1-500-XXX</p>
          </div>
          <div className={styles['address']}>
            <div className={styles['icon']}>
              <Image alt='Address' src={Location} width={25} height={25} />
            </div>
            <p>
              Menara Kadin Indonesia, 7<sub>th</sub> floor, JL. HR. Rasuna Said, Bblok X-5 Kav 2-3, Jakarta 12950
            </p>
          </div>
          <div className={styles['email']}>
            <div className={styles['icon']}>
              <Image alt='Email' src={Mail} width={25} height={25} />
            </div>
            <p>sales.broadband@napinfo.co.id</p>
          </div>
        </div>
      </div>

      <div className={styles['message-box']}>
        <form onSubmit={submitHandler}>
          <h1>Send Us A Message</h1>
          <div className={styles['input-group']}>
            <div className={styles['short-input']}>
              <input type='text' placeholder='Your Name' ref={nameRef} />
              <input type='text' placeholder='Phone Number' ref={phoneRef} />
              <input type='text' placeholder='Email' ref={emailRef} />
            </div>
            <textarea placeholder='Message' cols='30' ref={messageRef}></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
