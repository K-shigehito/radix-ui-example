import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { withClassName } from '../../utils/withClassName';
import styles from './Accordion.module.css';

export const Accordion = withClassName(AccordionPrimitive.Root, styles.route);

export const AccordionItem = withClassName(
  AccordionPrimitive.Item,
  styles.item,
);
export const AccordionHeader = withClassName(
  AccordionPrimitive.Header,
  styles.header,
);
export const AccordionContent = withClassName(
  AccordionPrimitive.Content,
  styles.content,
);
export const AccordionTrigger = withClassName(
  AccordionPrimitive.Trigger,
  styles.trigger,
);
