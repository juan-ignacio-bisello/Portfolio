import React from 'react'
import PropTypes from 'prop-types';
import {
    TimelineBody,
    TimelineContent,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";


export const ExperienceItem = () => {
    
  return (
    <TimelineContent>
            <TimelineTime>{ date }</TimelineTime>
            <TimelineTitle>{ title }</TimelineTitle>
            <TimelineBody>
              { description }
            </TimelineBody>
            {link && (
                <div color='gray'>
                    <a class="ml-2 h-3 w-3" href={ link } target="_blank" rel="noopener noreferrer">Más información</a>
                </div>
        )}
    </ TimelineContent >
  )
}

ExperienceItem.protoTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string
}
