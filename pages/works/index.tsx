
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'

/* microCMS */
import { client } from "../../libs/client";

/* CSS */
import styles from '../../styles/Home.module.css'
import stylesWorks from '../../styles/Works.module.css'

/* MUI */
import Divider from '@mui/material/Divider';

/* Card */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* Icon */
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/* Rating */
import Rating from '@mui/material/Rating';

/* Box */
import Box from '@mui/material/Box';

/* ImageList*/
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

/* microCMS※デプロイでエラー吐くので型定義 */
type Prop = {
  works: any,
}

export default function Home({ works }:Prop) {
  return (
    <>
      <Head>
        <title>Portfolio-Site | Yoshihiro Tada</title>
        <meta name="description" content="ポートフォリオサイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <p className={stylesWorks.main}>Works</p>
          <nav className={styles.nav}>
            <ul>
              <li><a href="/">Profile</a></li>
              <li><a href="/works">Works</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/posts">Posts</a></li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>
          <section className={styles.section}>
            <h1 className={stylesWorks.h1}>Works</h1>
            <div className={stylesWorks.skillsFlex}>
                  <ImageList sx={{ maxWidth: 800, height: 800 }}  className={stylesWorks.imageGrid}>
                  {works.map((works:any) => (
                      <ImageListItem key={works}>
                        <Link href={works.link}>
                          <Image
                            src={works.imageLink}
                            height={400}
                            width={400}
                            alt={works.title}
                            className={stylesWorks.thum}
                          >
                        </Image>
                        </Link>
                        <ImageListItemBar
                          title={works.title}
                          subtitle={works.subtitle}
                        />
                      </ImageListItem>

                    ))}
                  </ImageList>
            </div>
          </section>
        </main>
        <Divider variant="middle" />
        <footer className={styles.footer}>
          <small>&copy; Yoshihiro Tada 2022</small>
        </footer>
      </div>
    </>
  )
}

/* microCMS */
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};