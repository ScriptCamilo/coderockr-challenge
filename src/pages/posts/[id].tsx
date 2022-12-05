import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Post from '../../components/Post';

import Wrapper from '../../components/Wrapper';
import { httpClient } from '../../services/httpClient';
import { BlogPostProps, PostProps } from '../../types/custom';

interface ParamsProps extends ParsedUrlQuery {
  id: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Wrapper style="post">
      <Post post={post} />
    </Wrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { apiClient } = httpClient();
    const { data } = await apiClient.get<PostProps[]>('/posts');

    const paths = data.map(post => {
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
  console.log(ctx.params);

  try {
    const { data } = await apiClient(`posts/${id}`);

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
