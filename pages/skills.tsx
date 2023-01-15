
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

/* skillsを配列にする */
const SKILLS = [
  {
    image_src: "/skills/html_css.png",
    alt: "html/css logo",
    name: "THML/CSS",
    rating: "4",
    content: "正しいタグの使い方を意識したコーディング、レスポンシブデザインなどが可能です。"
  },
  {
    image_src: "/skills/jquery.png",
    alt: "JQuery logo",
    name: "JavaScript(Plane,JQuery)",
    rating: "3",
    content: "基本的な構文であれば記述できます。"
  },
  {
    image_src: "/skills/wordpress.png",
    alt: "WordPress logo",
    name: "PHP(WordPress)",
    rating: "4",
    content: "テーマの作成や、PHPを記述して機能を追加することも可能です。可能な限りプラグインを使用しない開発を心がけています。"
  },
  {
    image_src: "/skills/nextjs.png",
    alt: "Next.js logo",
    name: "JavaScript(FW)",
    rating: "3",
    content: "使用経験だけであれば、Angular、 Vue.js、React、Gatsby.jsなどがあります。只今 Next.jsを中心に学習しています。"
  },
  {
    image_src: "/skills/rails.png",
    alt: "Ruby on Rails logo",
    name: "Ruby(on Rails)",
    rating: "3",
    content: "MVCに則った記述が可能です。APIモードでの作成はまだしたことがありません。"
  },
  {
    image_src: "/skills/nestjs.svg",
    alt: "Nest.js logo",
    name: "Nest.js",
    rating: "2",
    content: "Next.jsと同じく TypeScriptで書けると言うので只今学習中です。"
  },
  {
    image_src: "/skills/ubuntu.png",
    alt: "Ubuntu logo",
    name: "Linux(Ubuntu,Raspberry Pi)",
    rating: "3",
    content: "コマンド操作、ファイルサーバーの構築などが可能です。OSをマシンにインストールした経験もあります。Raspberry Piを使用した経験もあります。"
  }
]

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