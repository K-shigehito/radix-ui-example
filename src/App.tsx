import { Popover, PopoverTrigger, PopoverContent } from './components/Popover';
import Accordion from './components/Accordion/Accordion';
import Dialog from './components/Dialog/Dialog';

const accordionData = [
  {
    title: 'title-1',
    content: 'content-1',
  },
  {
    title: 'title-2',
    content: 'content-2',
  },
];

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '16px',
        backgroundColor: '#f5f5f4',
        minHeight: '100vh',
      }}
    >
      <div>
        <h2 className='mb-4 text-xl font-bold'>Popover</h2>
        <Popover>
          <PopoverTrigger className='bg-indigo-500 hover:bg-indigo-600'>
            trigger
          </PopoverTrigger>
          <PopoverContent>content</PopoverContent>
        </Popover>
      </div>

      <div className='w-60'>
        <h2 className='mb-4 text-xl font-bold'>Accordion</h2>
        <Accordion data={accordionData} />
      </div>

      {/* <Dialog /> */}
    </div>
  );
};

export default App;
