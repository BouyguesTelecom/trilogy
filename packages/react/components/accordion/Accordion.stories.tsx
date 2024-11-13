import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { AccordionProps } from "./AccordionProps";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "./index";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { AccordionBody, AccordionItem, AccordionHeader },
} as Meta;

export const Base: Story<AccordionProps> = (args) => (
  /* L'utilisation de l'accordion nécessite l'injection de Trilogy-Vanilla pour fonctioner :
       <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  */
  <Accordion {...args}>
    <AccordionItem id="UN" open>
      <AccordionHeader>Hello World</AccordionHeader>
      <AccordionBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem., consectetur adipiscing elit. Pellentesque risus
        mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex
        sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis
        efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
        arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
        mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis
        sodales sem.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem id="DEUX">
      <AccordionHeader>Hello World </AccordionHeader>
      <AccordionBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem id="TROIS">
      <AccordionHeader>Hello World</AccordionHeader>
      <AccordionBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem id="QUATRE" disabled>
      <AccordionHeader>Item disabled</AccordionHeader>
      <AccordionBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </AccordionBody>
    </AccordionItem>
  </Accordion>
);
