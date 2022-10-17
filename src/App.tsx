import Accordion from './components/Accordion/Accordion';
import AlertDialog from './components/AlertDialog/AlertDialog';

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
      <div className='w-60'>
        <h2 className='mb-4 text-xl font-bold'>Accordion</h2>
        <Accordion data={accordionData} />
      </div>

      <div className='w-60'>
        <h2 className='mb-4 text-xl font-bold'>AlertDialog</h2>
        <AlertDialog />
      </div>
    </div>
  );
};

export default App;
