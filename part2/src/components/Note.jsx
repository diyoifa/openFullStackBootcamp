// const Note = ({note}) => {

//     return (
//       <li>{note.content}</li>
//     )
//   }
// export default Note;

//D
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note;