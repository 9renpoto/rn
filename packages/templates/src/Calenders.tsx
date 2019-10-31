import React, { useState } from 'react'
import { Text } from 'react-native'
import { Calendar as RNCalendar } from 'react-native-calendars'

export const Calendar = () => {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [focus, setFocus] = useState<'START' | 'END'>('START')

  return (
    <>
      <RNCalendar
        renderArrow={direction => (
          <Text>{direction === 'left' ? '<' : '>'}</Text>
        )}
        markingType="period"
        markedDates={{
          [startDate]: { startingDay: true, color: 'green' },
          [endDate]: { endingDay: true, color: 'green' },
        }}
        onDayPress={day => {
          focus === 'START'
            ? setStartDate(day.dateString)
            : setEndDate(day.dateString)
          setFocus(focus === 'START' ? 'END' : 'START')
        }}
      />
      <Text>
        start: {startDate} /end: {endDate}
      </Text>
    </>
  )
}
