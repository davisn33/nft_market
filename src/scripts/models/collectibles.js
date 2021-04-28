const {getCollectiblesContract} = require("../contracts/collectibles");
const { NFTStorage, Blob } = require('nft.storage');
const ipfs = require('ipfs-js');
const toBuffer = require('it-to-buffer');

class Collectibles {
    constructor(provider, signer, collectiblesAddress) {
        this.client = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_API_KEY })
        this.provider = provider
        this.signer = signer
        this.collectiblesAddress = collectiblesAddress
        this.collectibles = null
    }

    initCollectibles = async() => {
        if(this.collectibles) return
        this.collectibles = await getCollectiblesContract(this.provider, this.signer, this.collectiblesAddress)
    }

    create = async(blob, metadata) => {
        await this.initCollectibles()
        const blobCID = await this.client.storeBlob(blob)
        metadata.image = `https://ipfs.io/ipfs/${blobCID}`
        const metadataCID = await this.client.storeBlob(new Blob([JSON.stringify(metadata)]))
        // console.log(this.collectibles)
        const tx = await this.collectibles.signer.mint(metadataCID)
        return tx
    }

    getTokensByOwner = async(ownerAddress) => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokenIdsByOwner(ownerAddress);
        const tokens = await this.getMetadataByIds(tokenIds);
        return tokens;
    }


    getTokenURIsByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenURIs = await this.collectibles.contract.getTokenURIsByIds(tokenIds);
        return tokenURIs;
    }

    getMetadataByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenURIs = await this.getTokenURIsByIds(tokenIds);
        const tokens = [];
        for(let i=0; i < tokenIds.length; i++){
            const metadata = await this.getMetadataByURI(tokenURIs[i]);
            tokens.push({
                id: tokenIds[i],
                ...metadata
            });
        }
        return tokens;
    }

    getMetadataByURI = async(tokenURI) => {
        await this.initCollectibles()
        const bufferedContents = await toBuffer(ipfs.cat(tokenURI)) // returns a Buffer
        const stringContents = bufferedContents.toString() // returns a string
        const metadata = JSON.parse(stringContents)
        return metadata
    }

    sell = async(tokenId, price) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.sell(tokenId, price)
        return tx
    }

    buy = async(tokenId) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.buy(tokenId)
        return tx
    }

    getTokensForSale = async() => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokensForSale()
        const tokens = await this.getMetadataByIds(tokenIds)
        return tokens
    }

    getTokensForSellByOwner = async() => {
        await this.initCollectibles()
    }

}

module.exports = Collectibles
