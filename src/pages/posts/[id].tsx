import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import Post from '../../components/Post';
import Wrapper from '../../components/Wrapper';
import { httpClient } from '../../services/httpClient';
import { BlogPostProps, PostProps } from '../../types/custom';

interface ParamsProps extends ParsedUrlQuery {
  id: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  const { isFallback } = useRouter();

  return (
    <Wrapper style="post">
      {isFallback ? <h1>Carregando...</h1> : <Post post={post} />}
    </Wrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { apiClient } = httpClient();
    const { data } = await apiClient.get<PostProps[]>('/posts');

    const paths = data.slice(0, 10).map(post => {
      return { params: { id: String(post.id) } };
    });

    return {
      paths,
      fallback: true,
    };

  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as ParamsProps;
  const { apiClient } = httpClient();

  try {
    const { data } = await apiClient<PostProps>(`posts/${id}`);

    return {
      props: {
        post: data,
      }
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
