import { news } from "@/public/_data/news";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Hero() {
    const [userEmail, setUserEmail] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Subscribed!");
    }
    const router = useRouter()

    return (
        <>

            <section className="hero">
                <div className="container mx-auto px-4 pt-20">
                    <h1 className="lg:text-7xl text-5xl font-black text-center my-4">
                        The news you didn&rsquo;t ask for, <br /> <span className="underline decoration-green-900 italic">but read anyway</span>
                    </h1>
                    <p className="text-center text-lg lg:text-2xl my-4 font-medium mb-4 text-gray-500">
                        Yes, but we can promise you, it is authentic and real time.
                    </p>
                    <div className="hero_btn flex flex-col mx-auto text-center justify-center">
                        {/* <Link
                            className="link_btn text-base font-semibold text-white text-center px-8 py-4 rounded bg-green-700 hover:bg-green-500 active:bg-green-500"
                            href=""
                        >
                            Get started
                        </Link> */}
                        <form className="flex justify-center gap-1" onSubmit={handleSubmit}>
                            <input className="px-5 py-3 border-2 rounded outline-none focus:border-green-700" type="email" name="email" id="email" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} placeholder="Your email" />
                            <input className="text-base font-semibold text-white text-center px-8 py-3 rounded cursor-pointer bg-green-700 hover:bg-green-500 active:bg-green-500" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <h2 className="flex justify-between items-center text-2xl font-medium text-slate-900">
                        Main story

                    </h2>
                    <div className="grid grid-cols-1  gap-4 my-5">
                        {news.slice(10, 11).map((article) => (
                            <article className="card grid grid-cols-1 lg:grid-cols-2 border shadow-sm rounded cursor-pointer" key={article.id} onClick={() => { router.push("article/?id=" + article.id) }}>
                                <div className="img_wrapper overflow-hidden">
                                    <Image className="w-100 h-auto rounded-tl rounded-bl w-full object-cover" placeholder="blur" src={article.image_url} alt={article.title} />
                                </div>
                                <div className="text_wrapper flex flex-col p-3">
                                    <span> <h3 className="text-2xl lg:text-6xl font-black  pt-4 cursor-pointer hover:underline decoration-5 decoration-green-900 text-gray-900">{article.title}</h3></span>
                                    <p className="truncate text-sm text-gray-600">{article.desc}</p>

                                    <span className="mt-auto"><p className="uppercase font-bold text-sm md:text-2xl text-gray-600">{article.sourcename}</p><p className="text-xs font-medium text-gray-500">{article.article_date}</p></span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <h2 className="flex justify-between items-center text-2xl font-bold text-gray-900">
                        Top stories{" "}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
                        {news.slice(0, 10).map((article) => (
                            <article className="card grid grid-cols-2 border shadow-sm rounded cursor-pointer" key={article.id} onClick={() => { router.push("article/?id=" + article.id) }}>
                                <div className="img_wrapper overflow-hidden">
                                    <Image className="w-100 h-auto rounded-tl rounded-bl w-full object-cover" placeholder="blur" src={article.image_url} alt={article.title} />
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
