import React from 'react';
import Image from 'next/image';
import Chatting from '../../assets/chatting.png';
import Link from 'next/link';
import styles from './articleid.module.scss';

export default function Article() {
  return (
    <div className={styles['container']}>
      <div className={styles['back-link']}>
        <Link href='/'>&lt; Back to home</Link>
      </div>
      <div className={styles['article-container']}>
        <div className={styles['article-image-main']}>
          <Image src={Chatting} width={800} height={400} alt='Chatting' />
        </div>
        <p className={styles['article-date']}>3 Januari 2022</p>
        <h3 className={styles['article-title']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsam!
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos amet delectus eveniet alias praesentium
          illo rem cum pariatur voluptatem suscipit sunt voluptatum, laboriosam modi tempora in corrupti placeat
          possimus vel ullam consectetur nemo vero! Consequatur ea animi, vitae recusandae excepturi consectetur iste
          rem, suscipit impedit maxime autem nisi illo? Consectetur tenetur eum laboriosam aliquam fuga adipisci
          consequuntur quisquam maiores eligendi, nulla labore tempora nihil illum modi deserunt dolore exercitationem
          ipsa similique at aut esse impedit, temporibus possimus. Maxime, voluptatem voluptates rerum tempora
          temporibus aperiam accusantium iure explicabo inventore corporis cumque voluptas optio quidem quis nostrum
          quibusdam distinctio itaque sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos amet delectus eveniet alias praesentium
          illo rem cum pariatur voluptatem suscipit sunt voluptatum, laboriosam modi tempora in corrupti placeat
          possimus vel ullam consectetur nemo vero! Consequatur ea animi, vitae recusandae excepturi consectetur iste
          rem, suscipit impedit maxime autem nisi illo? Consectetur tenetur eum laboriosam aliquam fuga adipisci
          consequuntur quisquam maiores eligendi, nulla labore tempora nihil illum modi deserunt dolore exercitationem
          ipsa similique at aut esse impedit, temporibus possimus. Maxime, voluptatem voluptates rerum tempora
          temporibus aperiam accusantium iure explicabo inventore corporis cumque voluptas optio quidem quis nostrum
          quibusdam distinctio itaque sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos amet delectus eveniet alias praesentium
          illo rem cum pariatur voluptatem suscipit sunt voluptatum, laboriosam modi tempora in corrupti placeat
          possimus vel ullam consectetur nemo vero! Consequatur ea animi, vitae recusandae excepturi consectetur iste
          rem, suscipit impedit maxime autem nisi illo? Consectetur tenetur eum laboriosam aliquam fuga adipisci
          consequuntur quisquam maiores eligendi, nulla labore tempora nihil illum modi deserunt dolore exercitationem
          ipsa similique at aut esse impedit, temporibus possimus. Maxime, voluptatem voluptates rerum tempora
          temporibus aperiam accusantium iure explicabo inventore corporis cumque voluptas optio quidem quis nostrum
          quibusdam distinctio itaque sequi!
        </p>
        <div className={styles['article-image-sub']}>
          <Image src={Chatting} width={600} height={300} alt='Chatting' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos amet delectus eveniet alias praesentium
          illo rem cum pariatur voluptatem suscipit sunt voluptatum, laboriosam modi tempora in corrupti placeat
          possimus vel ullam consectetur nemo vero! Consequatur ea animi, vitae recusandae excepturi consectetur iste
          rem, suscipit impedit maxime autem nisi illo? Consectetur tenetur eum laboriosam aliquam fuga adipisci
          consequuntur quisquam maiores eligendi, nulla labore tempora nihil illum modi deserunt dolore exercitationem
          ipsa similique at aut esse impedit, temporibus possimus. Maxime, voluptatem voluptates rerum tempora
          temporibus aperiam accusantium iure explicabo inventore corporis cumque voluptas optio quidem quis nostrum
          quibusdam distinctio itaque sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos amet delectus eveniet alias praesentium
          illo rem cum pariatur voluptatem suscipit sunt voluptatum, laboriosam modi tempora in corrupti placeat
          possimus vel ullam consectetur nemo vero! Consequatur ea animi, vitae recusandae excepturi consectetur iste
          rem, suscipit impedit maxime autem nisi illo? Consectetur tenetur eum laboriosam aliquam fuga adipisci
          consequuntur quisquam maiores eligendi, nulla labore tempora nihil illum modi deserunt dolore exercitationem
          ipsa similique at aut esse impedit, temporibus possimus. Maxime, voluptatem voluptates rerum tempora
          temporibus aperiam accusantium iure explicabo inventore corporis cumque voluptas optio quidem quis nostrum
          quibusdam distinctio itaque sequi!
        </p>
      </div>
    </div>
  );
}
