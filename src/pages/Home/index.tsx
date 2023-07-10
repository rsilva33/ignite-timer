import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// so utilizar quando a biblioteca nao tiver um export default
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

// schema -> definir um formato e validar os dados do formulario com base nesse formato / validando um objeto
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle must be at least 5 minutes')
    .max(60, 'The cycle needs to be a maximum of 60 minutes'),
})
// Controlled -> manter em tempo real a informacao de input que o usuario prenche no estado atual guardado / Formulario simples com poucos campos
// Uncontroled -> nao monitora o valor digitado em tempo real / dashboard com diversos campos de input

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

// nao pode utilizar uma variavel javascript direto no ts por isso e necessario converter utilizando typeof
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  // register -> adiciona um input ao formulario

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  // saber o o valor do campo de task em tempo real
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">I will work on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Name your project"
            // pega todas as informacoes retornadas pelo register e acoplando no input
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
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
