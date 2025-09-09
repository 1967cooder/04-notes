const App = (props) => {
  const {notes} = props
  return (
  <>
    <p>Notes</p>
    <ul>
      <li>
        {notes[0].content}
      </li>
      <li>
        {notes[1].content}
      </li>
      <li>
        {notes[2].content}
      </li>
    </ul>
  </>
)
}
export default App