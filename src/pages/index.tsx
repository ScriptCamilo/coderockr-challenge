import type { GetServerSideProps } from 'next';
import Link from 'next/link';

import Wrapper from '../components/Wrapper';
import { httpClient } from '../services/httpClient';
import { HomeProps } from '../types/custom';

export default function Home({ posts }: HomeProps) {

  return (
    <Wrapper>
      <main>
        {posts.map((post) => (
          <section key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h1>
                {post.title}
              </h1>
            </Link>
          </section>
        ))}
      </main>
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
