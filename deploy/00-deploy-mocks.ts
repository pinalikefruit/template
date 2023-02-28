import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployMocks: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    let args:any[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying mocks contract ...")
        await deploy("<CONTRACT_MOCK_NAME>",{
            from: deployer,
            args: args,
            log: true,
        })       
        log("Mocks deployed!")
        log('---------------------------------------------------')
    }
}


export default deployMocks
deployMocks.tags = ["all", "mocks"]