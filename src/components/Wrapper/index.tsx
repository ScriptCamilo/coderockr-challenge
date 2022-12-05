import { ReactNode } from 'react';

import { Container } from './style';

interface WrapperProps {
  children: ReactNode
  style?: 'post'
}

export default function Wrapper({ children, ...props}: WrapperProps) {
  return (
    <Container {...props}>
      <header>
        <h1>Rockr Blog</h1>

        <nav>
          <h2>Posts</h2>
          <h2>Contact</h2>
        </nav>
      </header>

      {children}

      <footer></footer>
    </Container>
  );
}
