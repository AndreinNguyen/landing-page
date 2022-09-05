import React from 'react'

import TimelineMui from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Typography from '@mui/material/Typography'

import useResponsiveSize from 'src/hooks/useResponsiveSize'

import config from '../config/index.json'

const Timeline = () => {
  const { width } = useResponsiveSize()
  const { timeline } = config

  return (
    <section className={`bg-background py-8`} id="timeline">
      <div className={`relative container max-w-5xl mx-auto m-8`}>
        <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
          <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white`}>{timeline.title}</h1>
          <p className={`max-w-lg text-center mx-auto text-base md:text-2xl text-whiteCustom font-normal mb-8`}>
            {timeline.description}
          </p>
          <TimelineMui
            classes={{ positionRight: 'ml-4 w-[200%] transform -translate-x-1/2' }}
            position={width > 768 ? 'alternate' : 'right'}
          >
            {timeline.items.map((el) => (
              <TimelineItem key={el.year}>
                <TimelineSeparator>
                  <TimelineDot className="bg-blue-600" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-whiteCustom">
                  <Typography variant="h5" component="div">
                    {el.year}
                  </Typography>
                  <div className="bg-whiteCustom mt-2 text-blackCustom rounded-2xl p-2">
                    <Typography variant="h6" component="div" fontWeight="600">
                      {el.title}
                    </Typography>
                    <Typography>{el.description}</Typography>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineMui>
          <div
            className={`absolute right-0 opacity-70 transform translate-x-1/5 -translate-y-1/2 md:-translate-y-1/2 md:translate-x-1/3 z-0`}
          >
            <img className="h-full md:w-1/2" src="/assets/images/circle-bg-2.png" alt="Introduce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
