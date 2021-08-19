const MyToken = artifacts.require('erc20Token');

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(
          MyToken,
          "Testing111", 
          "TST111", 
          "0xA7E981623E58b75c5bf450Da3636cD22691fbf58", 
          "100000", 
          "18"
        );
};