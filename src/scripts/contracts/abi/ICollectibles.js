const ICollectibles = {
  "contractName": "ICollectibles",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getTokenIdsByOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "getTokenURIsByIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokensForSale",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"getTokenIdsByOwner\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"getTokenURIsByIds\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTokensForSale\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"sell\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":\"ICollectibles\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":{\"keccak256\":\"0x478b7aed0d871c7ab6db02101e60c919875cd544cfcde24371c4b5da44a37585\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fdabaa2383169ddf94093016a70d8e488bf9b4c1167ffc8cbcb21e8547938c38\",\"dweb:/ipfs/QmcZ79J1DVP1JQ2jDCoPmDpP1SPzhzoDKUvyjsmf1P2iFD\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xc1c941ad1e580b4623007305921efe2f26fc7320a4edc226234dd707c658a428\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://473e11d739868e0d9f48254ccf84ba63290d6a2321d59a37b74c244a27f9cad7\",\"dweb:/ipfs/QmUGzDmecP936jzgM7SYyGwR1YgBGsveoHHJTbDfB8jbGF\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC721/IERC721.sol\";\r\n\r\ninterface ICollectibles is IERC721 {\r\n    function mint(address receiver) external payable;\r\n    function getTokenIdsByOwner(address owner) external view returns(uint[] memory);\r\n    function getTokenURIsByIds(uint[] memory tokenIds) external view returns(string[] memory);\r\n    function sell(uint tokenId, uint price) external;\r\n    function buy(uint tokenId) external payable;\r\n    function getTokensForSale() external view returns(uint[] memory);\r\n}\r\n",
  "sourcePath": "C:/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
  "ast": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        45
      ],
      "IERC165": [
        173
      ],
      "IERC721": [
        161
      ]
    },
    "id": 46,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 46,
        "sourceUnit": 162,
        "src": "60:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 3,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 161,
              "src": "149:7:0"
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:0"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 45,
        "linearizedBaseContracts": [
          45,
          161,
          173
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "6a627842",
            "id": 9,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "186:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 9,
                  "src": "178:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:18:0"
            },
            "returnParameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "212:0:0"
            },
            "scope": 45,
            "src": "164:49:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 17,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "228:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "255:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "247:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "247:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "246:15:0"
            },
            "returnParameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "284:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 13,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 14,
                    "nodeType": "ArrayTypeName",
                    "src": "284:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "283:15:0"
            },
            "scope": 45,
            "src": "219:80:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 26,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "314:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "346:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "332:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "332:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 19,
                    "nodeType": "ArrayTypeName",
                    "src": "332:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "331:24:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "378:15:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "378:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23,
                    "nodeType": "ArrayTypeName",
                    "src": "378:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "377:17:0"
            },
            "scope": 45,
            "src": "305:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 33,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "410:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "420:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "415:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "434:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "429:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:26:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "449:0:0"
            },
            "scope": 45,
            "src": "401:49:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 38,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "465:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "474:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 38,
                  "src": "469:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "469:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "468:14:0"
            },
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "499:0:0"
            },
            "scope": 45,
            "src": "456:44:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "65e4e1c0",
            "id": 44,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokensForSale",
            "nameLocation": "515:16:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "531:2:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "556:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "556:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41,
                    "nodeType": "ArrayTypeName",
                    "src": "556:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "555:15:0"
            },
            "scope": 45,
            "src": "506:65:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 46,
        "src": "122:452:0",
        "usedErrors": []
      }
    ],
    "src": "33:543:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        45
      ],
      "IERC165": [
        173
      ],
      "IERC721": [
        161
      ]
    },
    "id": 46,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 46,
        "sourceUnit": 162,
        "src": "60:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 3,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 161,
              "src": "149:7:0"
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:0"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 45,
        "linearizedBaseContracts": [
          45,
          161,
          173
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "6a627842",
            "id": 9,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "186:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 9,
                  "src": "178:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:18:0"
            },
            "returnParameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "212:0:0"
            },
            "scope": 45,
            "src": "164:49:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 17,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "228:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "255:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "247:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "247:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "246:15:0"
            },
            "returnParameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "284:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 13,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 14,
                    "nodeType": "ArrayTypeName",
                    "src": "284:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "283:15:0"
            },
            "scope": 45,
            "src": "219:80:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 26,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "314:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "346:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "332:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 18,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "332:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 19,
                    "nodeType": "ArrayTypeName",
                    "src": "332:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "331:24:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "378:15:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "378:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23,
                    "nodeType": "ArrayTypeName",
                    "src": "378:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "377:17:0"
            },
            "scope": 45,
            "src": "305:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 33,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "410:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "420:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "415:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "434:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "429:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:26:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "449:0:0"
            },
            "scope": 45,
            "src": "401:49:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 38,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "465:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "474:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 38,
                  "src": "469:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "469:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "468:14:0"
            },
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "499:0:0"
            },
            "scope": 45,
            "src": "456:44:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "65e4e1c0",
            "id": 44,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokensForSale",
            "nameLocation": "515:16:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "531:2:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44,
                  "src": "556:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "556:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41,
                    "nodeType": "ArrayTypeName",
                    "src": "556:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "555:15:0"
            },
            "scope": 45,
            "src": "506:65:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 46,
        "src": "122:452:0",
        "usedErrors": []
      }
    ],
    "src": "33:543:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-04-28T14:27:10.649Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the number of tokens in ``owner``'s account."
      },
      "getApproved(uint256)": {
        "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
      },
      "ownerOf(uint256)": {
        "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};
module.exports = ICollectibles;