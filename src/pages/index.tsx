import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Post from '../components/Post';

import Wrapper from '../components/Wrapper';
import { httpClient } from '../services/httpClient';
import { HomeProps } from '../types/custom';

export default function Home({ posts }: HomeProps) {

  return (
    <Wrapper>
        {posts.map((post, index) => (
          <section key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Post post={post} style="asSection" count={index + 1} />
            </Link>
          </section>
        ))}
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  const { apiClient } = httpClient();
  const { data } = await apiClient.get('/posts');

  return {
    props: {
      posts: data,
    },
  };
};
