---
sidebar_position: 5
tags: [blockchain, markle]
---

# 默克尔树

默克尔树（Merkle Tree），也称为哈希树（Hash Tree），是一种树状的数据结构，其中每个非叶子节点都是其子节点内容的哈希值，而叶子节点则是数据块的哈希值。
这种结构由拉尔夫·默克尔（Ralph Merkle）在 1987 年提出，主要用于有效和安全地验证大型数据结构中的内容。

## 工作原理

**叶子节点**：在默克尔树中，叶子节点包含数据块（例如文件、交易记录等）的哈希值。

**非叶子节点**：每个非叶子节点是其所有子节点的哈希值的合并后的哈希值。这个过程一直持续到树的顶部。

**根节点**：最顶层的一个节点被称为根节点（或默克尔根），它代表了树下所有数据的整体哈希值。默克尔根是整个数据结构的唯一表示。

## 应用场景

- 数据验证
  默克尔树可以用来高效地验证区块链中的交易数据。例如，如果某个节点只想验证一个特定的交易是否包含在某个区块中，而不是下载整个区块的数据，它可以通过获取一个包含该交易的默克尔路径（从叶子节点到根节点的路径）来完成验证，大大减少了所需的数据量。

- 证明某个集合中存在或不存在某个元素
  通过构建集合的默克尔树，并提供该元素各级兄弟节点中的 Hash 值，可以不暴露集合完整内容而证明某元素存在。
  另外，对于可以进行排序的集合，可以将不存在元素的位置用空值代替，以此构建稀疏默克尔树（Sparse Merkle Tree）。
  该结构可以证明某个集合中不包括指定元素。

- 简化支付验证（SPV）
  在比特币等系统中，轻量级节点（不存储整个区块链数据的节点）使用默克尔树来执行简化支付验证（SPV）。通过这种方式，轻量级节点可以验证交易是否被包含在一个区块中，而无需下载整个区块链数据。

- 隐私和安全
  默克尔树还可以提高隐私和安全性。由于验证过程只需要默克尔路径上的节点，其他数据可以保持私密，从而在不泄露具体交易内容的情况下验证交易。

- 数据完整性
  默克尔树保证了数据完整性，任何数据的微小改动都会导致根哈希的变化，从而可以迅速检测到数据的篡改。

- 快速定位修改

- 零知识证明

## 实际应用

利用 Merkle Tree 发放 NFT 白名单：

一份拥有 800 个地址的白名单，更新一次所需的 gas fee 很容易超过 1 个 ETH。而由于 Merkle Tree 验证时，
Leaf 和 proof 可以存在后端，链上仅需存储一个 root 的值，非常节省 gas，项目方经常用它来发放白名单。

## Demo

```javascript title="Demo.js"
// 构造树、生成证明并验证证明

const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

const leaves = ["a", "b", "c"].map((x) => SHA256(x));
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString("hex");
const leaf = SHA256("a");
const proof = tree.getProof(leaf);
console.log(tree.verify(proof, leaf, root)); // true

const badLeaves = ["a", "x", "c"].map((x) => SHA256(x));
const badTree = new MerkleTree(badLeaves, SHA256);
const badLeaf = SHA256("x");
const badProof = badTree.getProof(badLeaf);
console.log(badTree.verify(badProof, badLeaf, root)); // false
```

```bash title="Print Tree"
# console.log(tree.toString())
└─ 7075152d03a5cd92104887b476862778ec0c87be5c2fa1c0a90f87c49fad6eff
   ├─ e5a01fee14e0ed5c48714f22180f25ad8365b53f9779f79dc4a3d7e93963f94a
   │  ├─ ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb
   │  └─ 3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d
   └─ 2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6
      └─ 2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6
```

## 引用参考

[MerkleTree.js](https://github.com/merkletreejs/merkletreejs)

[Example](https://lab.miguelmota.com/merkletreejs/example/)

[默克尔树结构](https://yeasy.gitbook.io/blockchain_guide/05_crypto/merkle_trie)

[Solidity 实现默克尔树](https://blog.csdn.net/u010359479/article/details/129497269)
