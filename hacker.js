const first=document.getElementById("first");
const but= document.querySelector("#button_first");
const rex= document.querySelector("#GONE");
const second=document.getElementById("second");
const third=document.getElementById("third");
const forth=document.getElementById("forth");
const fivth=document.getElementById("fivth");

const hackingWords = [
    "Hacking in progress",
    "Decrypting firewall",
    "Bypassing security protocols",
    "Extracting encrypted data",
    "Initiating brute force attack",
    "Injecting malware",
    "Compromising system integrity",
    "Launching exploit",
    // Add more hacking words as needed
];

let displayHackingWords = async () => {
    for (let word of hackingWords) {
        first.innerHTML = word;
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
};


let res = async () => {
    let run=true;
    for (let j = 0; j < 2; j++) {
        while (run) {
            first.innerHTML = "Hacking Initializing";
            await new Promise(resolve => setTimeout(resolve, 4000));
            for (let i = 0; i < 10; i++) {
                first.innerHTML += ". ";
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            await displayHackingWords()
            first.innerHTML = "Initialization completed";
            run=false;
        }
    }
}

let start = async () => {
    let running = true;
    while (running) {

        second.innerHTML += "Getting Information of user";
        await new Promise(resolve => setTimeout(resolve, 4000));
        for (let i = 0; i < 10; i++) {
            second.innerHTML += ". ";
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        second.innerHTML = "Done"; // Set "Done" after the loop
        running = false; // Stop the loop
    }
}
let west=async()=>{
    third.innerHTML="Finding username ";
    await new Promise (resolve=> setTimeout(resolve,3000))
    third.innerHTML="UserName Found"
}

let password=async()=>{
    forth.innerHTML="Finding password - ";
    await new Promise(resolve=>setTimeout(resolve,3000))
    for (let i = 0; i < 10; i++) {
        forth.innerHTML += "*";
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

let fix=async()=>{
    let money="$3,00,00,00,000"
    fivth.innerHTML=`<h1>money sequence started current money${money}`
    await new Promise (resolve=> setTimeout(resolve,3000))
    fivth.innerHTML="fund transfering"
    fivth.innerHTML="COMPLETED"

    leave()

}
function leave() {
    var myWindow = window.open("", "_self");
    myWindow.document.write("");
    setTimeout (function() {myWindow.close();},1000);
  }

// Run `res` first, then `start`
async function runResThenStart() {
    await res();
    await start();
    await west();
    await password();
    await fix()
    
}

but.addEventListener("click", () => {
    but.style.display = "none";
    rex.style.display = "block";
    runResThenStart(); // Start the process after the button is clicked
});


