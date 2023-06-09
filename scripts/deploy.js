const hre=require('hardhat');
// check use of hardhat
async  function main(){
  const DAO =await hre.ethers.getContractFactory("DAO");
  const dao=await DAO.deploy();
  await dao.deployed();
  console.log(`DAO smart contract deployed to address:${dao.address}`);
}
main().catch((error)=>{
  console.log(error);
  process.exitcode=1;
});