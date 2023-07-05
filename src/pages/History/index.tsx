import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My historic</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 Months</td>
              <td>Complete</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
