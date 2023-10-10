//A

//ejercicio 2.1 - 2.5 
// import React from 'react'
// import Course from './components/Course'
// const App = () => {
//     const courses = [
//         {
//           name: 'Half Stack application development',
//           id: 1,
//           parts: [
//             {
//               name: 'Fundamentals of React',
//               exercises: 10,
//               id: 1,
//             },
//             {
//               name: 'Using props to pass data',
//               exercises: 7,
//               id: 2,
//             },
//             {
//               name: 'State of a component',
//               exercises: 14,
//               id: 3,
//             },
//             {
//               name: 'Redux',
//               exercises: 11,
//               id: 4,
//             },
//           ],
//         },
//         {
//           name: 'Node.js',
//           id: 2,
//           parts: [
//             {
//               name: 'Routing',
//               exercises: 3,
//               id: 1,
//             },
//             {
//               name: 'Middlewares',
//               exercises: 7,
//               id: 2,
//             },
//           ],
//         },
//       ]
//     // const  
//     // let total = 0
//     // for(const course of courses){
//     //     total += course.parts.reduce((s, p) => s + p.exercises, 0)
//     // }

//     return (
//     <>
//         <h1>Web development curriculum</h1>
//         <div>
//             {
//                 courses.map(course => <Course key={course.id} course={course} />)
//             }

//         </div>
//         {/* <Total total={total} /> */}
//     </>
//     )
//   }

// export default App


//explicacion 
// import React from 'react'
// import { useState } from 'react'
// import Note from './components/Note'
// const App = (props) => {
//     const [notes, setNotes] = useState(props.notes)
//     const [newNote, setNewNote] = useState(
//         'a new note...'
//     )
//     const [showAll, setShowAll] = useState(true)
//     const addNote = (event) => {
//         event.preventDefault()
//         console.log('button clicked', event.target)
//         const noteObject = {
//             content: newNote,
//             date: new Date().toISOString,
//             important: Math.random() < 0.5,
//             id: notes.lenght + 1
//         }
//         setNotes([...notes, noteObject])
//         setNewNote("")
//     }
//     const handleNoteChange = (event) => {
//         console.log(event.target.value)
//         setNewNote(event.target.value)
//     }

//     const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
//     return (
//         <>
//             <div>
//                 <h1>Notes</h1>
//                 <div>
//                     <button onClick={() => setShowAll(!showAll)}>
//                         show {showAll ? 'important' : 'all'}
//                     </button>
//                 </div>
//                 <ul>
//                     {notesToShow.map(note =>
//                         <Note key={note.id} note={note} />
//                     )}
//                 </ul>
//                 <form onSubmit={addNote}>
//                     <input
//                         value={newNote}
//                         onChange={handleNoteChange}
//                     />
//                     <button type="submit">save</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default App

//B
//Ejercicios 2.6 - 2.10
// import React, { useState } from 'react'
// import Filter from './components/Filter'
// import Form from './components/Form'
// import Persons from './components/Persons'
// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ])
//   const [filter, setFilter] = useState([])
//   const [showAll, setShowAll] = useState(true);
//   const [newPerson, setNewPerson] = useState({ name: '', phone: ''})

//   const filterPersons = (event) => {
//       setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
//   }
//   const showFiltered = () => {setShowAll(!showAll)}

//   const checkName = (name) => {
//     let check = false
//     persons.forEach(person => {
//       if (person.name === name) {
//         check = true
//       }
//     })
//     return check
//   }
//   const handleClickAdd = (event) => {
//     event.preventDefault()
//     const newPersonObject = {
//       name: newPerson.name,
//       phone: newPerson.phone
//     }
//     console.log("🚀 ~ file: App.js:154 ~ handleClickAdd ~ newPersonObject:", newPersonObject)

