import React from 'react'
import TimelineMui from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import useResponsiveSize from 'src/hooks/useResponsiveSize'

const Timeline = () => {
  const { width } = useResponsiveSize()

  return (
    <section className={`bg-background py-8`} id="timeline">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
          <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white`}>Timeline</h1>
          <p className={`max-w-lg text-center mx-auto text-base md:text-2xl text-whiteCustom font-normal mb-8`}>
            Opportunities don't happen, you create them
          </p>
          <TimelineMui classes={{positionRight: "ml-4 w-[200%] transform -translate-x-1/2"}} position={width > 768 ? 'alternate' : 'right'}>
          {/* <TimelineMui position={"alternate"}> */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-blue-600" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-whiteCustom">
                <Typography variant="h5" component="div">
                  2022
                </Typography>
                <div className="bg-whiteCustom mt-2 text-blackCustom rounded-2xl p-2">
                  <Typography variant="h6" component="div" fontWeight="600">
                    The journey begins
                  </Typography>
                  <Typography>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-blue-600" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-whiteCustom">
                <Typography variant="h5" component="div">
                  2023
                </Typography>
                <div className="bg-whiteCustom mt-2 text-blackCustom rounded-2xl p-2">
                  <Typography variant="h6" component="div" fontWeight="600">
                    The journey begins
                  </Typography>
                  <Typography>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-blue-600" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-whiteCustom">
                <Typography variant="h5" component="div">
                  2024
                </Typography>
                <div className="bg-whiteCustom mt-2 text-blackCustom rounded-2xl p-2">
                  <Typography variant="h6" component="div" fontWeight="600">
                    The journey begins
                  </Typography>
                  <Typography>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-blue-600" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="text-whiteCustom">
                <Typography variant="h5" component="div">
                  2025
                </Typography>
                <div className="bg-whiteCustom mt-2 text-blackCustom rounded-2xl p-2">
                  <Typography variant="h6" component="div" fontWeight="600">
                    The journey begins
                  </Typography>
                  <Typography>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          </TimelineMui>
        </div>
      </div>
    </section>
  )
}

export default Timeline
