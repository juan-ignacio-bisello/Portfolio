import {
    Timeline,
  } from "flowbite-react";
import { ExperienceItem } from "./ExperienceItem";
  
const EXPERIENCE = [
    {
        date: 'February 2022',
        title: 'Application UI code in Tailwind CSS',
        description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        link: '#',
        
        date: 'March 2022',
        title: 'Marketing UI design in Figma',
        description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        link: '#',

        date: 'April 2022',
        title: 'E-Commerce UI code in Tailwind CSS',
        description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
        link: '#',
    }
];

  export function Experience() {
    return (
      <Timeline>
        {
            EXPERIENCE.map( experience => (
                <li class='mb-10 ms-4' >
                    <ExperienceItem { ...experience } />
                </li>
            ))
        }
        {/* <TimelineItem>
          <TimelinePoint />

          <TimelineContent>
            <TimelineTime>February 2022</TimelineTime>
            <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
            <TimelineBody>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </TimelineBody>
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>March 2022</TimelineTime>
            <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
            <TimelineBody>
              All of the pages and components are first designed in Figma and we keep a parity between the two versions
              even as we update the project.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>April 2022</TimelineTime>
            <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
            <TimelineBody>
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>
    );
  }
  