import styles from './AlertDialog.module.css';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const action = () => {
  console.log('action!!');
};

export default () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger className='cursor-pointer rounded-full bg-amber-600 px-4 py-2 font-bold text-amber-50'>
      open
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        className={`${styles.overlay} fixed inset-0 bg-gray-500 opacity-50`}
      />
      <AlertDialog.Content
        className={`${styles.content} fixed inset-2/4 h-fit w-4/5 max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6`}
      >
        <AlertDialog.Title className='text-2xl font-bold text-amber-600'>
          title
        </AlertDialog.Title>
        <AlertDialog.Description className='mt-4'>
          descriptin
        </AlertDialog.Description>
        <div className='mt-8 flex justify-end gap-4'>
          <AlertDialog.Cancel className='cursor-pointer rounded-md bg-gray-100 px-4 py-2 font-bold text-gray-800'>
            cancel
          </AlertDialog.Cancel>
          <AlertDialog.Action
            className='cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-bold text-amber-50'
            onClick={action}
          >
            action
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
