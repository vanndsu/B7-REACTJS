import { Person } from "./components/Person";


const App = () => {

  return(
    <>
      <Person 
        name="Mickey Mouse" 
        avatar="https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png"
        eyes={['Pretos']}
        position="Chefe"
      />
      <Person 
        name="Pateta"
        avatar="https://i.pinimg.com/originals/5c/ec/63/5cec63edb242abdac7eb54177be879c9.png"
        eyes={['Pretos']}
        position="Amigo do Mickey"
      />
      <Person 
        name="Pato Donald"
        avatar="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6f/Donald.png/250px-Donald.png"
        eyes={['Pretos']}
        position="Amigo do Mickey"
      />
    </>
  )
}

export default App;