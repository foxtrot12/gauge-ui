
import McqMultiselect from './answerComponents/mcqMultiSelect/mcqMultiselect'
import './App.css'

function App() {

  const options = [
    {
      label: "Option 1",
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    },
    {
      label: "Option 3",
      value: 3
    },
    {
      label: "Option 4",
      value: 4
    }
  ]

  return (
    <>
    <McqMultiselect options={options} name='test'/>
    </>
  )
}

export default App
