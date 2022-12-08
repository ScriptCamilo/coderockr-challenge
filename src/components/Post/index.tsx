import Image from 'next/image';
import ReadMore from '../../assets/icons/ReadMore';

import { BlogPostProps } from '../../types/custom';
import { Container, Content, Figure, Header, readMoreIcon } from './style';


export default function Post({ post, style, count }: BlogPostProps) {
  const [dateValidFormat] = post.createdAt.split('Z');
  const isPostCountEven = count % 2 === 0 ? 'even' : undefined;
  const date = new Date(dateValidFormat);
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  } as const;
  const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <Container style={style} side={isPostCountEven} >
      <Figure style={style}>
        <Image src={post.image} alt="Post image" height={640} width={640}/>
      </Figure>

      <Header style={style}>
        <h1>{post.title}</h1>

        <p>{post.author.name}</p>

        <small>{dateFormat}</small>
      </Header>

      <hr />

      <Content style={style}>
        <p>{post.content}</p>
      </Content>

      <ReadMore className={readMoreIcon()} />
    </Container>
  );
}
