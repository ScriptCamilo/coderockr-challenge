export interface PostProps {
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

export interface HomeProps {
  posts: PostProps[];
};

export interface BlogPostProps {
  post: PostProps;
  style?: 'asSection';
  count?: number;
};
