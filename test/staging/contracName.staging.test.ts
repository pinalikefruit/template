import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { Hack } from "../../typechain-types"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Motorbiker hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string       

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            
            
        })
        describe("Init test", function () {

        })
        
    }) 