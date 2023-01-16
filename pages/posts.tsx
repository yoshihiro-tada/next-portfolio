
import Link from 'next/link';
import Image from 'next/image'

/* microCMS */
import { client } from "../libs/client";

/* SEO */
import { NextSeo } from 'next-seo';

/* CSS */
import styles from '../styles/Home.module.css'
import stylesPosts from '../styles/Posts.module.css'

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

/* microCMS※デプロイでエラー吐くので型定義 */
type Prop = {
  skills: any,
}

export default function Home({ skills }:Prop) {
  return (
    <>
      <NextSeo
        title="Posts | Portfolio-Site | Yoshihiro Tada"
        description="Zennの投稿内容をAPIを用いて一覧表示させています。"
      />
      <div className={styles.layout}>
        <header className={styles.header}>
          <p className={stylesPosts.main}>Posts</p>
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
            <h1>Posts</h1>
            <p className={stylesPosts.zennInfo}>
            <Link href="https://zenn.dev/yoshihiro_tada" target="_blank" rel="noopener noreferrer">
              Zennの投稿内容
            </Link>
            をAPIを用いて一覧表示させる予定です。</p>
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
  const data = await client.get({ endpoint: "skills" });

  return {
    props: {
      skills: data.contents,
    },
  };
};