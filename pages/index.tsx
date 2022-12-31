
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
            <Box sx={{ border: 1, borderRadius: '50%', width: '142px', height: '142px' }}>
              <Image src="/profile.png" alt="プロフィール写真" width={140} height={140} />
            </Box>
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
                多田吉宏です。
                現在、地元香川の手袋会社『
                <Link href="https://www.fukushin.co.jp/" target="_blank" rel="noopener noreferrer">
                  株式会社フクシン
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
                    <h3>高知工科大学 入学•卒業</h3>
                    <time>2011/04 to 2015/03</time>
                    <p>
                      幼い頃から自然環境や生物に興味があり、環境理工学群に進学しました。
                      生物•化学を中心に専攻し、海藻の成分からバイオ燃料を生成する研究をしていました。
                    </p>
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
                    <h3>モラブ阪神工業株式会社 入社•辞職</h3>
                    <time>2015/04 to 2019/09</time>
                    <p>
                      SESの企業に入社しました。学生時代はITに触れる機会はそれほどありませんでしたが、社会人研修のExcel•VBA研修を通じてITに興味を持つようになりました。<br></br>
                      やはりSESという業務形態なので、思うようなスキルの向上が難しく、たまたま興味を持ったLinux(Ubuntu)を使ってどんなコマンドがあるのか学習したり、ローカルのファイルサーバーを立ち上げてリモート接続を試してみたりしました。
                      次にHTML/CSSに興味を持ち、JavaScript(JQuery)、PHP(WordPress)...というようにWebに関係した技術の学習を進めていきました。ある程度学習が進んだ段階で、地元でWebデザイナー•フロントエンジニアとして働きたいと思い辞職しました。
                    </p>
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
                    <h3>株式会社フクシン 入社</h3>
                    <time>2020/06</time>
                    <p>
                      コロナ禍という背景もありながら、なんとか就職することができました。
                      WordPressを使えるということもあり、入社当初から企業サイトのリニューアルを任せていただきました。
                      今では企業サイトを含めた複数のサイトの更新、SNSの運用、インフルエンサーマーケティング、クラウドファンディングの管理、通販サイト(パッケージ型:futureshop)の管理などに携わっています。
                    </p>
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
                    <time>2022/07 to 2022/11</time>
                    <p>
                      4ヶ月間のブートキャンプに参加しました。
                      受講のきっかけは、社内業務だけだとどうしてもモダンな開発に触れる機会がなく、Webに関する理解のある社員も自分だけだったので次第にスキルの頭打ち感やもどかしさを感じたためです。
                      受講により得たものは多かったですが、特にMVCの考え方やチーム開発の進め方などが非常に学びが大きかったです。
                    </p>
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