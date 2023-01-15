
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'

/* microCMS */
import { client } from "../libs/client";

/* SEO */
import { NextSeo } from 'next-seo';

/* CSS */
import styles from '../styles/Home.module.css'
import stylesSkills from '../styles/Skills.module.css'

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
        title="Skills | Portfolio-Site | Yoshihiro Tada"
        description="習得済み・習得中のスキルやツールの使用経験についてです。"
      />
      <div className={styles.layout}>
        <header className={styles.header}>
          <p className={stylesSkills.main}>Skills</p>
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
            <h1>Skills</h1>
            <div className={stylesSkills.skillsFlex}>

            {skills.map((skills:any) => (
                  <Card sx={{ minWidth: 275, mt: "1rem" }}>
                  <CardContent>
                    <div className={stylesSkills.iconNameRatingFlex}>
                      <Image
                        src={skills.image.url}
                        width={140}
                        height={140}
                        alt={skills.alt}>
                      </Image>
                      <div className={stylesSkills.skillsName_Rating}>
                        <h2>{skills.name}</h2>
                        <Rating
                          name="read-only"
                          value={parseInt(skills.rating)}
                          readOnly />
                      </div>
                    </div>
                    <p className={stylesSkills.introduction}>
                      {skills.description}
                    </p>
                  </CardContent>
                </Card>
              ))}

            </div>
          </section>
          <section>
            <h2>Tools</h2>
            <p>その他以下、ツールの使用経験があります。</p>
            <Card sx={{ minWidth: 275, mt: "1rem" }}>
                  <CardContent>
                    <p className={stylesSkills.introduction}>
                      Git,GitHub,GitHub for Desktop,Slack,Zoom,Google Meet,Notion, VScode,Photoshop,Illustrator,...
                    </p>
                  </CardContent>
                </Card>
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