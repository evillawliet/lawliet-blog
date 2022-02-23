import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import { GetStaticProps } from "next"

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-12 mb-5">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-6">
              <Link href={`/notes/${id}`}>
                <a className="hover:text-green-300 focus:text-green-300 text-3xl text-green-500 font-bold">{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
