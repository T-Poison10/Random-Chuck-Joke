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
		<div className="grid place-items-center h-screen">
			<Head>
				<title >Random Jokes Generator</title>
				<meta name="description"
					content="Random Jokes Generator" />
			</Head>

			<div className="content-center">
				<div className="card">
					<h1 className="text-3xl font-bold
					grid place-items-center">
						Random Chuck-Joke Generator
					</h1>
					<div className="jokeContainer">
						{error ? (
							<p className="errorText">{error}</p>):(
							<>
								<p className="bg-yellow-300
								text-sky-400
								pl-5 pr-5 pt-5 pb-5 rounded">{joke}</p>
								<button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-white rounded
								grid place-items-center"
									onClick={handleCopyClick}>
									{copySuccess ? 'Copied!' : 'Copy'}
								</button>
							</>
						)}
					</div>
					<button className='bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-white rounded
					grid place-items-center' onClick={getJoke}>
						Get a Joke
					</button>
				</div>
			</div>
		</div>
	);
}
