"use client"
import '../globals.css';
import Nav from '../Navbar/page';
export default function Page()
{
    return(
        <html>
            <head>
                <title>
                    About Chuck-Jokes
                </title>
            </head>
            <body>
                    <Nav></Nav>
                    <div className="text-3xl font-bold grid place-items-center h-20">
                        <h1>About Chuck Jokes Generator</h1>
                    </div>
                    <div className="grid place-items-center h-20">
                        <div className="bg-transparent text-sky-400 text-center">
                            <p className="font-bold">
                                Impress your friends with lame outdated Chuck-Jokes
                            </p>
                            <p>
                                Chuck Norris jokes have become a legendary genre in the realm of humor, showcasing the martial artist and actor as an unstoppable force of nature. These jokes playfully exaggerate Norris's toughness, portraying him as a superhero with abilities that defy the laws of physics and logic. Whether it's "Chuck Norris can divide by zero" or "Chuck Norris counted to infinity. Twice," these jokes have transcended traditional comedic boundaries, turning Chuck Norris into an internet meme and pop culture icon. The enduring appeal lies in the absurdity and sheer creativity of imagining Chuck Norris as an indomitable figure capable of the impossible, adding a lighthearted touch to the world of jokes.    
                            </p>
                        </div>
                    </div>
            </body>
        </html>
    );
}