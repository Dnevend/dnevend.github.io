---
sidebar_position: 6
tags: [blockchain, uniswap]
---

# Uniswap

## 介绍

Uniswap 是一种去中心化的金融协议，主要用于在以太坊区块链上交换加密货币。它利用自动做市商（AMM）模型，允许用户在没有传统交易所和订单簿的情况下进行代币交易。Uniswap 的设计目的是提高交易效率，减少滑点，并为用户提供更平等的交易机会。

在 AMM 中，一个核心概念为池子(pooling)：每个合约都是一个存储流动性的池子，允许不同的用户（包括其他合约）在其中进行某种方式的交易。AMM 中有两种角色，*流动性提供者(LP)*以及交易者(trader)；这两方通过流动性池进行交互，而交互的方式由合约进行规定且不可更改。

### Uniswap V1

是一个简单的`ETH/ERC-20`交换协议。在这个版本中，每个交易对都必须有以太币（ETH）作为一个资产，这意味着所有的交换都必须涉及 ETH，从一个 ERC-20 代币到 ETH，或者反过来。V1 的主要特点是它的简单性和创新的 AMM 系统，但它的缺点是只能处理与 ETH 的交换。

### Uniswap v2

- 直接交换 ERC-20 代币：用户可以直接交换两种 ERC-20 代币，不再强制通过 ETH 进行中介。
- 价格预言机功能：V2 通过使用累积的价格和时间戳信息来增加一种简单的预言机功能，使得外部智能合约可以更安全地使用价格数据。
- 闪电交易（Flash Swaps）：用户可以先借出任意数量的 ERC-20 代币，只要在交易结束时归还等值资产即可。

### Uniswap V3

- 集中流动性：用户可以为他们的流动性提供设定特定价格范围，这使得资本利用率更高。流动性提供者可以在他们预期的交易价格范围内集中资金，从而减少无效资本的占用并增加潜在的交易费收益。

  > Uniswap V3 引入了 集中流动性(concentrated liquidity) 的概念：LP 可以选择他们希望在哪个价格区间提供流动性。这个机制通过将更多的流动性提供在一个相对狭窄的价格区间，来大大提高资产利用效率；这也使 Uniswap 的使用场景更加多样化：它现在可以对于不同价格波动性的池子进行不同的配置。这就是 V3 相对于 V2 的主要提升点。

  > 简单地来说，一个 Uniswap V3 的交易对由许多个 Uniswap V2 的交易对构成。V2 与 V3 的区别是，在 V3 中，一个交易对有许多的价格区间，而每个价格区间内都有一定数量的资产。从零到正无穷的整个价格区间被划分成了许多个小的价格区间，每一个区间中都有一定数量的流动性。而更关键的点在于，在每个小的价格区间中，工作机制与 Uniswap V2 完全一样。这也是为什么我们说一个 Uniswap V3 的池子就是许多个 V2 的池子。

- 多层费率结构：不同的交易对可以有不同的费率结构，根据其预期的波动率和流动性需求调整。
- 高级预言机功能：V3 提供更高精度和更新更频繁的价格信息，使得其他 DeFi 应用可以更有效地整合和利用这些数据。

## 引用参考

- [Uniswap V3 Book 中文版](https://y1cunhui.github.io/uniswapV3-book-zh-cn/)

- [Uniswap V3 - Dapp-Learning](https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/readme.md)

- [GitHub - UniswapV3 合约导读-Dapp-Learning](https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/contractGuide/readme.md)

- [Github - Understand UniswapV3 whitepaper-Dapp-Learning](https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V3/whitepaperGuide/understandV3Witepaper.md)

- [Github - Uniswap V2 交易曲线-Dapp-Learning](https://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/defi/Uniswap-V2/design/graphs.md)

- [Github - Uniswap V3 Swap Example](https://github.com/quiknode-labs/qn-guide-examples/tree/main/defi/uniswap-v3-swaps)

- [Uniswap V3 技术白皮书导读](https://learnblockchain.cn/article/2357)

- [Uniswap V3 源代码导读](https://learnblockchain.cn/article/2371)
