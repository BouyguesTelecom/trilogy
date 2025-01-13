'use client'
import { Progress, ProgressRadial } from '@trilogy-ds/react/lib/components/progress'

export default function ProgressScreen() {
  return (
    <>
      <ProgressRadial value={30} secondValue={30}>
        60/100go
      </ProgressRadial>

      <Progress value={30} />

      <Progress value={30} status='INFO' />

      <Progress value={30} status='WARNING' />

      <Progress value={30} status='ERROR' />

      <Progress value={30} status='SUCCESS' />

      <ProgressRadial value={30} secondValue={60}>
        60 / 300go
      </ProgressRadial>

      <ProgressRadial value={30} secondValue={60}>
        60/100Go
      </ProgressRadial>

      <ProgressRadial value={30} secondValue={30} small>
        6/10go
      </ProgressRadial>

      <ProgressRadial value={0} secondValue={0} description='--' />
      <ProgressRadial value={0} secondValue={0} description='--' small />
    </>
  )
}
