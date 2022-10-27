import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
	const [verbs, setVerbs] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		setVerbs(await axios.get(url)).data;
	// 	})();
	// }, []);

  // const a = 1;
  // const b = 2;

  // if (a === 1 && b === 2) {
  //   console.log('a is 1 and b is 2');
  // }

  // if (a === 1 && "hello") {
  //   console.log('a is 1 and b is 2');
  // }

  // console.log(a === 1 ? 'a is one' : 'a is not one');

	useEffect(() => {
		setTimeout(() => {
			(async () => {
        console.log(Math.random());
				setVerbs((await axios.get(url)).data);
			})();
		}, 2000);
	}, []);

	return (
		<div className="App">
			<h1>Test App</h1>

    {/* {<p>waiting...</p>} */}

			{/* {verbs.length === 0 && <p>waiting...</p>}

			{verbs.length !== 0 && (
				<div>
					<p>There are {verbs.length} verbs.</p>
					<p>{`There are ${verbs.length} verbs.`}</p>
				</div>
			)} */}

      {verbs.length === 0 ? (<p>waiting...</p>)
        : (
				<div>
					<p>There are {verbs.length} verbs.</p>
					{/* <p>{`There are ${verbs.length} verbs.`}</p> */}
				</div>
      )}


			<p>This is a test app with Vite.</p>
		</div>
	);
}

export default App;
