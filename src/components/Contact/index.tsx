import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent, ReactNode } from 'react';

interface ContactProps {
  children: ReactNode
}

export default function Contact({ children }: ContactProps) {

  const handleContact = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay/>
        <Dialog.Content>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
            >
              Fechar
            </button>
          </Dialog.Close>

          <Dialog.Title asChild>
            <h1>
              Contact
            </h1>
          </Dialog.Title>

          <form
            onSubmit={handleContact}
          >
            <label htmlFor="" className="">
              <input type="text" name="" id="" />
            </label>

            <label htmlFor="">
              <input type="text" name="" id="" />
            </label>

            <button disabled type="submit">
              Submit
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
