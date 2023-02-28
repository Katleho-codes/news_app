import Link from "next/link";
import { news } from "@/public/_data/news";
import Image from "next/image";


export default function Hero() {

    return (
        <>

            <section className="hero">
                <div className="container mx-auto px-4 pt-20">
                    <h1 className="text-7xl font-black text-center my-4">
                        The news you didn&rsquo;t ask for, <br /> <span className="underline decoration-green-900 italic">but read anyway</span>
                    </h1>
                    <p className="text-center text-2xl my-4 font-medium mb-4 text-gray-500">
                        Yes, but we can promise you, it is authentic and real time.
                    </p>
                    <div className="hero_btn flex justify-center">
                        <Link
                            className="link_btn text-base font-semibold text-white text-center px-8 py-4 rounded bg-green-700 hover:bg-green-500 active:bg-green-500"
                            href=""
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </section>
            {/* <section className="py-10">
                <div className="container mx-auto px-4">
                    <h2 className="flex justify-between items-center text-2xl font-medium text-slate-900">
                        Main story

                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {news.slice(10, 11).map((article) => (
                            <article className="card" key={article.id}>
                                <h3>{article.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <h2 className="flex justify-between items-center text-2xl font-bold text-gray-900">
                        Top stories{" "}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
                        {news.slice(0, 10).map((article) => (
                            <article className="card grid grid-cols-2 border shadow-sm rounded-2 cursor-pointer" key={article.id}>
                                <div className="img_wrapper overflow-hidden">
                                    <Image className="w-100 h-auto rounded-tl rounded-bl" placeholder="blur" src={article.image_url} alt={article.title} />
                                </div>
                                <div className="text_wrapper flex flex-col p-3">
                                    <span> <h3 className="truncate pt-4 cursor-pointer hover:underline decoration-2 decoration-green-900 font-bold text-gray-900">{article.title}</h3></span>
                                    <p className="truncate text-sm text-gray-600">{article.desc}</p>

                                    <span className="mt-auto"><p className="uppercase font-bold text-sm text-gray-600">{article.sourcename}</p><p className="text-xs font-medium text-gray-500">{article.article_date}</p></span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
