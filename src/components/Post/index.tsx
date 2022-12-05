import Image from 'next/image';

import { BlogPostProps } from '../../types/custom';
import { Container, Content, Description, Header } from './style';


export default function Post({ post }: BlogPostProps) {
  const [dateValidFormat] = post.createdAt.split('Z');
  const date = new Date(dateValidFormat);
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  } as const;
  const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <Container>
      <Header>
        <figure>
          <Image src={post.image} alt="Post image" fill/>
        </figure>

        <Description>
          <h1>{post.title}</h1>

          <p>{post.author.name}</p>

          <small>{dateFormat}</small>
        </Description>
      </Header>

      <hr />

      <Content>
        <p>{post.content}</p>
      </Content>
    </Container>
  );
}