//     checkName(newPerson.name) ? alert(`${newPerson.name} is already added to phonebook`) : 
//     setPersons(persons.concat(newPersonObject))
//     // setPersons([...persons, newPersonObject])
//     setNewPerson('')
//   }
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewPerson({ ...newPerson, [name]: value });
//   }
//   // const handleNameChange = (event) => {
//   //   setNewName(event.target.value)
//   // }
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>
//           {/* filter shown with : <input name='filter'  onChange={filterPersons} /> */}
//           <Filter persons={persons} setFilter={setFilter} filterPersons={filterPersons}/>
//           <button onClick={showFiltered}>{showAll ? 'show filtered' : 'show all'}</button>
//       </div>
//       <Form newPerson={newPerson} handleChange={handleChange} handleClickAdd={handleClickAdd} />
//       {/* <form>
//         <div>
//           name: <input name='name'  onChange={handleChange} />
//         </div>
//         <div>
//           number: <input  name='phone'  onChange={handleChange}/>
//         </div>
//         <div>
//           <button onClick={handleClickAdd}>add</button>
//         </div>
//       </form> */}
//       <h2>Numbers</h2>
//       {/* <ul>
//         {
//           showAll ? persons.map(person => <Person key={person.name} person={person} />) 
//           : filter.map(person => <Person key={person.name} person={person} />)
//         }
//       </ul> */}

//       <Persons persons={persons} filter={filter} showAll={showAll}/>
//     </div>
//   )
// }

// export default App


//C
// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './components/Note'
// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

//   const hook = () => {
//       axios
//         .get('http://localhost:3001/notes').then(response => {
//           setNotes(response.data)
//         })
//   }
//   useEffect(hook,[])

//   const addNote = (event) => {

//     console.log('button clicked', event.target)
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString,
//       important: Math.random() < 0.5,
//       id: notes.lenght + 1
//     }
//     // setNotes([...notes, noteObject])
//     // setNewNote("")
//     axios
//       .post('http://localhost:3001/notes', noteObject).then(response => {
//         console.log(response.data)
//       })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }
//   return (
//     <div>
//        <>
//              <div>
//                  <h1>Notes</h1>
//                  <div>
//                      <button onClick={() => setShowAll(!showAll)}>
//                          show {showAll ? 'important' : 'all'}
//                      </button>
//                  </div>
//                  <ul> 
//                      {notesToShow.map(note =>
//                          <Note key={note.id} note={note} /> 
//                      )} 
//                  </ul> 
//                  <form onSubmit={addNote}>
//                      <input
//                          value={newNote}
//                          onChange={handleNoteChange}
//                      />
//                      <button type="submit">save</button>
//                  </form> 
//              </div> 
//          </>
//     </div>
//   )
// }
// export default App

//Ejercicios 2.11.
// import React, { useEffect, useState } from 'react'
// import Filter from './components/Filter'
// import Form from './components/Form'
// import Persons from './components/Persons'
// import axios from 'axios'
// const App = () => {
//   const [persons, setPersons] = useState([])
//   const [filter, setFilter] = useState([])
//   const [showAll, setShowAll] = useState(true);
//   const [newPerson, setNewPerson] = useState({ name: '', phone: ''})

//   //get data from db.json
//   const getData = ()=>{
//     axios
//     .get("http://localhost:3001/persons").then(response=>{
//       console.log(response.data)
//       setPersons(response.data)
//     })
//   }
//   useEffect(getData,[])

//   const filterPersons = (event) => {
//       setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
//   }
//   const showFiltered = () => {setShowAll(!showAll)}

//   const checkName = (name) => {
//     let check = false
//     persons.forEach(person => {
//       if (person.name === name) {
//         check = true
//       }
//     })
//     return check
//   }
//   const handleClickAdd = (event) => {
//     event.preventDefault()
//     const newPersonObject = {
//       name: newPerson.name,
//       phone: newPerson.phone
//     }
//     console.log("🚀 ~ file: App.js:154 ~ handleClickAdd ~ newPersonObject:", newPersonObject)

//     checkName(newPerson.name) ? alert(`${newPerson.name} is already added to phonebook`) : 
//     setPersons(persons.concat(newPersonObject))
//     // setPersons([...persons, newPersonObject])
//     setNewPerson('')
//   }
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewPerson({ ...newPerson, [name]: value });
//   }
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>
//           <Filter persons={persons} setFilter={setFilter} filterPersons={filterPersons}/>
//           <button onClick={showFiltered}>{showAll ? 'show filtered' : 'show all'}</button>
//       </div>
//       <Form newPerson={newPerson} handleChange={handleChange} handleClickAdd={handleClickAdd} />
//       <h2>Numbers</h2>
//       <Persons persons={persons} filter={filter} showAll={showAll}/>
//     </div>
//   )
// }
// export default App

