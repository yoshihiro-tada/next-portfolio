
import Link from 'next/link';
import Image from 'next/image'

/* CSS */
import styles from '../styles/Home.module.css'
import stylesProfile from '../styles/Profile.module.css'

/* microCMS */
import { client } from "../libs/client";

/*~~~~~~~~~
  ▼MUI
 ~~~~~~~~*/
/* Diver */
import Divider from '@mui/material/Divider';

/* Avatar */
import Avatar from '@mui/material/Avatar';

/* Card */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* Icon */
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

/* Box */
import Box from '@mui/material/Box';

/* Timeline */
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { StylesContext } from '@material-ui/styles';
/*~~~~~~~~~
  ▲MUI
 ~~~~~~~~*/

/* microCMS※デプロイでエラー吐くので型定義 */
type Prop = {
  history: any,
}

/* SEO */
import { NextSeo } from 'next-seo';

export default function Home({ history }:Prop) {
  return (
    <>
      <NextSeo
        title="Portfolio-Site | Yoshihiro Tada"
        description="こちらのポートフォリオサイトは、 Next.jsで作りVercelにデプロイして公開しています。"
      />
      <div className={styles.layout}>
        <header className={styles.header}>
          <h1>Portfolio Site</h1>
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
            <h2>Profile</h2>
            <div className={stylesProfile.profileFlex}>
                <Avatar alt="プロフィール写真" src="/profile.jpg"
                  sx={{ width: 140, height: 140, boxShadow: 3 }}
                />
              <div className={stylesProfile.snsFlex}>
                <Link href="https://www.facebook.com/yoshihiro.tada.718/" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link href="https://twitter.com/yoshihirotada1" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link href="mailto:shyuwatx@gmail.com" target="_blank" rel="noopener noreferrer">
                  <EmailIcon fontSize="large" />
                </Link>
                <Link href="https://github.com/yoshihiro-tada" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large" />
                </Link>
              </div>
            </div>
            <Card sx={{ minWidth: 275, mt: "1rem" }}>
              <CardContent>
                <p className={stylesProfile.introduction}>
                  多田吉宏です。<br></br>
                  現在、地元香川の手袋会社『
                  <Link href="https://www.fukushin.co.jp/" target="_blank" rel="noopener noreferrer">
                    株式会社フクシン<OpenInNewIcon sx={{ fontSize: 14 }} />
                  </Link>』でWEBデザイナーとして働いています。
                  こちらのポートフォリオサイトは、 Next.jsで作りVercelにデプロイして公開しています。
                  詳しくは<Link href="/">こちら</Link>からご確認ください。
                </p>
              </CardContent>
            </Card>
          </section>
          <Divider />
          <section className={styles.section}>
            <h2 className={stylesProfile.history}>History</h2>
            <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            >
              {history.map((history:any) => (
                              <TimelineItem>
                              <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent sx={{ mt: 3, mb: 4 }}>
                                <Card sx={{ minWidth: 275 }}>
                                  <CardContent>
                                    <h3>{history.event}</h3>
                                    <time className={stylesProfile.time}>{history.date}</time>
                                    <div className={stylesProfile.historyContent}>
                                      <p>{history.overview}</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </TimelineContent>
                            </TimelineItem>
              ))}
            </Timeline>
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
  const data = await client.get({ endpoint: "history" });

  return {
    props: {
      history: data.contents,
    },
  };
};