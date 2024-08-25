# README - NFT Minting Program

## Overview
This simple JavaScript program mints NFTs by storing user metadata in an array. It includes functions to mint NFTs, list them, and display the total supply.

## Functions

- **mintNFT(username, f_username, user_age, profession)**: Mints a new NFT with the given metadata and adds it to the collection.
- **listNFTs()**: Displays all minted NFTs and their metadata.
- **getTotalSupply()**: Returns the total number of NFTs minted.

## Usage
1. Call `mintNFT()` to create NFTs.
2. Use `listNFTs()` to display all NFTs.
3. Check total supply with `getTotalSupply()`.

### Example
```javascript
mintNFT("Hrithik", "Ajay", 22, "Student");
listNFTs();
console.log("Total Supply: " + getTotalSupply());
```