//2.12-2.14* Datos para países, paso1
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [countries, setCountries] = useState([])
//   const [searchCountry, setSearchCountry] = useState('')
//   const [weather, setWeather] = useState([])
//   // countries.length > 10 ? setShowAll(false) : setShowAll(true)
//   const handleChangeCountry = (event) => {
//     setSearchCountry(event.target.value)
//   }

//   const filterCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

//   const getData = () => {
//     axios
//       .get("https://studies.cs.helsinki.fi/restcountries/api/all").then(response => {
//         console.log(response.data)
//         setCountries(response.data)
//       })
//   }

//   useEffect(getData, [])

//   useEffect(() => {
//     async function getWeather() {
//       const params = {
//         access_key: "6f68196afc9bf860459b11e9a198ecad",
//         query: searchCountry
//       }
//       const url = 'http://api.weatherstack.com/current'
//       try {
//         const res = await axios.get(url, {params})
//         console.log("🚀 ~ file: App.js:384 ~ getWeather ~ res:", res.data.current)
//         setWeather(res.data.current)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getWeather();
//   }, [searchCountry])
//   return (
//     <>
//       <label form='input'>Find countries: </label>
//       <input id='input' onChange={handleChangeCountry} />
//       {filterCountries.length === 1 ? <div>
//         <h1>{filterCountries[0].name.common}</h1>
//         <p>capital: {filterCountries[0].capital}</p>
//         <p>population: {filterCountries[0].population}</p>
//         <h2>languages</h2>
//         <ul>
//           {Object.values(filterCountries[0].languages).map(language =>
//             <li key={language}>{language}</li>)}
//         </ul>
//         <img src={filterCountries[0].flags.png} alt="flag" width="100" height="100"></img>
//         <h2>Weather in {filterCountries[0].capital}</h2>
//         <p><b>temperature:</b> {weather?.temperature} Celsius</p>
//         <img src={weather?.weather_icons} alt="weather" width="100" height="100"></img>
//         <p><b>wind:</b> {weather?.wind_speed} mph direction {weather?.wind_dir}</p>
//       </div>
//       : <p>Too many matches, specify another filter</p>    
//       }
//       {
//         ((filterCountries.length < 10) && filterCountries.length > 1 )&& <ul>
//         {filterCountries.map(country =>
//           <li key={country.name.common}>
//             <p>{country.name.common}</p>
//             <button onClick={() => setSearchCountry(country.name.common)}>show</button>
//           </li>)}
//       </ul>
//       }
//     </>
//   )
// }
// export default App

//D
// import { useState, useEffect } from 'react'
// import Note from './components/Note'

// import noteService from './services/notes'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     noteService
//       .getAll()
//       .then(initialNotes => {
//         setNotes(initialNotes)
//       })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     noteService
//       .create(noteObject)
//       .then(returnedNote => {
//         setNotes(notes.concat(returnedNote))
//         setNewNote('')
//       })
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const toggleImportanceOf = (id) => {
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote)
//       .then(returnedNote => {
//         setNotes(notes.map(note => note.id !== id ? note : returnedNote))
//       })
//       .catch(error => {
//         alert(
//           `the note '${note.content}' was already deleted from server`
//         )
//         setNotes(notes.filter(n => n.id !== id))
//       })
//   }

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div> 
//       <ul>
//         <ul>
//           {notesToShow.map(note => 
//             <Note
//               key={note.id}
//               note={note}
//               toggleImportance={() => toggleImportanceOf(note.id)}
//             />
//           )}
//         </ul>
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App

//Ejercicios 2.15.-2.18.

//2.15: Guía telefónica paso7
// import React, { useEffect, useState } from 'react'
// import Filter from './components/Filter'
// import Form from './components/Form'
// import Persons from './components/Persons'
// import personsService from './services/persons'
// const App = () => {
//   const [persons, setPersons] = useState([])
//   const [filter, setFilter] = useState([])
//   const [showAll, setShowAll] = useState(true);
//   const [newPerson, setNewPerson] = useState({ name: '', number: ''})

//   useEffect(() => {
//     personsService
//       .getAll()
//       .then(initialNotes => {
//         setPersons(initialNotes)
//       })
//   }, [])

//   const filterPersons = (event) => {
//       setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
//   }
//   const showFiltered = () => {setShowAll(!showAll)}

//   const checkName = (name) => {
//     let check = false
//     persons.forEach(person => {
//       if (person.name === name) {
//         check = true
//       }
//     })
//     return check
//   }

