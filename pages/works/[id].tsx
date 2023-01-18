
import Link from 'next/link';
import Image from 'next/image'

/* microCMS */
import { client } from "../../libs/client";

/* SEO */
import { NextSeo } from 'next-seo';

/* CSS */
import styles from '../../styles/Home.module.css'
import stylesWorksDetail from '../../styles/WorksDetail.module.css'

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

export default function WorkId({ works }:Prop) {
  return (
    <>
      <NextSeo
        title="Works Detail | Portfolio-Site | Yoshihiro Tada"
        description="作品の詳細です。"
      />
      <div className={styles.layout}>
        <header className={styles.header}>
          <p className={stylesWorksDetail.main}>Work Detail</p>
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
          <Image
            src={works.imageLink}
            height={400}
            width={400}
            alt={works.title}
            className={stylesWorksDetail.thum}
          >
          </Image>
          <div className={stylesWorksDetail.titles}>
            <h1 className={stylesWorksDetail.h1}>{works.title}</h1>
            <Link href={works.link} target="_blank" rel="noopener noreferrer" className={stylesWorksDetail.worksLink}>
              <OpenInNewIcon sx={{ fontSize: 20 }} />
            </Link>
            <p className={stylesWorksDetail.subtitle}>{works.subtitle}</p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${works.tech_stack}`,
            }}
          />
          <div>{works.role}</div>
          <div>{works.term}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${works.feature}`,
            }}
           />
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

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((feature:any) => `/works/${feature.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (feature:any) => {
  const id = feature.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};