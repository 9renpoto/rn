import React, { useState } from 'react'
import { Text, Picker } from 'react-native'
import moment from 'moment'
import { Calendar as RNCalendar, DotMarking } from 'react-native-calendars'

export const CalendarStartEnd = () => {
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

export const CalendarStartPeriod = () => {
  type BookedType = {
    [k: string]: DotMarking
  }
  type Period = 3 | 4 | 5 | 6 | 7 | 8 | 9
  const rentalPeriods: Period[] = [3, 4, 5, 6, 7, 8, 9]
  const [startDate, setStartDate] = useState<string>('')
  const [period, setPeriod] = useState<Period>(3)
  const bookedDates = [
    moment()
      .add(7, 'day')
      .format('YYYY-MM-DD'),
    moment()
      .add(10, 'day')
      .format('YYYY-MM-DD'),
  ]

  const booked: BookedType = {
    [startDate]: { selected: true, selectedColor: 'blue' },
  }
  bookedDates.map(
    b => (booked[b] = { disabled: true, disableTouchEvent: true }),
  )

  return (
    <>
      <RNCalendar
        renderArrow={direction => (
          <Text>{direction === 'left' ? '<' : '>'}</Text>
        )}
        markedDates={booked}
        onDayPress={day => {
          setStartDate(day.dateString)
        }}
      />
      <Picker
        selectedValue={period}
        onValueChange={(itemVal: Period) => setPeriod(itemVal)}
      >
        {rentalPeriods.map(p => (
          <Picker.Item label={p.toString()} value={p} />
        ))}
      </Picker>
      {startDate && (
        <Text>
          開始日: {startDate} {period}泊{Number(period) + 1}日{' '}
          {moment(startDate)
            .add(period, 'days')
            .format('YYYY-MM-DD')}
          日まで
        </Text>
      )}
      {startDate &&
        period &&
        (bookedDates.some(b => {
          return (
            moment(b).isBetween(
              moment(startDate),
              moment(startDate).add(Number(period) + 1, 'days'),
            ) || moment(startDate).isBefore(moment())
          )
        }) ? (
          <Text>Unavailable !!!!!</Text>
        ) : (
          <Text>Available</Text>
        ))}
    </>
  )
}
