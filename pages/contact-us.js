import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Phone from '../assets/icons/phone2.svg';
import Location from '../assets/icons/location.svg';
import Mail from '../assets/icons/mail-black.svg';
import styles from './contact-us.module.scss';

export default function ContactUs() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const nameChangeHandler = (e) => {
    const value = e.target.value;
    setNameValue(value);
  };
  const emailChangeHandler = (e) => {
    const value = e.target.value;
    setEmailValue(value);
  };
  const phoneChangeHandler = (e) => {
    const value = e.target.value;
    setPhoneValue(value);
  };
  const messageChangeHandler = (e) => {
    const value = e.target.value;
    setMessageValue(value);
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const payload = {
  //     name: nameRef.current.value,
  //     phone: phoneRef.current.value,
  //     email: emailRef.current.value,
  //     message: messageRef.current.value,
  //   };
  //   console.log(payload);
  // };

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
            <p>1-500-787 (24-Hour Customer Care) / +6221 3970 1787 (Business Hour)</p>
          </div>
          <div className={styles['address']}>
            <div className={styles['icon']}>
              <Image alt='Address' src={Location} width={25} height={25} />
            </div>
            <p>
              Menara Kadin Indonesia 7<sup>th</sup> Floor Jl. H. R. Rasuna Said X5 Kav. 2-3, South Jakarta, 12950
            </p>
          </div>
          <div className={styles['email']}>
            <div className={styles['icon']}>
              <Image alt='Email' src={Mail} width={25} height={25} />
            </div>
            <a href='mailto:info@napinfo.co.id' target='_blank' rel='noreferrer'>
              info@napinfo.co.id
            </a>
          </div>
        </div>
      </div>

      <div className={styles['message-box']}>
        {/* <form onSubmit={submitHandler}> */}
        <form>
          <h1>Send Us A Message</h1>
          <div className={styles['input-group']}>
            <div className={styles['short-input']}>
              <input type='text' placeholder='Your Name' onChange={nameChangeHandler} value={nameValue} />
              <input type='text' placeholder='Phone Number' onChange={phoneChangeHandler} value={phoneValue} />
              <input type='text' placeholder='Email' onChange={emailChangeHandler} value={emailValue} />
            </div>
            <textarea placeholder='Message' cols='30' onChange={messageChangeHandler} value={messageValue}></textarea>
          </div>
          <a
            target='_blank'
            rel='noreferrer'
            className={styles['send-message']}
            href={`mailto:info@napinfo.co.id?cc=customer.care@napinfo.co.id&?subject=Inquiry%20From%20Website&body=Name%3A%20${nameValue}%0D%0APhone%20Number%3A%20${phoneValue}%0D%0AEmail%3A%20${emailValue}%0D%0AMessage%3A%0D%0A${messageValue}`}>
            Send Message
          </a>
        </form>
      </div>
    </div>
  );
}
