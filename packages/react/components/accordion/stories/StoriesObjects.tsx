import { AccordionBody } from "@/lib/components/accordion";
import type {AccordionBodyProps} from "@/lib/components/accordion/item/body/AccordionBodyProps";

export const defaultBodyChildren = 'Body 1'; 

export const DefaultBody = (props: AccordionBodyProps , children: string|Element) => (
<AccordionBody {...props}>{children}</AccordionBody>
);


