import React from "react";
import { news } from "@/public/_data/news";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

function Article() {
    const router = useRouter();
    const { id } = router.query;
    const articleDetail = news?.find((x: any) => x.id === Number(id));
    return (
        <>
            <Navbar>
                {"Go back"}
            </Navbar>
            <main>
                <div className="container mx-auto p-5">
                    <article className="mx-auto mt-10 grid grid-cols-1 w-auto lg:grid-cols-2 h-100 shadow">
                        <div className=" overflow-hidden">
                            <Image
                                placeholder="blur"
                                className="w-100 h-auto rounded-tl rounded-bl w-full object-cover"
                                src={articleDetail?.image_url}
                                alt={""}
                            />
                        </div>
                        <div className="text_wrapper flex flex-col p-5">
                            <span>
                                <h1 className="text-2xl lg:text-4xl mb-3 font-black  pt-4 cursor-pointer hover:underline decoration-5 decoration-green-900 text-gray-900">
                                    {articleDetail?.title}
                                </h1>
                            </span>{" "}
                            <h3>{articleDetail?.desc}</h3>

                            <span className="mt-auto">
                                <Link className="text-gray-600 font-bold" href={`${articleDetail?.sourcelink}`}>
                                    {articleDetail?.sourcename.toUpperCase()}
                                </Link>


                                <p className="text-gray-500 font-medium">{articleDetail?.article_date}</p>
                            </span>

                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}

export default Article;
