import React, { PropsWithChildren } from 'react';
import { AccordionControl, AccordionItem, AccordionPanel, UnstyledButton } from '@mantine/core';

interface PanelLinkData {
  href: string;
  text: string;
  nested?: boolean;
}

export interface PanelData {
  value: string;
  title: string;
  description: string;
  colOneLinks: PanelLinkData[];
  colTwoLinks?: PanelLinkData[];
}

interface SidebarItemProps extends PropsWithChildren {
  data: PanelData;
}

export function SidebarItem({ data }: SidebarItemProps): React.ReactElement {
  const { value, title, colOneLinks, colTwoLinks } = data;

  return (
    <AccordionItem value={value}>
      <AccordionControl>{title}</AccordionControl>
      <AccordionPanel>
        {[...(colOneLinks || []), ...(colTwoLinks || [])].map((link) => (
          <UnstyledButton
            w="100%"
            key={link.href}
            onClick={() => window.location.replace(link.href)}
            style={{ paddingLeft: link.nested ? 45 : 30 }}
          >
            {link.text}
          </UnstyledButton>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}
