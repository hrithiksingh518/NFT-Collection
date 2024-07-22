// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Define the mintNFT function
function mintNFT(username, f_username, user_age, profession) {
    // Create an NFT object using the parameters passed to it for its metadata
    let data = {
        username: username,
        f_username: f_username,
        user_age: user_age,
        profession: profession
    };
    
    // Store the NFT object in the nfts array
    nfts.push(data);
}

// Step 3: Define the listNFTs function
function listNFTs() {
    // Loop through the array of NFTs and print their metadata
    for (let i = 0; i < nfts.length; i++) {
        console.log("username: " + nfts[i].username);
        console.log("Father username: " + nfts[i].f_username);
        console.log("user_age: " + nfts[i].user_age);
        console.log("Profession: " + nfts[i].profession);
        console.log("--------------------");
    }
}

// Step 4: Define the getTotalSupply function
function getTotalSupply() {
    // Return the number of NFTs in the array
    return nfts.length;
}

// Step 5: Call your functions below this line

// Mint a few NFTs
mintNFT("Hrithik", "Ajay", 22, "I am a student.");
mintNFT("Saurav", "Sangam", 22, "I am a beggar.");
mintNFT("Sangam", "Saurav", 22, "I am a teacher.");

// List all the NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());
