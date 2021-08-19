let catchRevert = require("./exceptionsHelpers.js").catchRevert;
const Erc20Token = artifacts.require('erc20Token');

contract('Erc20Token', accounts => {
    let token;
    let total_supply = "1000";
    const owner = accounts[0];
    let cap = "1000";
    let decimals = "18";

    beforeEach(async function () {
        token = await Erc20Token.new("PF Test Token", "PLF",owner,cap,decimals);
    });
    it('should be the correct token name', async function () {
        const name = await token.name();
        assert.equal(name, 'PF Test Token');
    });
    it('should be the correct ticker', async function () {
        const symbol = await token.symbol();
        assert.equal(symbol, 'PLF');
    });
    it('Should be in 18 decimals', async function () {
        const decimals = await token.decimals();
        assert.equal(decimals, 18);
    });
    it('Should be only owner can mint', async function () {
        await catchRevert(token.mint(accounts[1],total_supply, {from: accounts[1]}));
    })
    it('Should be able to burn', async function () {
        await token.mint(accounts[0],total_supply,{from: accounts[0]});
        await token.burn(10,{from: accounts[0]});
        const tokenBalance = await token.balanceOf(accounts[0],{from: accounts[0]});
        assert.equal(990, tokenBalance);
    })
});