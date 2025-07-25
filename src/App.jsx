import { useState } from 'react';
import { ChildArea } from './ChildArea';
import './App.css';

function App() {
  console.log('App');
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => setOpen(!open);


  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </>
  );
}

export default App;
