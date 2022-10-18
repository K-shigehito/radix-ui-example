import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export default () => (
  <div className='flex items-center gap-2'>
    <Checkbox.Root
      id='c1'
      defaultChecked
      className='flex h-6 w-6 items-center justify-center rounded-md border border-purple-400 bg-white p-2'
    >
      <Checkbox.Indicator className='text-purple-500'>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label htmlFor='c1' className='select-none text-lg'>
      check box test
    </label>
  </div>
);
