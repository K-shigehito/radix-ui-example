import * as Collapsible from '@radix-ui/react-collapsible';
import { TriangleRightIcon } from '@radix-ui/react-icons';

export default () => (
  <Collapsible.Root className='w-full rounded-md border-2 border-emerald-500'>
    <div className='cursor-pointer font-bold text-emerald-500'>
      <Collapsible.Trigger className='group flex w-full items-center justify-between rounded-md bg-emerald-100 px-4 py-2 data-state-open:rounded-b-none'>
        open
        <TriangleRightIcon className='h-6 w-6 transition duration-300 group-data-state-open:rotate-90' />
      </Collapsible.Trigger>
    </div>
    <Collapsible.Content className='px-4 py-2'>content</Collapsible.Content>
  </Collapsible.Root>
);
