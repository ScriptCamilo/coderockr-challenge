import { ReactNode } from 'react';

import { Container } from './style';

interface WrapperProps {
  children: ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <Container>
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