//   const handleDeletePerson = (id)=>{
//     const person = persons.find(person => person.id === id)
//     if(window.confirm(`Delete ${person.name}?`)){
//       personsService.deletePerson(id)
//       setPersons(persons.filter(person => person.id !== id))
//     }
//   }

//   const handleClickAdd = (event) => {
//     event.preventDefault();
//     const newPersonObject = {
//       name: newPerson.name,
//       number: newPerson.phone
//     };
//     console.log("🚀 ~ file: App.js:154 ~ handleClickAdd ~ newPersonObject:", newPersonObject);

//     let existingPerson = persons.find((person) => {
//       return person.name.toLowerCase() === newPerson.name.toLowerCase();
//     });
//     console.log("🚀 ~ file: App.js:574 ~ handleClickAdd ~ existingPerson:", existingPerson);

//     if (existingPerson) {
//       const confirmUpdate = window.confirm(`${newPerson.name} ya existe. ¿Quieres modificar el número de teléfono?`);
//       if (confirmUpdate) {
//         const updatedPerson = { ...existingPerson, number: newPerson.phone };
//         personsService.update(existingPerson.id, updatedPerson)
//           .then((returnedPerson) => {
//             const updatedPersons = persons.map((person) =>
//               person.id === returnedPerson.id ? returnedPerson : person
//             );
//             setPersons(updatedPersons);
//           })
//           .catch((error) => {
//             // Handle error when updating
//           });
//       }
//     } else {
//       personsService.create(newPersonObject)
//         .then((returnedPerson) => {
//           setPersons(persons.concat(returnedPerson));
//         })
//         .catch((error) => {
//           // Handle error when creating
//         });
//     }
//     setNewPerson({ name: '', phone: '' });
//   };


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewPerson({ ...newPerson, [name]: value });
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>
//           <Filter persons={persons} setFilter={setFilter} filterPersons={filterPersons}/>
//           <button onClick={showFiltered}>{showAll ? 'show filtered' : 'show all'}</button>
//       </div>
//       <h2>ADD a New</h2>
//       <Form newPerson={newPerson} handleChange={handleChange} handleClickAdd={handleClickAdd} />
//       <h2>Numbers</h2>
//       <Persons persons={persons} filter={filter} showAll={showAll} handleDeletePerson={handleDeletePerson}/>
//     </div>
//   )
// }

//export default App


//E
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'
import SuccesNotificaction from './components/SuccesNotificaction'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState([])
  const [showAll, setShowAll] = useState(true);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  useEffect(() => {
    personsService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const filterPersons = (event) => {
    setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  const showFiltered = () => { setShowAll(!showAll) }

  const checkName = (name) => {
    let check = false
    persons.forEach(person => {
      if (person.name === name) {
        check = true
      }
    })
    return check
  }

  const handleDeletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handleClickAdd = (event) => {
    event.preventDefault();
    const newPersonObject = {
      name: newPerson.name,
      number: newPerson.phone
    };
    console.log("🚀 ~ file: App.js:154 ~ handleClickAdd ~ newPersonObject:", newPersonObject);

    let existingPerson = persons.find((person) => {
      return person.name.toLowerCase() === newPerson.name.toLowerCase();
    });
    console.log("🚀 ~ file: App.js:574 ~ handleClickAdd ~ existingPerson:", existingPerson);

    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newPerson.name} ya existe. ¿Quieres modificar el número de teléfono?`);
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newPerson.phone };
        personsService.update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) =>
              person.id === returnedPerson.id ? returnedPerson : person
            );
            setPersons(updatedPersons);
            setSuccessMessage(`Updated ${returnedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            },5000)

          })
          .catch((error) => {
            setErrorMessage(
              `Person was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          });
      }
    } else {
      personsService.create(newPersonObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setSuccessMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch((error) => {
          // Handle error when creating
        });
    }
    setNewPerson({ name: '', phone: '' });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <SuccesNotificaction message={successMessage}/>
      <div>
        <Filter persons={persons} setFilter={setFilter} filterPersons={filterPersons} />
        <button onClick={showFiltered}>{showAll ? 'show filtered' : 'show all'}</button>
      </div>
      <h2>ADD a New</h2>
      <Form newPerson={newPerson} handleChange={handleChange} handleClickAdd={handleClickAdd} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} showAll={showAll} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App




