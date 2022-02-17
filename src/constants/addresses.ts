import { Networks } from "./blockchain";

//edited for Amzn testnet attempts

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x19B24EbE0160aCf0CedDcCB4BbECeEf69D2a6615", //My MetaMask as temp DAO address testnet
    SAMZN_ADDRESS: "0x5E2Ce91548CC8b6A2186d7053859230fCeE9adD6", //SAMZN contract address testnet
    AMZN_ADDRESS: "0x835067fD107f9C09dF014c88019FE973A009d16e", //AMZN contract address testnet
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    STAKING_ADDRESS: "0x7a58444A3690f216634DE03cF36100Cba9E76C7a", //AMZN staking contract
    STAKING_HELPER_ADDRESS: "0x246b346B446c990F844c55aB3FA04c89EB18a1fa", //AMZN staking helper contract testnet
    AMZN_BONDING_CALC_ADDRESS: "0x509AAc1EF8F2f6c7b9B9667949192649221C9C2E", //AMZN bonding calc address testnet
    TREASURY_ADDRESS: "0x7B996D0E8C376f1a3c65ff28AfFa7D1d73F87D84", //AMZN treasury contract address testnet
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"",
    WMEMO_ADDRESS: "0x4B600b394DC71613738d5e1297C99bda4E0aDA1a", //for amzn

    //distributor: 0x86ACceA872d934310b2159779Abae8d6Cc2d9590
    //staking warmup: 0x9B028FacBf77599E5AE4d20ECE3Ad1F765be3bAB
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
