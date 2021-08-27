import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../component/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          As a self- taught programmer, i continuous iteration to produce
          results quickly and improve my works
        </p>
        <p>
          (This is a sample website {" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
