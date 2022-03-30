import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './articleid.module.scss';

export default function MatrixCloud() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Matrix Cloud</title>
        <meta name='description' content='Matrix Cloud' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['back-link']}>
        <Link href='/'>&lt; Back to home</Link>
      </div>
      <div className={styles['article-container']}>
        <h1 className={styles['article-container-title']}>Corporate &amp; Network Solutions</h1>
        <article>
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
