import React, { useState } from 'react'
import { Text, Picker } from 'react-native'
import moment from 'moment'
import { Calendar as RNCalendar, DotMarking } from 'react-native-calendars'
import Calendar from 'react-native-calendario'

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
  type MarkType = {
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

  const marked: MarkType = {
    [startDate]: { selected: true, selectedColor: 'blue' },
  }
  bookedDates.map(
    b => (marked[b] = { disabled: true, disableTouchEvent: true }),
  )

  return (
    <>
      <RNCalendar
        renderArrow={direction => (
          <Text>{direction === 'left' ? '<' : '>'}</Text>
        )}
        markedDates={marked}
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

export const Calendario = () => {
  return (
    <Calendar
      onChange={(range: any) => console.log(range)}
      minDate="2018-04-20"
      startDate="2018-04-30"
      endDate="2018-05-05"
      theme={{
        activeDayColor: {},
        monthTitleTextStyle: {
          color: '#6d95da',
          fontWeight: '300',
          fontSize: 16,
        },
        emptyMonthContainerStyle: {},
        emptyMonthTextStyle: {
          fontWeight: '200',
        },
        weekColumnsContainerStyle: {},
        weekColumnStyle: {
          paddingVertical: 10,
        },
        weekColumnTextStyle: {
          color: '#b6c1cd',
          fontSize: 13,
        },
        nonTouchableDayContainerStyle: {},
        nonTouchableDayTextStyle: {},
        startDateContainerStyle: {},
        endDateContainerStyle: {},
        dayContainerStyle: {},
        dayTextStyle: {
          color: '#2d4150',
          fontWeight: '200',
          fontSize: 15,
        },
        dayOutOfRangeContainerStyle: {},
        dayOutOfRangeTextStyle: {},
        todayContainerStyle: {},
        todayTextStyle: {
          color: '#6d95da',
        },
        activeDayContainerStyle: {
          backgroundColor: '#6d95da',
        },
        activeDayTextStyle: {
          color: 'white',
        },
        nonTouchableLastMonthDayTextStyle: {},
      }}
    />
  )
}
