import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "lawliet";
export const siteTitle = "lawliet's Note";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="lawliet, cos, blog." />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="h-24 shadow">
        <div className="max-w-screen-xl w-11/12 h-full flex flex-row justify-between mx-auto items-center">
          <Link href="/">
            <a className={home ? "text-4xl" : "text-4xl text-green-500"}>LAWLIET</a>
          </Link>
          <Link href="/about">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                height={48}
                width={48}
                alt={name}
              />
            </a>
          </Link>
        </div>
      </header>
      <main className="flex-1 max-w-screen-xl w-11/12 mx-auto overflow-auto">
        {children}
        {!home && (
          <div className="my-4">
            <Link href="/">
              <a className="text-green-500">← Back to home</a>
            </Link>
          </div>
        )}
      </main>
      <footer className="leading-10 text-gray-400 text-center border-t-2 border-gray-100">
        © I can fly. - lawliet
      </footer>
    </div>
  );
}
