import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "./lib/api";
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae, accusantium totam nemo quidem placeat doloremque quam veniam at aut modi minus qui explicabo, minima, earum odit atque fugit soluta.</p>
      </div>

    <PostList posts={posts}></PostList>
    </>
  );
}
