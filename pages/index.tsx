import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stylesProfile from '../styles/Profile.module.css'

/* MUI */
import Divider from '@mui/material/Divider';

/* Card */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* Icon */
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/* Timeline */
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio-Site | Yoshihiro Tada</title>
        <meta name="description" content="ポートフォリオサイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Portfolio Site</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Posts</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Profile</h2>
          <p>画像</p>
          <p>SNSアイコン</p>
          <p className={stylesProfile.introduction}>
            多田吉宏です。
            現在、地元香川の手袋会社『
            <Link href="https://www.fukushin.co.jp/" target="_blank" rel="noopener noreferrer">
              株式会社フクシン
            </Link>』でWEBデザイナーとして働いています。
            こちらのポートフォリオサイトは、 Next.jsで作りVercelにデプロイして公開しています。
            詳しくは<Link href="/">こちら</Link>からご確認ください。
          </p>
        </section>
        <section className={styles.section}>
          <h2>History</h2>

          <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ mt: 3, mb: 4 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h3>誕生</h3>
              <time>1991/07/10</time>
              <p>香川県で生まれました。</p>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ mt: 3, mb: 4 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h3>香川コーディングブートキャンプ 受講</h3>
              <time>2022/07</time>
              <p>4ヶ月間のブートキャンプに参加しました。</p>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

    </Timeline>

        </section>
      </main>
      <Divider variant="middle" />
      <footer className={styles.footer}>
        <small>&copy; Yoshihiro Tada 2022</small>
      </footer>
    </>
  )
}