import { useState } from 'react';

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
  return (
    <div className={styles['message-box']}>
      {/* <form onSubmit={submitHandler}> */}
      <form>
        <h1>Subscribe To Business Internet Now!</h1>
        <p>Complete the form and our representative will contact you shortly</p>
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
  );
}
