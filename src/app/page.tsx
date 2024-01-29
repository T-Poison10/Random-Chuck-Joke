"use client"
import { useState } from 'react';
import Head from 'next/head';
import './globals.css';


export default function Home() {
	const [joke, setJoke] = useState('');
	const [error, setError] = useState('');
	const [copySuccess, setCopySuccess] = useState(false);

	const getJoke = () => {
		setCopySuccess(false);
		fetch('https://api.chucknorris.io/jokes/random', {
			headers: {
				json: 'application/json',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to fetch joke');
				}
				return response.json();
			})
			.then((response) => {
				setJoke(response.value);
			})
			.catch(()=>
			{
				setError("Couldn't fecth joke!!");
			})
	};

	const handleCopyClick = () => {
		navigator.clipboard.writeText(joke).then(() => {
			setCopySuccess(true);
		});
	};

	return (
		<div className="container">
			<Head>
				<title>Random Jokes Generator</title>
				<meta name="description"
					content="Random Jokes Generator" />
			</Head>

			<div className="app">
				<div className="card">
					<h1 className="heading">
						Random Chuck-Joke Generator
					</h1>
					<div className="jokeContainer">
						{error ? (
							<p className="errorText">{error}</p>):(
							<>
								<p className="jokeText">{joke}</p>
								<button className="copyButton"
									onClick={handleCopyClick}>
									{copySuccess ? 'Copied!' : 'Copy'}
								</button>
							</>
						)}
					</div>
					<button className='button' onClick={getJoke}>
						Get a Joke
					</button>
				</div>
			</div>
		</div>
	);
}
