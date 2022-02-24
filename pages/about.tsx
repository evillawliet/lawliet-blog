import Head from "next/head";
import Layout from "../components/layout"

const name = "lawliet";
export const siteTitle = "lawliet's Note";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>About lawliet</title>
      </Head>
      <div className="mt-8">
        <p className="text-3xl text-green-500">源于热爱，才能做好每一件事。</p>
      </div>
    </Layout>
  );
}