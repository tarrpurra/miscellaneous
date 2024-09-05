const loader = document.querySelector("#custom-loader");
const JokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".Joke");

async function fetchJoke() {
    // loader.classList.remove("hidden");
    // JokeButton.classList.add("hidden");

    try {
        const response = await fetch("https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Joke');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching joke:', error);
        // loader.classList.add("hidden");
        // JokeButton.classList.remove("hidden");
        return null;
    }
}

// async function handleClick() {

//     const { joke } = await fetchJoke();

//     if (joke) {
//         jokeHolder.textContent = joke;
//     } else {
//         jokeHolder.textContent = "Sorry! Not able to fetch joke 😭";
//     }
// }

// JokeButton.addEventListener("click", async () => {
//     // Disable the joke button
//     JokeButton.disabled = true;
    
//     // Add the loading animation CSS class
//     JokeButton.classList.add("button-loader");
    
//     try {
//         // Fetch joke
//         const { joke } = await fetchJoke();

//         if (joke) {
//             jokeHolder.textContent = joke;
//         } else {
//             jokeHolder.textContent = "Sorry! Not able to fetch joke 😭";
//         }
//     } catch (error) {
//         console.error('Error fetching joke:', error);
//         jokeHolder.textContent = "Error fetching joke. Please try again later.";
//     } finally {
//         // Re-enable the joke button
//         JokeButton.disabled = false;
    
//         // Remove the loading animation CSS class
//         JokeButton.classList.remove("button-loader");
//     }
// });
function refreshBrowser() {
    location.reload();
}

function synthesizeSpeech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice=voices[3];
    speechSynthesis.speak(utterance);
}


async function handleClick() {
    try {
        // Disable the joke button
        JokeButton.disabled = true;

        // Show loader
        loader.style.display = 'block';

        // Fetch joke
        const { joke } = await fetchJoke();

        if (joke) {
            jokeHolder.textContent = joke;
            await synthesizeSpeech(joke);
            setTimeout(refreshBrowser, 10000);
        } else {
            jokeHolder.textContent = "Sorry! Not able to fetch joke 😭";
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeHolder.textContent = "Error fetching joke. Please try again later.😭";
    } finally {
        // Re-enable the joke button
        JokeButton.disabled = false;

        // Hide loader
        loader.style.display = 'none';
    }
}








JokeButton.addEventListener("click", handleClick);