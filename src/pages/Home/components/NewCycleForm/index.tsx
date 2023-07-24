import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from '../../styles'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task'),
  minutesAmount: zod
    .number()
    .min(1, 'The cycle must be at least 1 minute')
    .max(60, 'The cycle needs to be a maximum of 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="">I will work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Name your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="1" />
        <option value="2" />
        <option value="3" />
      </datalist>

      <label htmlFor="minutesAmount">during</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
