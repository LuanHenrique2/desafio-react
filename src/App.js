import './App.css';
import Text from './component/Text/text.js'
import Button from './component/Button/Button.js'

function App() {
  return (
    <>
      <div className='container'>
        <div>
          <Text />
          <Text textColor='yellow' />
          <Text textColor='coral' text='Alternate paragraph' />
        </div>

        <div>
          <Button />
          <Button label='subscribe' />
          <Button label='favorite' />
          <Button label='like' />
          <Button label='dislike' />
        </div>
      </div>
    </>
  )

}

export default App;
