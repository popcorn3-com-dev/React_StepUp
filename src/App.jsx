import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/Styled';
import { StyledComponents } from './components/StyledComponents';

function App() {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}

export default App;
