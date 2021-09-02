require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile puppy gesture forest fox twist'; 
let testAccounts = [
"0x6e411c2c3b4a238c7957d85d251841c9fa5eb68d55e87e5692413ba10ad08d53",
"0xfa5907b67ed06d2678ea519a74e6e23c0c7b4bb53b6f0cdaf8bdfa34576814b5",
"0xe4c1bc699948c13f43c031fa0f358dee873c4dea673efa4899a2f7028ea0cda4",
"0x144e3b78324eda97c34401391a12c68b306de3c277d549b4ebfd56eb30951144",
"0xa0016ac83e519c1e849be0b6b490bd15d29b4457dec29561353f4be8d4423dc6",
"0xd710a102497334368a63a6f6387f3a22da43aab0d07e9381d95b36d4ede484a7",
"0x1b819a67c97e575dc07e668b3837d5f6c8bcbe7c5c8214d008322befde61fe39",
"0x51df8732b55911cfc6ad4feb186329a94c9f3108bf67f4d1b29c9f186199a480",
"0xd1153ee6145d1d84b93d03c785c8449782bf5c5f96bf83692adba4902d32679d",
"0xb27d57bf78ccfa8ea4313bc4572d0f5b27fac00867a816930bb9b4b165ab60ad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


