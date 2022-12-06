import Link from 'next/link';
import { ReactNode } from 'react';

import Contact from '../Contact';
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
          <Link href="/">Posts</Link>
          <Contact>
            <Link href='#contact'>Contact</Link>
          </Contact>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer></footer>
    </Container>
  );
}
