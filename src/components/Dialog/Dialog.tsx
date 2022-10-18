import styles from './Dialog.module.css';
import * as Dialog from '@radix-ui/react-dialog';

export default () => (
  <Dialog.Root>
    <div>
      <Dialog.Trigger className='inline-flex rounded-full bg-rose-500 px-4 py-2 font-bold text-white'>
        button
      </Dialog.Trigger>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay
        className={`${styles['dialog-overlay']} fixed inset-0 bg-gray-500 opacity-50`}
      />
      <Dialog.Content
        className={`${styles['dialog-content']} fixed top-1/2 left-1/2 w-80 -translate-y-1/2 -translate-x-1/2 rounded-md bg-rose-50 px-8 py-4 shadow-sm`}
      >
        <Dialog.Title className='mb-4 text-3xl font-bold text-rose-500'>
          title
        </Dialog.Title>
        <Dialog.Description>
          Dialogコンポーネントのテストです
        </Dialog.Description>
        <div className='mt-8 flex justify-end'>
          <Dialog.Close className='rounded-md bg-rose-500 px-4 py-2 text-white'>
            close
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
