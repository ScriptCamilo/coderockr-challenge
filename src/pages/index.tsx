import { GetServerSideProps } from 'next';

import Wrapper from '../components/Wrapper';
import { httpClient } from '../services/httpClient';

interface PostProps {
  id: number;
  author: {
    name: string;
    mail: string;
  };
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

interface HomeProps {
  posts: PostProps[];
}

export default function Home({ posts }: HomeProps) {

  return (
    <Wrapper>
      <main>
        {posts?.map((post) => (
          <section key={post.id}>
            <h1>
              {post.title}
            </h1>
          </section>
        ))}
      </main>
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { httpClient: apiClient } = httpClient(ctx);
  const { data } = await apiClient.get('/posts');

  return {
    props: {
      posts: data,
    },
  };
};
