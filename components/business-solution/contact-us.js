import { useRef } from 'react';

import styles from './contact-us.module.scss';

export default function ContactUs() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

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
  return (
    <div className={styles['message-box']}>
      {/* <form onSubmit={submitHandler}> */}
      <form>
        <h1>Subscribe To Business Internet Now!</h1>
        <p>Complete the form and our representative will contact you shortly</p>
        <div className={styles['input-group']}>
          <div className={styles['short-input']}>
            <input type='text' placeholder='Your Name' ref={nameRef} />
            <input type='text' placeholder='Phone Number' ref={phoneRef} />
            <input type='text' placeholder='Email' ref={emailRef} />
          </div>
          <textarea placeholder='Message' cols='30' ref={messageRef}></textarea>
        </div>
        <a
          target='_blank'
          rel='noreferrer'
          className={styles['send-message']}
          href={`mailto:info@napinfo.co.id?cc=customer.care@napinfo.co.id&?subject=Inquiry%20From%20Website&body=Name%3A%20${
            nameRef.current?.value || ''
          }%0D%0APhone%20Number%3A%20${phoneRef.current?.value || ''}%0D%0AEmail%3A%20${
            nameRef.current?.value || ''
          }%0D%0AMessage%3A%0D%0A${messageRef.current?.value || ''}`}>
          Send Message
        </a>
      </form>
    </div>
  );
}
