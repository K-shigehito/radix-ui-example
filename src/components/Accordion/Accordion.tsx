import styles from './Accordion.module.css';
import * as Accordion from '@radix-ui/react-accordion';

type Item = {
  title: string;
  content: string;
};

type Props = {
  data: Item[];
};

export default ({ data }: Props) => (
  <div>
    <Accordion.Root
      type='single'
      className='divide-y divide-gray-200 rounded-md border border-gray-400'
    >
      {data.map((item) => (
        <Accordion.Item value={item.title} className='' key={item.title}>
          <Accordion.Trigger className='flex w-full items-center justify-between bg-indigo-500 px-4 py-2 text-indigo-50'>
            {item.title}
          </Accordion.Trigger>
          <Accordion.Content
            className={`${styles['accordion-content']} overflow-hidden`}
          >
            <div className='px-4 py-2'>{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  </div>
);
