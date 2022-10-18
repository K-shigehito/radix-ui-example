import { LayoutWrapper } from './components/LayoutWrapper/LayoutWrapper';
import Accordion from './components/Accordion/Accordion';
import AlertDialog from './components/AlertDialog/AlertDialog';
import Checkbox from './components/Checkbox/Checkbox';
import Collapsible from './components/Collapsible/Collapsible';
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
      <LayoutWrapper title='Accordion'>
        <Accordion data={accordionData} />
      </LayoutWrapper>

      <LayoutWrapper title='AlertDialog'>
        <AlertDialog />
      </LayoutWrapper>

      <LayoutWrapper title='Checkbox'>
        <Checkbox />
      </LayoutWrapper>

      <LayoutWrapper title='Collapsible'>
        <Collapsible />
      </LayoutWrapper>

      <LayoutWrapper title='Dialog'>
        <Dialog />
      </LayoutWrapper>
    </div>
  );
};

export default App;
