import React from 'react'

export const CalendarScreen = (): JSX.Element => {
  const getWeeksInMonth = (year, month) => {
    const date = new Date(year, month - 1, 1)
    const days: Array<Date | null> = []
    const firstDayOfMonth = date.getDay()
    const lastDayOfMonth = new Date(year, month, 0).getDate()
    const weeks: Array<(Date | null)[]> = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    for (let day: number = 1; day <= lastDayOfMonth; day++) {
      days.push(new Date(year, month - 1, day))
    }

    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }

    return weeks
  }

  const activeYear = 2025
  const activeMonth = 5
  const weeksInMonth = getWeeksInMonth(activeYear, activeMonth)

  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Venderedi', 'Samedi']

  return (
    <>
      <style>{`
        .calendar {
          border-collapse: collapse;
        }
        .calendar-header {
          background-color: #f4f4f4;
        }
        .calendar-week-day-label {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          text-align: center;
        }
        .calendar-week-day {
          padding: 10px;
          border: 1px solid #ddd;
          width: 40px;
          height: 40px;
          text-align: center !important;
          vertical-align: middle;
        }
      `}</style>

      <table className='calendar'>
        <thead className='calendar-header'>
          <tr className='calendar-week-day-labels'>
            {days.map((day, index) => {
              return (
                <th className='calendar-week-day-label' key={index}>
                  {day.slice(0, 3)}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className='calendar-body'>
          {weeksInMonth.map((week, weekIndex) => (
            <tr key={weekIndex} className='calendar-week'>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className='calendar-week-day' aria-selected='false' data-timestamp={day?.getTime()}>
                  {day ? day.getDate() : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
