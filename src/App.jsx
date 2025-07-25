import { useState, useCallback } from 'react';
import { ChildArea } from './ChildArea';
import './App.css';

function App() {
  console.log('App');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // useCallback・・・関数のmemo化　第2引数に変更があった場合に再レンダリング。引数が空の場合は初期レンダリングで使いまわし。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  );
}

export default App;
