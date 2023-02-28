import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import {  } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Start test", function(){
        
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress
        let contract: any

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            contract = await ethers.getContract("Contract_name")
        })
        describe("try test", function () {
            it("", async() => {
                
            })

        })
    })