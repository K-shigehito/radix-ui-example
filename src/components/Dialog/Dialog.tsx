import styles from './Dialog.module.css';
import * as Dialog from '@radix-ui/react-dialog';

export default () => (
  <Dialog.Root>
    <div>
      <Dialog.Trigger className='inline-flex rounded-full bg-pink-500 px-4 py-2 font-bold text-white'>
        open
      </Dialog.Trigger>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay
        className={`${styles['dialog-overlay']} fixed inset-0 bg-gray-500 opacity-50`}
      />
      <Dialog.Content
        className={`${styles['dialog-content']} fixed top-1/2 left-1/2 w-4/5 max-w-lg -translate-y-1/2 -translate-x-1/2 rounded-md bg-pink-50 px-8 py-4 shadow-md`}
      >
        <Dialog.Title className='mb-4 text-3xl font-bold text-pink-500'>
          title
        </Dialog.Title>
        <Dialog.Description>This is Dialog component.</Dialog.Description>
        <div className='mt-8 flex justify-end'>
          <Dialog.Close className='rounded-md bg-pink-500 px-4 py-2 text-white'>
            close
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
