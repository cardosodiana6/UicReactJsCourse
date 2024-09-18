import './App.css'
import Text from './components/Text/Text'

function App() {
  
  return (
    <>
      <Text text="Title" isTitle isImportant fontSize={40} />

      <Text text="Title" isTitle  />

      <Text text="Subtitle" fontSize={22} />

      <Text text="Subtitle 2" isImportant />
    </>
  );
}

export default App
