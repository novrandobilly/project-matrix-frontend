import React from 'react';
import Link from 'next/link';
import styles from './plan-package.module.scss';

export default function PlanPackage() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>Choose The Plan For&nbsp;</h1>
        <h1>Your Needs!</h1>
      </div>
      <p className={styles['sub-title']}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi in, dolorum eaque fugit eos magnam! Adipisci
        enim voluptas earum! Explicabo voluptatem eligendi cum officia.
      </p>
      <div className={styles['plan-option']}>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>IPLC (International Private Leased Circuit )</h3>
          </div>

          <p className={styles['plan-description']}>
            Choosing the right solution for a company&apos;s telecommunication Requirements is not an easy decision to
            make, since it could pretty much determine its success. In business nowadays, it&apos;s about getting the
            shortest, fastest, and most reliable route to the internet that counts, and we understand that every
            internet provider has their own way to approach this very goal.
          </p>
          <p className={styles['plan-description']}>
            Our Matrix International Private Leased Circuit (IPLC) enables telecom carriers and other service providers
            to extend the reach of their own leased line services to and from Indonesia and Singapore, forming a
            tailor-made connectivity that is highly reliable to suit their needs. Customers can easily connect to their
            preferred upstreams through our privately owned integrated network architecture of undersea and terrestrial
            cables and extensive local backhauling in Jakarta, Batam and Singapore.
          </p>

          <Link href='/highlights/iplc-international-private-leased-circuit' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>IP Transit</h3>
          </div>

          <p className={styles['plan-description']}>
            The telecommunications landscape has gone through drastic changes in recent years. Simply getting onto the
            internet is not enough; having a reliable and high-speed connection has become a fundamental need,
            especially at an organizational level.
          </p>
          <p className={styles['plan-description']}>
            Matrix IP Transit service gives customers a direct connection to reach major internet destinations with high
            quality and cost-effective internet connectivity, along with optimal availability ensured by our fully
            redundant network. Customers have the option to subscribe the bandwidth based on the destination of their
            traffic, which enables them to enjoy cost and performance benefit by distributing IP traffic regionally and
            directly to overseas partners and end users.
          </p>

          <Link href='/highlights/ip-transit' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>MC-IX (Matrix Cable Internet eXchange)</h3>
          </div>

          <p className={styles['plan-description']}>
            Never in history has the world seen such a massive demand to connect globally as there is today. The
            Internet becomes a means to carry out various activities, while poor quality connectivity becomes the new
            public enemy. Everyone is always seeking for faster and better internet access, regardless of their age,
            background, or financial ability.
          </p>
          <p className={styles['plan-description']}>
            Matrix has always been fully committed to providing only the best service for Indonesia’s internet users.
            This led us to initiate our very own Matrix Cable Internet Exchange (MC-IX), which enables users to exchange
            internet traffic openly with other internet networks around the globe. We continuously invite more ISPs and
            ASPs to directly exchange their internet traffic with us, to provide faster and better-quality internet
            every time.
          </p>
          <Link href='/highlights/mc-ix-matrix-cable-internet-exchange' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Data Center</h3>
          </div>

          <p className={styles['plan-description']}>
            Matrix Data Centre sites provide world-class, secure and robust facilities with high-bandwidth internet
            access for corporate customers, ISPs and ASPs. By co-locating servers directly with our Data Center,
            customers can avoid the high cost of leased lines and local access charges and benefit from our large
            bandwidth capacity that will considerably improve website access speed.
          </p>
          <Link href='/highlights/matrix-data-center' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>Matrix Line (Local Loop)</h3>
          </div>

          <p className={styles['plan-description']}>
            A layer 2 transport that connects from any demarcation point of the customer premises to the edge of the
            common carrier or telecommunications service provider&apos;s network. Matrix NAP Info&apos;s Local Loop
            provides a secure fiber optic connectivity solution for a high bandwidth and high availability needs.
          </p>
          <p className={styles['plan-description']}>
            With presence in more than 22 Data Center locations at Greater Jakarta Area, makes us the most connected
            DC-2-DC Solution for your business.
          </p>
          <Link href='/highlights/matrix-data-center' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Internet</h3>
          </div>

          <p className={styles['plan-description']}>
            Providing high performance dedicated internet through our reliable connectivity to global network, supported
            with our excellent customer service and monitoring team. Tailored to your needs without hassle.
          </p>
          <Link href='/highlights/matrix-internet' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Cloud</h3>
          </div>

          <p className={styles['plan-description']}>
            Increasing demand of software solution for enterprise disrupts the conventional model of IT infrastructure
            deployed by existing solution providers. This conventional structure creates obstacles for development and
            scaling of modern days enterprise utilization.
          </p>
          <p className={styles['plan-description']}>
            Integrated hyper converged solutions for cloud is the solution for scalability and simplification to manage
            and develop enterprise resources. By means of intelligent software-defined solution, the act of combining
            and integrating storage, network, and server within one platform becomes possible.
          </p>
          <p className={styles['plan-description']}>
            Achieving convenience and efficiency for enterprise solution is possible through software defined solutions
            built on hyper converged infrastructure. Powerful platforms will let you manage your resource, deploying it
            at lightning-fast response time, and is highly capable of being adjusted according to your enterprise needs.
          </p>
          <p className={styles['plan-description']}>
            Matrix Cloud solution presents the most advanced innovation of enterprise grade hyper converged
            infrastructure solution for management of virtualized data centers, service management, hybrid cloud
            computing, and on-demand provisioning.
          </p>
          <Link href='/highlights/matrix-cloud' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
