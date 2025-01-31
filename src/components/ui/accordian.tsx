import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const RadixAccordion = ({title, content}: any) => {
  return (
    <Accordion.Root type="single" collapsible className="w-full border">
      <Accordion.Item value="item-1" className="border-b">
        <Accordion.Trigger className="flex justify-between items-center p-4 w-full text-left font-medium focus:outline-none">
          <span>{title}</span>
          <svg
            className="w-5 h-5 transition-transform transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Accordion.Trigger>
        <Accordion.Content className="p-4 text-gray-700">
          {content}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default RadixAccordion;
