import { ether, bsc, avax, polygon, osmosis, fantom, arb, opt } from "@/assets"; 
import { Networks, INetwork } from "@/types"
import { github, twitter, tg, dc, usdc, usdt, dai, etherTest, optTest } from '@/assets' 

const networks: Networks[] = [
    { id: 0, title: "Ethereum", Logo: ether },
    { id: 1, title: "Bsc", Logo: bsc },
    { id: 2, title: "Avax", Logo: avax },
    { id: 3, title: "Polygon", Logo: polygon },
    { id: 4, title: "Osmosis", Logo: osmosis },
    { id: 5, title: "Fantom", Logo: fantom },
]

const assets = [
    { id: 0, title: "Ethereum", Logo: ether },
    { id: 1, title: "Bsc", Logo: bsc },
    { id: 2, title: "Avax", Logo: avax },
    { id: 3, title: "Polygon", Logo: polygon },
    { id: 4, title: "Osmosis", Logo: osmosis },
    { id: 5, title: "Fantom", Logo: fantom },
    { id: 5, title: "Arbitrum", Logo: arb },
    { id: 5, title: "Optimism", Logo: opt },
]

const socials = [
    { id: 0, logo: github },
    { id: 1, logo: tg },
    { id: 2, logo: dc },
    { id: 3, logo: twitter }
]

const allNetworks: INetwork[] = [
    { id: 0, logo: ether, name: 'Ethereum', chainId: 1 },
    { id: 1, logo: bsc, name: 'BSC', chainId: 96 },
    { id: 2, logo: polygon, name: 'Polygon', chainId: 0 },
    { id: 3, logo: avax, name: 'Avalanche', chainId: 0 },
    { id: 4, logo: fantom, name: 'Fantom', chainId: 0 },
    { id: 5, logo: osmosis, name: 'Osmosis', chainId: 0 },
    { id: 6, logo: osmosis, name: 'Osmosis', chainId: 0 },
    { id: 7, logo: osmosis, name: 'Osmosis', chainId: 0 },
    { id: 8, logo: osmosis, name: 'Osmosis', chainId: 0 },
    { id: 9, logo: opt, name: 'Optimism', chainId: 0 },
]

const terms = [
    { id: 0, title: "1. YOUR AGREEMENT", desc: "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions" },
    { id: 1, title: "2. PRIVACY", desc: "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices." },
    { id: 2, title: "3. LINKED SITES", desc: "This Site may contain links to other independent third-party Web sites ('Linked Sites'). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control" },
]

const tradeHeaders = [
    { id: 0, title: "Rank" },
    { id: 1, title: "Trade Pairs" },
    { id: 2, title: "Transactions" },
    { id: 3, title: "Volume" },
]

const tradeDatas = [
    { id: 0, rank: '1', pairs: "ETH/BTC", transactions: '38,701', volume: "$3000,000" },
    { id: 1, rank: '2', pairs: "ETH/BTC", transactions: '38,701', volume: "$3000,000" },
    { id: 2, rank: '3', pairs: "ETH/BTC", transactions: '38,701', volume: "$3000,000" },
    { id: 3, rank: '4', pairs: "ETH/BTC", transactions: '38,701', volume: "$3000,000" },
]

const recentTxHeaders = [
    { id: 0, title: "From" },
    { id: 1, title: "To" },
    { id: 2, title: "Bridge" },
    { id: 3, title: "Time" },
]

const recentTxDatas= [
    { id: 0, from: "0xxx", fromAmount: "1", iconFrom: etherTest, fromNetworkIcon: etherTest, to: "0xxxxx", iconTo: optTest, networkToIcon: optTest, txType: "bridge", time: new Date()},
    { id: 0, from: "0xxx", fromAmount: "1", iconFrom: etherTest, fromNetworkIcon: etherTest, to: "0xxxxx", iconTo: optTest, networkToIcon: optTest, txType: "bridge", time: new Date()},
    { id: 0, from: "0xxx", fromAmount: "1", iconFrom: etherTest, fromNetworkIcon: etherTest, to: "0xxxxx", iconTo: optTest, networkToIcon: optTest, txType: "bridge", time: new Date()},
    { id: 0, from: "0xxx", fromAmount: "1", iconFrom: etherTest, fromNetworkIcon: etherTest, to: "0xxxxx", iconTo: optTest, networkToIcon: optTest, txType: "bridge", time: new Date()},
   
]

const tokenAssets = [
    { id: 0, title: "USDC", Icon: usdt, balance: "0" },
    { id: 1, title: "USDT", Icon: usdc, balance: "0" },
    { id: 2, title: "DAI", Icon: dai, balance: "0" },
    { id: 3, title: "DAI", Icon: dai, balance: "0" },
    { id: 4, title: "DAI", Icon: dai, balance: "0" },
    { id: 5, title: "DAI", Icon: dai, balance: "0" },
    { id: 6, title: "DAI", Icon: dai, balance: "0" },
]

const quests = [
    { id: 0, title: "Minting 1Tx on Layer2-ZO on any networks", subtitle: "no. 1 omni inscriptions", numOfQuest: '1', totalOfTasks: "6", numOfCompleted: "0" },
    { id: 1, title: "Minting 1Tx on Layer2-ZO on any networks", subtitle: "no. 1 omni inscriptions", numOfQuest: '2', totalOfTasks: "6", numOfCompleted: "0" },
    { id: 2, title: "Minting 1Tx on Layer2-ZO on any networks", subtitle: "no. 1 omni inscriptions", numOfQuest: '3', totalOfTasks: "6", numOfCompleted: "0" },
    { id: 3, title: "Minting 1Tx on Layer2-ZO on any networks", subtitle: "no. 1 omni inscriptions", numOfQuest: '4', totalOfTasks: "6", numOfCompleted: "0" },
    { id: 4, title: "Minting 1Tx on Layer2-ZO on any networks", subtitle: "no. 1 omni inscriptions", numOfQuest: '5', totalOfTasks: "6", numOfCompleted: "0" },
]

export { 
    networks, 
    assets, socials, 
    allNetworks, terms, 
    tradeHeaders,
    tradeDatas,
    recentTxHeaders,
    recentTxDatas,
    tokenAssets,
    quests 
}