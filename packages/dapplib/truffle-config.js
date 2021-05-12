require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index raise noise mistake hover enroll flip gas'; 
let testAccounts = [
"0x6928a73a8ba0f30b69a830ad0753710fef961bc5bb0f3ff96f6c6e5850cd7814",
"0x4dd17f13a1031c278a3d80e0d3481b957f7f507a7d0eda9020d671f677d21fe1",
"0xc2b6138b6c6840ca3a92dc8c46497d6f03d280be71719962ecbe861a9ae3fccd",
"0xb5552657280390a9bcc3aa36c3a9bdaf07450c0fc49b8328c7b70e41d56858a3",
"0x589d0457c94793fe57468ad4cec7f1616d48965f39d316aa45ee39f43cbd3fcf",
"0x184ef3e01ae3c95eb9477b87304bd2f66c97143b25eeabf197419b2999d1a184",
"0xeebfa618c62cebf449bc2216a68128d5cf48b575991254aede78a8b155fcc15d",
"0xd8494d3ff87e5a0e22a852c8bbfacbde73f4c97e9e4c4ea2cdca07a43879f436",
"0x376b01d0d5ff01e09470fe0f7eb132719309814048d8b74eae28035ea90e6ea3",
"0x4ac6d29ae8e316a7ef0ac164e230909a942e2a5c2398d9152a1845571de694c3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
