import React from 'react';
import Image from 'next/image';
import Chatting from '../../assets/chatting.png';
import DataCenterMap from '../../assets/data-center-map.PNG';
import MCIXGlobalMap from '../../assets/mcix-global-map.png';
import Link from 'next/link';
import styles from './articleid.module.scss';

export default function Article() {
  return (
    <div className={styles['container']}>
      <div className={styles['back-link']}>
        <Link href='/'>&lt; Back to home</Link>
      </div>
      <div className={styles['article-container']}>
        <h1 className={styles['article-container-title']}>Corporate &amp; Network Solutions</h1>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>IPLC (International Private Leased Circuit )</h2>
          <p>
            Choosing the right solution for a company&apos;s telecommunication Requirements is not an easy decision to
            make, since it could pretty much determine its success. In business nowadays, it&apos;s about getting the
            shortest, fastest, and most reliable route to the internet that counts, and we understand that every
            internet provider has their own way to approach this very goal.
          </p>
          <p>
            Our Matrix International Private Leased Circuit (IPLC) enables telecom carriers and other service providers
            to extend the reach of their own leased line services to and from Indonesia and Singapore, forming a
            tailor-made connectivity that is highly reliable to suit their needs. Customers can easily connect to their
            preferred upstreams through our privately owned integrated network architecture of undersea and terrestrial
            cables and extensive local backhauling in Jakarta, Batam and Singapore.
          </p>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>IP Transit</h2>
          <p>
            The telecommunications landscape has gone through drastic changes in recent years. Simply getting onto the
            internet is not enough; having a reliable and high-speed connection has become a fundamental need,
            especially at an organizational level.
          </p>
          <p>
            Matrix IP Transit service gives customers a direct connection to reach major internet destinations with high
            quality and cost-effective internet connectivity, along with optimal availability ensured by our fully
            redundant network. Customers have the option to subscribe the bandwidth based on the destination of their
            traffic, which enables them to enjoy cost and performance benefit by distributing IP traffic regionally and
            directly to overseas partners and end users.
          </p>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>MC-IX (Matrix Cable Internet eXchange)</h2>
          <p>
            Never in history has the world seen such a massive demand to connect globally as there is today. The
            Internet becomes a means to carry out various activities, while poor quality connectivity becomes the new
            public enemy. Everyone is always seeking for faster and better internet access, regardless of their age,
            background, or financial ability.
          </p>
          <p>
            Matrix has always been fully committed to providing only the best service for Indonesia’s internet users.
            This led us to initiate our very own Matrix Cable Internet Exchange (MC-IX), which enables users to exchange
            internet traffic openly with other internet networks around the globe. We continuously invite more ISPs and
            ASPs to directly exchange their internet traffic with us, to provide faster and better-quality internet
            every time.
          </p>
          <div className={styles['article-image-sub']}>
            <Image src={MCIXGlobalMap} width={1006} height={754} alt='Chatting' />
          </div>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>Matrix Data Center</h2>
          <p>
            Matrix Data Centre sites provide world-class, secure and robust facilities with high-bandwidth internet
            access for corporate customers, ISPs and ASPs. By co-locating servers directly with our Data Center,
            customers can avoid the high cost of leased lines and local access charges and benefit from our large
            bandwidth capacity that will considerably improve website access speed.
          </p>
          <ul>
            Matrix <strong>Data Center</strong> located at:
            <li>Matrix Data Center JK1 (Pantai Mutiara)</li>
            <li>Matrix Data Center JK2 (Gedung Cyber 1)</li>
            <li>Matrix Data Center JK3 (Plaza Kuningan Annex)</li>
            <li>Matrix Data Center BM1 (Nongsa)</li>
            <li>Matrix Data Center SG1 (Changi North)</li>
          </ul>
          <ul>
            Technical specifications as follow:
            <li>Two-factors security authorization for a complete safety system ensure your protection</li>
            <li>Dual-Cooling system to avoid overheat guaranteed to run your data properly</li>
            <li>
              Advanced fire detection and suppression system with redundant power supply (2N electrical equipment) for
              emergency backup
            </li>
            <li>24-Hr CCTV security monitoring</li>
          </ul>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>Matrix Line (Local Loop)</h2>
          <p>
            A layer 2 transport that connects from any demarcation point of the customer premises to the edge of the
            common carrier or telecommunications service provider&apos;s network. Matrix NAP Info&apos;s Local Loop
            provides a secure fiber optic connectivity solution for a high bandwidth and high availability needs.
          </p>
          <p>
            With presence in more than 22 Data Center locations at Greater Jakarta Area, makes us the most connected
            DC-2-DC Solution for your business.
          </p>
          <div className={styles['article-image-sub']}>
            <Image src={DataCenterMap} width={1339} height={756} alt='Chatting' />
          </div>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>Matrix Internet </h2>
          <p>Our 100% Fiber Optic technology provides internet connectivity to enhance your business’ needs.</p>
          <ul>
            <li>
              <ul style={{ listStyle: 'none' }}>
                <strong>Dedicated Internet</strong>
                <li>
                  Providing high performance dedicated internet through our reliable connectivity to global network,
                  supported with our excellent customer service and monitoring team. Tailored to your needs without
                  hassle.
                </li>
              </ul>
            </li>
            <li>
              <ul style={{ listStyle: 'none' }}>
                <strong>Broadband Business </strong>
                <li>
                  Boost your business with Matrix Broadband Business with speed up to 1 Gbps makes us your perfect
                  internet solution partner.
                  <ul>
                    <li>Symmetrical Upload &amp; Download</li>
                    <li>Unlimited Connection – NO FUP</li>
                    <li>100% Fiber Optic Technology</li>
                    <li>24-Hour Customer Care support</li>
                    <li>1 Public Static IP</li>
                    <li>Free WiFi Router</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <article>
          <p className={styles['article-date']}>
            March, 31<sup>st</sup> 2022
          </p>
          <h2 className={styles['article-title']}>Matrix Cloud</h2>
          <p>
            Increasing demand of software solution for enterprise disrupts the conventional model of IT infrastructure
            deployed by existing solution providers. This conventional structure creates obstacles for development and
            scaling of modern days enterprise utilization.
          </p>
          <p>
            Integrated hyper converged solutions for cloud is the solution for scalability and simplification to manage
            and develop enterprise resources. By means of intelligent software-defined solution, the act of combining
            and integrating storage, network, and server within one platform becomes possible.
          </p>
          <p>
            Achieving convenience and efficiency for enterprise solution is possible through software defined solutions
            built on hyper converged infrastructure. Powerful platforms will let you manage your resource, deploying it
            at lightning-fast response time, and is highly capable of being adjusted according to your enterprise needs.
          </p>
          <p>
            Matrix Cloud solution presents the most advanced innovation of enterprise grade hyper converged
            infrastructure solution for management of virtualized data centers, service management, hybrid cloud
            computing, and on-demand provisioning.
          </p>
        </article>
      </div>
    </div>
  );
}
