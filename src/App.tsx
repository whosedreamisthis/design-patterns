import { Compound } from './components/CompoundPattern/Compound';
import { RenderProps } from './components/RenderPropsPattern/RenderProps';
import './App.css';

function App() {
	return (
		<>
			<Compound />
			<hr className="my-12 border-gray-200" />
			<RenderProps />
		</>
	);
}

export default App;
