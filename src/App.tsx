import { Input } from '@/components/ui/input';
import './App.css';
import { Hoge } from '@/components/Hoge';

function App() {
  return (
    <div className="flex flex-row">
      <div>hoge</div>
      <div>foo</div>
      <Hoge />
      <Input type="text" />
    </div>
  );
}

export default App;
