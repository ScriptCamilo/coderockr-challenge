import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import Close from '../../assets/icons/Close';
import Send from '../../assets/icons/Send';

import { CloseButton, content, Form, overlay, SubmitButton } from './style';

interface ContactProps {
  children: ReactNode
}

export default function Contact({ children }: ContactProps) {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={overlay()} />
        <Dialog.Content className={content()}>
          <Dialog.Close asChild>
            <CloseButton
              aria-label="Close"
            >
              <Close />
            </CloseButton>
          </Dialog.Close>

          <Dialog.Title asChild>
            <h1>
              Contact
            </h1>
          </Dialog.Title>

          <Form>
            <label htmlFor="name">
              Name
              <input required type="text" name="name" id="name" placeholder="Fill your full name" />
            </label>

            <label htmlFor="email">
              E-mail
              <input required type="email" name="email" id="email" placeholder="Fill a valid e-mail" />
            </label>

            <label htmlFor="phone">
              Phone
              <input
                required
                pattern="([0-9]{2}) [0-9]{1} [0-9]{4}-[0-9]{4}"
                maxLength={16}
                type="tel"
                name="phone"
                id="phone"
                placeholder="XX X XXXX-XXXX"
              />
            </label>

            <label htmlFor="post">
              Post
              <textarea required name="post" id="post" placeholder="Hello..." />
            </label>

            <SubmitButton type="submit">
              <Send />
              Submit
            </SubmitButton>
          </Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
