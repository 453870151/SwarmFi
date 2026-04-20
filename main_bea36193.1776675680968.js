/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7566
() {

// extracted by mini-css-extract-plugin

/***/ },

/***/ 82472
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.esm.js
var index_esm = __webpack_require__(85902);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(49998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(50104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(50706);
;// ./src/utils/wagmi.ts






const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(83376);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(28680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(72635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(32389);
;// ./i18n.ts
/* unused harmony import specifier */ var i18n;



const resources = {
  en: {
    translation: __webpack_require__(42038),
  },
  zhCN: {
    translation: __webpack_require__(65372),
  },
  zhTW: {
    translation: __webpack_require__(48380),
  },
  malay: {
    translation: __webpack_require__(33232),
  },
  indonesian: {
    translation: __webpack_require__(7352),
  },
  vietnamese: {
    translation: __webpack_require__(27095),
  },
  thai: {
    translation: __webpack_require__(58150),
  },
  korean: {
    translation: __webpack_require__(56628),
  },
  japanese: {
    translation: __webpack_require__(34175),
  },
  filipino: {
    translation: __webpack_require__(58062),
  },
}

i18next/* default.use */.Ay.use(es/* initReactI18next */.r9).init({
  resources,
  lng: "en",
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(42837);
;// ./src/hook/useWallet.ts
/* unused harmony import specifier */ var useDisconnect;






// 连接钱包
function useConnectWallet() {
  const {
    connect
  } = (0,wagmi_dist/* useConnect */.eF)({
    connector: new chunk_2VZS2JHJ/* InjectedConnector */.s()
  });
  return connect;
}

// 断开连接
function useDisconnectWallet() {
  const {
    disconnect
  } = useDisconnect();
  return disconnect;
}

// 获取当前账号信息
function useGetOwnAddress() {
  const {
    address,
    isConnected
  } = (0,wagmi_dist/* useAccount */.F7)();
  return {
    address,
    isConnected
  };
}
const queryChainIdAtom = (0,esm/* atom */.eU)(-1);
queryChainIdAtom.onMount = set => {
  const params = new URL(window.location.href).searchParams;
  const c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
;// ./src/config/const/address.ts
const Contracts_Address = {
  56: {
    USDT: "0x55d398326f99059fF775485246999027B3197955",
    // 绑定邀请关系
    BindAddress: '0xe1Bc234E825469131469b5fF61cBD1Aa8428a486',
    // 购买节点
    NodeMallAddress: '0x2fF2f43Bcd652ceB50d87486a90151736903761A',
    // 查询节点
    NodeAddress: '0xDF12Bd2f00D1E30cF6675FFdf55B7406c382f1f3',
    // SFI Token
    SFI: "0x1d9F6C0B5dE60817F6350270e37FB348eD6A6306",
    // 生态账号
    EcologyAddress: '0xAF1CdA0d15ADe250a2D357BA6e92362E0C3BAA56',
    // 理财
    ManagementAddress: '0x6B5064Ad7B582830028624AD2372989C8877ebdB',
    RecordAddress: '0x269F4D870FB5A5bFF2564fCf20bf0Ec6046Dc276',
    RatiosAddress: '0x0D7970b5696508D9E1098AD64fAa00952fb94a7c',
    SwarmLockDataAddress: '0xD71311cAfEDAa297d70CC3ACbb6ce65fA5017400',
    SwarmUnlockAddress: '0x4181aB353e5D8f348bAAb79D1401a3D342a27492',
    SwarmDynamicRewardAddress: '0x1B16f95C6774c054e3A5354D95948c3ADA97713f',
    // 推广奖励
    abnbUSDTAddress: '0xa9251ca9DE909CB71783723713B21E4233fbf1B1',
    SwarmBankPromotionAddress: '0xcd440315734EDa5E8004ac039945363bE6D3BA7E',
    // 等级奖励
    SwarmBankLevel1Address: '0x7DbDd0C77b88d7a5336F01C3F6b7c463A5cCA52A',
    SwarmBankLevel2Address: '0x8a7Cdb924b75A72224b575C8f8AC4331C7dF7A5A',
    SwarmBankLevel3Address: '0xA4b466B590B730358A41eBe69f57081EFF2b6BfF',
    SwarmBankLevel4Address: '0x80A5321B04FA87522D86bAc8611444D5373C88e9',
    SwarmBankLevel5Address: '0x7101E677EE2b93153409fB0B7e9e1Bb03829355a',
    SwarmLevelRewardAddress: '0xDCC6A67F3502CF7Ad1beb78f93309251fD4A3800',
    // 全网总销毁数值(黑洞地址)
    SwarmHoleAddress: '0x000000000000000000000000000000000000dEaD'
  },
  97: {
    USDT: "0x44004827f2F72566E12884A38f63f72F2a5143ea",
    // 绑定邀请关系
    BindAddress: '0xd32861256992752f55c6457defce290c0aedcdd5',
    // 购买节点
    NodeMallAddress: '0x4ac10128286959df8df7389a02c7ea318d2254dc',
    // 查询节点
    NodeAddress: '0x1e43BA0139a37562D8B45daA0E63aF8C5BE8dE22',
    // SFI Token
    SFI: "0xdbB451503147949f542E6f170Fd881373624310e",
    // 生态账号
    EcologyAddress: '0x8f1e16c6d1fc5bf09d75d0673f3498536346f736',
    // 理财
    ManagementAddress: '0xf26f309c33e80df5ff0e68c0937103c06589702c',
    RecordAddress: '0x466cF83A4Af7577341a7940076d8A82280C71615',
    RatiosAddress: '0x2d23ff57603705502619f11fcad25018613a97ab',
    SwarmLockDataAddress: '0x0f5d28c85577f3cda6f04c3f642f31eda5dafd24',
    SwarmUnlockAddress: '0xb67d2392373d28c705c82764e38f13811df4f9b4',
    SwarmDynamicRewardAddress: '0x0adcc6edd53cc3907d03cfc6c2420c1328e609a2',
    // 推广奖励
    abnbUSDTAddress: '0xc17a1092ba8fd70b84882ffd727d7bc4c2cc6002',
    SwarmBankPromotionAddress: '0x3C7F05f2B6a0dDd6930f5b2554e472A7C507AE8A',
    // 等级奖励
    SwarmBankLevel1Address: '0x5F0735cE61B6Ff6ce3BF5168e0f814148B319517',
    SwarmBankLevel2Address: '0x8560238320f9D2F42417d23Aa99cF066a1e39AfF',
    SwarmBankLevel3Address: '0xdc8Be047505ADfe6C54baD656190bc74dAe2C252',
    SwarmBankLevel4Address: '0x4788138b736b7C41094e0570a3A127dD13d746a1',
    SwarmBankLevel5Address: '0x3cBF30be2d2A1A51Ee2477BD9668793621822051',
    SwarmLevelRewardAddress: '0x2b3a2d7dcfd31ceb4bb836ae4d11ff23cf7cf93d',
    // 全网总销毁数值(黑洞地址)
    SwarmHoleAddress: '0x000000000000000000000000000000000000dEaD'
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(26910);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(46450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/viem/_esm/constants/address.js
var constants_address = __webpack_require__(36294);
;// ./src/config/abi/BindUserAbi.json
const BindUserAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"UserBound","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DEPTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"bind","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directRefCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getDirectReferees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referee","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"}],"name":"getReferrers","outputs":[{"internalType":"address[]","name":"referrers","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nomalWidget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"},{"internalType":"address[]","name":"referrers","type":"address[]"}],"name":"setBindings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nomalWidget","type":"uint256"}],"name":"setNoamlWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"weights","type":"uint256[]"}],"name":"setsetUserWeights","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/NodeAbi.json
const NodeAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nodeType","type":"uint256"}],"name":"UpdateType","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nodeTypes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"nodeType","type":"uint256"}],"name":"safeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"nodeType","type":"uint256"}],"name":"updateType","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/utils/contractReferrerUtils.js





const ethereumHelper = window.ethereum || false;
const web3 = new (web3_min_default())(ethereumHelper);

/**
 * 邀请关系合约
 */
class ContractReferrer {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractReferrer.i18n = i18nInstance;
    ContractReferrer.message = messageInstance;
  }

  // 查询当前钱包地址绑定邀请人地址
  static async getReferrer(address, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      let referrer = await contract.methods.getReferrer(address).call();
      return referrer;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 绑定邀请人
  static async bindReferrer(address, referralAddress, contractsAddress) {
    try {
      const referral = referralAddress.trim();

      // 判断绑定的地址是否是root地址，是root地址的话，直接绑定，否则判断绑定地址是否有邀请人
      const isRoot = await ContractReferrer.checkIsRoot(referral, contractsAddress);
      if (isRoot) {
        // root地址，直接绑定
        return ContractReferrer.bindContractsReferrer(address, referral, contractsAddress);
      } else {
        // 不是root地址，判断是否有邀请人，才可以绑定
        const checkAddress = await ContractReferrer.getReferrer(referral, contractsAddress);
        if (checkAddress == constants_address/* zeroAddress */.X) {
          var _ContractReferrer$i;
          ContractReferrer.message.error((_ContractReferrer$i = ContractReferrer.i18n) == null ? void 0 : _ContractReferrer$i.t('Incorrect binding address'));
          return false;
        } else {
          return ContractReferrer.bindContractsReferrer(address, referral, contractsAddress);
        }
      }
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 判断绑定邀请人是否是root地址
  static async checkIsRoot(referral, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const root = await contract.methods.root().call();
      if (referral == root.trim()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 绑定邀请人合约调用
  static async bindContractsReferrer(address, referral, contractsAddress) {
    try {
      var _ContractReferrer$i2;
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const gas = await web3.eth.getGasPrice();
      await contract.methods.bind(referral).send({
        from: address,
        gasPrice: gas
      });
      ContractReferrer.message.success((_ContractReferrer$i2 = ContractReferrer.i18n) == null ? void 0 : _ContractReferrer$i2.t('Bind successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询我的邀请人列表
  static async referrerList(address, BindContractsAddress, NodeContractsAddress) {
    try {
      const BindContract = new web3.eth.Contract(BindUserAbi_namespaceObject, BindContractsAddress);
      const list = await BindContract.methods.getDirectReferees(address).call();
      // console.log('list===>', list)

      // 倒序排序，获取前20条数据
      const top20 = Array.from(list).sort().slice(0, 20);
      const MineContract = new web3.eth.Contract(NodeAbi_namespaceObject, NodeContractsAddress);
      // 使用 Promise.all 并行查询所有地址的余额
      const balancePromises = top20.map(address => MineContract.methods.balanceOf(address).call().then(balance => ({
        address: address,
        total_amount: balance.toString()
      })).catch(error => {
        console.error(`查询地址 ${address} 余额失败:`, error);
        return {
          address: address,
          total_amount: '0',
          error: error.message
        };
      }));

      // 并行执行所有查询
      const data = await Promise.all(balancePromises);
      // console.log("data===>", data)

      return data;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 直推数
  static async directRefCount(address, contractsAddress) {
    try {
      const contract = new web3.eth.Contract(BindUserAbi_namespaceObject, contractsAddress);
      const count = await contract.methods.directRefCount(address).call();
      return count;
    } catch (error) {
      console.log("error===>", error);
    }
  }
}
ContractReferrer.i18n = null;
ContractReferrer.message = null;
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(63532);
;// ./src/http/index.js


// import { getCookie } from '../utils/common';
// import { decode, signUserArray } from '../utils/encryption';

const instance = axios_default().create({
  timeout: 30000,
  baseURL: "",
  headers: {
    Accept: "application/json;version=3.0;compress=false",
    "content-type": "application/json"
  }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在拦截器里添加请求头的token
  // const storedCookie = getCookie("crypto_user") ? decode(getCookie("crypto_user")) : '';
  // const storedUser = signUserArray(storedCookie);
  // const accessToken = storedUser.token;
  // if (accessToken && accessToken != undefined) {
  // 	config.headers.Authorization = `Bearer ${accessToken}`;
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(async response => {
  // console.log(response);

  const list = {
    310: {
      msg: "无session信息!",
      path: "/"
    },
    405: {
      msg: "无权限访问或在其他地方登陆!",
      path: `/login`
    },
    406: {
      msg: "帐号在异地登录，请重新登录",
      path: `/login`
    },
    788: {
      msg: "用户登录超时或在其他地方登录，请重新登录",
      path: `/login`
    }
  };
  if (response.data.errors) {
    const res = list[response.data.errors[0].code];
    message/* default */.Ay.error(res.msg);
  }
  // 对响应数据做点什么
  if (response.request.responseType === "blob") return response; // 对下载做兼容
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.log("error------>", error);
  message/* default */.Ay.error(error.message || error);
  return Promise.reject(error);
});
/* harmony default export */ const http = (instance);
// EXTERNAL MODULE: ./node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58908);
;// ./src/utils/index.js
/* unused harmony import specifier */ var ethers;
/* unused harmony import specifier */ var Contract;




const AddressZero = "0x0000000000000000000000000000000000000000";

// export const axiosUrl = "https://swarmfi.cc/app-api";

// 获取当前域名
const currentDomain = window.location.hostname; // 例如：openbtc.app 或 192.168.90.68
const currentProtocol = window.location.protocol; // 例如：https: 或 http:

const axiosUrl = (() => {
  // 开发环境判断
  const isDevelopment = currentDomain === 'localhost' || currentDomain === '127.0.0.1' || currentDomain.startsWith('192.168.') || currentDomain.startsWith('10.') || currentDomain === '';
  if (isDevelopment) {
    // 开发环境使用本地地址
    return `http://192.168.90.68:48080/app-api`;
    // return `https://swarmfi.cc/app-api`;
  } else {
    // 生产环境使用当前域名的https
    return `https://swarmfi.cc/app-api`;
  }
})();
const isAddress = memoize_default()(value => {
  try {
    return (0,lib_esm.getAddress)(value);
  } catch {
    return false;
  }
});
function getContractObj(address, ABI) {
  var _window, _window2;
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (!((_window = window) != null && _window.ethereum)) {
    return;
  }
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider((_window2 = window) == null ? void 0 : _window2.ethereum);
  return new Contract(address, ABI, provider.getSigner());
}
;// ./src/utils/common.js
// 设置带过期时间的 cookie
function setCookie(key, value, ttl) {
  const now = new Date();
  const expiryTime = now.getTime() + ttl;
  const expiryDate = new Date(expiryTime);

  // 将值转换为字符串（如果是对象，需要JSON序列化）
  const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;

  // 设置cookie，包含过期时间
  document.cookie = `${key}=${encodeURIComponent(cookieValue)}; expires=${expiryDate.toUTCString()}; path=/`;
}

// 获取 cookie 值
function getCookie(key) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split('=');
    if (cookieKey === key) {
      if (!cookieValue) return null;
      try {
        // 尝试解析JSON
        const decodedValue = decodeURIComponent(cookieValue);
        return JSON.parse(decodedValue);
      } catch {
        // 如果不是JSON，直接返回解码后的值
        return decodeURIComponent(cookieValue);
      }
    }
  }
  return null;
}

// 存储Session
function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

// 获取Session
function getSessionStorage(key) {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) return null;
  try {
    return JSON.parse(itemStr);
  } catch (e) {
    return itemStr;
  }
}
;

// 验证以太坊地址格式
function isValidEthereumAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// 格式化时间戳
function formatDate(ts) {
  if (!ts) return '';
  return new Date(Number(ts) * 1000).toLocaleString();
}

// 保留小数，不四舍五入
const toFixedFloor = function (num, decimal, withComma) {
  if (decimal === void 0) {
    decimal = 4;
  }
  if (withComma === void 0) {
    withComma = true;
  }
  const value = Number(num);
  if (isNaN(value)) return "0";

  // 向下截断，不四舍五入
  const factor = Math.pow(10, decimal);
  const floored = Math.floor(num * factor) / factor;

  // 转成字符串，拆分整数和小数部分
  let [intPart, decPart] = floored.toString().split(".");

  // 整数部分加千分位
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 去掉小数部分多余的 0
  if (decPart) {
    decPart = decPart.replace(/0+$/, ""); // 去掉结尾的0
  }

  // 如果没有小数部分则不加点
  return decPart ? `${intPart}.${decPart}` : intPart;
};
const parseNumber = function (num, decimal) {
  if (decimal === void 0) {
    decimal = 2;
  }
  let newNum = "";
  let count = 0;
  let numStr = String(num); // 数字转为字符串;

  // 处理整数部分（添加千位分隔符）
  if (numStr.indexOf(".") == -1) {
    // 整数部分处理
    for (let i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    return newNum;
  } else {
    // 分割整数和小数部分
    const parts = numStr.split('.');
    const integerPart = parts[0]; // 整数部分
    const decimalPart = parts[1]; // 小数部分

    // 处理整数部分（添加千位分隔符）
    for (let i = integerPart.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = integerPart.charAt(i) + "," + newNum;
      } else {
        newNum = integerPart.charAt(i) + newNum;
      }
      count++;
    }

    // 直接截取指定长度的小数部分，不四舍五入
    let truncatedDecimal = decimalPart.slice(0, decimal);

    // 如果截取后的小数部分长度小于指定长度，用0补足
    while (truncatedDecimal.length < decimal) {
      truncatedDecimal += '0';
    }

    // 去除小数部分末尾的零
    truncatedDecimal = truncatedDecimal.replace(/0+$/, '');

    // 如果小数部分全部被去除了，就不显示小数点和后面的零
    if (truncatedDecimal.length === 0) {
      return newNum;
    } else {
      return newNum + "." + truncatedDecimal;
    }
  }
};

// 时间戳转换时间(毫秒)
const formatTimestamp = function (timestamp, format) {
  if (format === void 0) {
    format = 'YYYY-MM-DD HH:mm:ss';
  }
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const pad = num => String(num).padStart(2, '0');
  const map = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match]);
};
;// ./src/context/LayoutContext.jsx









const LayoutContext = /*#__PURE__*/(0,react.createContext)();
const LayoutProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const {
    i18n
  } = (0,es/* useTranslation */.Bd)();
  const [referrerAddress, setReferrerAddress] = (0,react.useState)("");
  const [noticeLatest, setNoticeLatest] = (0,react.useState)({});
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];

  // 查询我的邀请人
  const handleReferrer = async () => {
    // 我的邀请人
    const referrer = await ContractReferrer.getReferrer(address, ContractsAddress.BindAddress);
    setReferrerAddress(referrer);
  };

  // 获取最新公告
  const handleNoticeLatest = async () => {
    let lang;
    if ((i18n == null ? void 0 : i18n.language) === "zhCN" || (i18n == null ? void 0 : i18n.language) === "zhTW") {
      lang = "zh";
    } else {
      lang = "en";
    }
    const latestId = getCookie('SwarmFiNoticeLatest');
    http.get(`${axiosUrl}/common/notice/latest?lang=${lang}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        if (data) {
          if (latestId === (data == null ? void 0 : data.id)) {
            setNoticeLatest({});
          } else {
            setNoticeLatest(data);
          }
          setCookie('SwarmFiNoticeLatest', data.id);
        }
      }
    });
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询我的邀请人
      handleReferrer();
    }
  }, [address, chain]);
  (0,react.useEffect)(() => {
    // 获取最新公告
    handleNoticeLatest();
  }, []);
  return /*#__PURE__*/react.createElement(LayoutContext.Provider, {
    value: {
      referrerAddress,
      handleReferrer,
      noticeLatest
    }
  }, children);
};
const useLayout = () => (0,react.useContext)(LayoutContext);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(72712);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(60346);
;// ./src/config/abi/SwarmFinanceAbi.json
const SwarmFinanceAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"sfiAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"recordPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"periodCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastClaimStartTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"sfiAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"recordsPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastClaimStartTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Stake","type":"event"},{"inputs":[],"name":"ABnbUSDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BANK","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACK_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BindUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeBank1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeBank2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeBank3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeBank4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeBank5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReceiveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SFI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmLockData","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmParPoints","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmTokenBank","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Swarm_Ratios","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Swarm_Record","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"V3Pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"claimByRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"daysSupplyAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"days_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"perAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"sfiAmount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sell_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_perAmount","type":"uint256"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stake_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"stakeCount","type":"uint256"}],"name":"supply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"userPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/config/abi/SwarmRecordAbi.json
const SwarmRecordAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"addRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"recordsPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"getUserPeriodClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"getUserRecordByPosition","outputs":[{"components":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct Swarm_Record.Record","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserRecordsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimPeriods","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"recordsPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"}],"name":"setLastClaimPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"recordsPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"name":"setUserPeriodClaimed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userRecords","outputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/SwarmRatiosAbi.json
const SwarmRatiosAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayRatioList","outputs":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRatios","outputs":[{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"internalType":"struct Swarm_Ratios.DayRatios[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"position","type":"uint256"}],"name":"getRatiosByPosition","outputs":[{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"internalType":"struct Swarm_Ratios.DayRatios","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRatiosLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"currentDays","type":"uint256[]"},{"internalType":"uint256[]","name":"ratios","type":"uint256[]"}],"name":"setRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/config/abi/SwarmEcologyAbi.json
const SwarmEcologyAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"reduceAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// ./src/config/abi/SwarmDynamicRewardAbi.json
const SwarmDynamicRewardAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"DynamicClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"SendDynamicReward","type":"event"},{"inputs":[],"name":"BANK","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claim_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"sendDynamicReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"send_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_Receiver","type":"address"}],"name":"setReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/utils/contractSwarmUtils.js








const contractSwarmUtils_ethereumHelper = window.ethereum || false;
const contractSwarmUtils_web3 = new (web3_min_default())(contractSwarmUtils_ethereumHelper);

/**
 * 理财合约
 */
class ContractSwarm {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractSwarm.i18n = i18nInstance;
    ContractSwarm.message = messageInstance;
  }

  // 查询每笔交易需要的金额
  static async perAmount(contractsAddress) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const perAmount = await contract.methods.perAmount().call();
      const perAmountBig = new bignumber/* default */.A(perAmount.toString()).shiftedBy(-18).toFixed();
      return perAmountBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询最大交易笔数
  static async maxSupply(contractsAddress) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const maxSupply = await contract.methods.maxSupply().call();
      const maxSupplyBig = new bignumber/* default */.A(maxSupply.toString()).shiftedBy(-18).toFixed();
      return maxSupplyBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 参与理财
  static async supply(address, contractsAddress, stakeCount) {
    try {
      var _ContractSwarm$i18n;
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const gas = await contractSwarmUtils_web3.eth.getGasPrice();
      await contract.methods.supply(stakeCount).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('supply err===>', err);
          return false;
        }
      });
      ContractSwarm.message.success((_ContractSwarm$i18n = ContractSwarm.i18n) == null ? void 0 : _ContractSwarm$i18n.t('Successful participation'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 每期时间
  static async days_1(contractsAddress) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const days_1 = await contract.methods.days_1().call();
      return days_1;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询当前周期是否已经领取过
  static async getUserPeriodClaimed(address, recordContract, recordsPosition, periodCount) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmRecordAbi_namespaceObject, recordContract);
      const status = await contract.methods.getUserPeriodClaimed(address, recordsPosition, periodCount).call();
      return status;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询周期、利率
  static async getRatios(days_1, ratiosContract, timestamp) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmRatiosAbi_namespaceObject, ratiosContract);
      const ratiosLength = await contract.methods.getRatiosLength().call();
      const max = ratiosLength;
      const queryPromises = [];
      for (let i = 0; i < max; i++) {
        // 封装成 Promise
        const queryPromise = contract.methods.getRatiosByPosition(i).call().then(async data => {
          return {
            index: i,
            success: true,
            day: data.day,
            endTime: timestamp * 1 + data.day * days_1,
            claimEndTime: timestamp * 1 + data.day * days_1 + days_1 * 1,
            ratio: data.ratio,
            percentage: data.ratio / 10000 * 100
          };
        }).catch(err => ({
          index: i,
          success: false,
          error: err.message
        }));
        queryPromises.push(queryPromise);
      }

      // 并行执行所有查询
      const results = await Promise.all(queryPromises);
      // console.log("Ratios results===>", results)

      return results;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询当前钱包购买理财的数据
  static async getUserList(address, managementContract, ratiosContract, recordContract) {
    try {
      const days_1 = await ContractSwarm.days_1(managementContract);
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmRecordAbi_namespaceObject, recordContract);
      const recordsLength = await contract.methods.getUserRecordsLength(address).call();
      const max = recordsLength;
      const queryPromises = [];
      for (let i = 0; i < max; i++) {
        // 封装成 Promise
        // 查询参与理财
        const queryPromise = contract.methods.getUserRecordByPosition(address, i).call().then(async data => {
          // 调用 getRatios 获取利率数据
          const ratiosData = await this.getRatios(days_1, ratiosContract, data.timestamp);

          // 根据 timestamp 匹配对应的利率周期
          const matchedRatio = await this.matchRatioByTimestamp(ratiosData);

          // 查询当前周期是否已经领取过
          let isClaimLastPast = false;
          if (matchedRatio != null && matchedRatio.lastPast) {
            isClaimLastPast = await this.getUserPeriodClaimed(address, recordContract, i, matchedRatio.lastPast.index + 1);
          }
          return {
            index: i,
            success: true,
            timestamp: data.timestamp,
            usdtAmountBig: new bignumber/* default */.A(data.usdtAmount.toString()).shiftedBy(-18).toFixed(),
            days_1: days_1,
            ratio: matchedRatio,
            // 添加利率信息
            isClaimLastPast: isClaimLastPast // 当前周期是否已经领取过
          };
        }).catch(err => ({
          index: i,
          success: false,
          error: err.message
        }));
        queryPromises.push(queryPromise);
      }

      // 并行执行所有查询(所有列表)
      const results = await Promise.all(queryPromises);

      // 按 timestamp 降序排序
      const sortedResults = results.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      // console.log("list sortedResults===>", sortedResults)

      return sortedResults;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 辅助方法：根据 timestamp 匹配对应的利率
  static async matchRatioByTimestamp(ratiosData) {
    if (!ratiosData || ratiosData.length === 0) return null;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // 过滤出成功的且 date 有效的数据
    const validRatios = ratiosData.filter(ratio => ratio.success && ratio.endTime && !isNaN(Number(ratio.endTime)));
    if (validRatios.length === 0) return null;

    // 按 date 排序
    const sortedRatios = [...validRatios].sort((a, b) => Number(a.endTime) - Number(b.endTime));

    // 找到小于等于当前时间戳的最新一条数据（最后一条）
    const pastRatios = sortedRatios.filter(ratio => Number(ratio.endTime) <= currentTimestamp);
    const lastPastRatio = pastRatios.length > 0 ? pastRatios[pastRatios.length - 1] : null;

    // 找到大于当前时间戳的第一条数据
    const futureRatios = sortedRatios.filter(ratio => Number(ratio.endTime) > currentTimestamp);
    const firstFutureRatio = futureRatios.length > 0 ? futureRatios[0] : null;
    return {
      lastPast: lastPastRatio != null ? lastPastRatio : firstFutureRatio,
      // 过滤前的最新一条（已过期的最后一个）
      firstFuture: firstFutureRatio != null ? firstFutureRatio : lastPastRatio // 过滤后的第一条（即将到来的第一个）
    };
  }

  // 查询当前SFI价格
  static async price(contractsAddress) {
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmRatiosAbi_namespaceObject, contractsAddress);
      const price = await contract.methods.price().call();
      const priceBig = new bignumber/* default */.A(price.toString()).shiftedBy(-18).toFixed();
      return priceBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 领取
  static async claim(address, contractsAddress, recordPosition, periodCount) {
    try {
      var _ContractSwarm$i18n2;
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const gas = await contractSwarmUtils_web3.eth.getGasPrice();
      await contract.methods.claim(recordPosition, periodCount).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('claim err===>', err);
          return false;
        }
      });
      ContractSwarm.message.success((_ContractSwarm$i18n2 = ContractSwarm.i18n) == null ? void 0 : _ContractSwarm$i18n2.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询生态账号SFI余额
  static async balanceOf(address, tokenContract, contractsAddress, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }
    try {
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmEcologyAbi_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address, tokenContract).call();
      const balanceOfBig = new bignumber/* default */.A(balanceOf.toString()).shiftedBy(-decimals).toFixed(2);
      return balanceOfBig;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 卖出
  static async sell(address, contractsAddress, amount) {
    try {
      var _ContractSwarm$i18n3;
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmFinanceAbi_namespaceObject, contractsAddress);
      const gas = await contractSwarmUtils_web3.eth.getGasPrice();
      const amountBig = new bignumber/* default */.A(amount.toString()).shiftedBy(18).toFixed();
      await contract.methods.sell(amountBig).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('sell err===>', err);
          return false;
        }
      });
      ContractSwarm.message.success((_ContractSwarm$i18n3 = ContractSwarm.i18n) == null ? void 0 : _ContractSwarm$i18n3.t('Sell successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 领取动态收益
  static async dynamicClaim(address, contractsAddress) {
    try {
      var _ContractSwarm$i18n4;
      const contract = new contractSwarmUtils_web3.eth.Contract(SwarmDynamicRewardAbi_namespaceObject, contractsAddress);
      const fee = await contract.methods.fee().call();
      const gas = await contractSwarmUtils_web3.eth.getGasPrice();
      await contract.methods.claim().send({
        from: address,
        gasPrice: gas,
        value: fee
      }, (err, result) => {
        if (err) {
          console.log('dynamic claim err===>', err);
          return false;
        }
      });
      ContractSwarm.message.success((_ContractSwarm$i18n4 = ContractSwarm.i18n) == null ? void 0 : _ContractSwarm$i18n4.t('Collection successful, expected to arrive in 1-2 minutes'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
ContractSwarm.i18n = null;
ContractSwarm.message = null;
;// ./src/config/abi/erc20.json
const erc20_namespaceObject = /*#__PURE__*/JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// ./src/utils/contractERC20Utils.js



const contractERC20Utils_ethereumHelper = window.ethereum || false;
const contractERC20Utils_web3 = new (web3_min_default())(contractERC20Utils_ethereumHelper);

/**
 * ERC20通用合约
 */
class ContractERC20 {
  // 查询余额
  static async balanceOf(address, contractsAddress, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address).call();
      const balanceOfBig = new bignumber/* default */.A(balanceOf.toString()).shiftedBy(-decimals).toFixed(2);
      return balanceOfBig;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 查询授权
  static async allowance(address, tokenAddress, contractsAddress, decimals) {
    if (decimals === void 0) {
      decimals = 18;
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, tokenAddress);
      const allowance = await contract.methods.allowance(address, contractsAddress).call();
      const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-decimals).toFixed();
      return allowanceBig;
    } catch (error) {
      console.log("error===>", error);
      return "0";
    }
  }

  // 授权
  static async approve(address, tokenAddress, contractsAddress, amount) {
    if (amount === void 0) {
      amount = "1000000000000000000000000000";
    }
    try {
      const contract = new contractERC20Utils_web3.eth.Contract(erc20_namespaceObject, tokenAddress);
      const gas = await contractERC20Utils_web3.eth.getGasPrice();
      const approveAmount = contractERC20Utils_web3.utils.toWei(amount.toString(), 'ether');
      await contract.methods.approve(contractsAddress, approveAmount.toString()).send({
        from: address,
        gasPrice: gas
      });
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
;// ./src/context/ManagementContext.jsx











const ManagementContext = /*#__PURE__*/(0,react.createContext)();
const ManagementProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractSwarm.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [perAmount, setPerAmount] = (0,react.useState)();
  const [maxSupply, setMaxSupply] = (0,react.useState)();
  const [tokenBalance, setTokenBalance] = (0,react.useState)("0");
  const [allApprove, setAllApprove] = (0,react.useState)("1000");
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isStakeLoading, setIsStakeLoading] = (0,react.useState)(false);
  const [loading, setLoading] = (0,react.useState)(true);
  const [myList, setMyList] = (0,react.useState)([]);
  const [SFIBalance, setSFIBalance] = (0,react.useState)("0");
  const [allSFIApprove, setAllSFIApprove] = (0,react.useState)("1000");
  const [isSFIApproveLoading, setIsSFIApproveLoading] = (0,react.useState)(false);
  const [isSFISellLoading, setIsSFISellLoading] = (0,react.useState)(false);
  const [usdtSFTprice, setUsdtSFTprice] = (0,react.useState)("0");
  const [isClaimLoading, setIsClaimLoading] = (0,react.useState)(false);
  const [ecologySFIBalance, setEcologySFIBalance] = (0,react.useState)("0");
  const [assetsTotalUsdt, setAssetsTotalUsdt] = (0,react.useState)("0");
  const [staticTotal, setStaticTotal] = (0,react.useState)("0");
  const [dynamicTotal, setDynamicTotal] = (0,react.useState)("0");
  const [dynamicNotclaimed, setDynamicNotclaimed] = (0,react.useState)("0");
  const [isDynamicClaimLoading, setIsDynamicClaimLoading] = (0,react.useState)(false);

  // 查询每笔交易需要的金额
  const handlePerAmount = async () => {
    const amount = await ContractSwarm.perAmount(ContractsAddress.ManagementAddress);
    setPerAmount(amount);
  };

  // 查询最大交易笔数
  const handleMaxSupply = async () => {
    const amount = await ContractSwarm.maxSupply(ContractsAddress.ManagementAddress);
    setMaxSupply(amount);
  };

  // 查询USDT余额
  const handleBalance = async () => {
    const balanceOf = await ContractERC20.balanceOf(address, ContractsAddress.USDT);
    // console.log("balanceOf===>", balanceOf)
    setTokenBalance(balanceOf);
  };

  // 查询USDT授权
  const handleAllowance = async () => {
    const allowance = await ContractERC20.allowance(address, ContractsAddress.USDT, ContractsAddress.ManagementAddress);
    // console.log("allowance===>", allowance)
    setAllApprove(allowance);
  };

  // 查询SFI余额
  const handleSFIBalance = async () => {
    const SFIBalanceOf = await ContractERC20.balanceOf(address, ContractsAddress.SFI);
    // console.log("SFIBalanceOf===>", SFIBalanceOf)
    setSFIBalance(SFIBalanceOf);
  };

  // 查询SFI授权
  const handleSFIAllowance = async () => {
    const SFIAllowance = await ContractERC20.allowance(address, ContractsAddress.SFI, ContractsAddress.ManagementAddress);
    // console.log("SFIAllowance===>", SFIAllowance)
    setAllSFIApprove(SFIAllowance);
  };

  // 查询生态账号SFI余额
  const handleEcologyBalance = async () => {
    const ecologyBalanceOf = await ContractSwarm.balanceOf(address, ContractsAddress.SFI, ContractsAddress.EcologyAddress);
    setEcologySFIBalance(ecologyBalanceOf);
  };

  // 查询当前SFI价格
  const handleSFIPrice = async () => {
    const price = await ContractSwarm.price(ContractsAddress.RatiosAddress);
    setUsdtSFTprice(price);
  };

  // 查询当前钱包购买理财的数据
  const handleUserList = async () => {
    const getUserList = await ContractSwarm.getUserList(address, ContractsAddress.ManagementAddress, ContractsAddress.RatiosAddress, ContractsAddress.RecordAddress);
    setLoading(false);
    setMyList(getUserList);
    const totalUsdt = getUserList.reduce((sum, item) => {
      return sum + (Number(item.usdtAmountBig) || 0);
    }, 0);
    // console.log("totalUsdt==>", totalUsdt)
    setAssetsTotalUsdt(totalUsdt);
  };
  (0,react.useEffect)(() => {
    setLoading(true);
  }, []);
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询每笔交易需要的金额
      handlePerAmount();
      // 查询最大交易笔数
      handleMaxSupply();
      // 查询USDT余额
      handleBalance();
      // 查询USDT授权
      handleAllowance();
      // 查询SFI余额
      handleSFIBalance();
      // 查询SFI授权
      handleSFIAllowance();
      // 查询生态账号SFI余额
      handleEcologyBalance();
      // 查询当前SFI价格
      handleSFIPrice();
      // 查询当前钱包购买理财的数据
      handleUserList();
    }
  }, [address, chain]);

  // 获取静态收益
  const handleStaticIncome = async () => {
    http.get(`${axiosUrl}/stake/reward/total-info?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setStaticTotal(data.staticTotal);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取动态收益
  const handleDynamicIncome = async () => {
    http.get(`${axiosUrl}/assets/info/owner?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data && res.data[0];
        // 累计收益
        setDynamicTotal(data.total);
        // 未领收益
        setDynamicNotclaimed(data.value);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 获取静态收益
      handleStaticIncome();
      // 获取动态收益
      handleDynamicIncome();
    }
  }, [address, chain]);

  // 授权
  const handleApprove = async () => {
    setIsApproveLoading(true);
    const approve = await ContractERC20.approve(address, ContractsAddress.USDT, ContractsAddress.ManagementAddress);
    setIsApproveLoading(false);
    // 授权成功
    if (approve) {
      handleAllowance();
    }
  };

  // 理财
  const handleStake = async inputAmount => {
    if (!inputAmount) {
      message/* default */.Ay.error(t("Enter recharge amount"));
      return;
    }
    if (Number(tokenBalance) < Number(inputAmount)) {
      message/* default */.Ay.error(t("Insufficient Balance"));
      return;
    }

    // 判断是否是整数
    const stakeCount = inputAmount / 100;
    if (!Number.isInteger(stakeCount)) {
      message/* default */.Ay.error(t("The investment amount must be a multiple of 100"));
      return;
    }
    if (Number(inputAmount) < Number(perAmount) || Number(inputAmount) > Number(maxSupply)) {
      message/* default */.Ay.error(t("The amount exceeds the range"));
      return;
    }
    setIsStakeLoading(true);
    const stake = await ContractSwarm.supply(address, ContractsAddress.ManagementAddress, stakeCount);
    setIsStakeLoading(false);
    // 购买成功
    if (stake) {
      handleBalance();
      handleAllowance();
      // 查询当前钱包购买理财的数据
      handleUserList();
      // 查询生态账号SFI余额
      handleEcologyBalance();
    }
  };

  // 领取
  const handleClaim = async (index, recordPosition, periodCount) => {
    setIsClaimLoading(prev => ({
      ...prev,
      [index]: true
    }));
    try {
      const status = await ContractSwarm.claim(address, ContractsAddress.ManagementAddress, recordPosition, periodCount);
      if (status) {
        // 查询SFI余额
        handleSFIBalance();
        // 查询当前钱包购买理财的数据
        handleUserList();
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsClaimLoading(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };

  // 授权SFI
  const handleSFIApprove = async () => {
    setIsSFIApproveLoading(true);
    const approve = await ContractERC20.approve(address, ContractsAddress.SFI, ContractsAddress.ManagementAddress);
    setIsSFIApproveLoading(false);
    // 授权成功
    if (approve) {
      handleSFIAllowance();
    }
  };

  // 卖出
  const handleSell = async inputAmount => {
    if (!inputAmount) {
      message/* default */.Ay.error(t("Enter the selling amount"));
      return;
    }
    if (Number(SFIBalance) < Number(inputAmount)) {
      message/* default */.Ay.error(t("Insufficient Balance"));
      return;
    }
    setIsSFISellLoading(true);
    const status = await ContractSwarm.sell(address, ContractsAddress.ManagementAddress, inputAmount);
    setIsSFISellLoading(false);
    // 卖出成功
    if (status) {
      handleBalance();
      handleSFIBalance();
      handleSFIAllowance();
    }
  };

  // 领取动态收益
  const handleDynamicClaim = async () => {
    if (Number(dynamicNotclaimed) === 0) {
      message/* default */.Ay.error(t("No unclaimed income"));
      return;
    }
    setIsDynamicClaimLoading(true);
    const status = await ContractSwarm.dynamicClaim(address, ContractsAddress.SwarmDynamicRewardAddress);
    setIsDynamicClaimLoading(false);
    if (status) {
      setTimeout(() => {
        // 获取动态收益
        handleDynamicIncome();
      }, 6000);
    }
  };
  return /*#__PURE__*/react.createElement(ManagementContext.Provider, {
    value: {
      perAmount,
      maxSupply,
      tokenBalance,
      allApprove,
      isApproveLoading,
      handleApprove,
      isStakeLoading,
      handleStake,
      loading,
      myList,
      SFIBalance,
      allSFIApprove,
      isSFIApproveLoading,
      isSFISellLoading,
      handleSFIApprove,
      usdtSFTprice,
      handleSell,
      isClaimLoading,
      handleClaim,
      ecologySFIBalance,
      assetsTotalUsdt,
      handleUserList,
      handleDynamicClaim,
      handleSFIBalance,
      staticTotal,
      dynamicTotal,
      dynamicNotclaimed,
      isDynamicClaimLoading
    }
  }, children);
};
const useManagement = () => (0,react.useContext)(ManagementContext);
;// ./src/config/abi/SwarmLockDataAbi.json
const SwarmLockDataAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"recordPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"periodCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"getUserRecordByPosition","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"},{"internalType":"uint256","name":"claimedAmount","type":"uint256"}],"internalType":"struct Swarm_Lock_Data.Record","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserRecordsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"setUserRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userRecords","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"recordPosition","type":"uint256"},{"internalType":"uint256","name":"periodCount","type":"uint256"},{"internalType":"uint256","name":"claimedAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// ./src/config/abi/SwarmUnlockAbi.json
const SwarmUnlockAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"BANK","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SFI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SwarmLockData","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"position","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"days_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"month_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ratio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ratio","type":"uint256"}],"name":"setRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/SwarmBankPromotionAbi.json
const SwarmBankPromotionAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Add","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reduce","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawToken","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"V3Pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"reduceAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// ./src/config/abi/SwarmBankLevelAbi.json
const SwarmBankLevelAbi_namespaceObject = [];
;// ./src/config/abi/SwarmLevelRewardAbi.json
const SwarmLevelRewardAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LevelClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claim_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"send_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_Receiver","type":"address"}],"name":"setReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/utils/contractSwarmStakingUtils.js








const contractSwarmStakingUtils_ethereumHelper = window.ethereum || false;
const contractSwarmStakingUtils_web3 = new (web3_min_default())(contractSwarmStakingUtils_ethereumHelper);

/**
 * 质押合约
 */
class ContractSwarmStaking {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractSwarmStaking.i18n = i18nInstance;
    ContractSwarmStaking.message = messageInstance;
  }

  // 质押时间
  static async month_1(UnlockContracts) {
    try {
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmUnlockAbi_namespaceObject, UnlockContracts);
      const month_1 = await contract.methods.month_1().call();
      return month_1;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询当前钱包质押数据
  static async getStakingList(address, LockDataContracts, UnlockContracts) {
    try {
      const month_1 = await ContractSwarmStaking.month_1(UnlockContracts);
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmLockDataAbi_namespaceObject, LockDataContracts);
      const recordsLength = await contract.methods.getUserRecordsLength(address).call();
      const max = recordsLength;
      const queryPromises = [];
      for (let i = 0; i < max; i++) {
        // 封装成 Promise
        const queryPromise = contract.methods.getUserRecordByPosition(address, i).call().then(async data => {
          return {
            index: i,
            success: true,
            data: data,
            stakeTime: data.stakeTime,
            amountBig: new bignumber/* default */.A(data.amount.toString()).shiftedBy(-18).toFixed(),
            claimedAmount: data.claimedAmount,
            endTime: data.stakeTime * 1 + month_1 * 1
          };
        }).catch(err => ({
          index: i,
          success: false,
          error: err.message
        }));
        queryPromises.push(queryPromise);
      }

      // 并行执行所有查询(所有列表)
      const results = await Promise.all(queryPromises);

      // 按 stakeTime 降序排序
      const sortedResults = results.sort((a, b) => Number(b.stakeTime) - Number(a.stakeTime));
      // console.log("staking sortedResults===>", sortedResults)

      return sortedResults;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询质押月利息
  static async ratio(UnlockContracts) {
    try {
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmUnlockAbi_namespaceObject, UnlockContracts);
      const ratio = await contract.methods.ratio().call();
      return ratio;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 质押领取
  static async claim(address, UnlockContracts, recordPosition) {
    try {
      var _ContractSwarmStaking2;
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmUnlockAbi_namespaceObject, UnlockContracts);
      const gas = await contractSwarmStakingUtils_web3.eth.getGasPrice();
      await contract.methods.claim(recordPosition).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('staking claim err===>', err);
          return false;
        }
      });
      ContractSwarmStaking.message.success((_ContractSwarmStaking2 = ContractSwarmStaking.i18n) == null ? void 0 : _ContractSwarmStaking2.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询推广奖励可领取余额
  static async balanceOf(address, tokenContract, contractsAddress) {
    try {
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmBankPromotionAbi_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address, tokenContract).call();
      const balanceOfBig = new bignumber/* default */.A(balanceOf.toString()).shiftedBy(-18).toFixed(2);
      return {
        balanceOf: balanceOf,
        balanceOfBig: balanceOfBig
      };
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 领取推广奖励
  static async withdraw(address, tokenContract, contractsAddress, amount) {
    try {
      var _ContractSwarmStaking3;
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmBankPromotionAbi_namespaceObject, contractsAddress);
      const gas = await contractSwarmStakingUtils_web3.eth.getGasPrice();
      await contract.methods.withdraw(tokenContract, amount).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('withdraw err===>', err);
          return false;
        }
      });
      ContractSwarmStaking.message.success((_ContractSwarmStaking3 = ContractSwarmStaking.i18n) == null ? void 0 : _ContractSwarmStaking3.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 领取等级奖励
  static async levelClaim(address, contractsAddress, level) {
    try {
      var _ContractSwarmStaking4;
      const contract = new contractSwarmStakingUtils_web3.eth.Contract(SwarmLevelRewardAbi_namespaceObject, contractsAddress);
      const fee = await contract.methods.fee().call();
      const gas = await contractSwarmStakingUtils_web3.eth.getGasPrice();
      await contract.methods.claim(level).send({
        from: address,
        gasPrice: gas,
        value: fee
      }, (err, result) => {
        if (err) {
          console.log('level claim err===>', err);
          return false;
        }
      });
      ContractSwarmStaking.message.success((_ContractSwarmStaking4 = ContractSwarmStaking.i18n) == null ? void 0 : _ContractSwarmStaking4.t('Claimed successfully'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }
}
ContractSwarmStaking.i18n = null;
ContractSwarmStaking.message = null;
;// ./src/context/StakingContext.jsx











const StakingContext = /*#__PURE__*/(0,react.createContext)();
const StakingProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractSwarmStaking.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const {
    handleSFIBalance
  } = useManagement();
  const [loading, setLoading] = (0,react.useState)(true);
  const [myStakingList, setMyStakingList] = (0,react.useState)([]);
  const [ratio, setRatio] = (0,react.useState)();
  const [isStakingClaimLoading, setIsStakingClaimLoading] = (0,react.useState)(false);
  const [promotionReward, setPromotionReward] = (0,react.useState)("0");
  const [promotionRewardBig, setPromotionRewardBig] = (0,react.useState)("0");
  const [rewardPoolV5, setRewardPoolV5] = (0,react.useState)("0");
  const [rewardPoolV6, setRewardPoolV6] = (0,react.useState)("0");
  const [rewardPoolV7, setRewardPoolV7] = (0,react.useState)("0");
  const [rewardPoolV8, setRewardPoolV8] = (0,react.useState)("0");
  const [rewardPoolV9, setRewardPoolV9] = (0,react.useState)("0");
  const [claimablePoolV5, setClaimablePoolV5] = (0,react.useState)("0");
  const [claimablePoolV6, setClaimablePoolV6] = (0,react.useState)("0");
  const [claimablePoolV7, setClaimablePoolV7] = (0,react.useState)("0");
  const [claimablePoolV8, setClaimablePoolV8] = (0,react.useState)("0");
  const [claimablePoolV9, setClaimablePoolV9] = (0,react.useState)("0");
  const [isPromotionLoading, setIsPromotionLoading] = (0,react.useState)(false);
  const [isLevelLoading, setIsLevelLoading] = (0,react.useState)(false);

  // 查询当前钱包购买理财的数据
  const handleStakingList = async () => {
    const getStakingList = await ContractSwarmStaking.getStakingList(address, ContractsAddress.SwarmLockDataAddress, ContractsAddress.SwarmUnlockAddress);
    setLoading(false);
    setMyStakingList(getStakingList);
  };

  // 查询质押月利息
  const handleRatio = async () => {
    const mRatio = await ContractSwarmStaking.ratio(ContractsAddress.SwarmUnlockAddress);
    setRatio(mRatio / 10000 * 100);
  };

  // 查询推广奖励可领取余额
  const handleBalanceOf = async () => {
    const res = await ContractSwarmStaking.balanceOf(address, ContractsAddress.abnbUSDTAddress, ContractsAddress.SwarmBankPromotionAddress);
    // console.log("res====>", res)
    setPromotionReward(res == null ? void 0 : res.balanceOf);
    setPromotionRewardBig(res == null ? void 0 : res.balanceOfBig);
  };

  // 查询V5~V9奖励池余额
  const handleBalanceLevelV5 = async () => {
    const balanceV5 = await ContractERC20.balanceOf(ContractsAddress.SwarmBankLevel1Address, ContractsAddress.USDT);
    setRewardPoolV5(balanceV5);
  };
  const handleBalanceLevelV6 = async () => {
    const balanceV6 = await ContractERC20.balanceOf(ContractsAddress.SwarmBankLevel2Address, ContractsAddress.USDT);
    setRewardPoolV6(balanceV6);
  };
  const handleBalanceLevelV7 = async () => {
    const balanceV7 = await ContractERC20.balanceOf(ContractsAddress.SwarmBankLevel3Address, ContractsAddress.USDT);
    setRewardPoolV7(balanceV7);
  };
  const handleBalanceLevelV8 = async () => {
    const balanceV8 = await ContractERC20.balanceOf(ContractsAddress.SwarmBankLevel4Address, ContractsAddress.USDT);
    setRewardPoolV8(balanceV8);
  };
  const handleBalanceLevelV9 = async () => {
    const balanceV9 = await ContractERC20.balanceOf(ContractsAddress.SwarmBankLevel5Address, ContractsAddress.USDT);
    setRewardPoolV9(balanceV9);
  };

  // 获取等级奖励余额
  const handleLevelReward = async () => {
    http.get(`${axiosUrl}/assets/info/level-reward?address=${address}`).then(function (res) {
      if (res.code === 0) {
        var _poolV5$, _poolV6$, _poolV7$, _poolV8$, _poolV9$;
        const data = res.data;
        const poolV5 = data.filter(item => item.type === 5);
        const poolV6 = data.filter(item => item.type === 6);
        const poolV7 = data.filter(item => item.type === 7);
        const poolV8 = data.filter(item => item.type === 8);
        const poolV9 = data.filter(item => item.type === 9);
        setClaimablePoolV5((_poolV5$ = poolV5[0]) == null ? void 0 : _poolV5$.value);
        setClaimablePoolV6((_poolV6$ = poolV6[0]) == null ? void 0 : _poolV6$.value);
        setClaimablePoolV7((_poolV7$ = poolV7[0]) == null ? void 0 : _poolV7$.value);
        setClaimablePoolV8((_poolV8$ = poolV8[0]) == null ? void 0 : _poolV8$.value);
        setClaimablePoolV9((_poolV9$ = poolV9[0]) == null ? void 0 : _poolV9$.value);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    setLoading(true);
  }, []);
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询当前钱包质押数据
      handleStakingList();
      // 查询质押月利息
      handleRatio();
      // 查询推广奖励可领取余额
      handleBalanceOf();
      // 查询V5~V9奖励池余额
      handleBalanceLevelV5();
      handleBalanceLevelV6();
      handleBalanceLevelV7();
      handleBalanceLevelV8();
      handleBalanceLevelV9();
      // 获取等级奖励余额
      handleLevelReward();
    }
  }, [address, chain]);

  // 质押领取
  const handleStakingClaim = async (index, recordPosition) => {
    setIsStakingClaimLoading(prev => ({
      ...prev,
      [index]: true
    }));
    try {
      const status = await ContractSwarmStaking.claim(address, ContractsAddress.SwarmUnlockAddress, recordPosition);
      if (status) {
        // 查询当前钱包质押数据
        handleStakingList();
        // 查询SFI余额
        handleSFIBalance();
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsStakingClaimLoading(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };

  // 推广奖励领取
  const handlePromotionClaim = async () => {
    setIsPromotionLoading(true);
    try {
      const status = await ContractSwarmStaking.withdraw(address, ContractsAddress.abnbUSDTAddress, ContractsAddress.SwarmBankPromotionAddress, promotionReward);
      if (status) {
        setTimeout(() => {
          // 查询推广奖励可领取余额
          handleBalanceOf();
        }, 3000);
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsPromotionLoading(false);
    }
  };

  // 等级奖励领取
  const handleLevelClaim = async index => {
    setIsLevelLoading(prev => ({
      ...prev,
      [index]: true
    }));
    try {
      const status = await ContractSwarmStaking.levelClaim(address, ContractsAddress.SwarmLevelRewardAddress, index);
      if (status) {
        setTimeout(() => {
          if (index === 5) {
            handleBalanceLevelV5();
          } else if (index === 6) {
            handleBalanceLevelV6();
          } else if (index === 7) {
            handleBalanceLevelV7();
          } else if (index === 8) {
            handleBalanceLevelV8();
          } else if (index === 9) {
            handleBalanceLevelV9();
          }

          // 获取等级奖励余额
          handleLevelReward();
        }, 5000);
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      // 无论成功或失败，都取消加载状态
      setIsLevelLoading(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };
  return /*#__PURE__*/react.createElement(StakingContext.Provider, {
    value: {
      loading,
      myStakingList,
      ratio,
      isStakingClaimLoading,
      handleStakingClaim,
      handleStakingList,
      promotionRewardBig,
      rewardPoolV5,
      rewardPoolV6,
      rewardPoolV7,
      rewardPoolV8,
      rewardPoolV9,
      claimablePoolV5,
      claimablePoolV6,
      claimablePoolV7,
      claimablePoolV8,
      claimablePoolV9,
      isPromotionLoading,
      handlePromotionClaim,
      isLevelLoading,
      handleLevelClaim
    }
  }, children);
};
const useStaking = () => (0,react.useContext)(StakingContext);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(57618);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 44 modules
var modal = __webpack_require__(6646);
;// ./src/components/language/language.jsx
/* eslint-disable react-hooks/exhaustive-deps */



function Language(_ref) {
  let {
    visible,
    modalCancel,
    modalConfirm,
    language
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: visible,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_title"
  }, t("Select Language")), /*#__PURE__*/react.createElement("div", {
    className: "lan_pass"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("en");
    }
  }, /*#__PURE__*/react.createElement("em", null, "English"), language === "en" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhCN");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u7B80\u4F53\u4E2D\u6587"), language === "zhCN" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhTW");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u7E41\u4F53\u4E2D\u6587"), language === "zhTW" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("malay");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Bahasa Melayu"), language === "malay" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("indonesian");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Bahasa Indonesia"), language === "indonesian" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("vietnamese");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Ti\u1EBFng Vi\u1EC7t"), language === "vietnamese" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("thai");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"), language === "thai" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("korean");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\uD55C\uAD6D\uC5B4"), language === "korean" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("japanese");
    }
  }, /*#__PURE__*/react.createElement("em", null, "\u65E5\u672C\u8A9E"), language === "japanese" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("filipino");
    }
  }, /*#__PURE__*/react.createElement("em", null, "Filipino"), language === "filipino" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  })))));
}
/* harmony default export */ const language = (Language);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 25 modules
var input = __webpack_require__(87229);
;// ./src/components/Loader/Dots.tsx

const Dots = styled_components_browser_esm/* default */.Ay.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const Loader_Dots = (Dots);
;// ./src/components/modal/bindReferrerModal.jsx












const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.b_addtit {
	    font-size: 13px;
    	padding-bottom: 5px;
	}
`;
function BindReferrerModal(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  (0,react.useEffect)(() => {
    ContractReferrer.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const location = (0,react_router_dist/* useLocation */.zy)();
  const {
    handleReferrer
  } = useLayout();
  const [inputBindAddress, setInputBindAddress] = (0,react.useState)("");
  const [isBindLoading, setIsBindLoading] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const searchParams = new URLSearchParams(location.search);
    const invitation = searchParams.get('invitation');
    if (invitation) {
      setInputBindAddress(invitation);
    }
  }, [location]);
  const inputChange = e => {
    let value = e.target.value;
    setInputBindAddress(value);
  };
  const handleBindClick = async () => {
    const referral = inputBindAddress.trim();
    if (!referral) {
      message/* default */.Ay.error(t("Referral wallet address"));
      return;
    }
    if (!isValidEthereumAddress(referral)) {
      message/* default */.Ay.error(t("Invalid referrer wallet address format"));
      return;
    }
    setIsBindLoading(true);
    const referrer = await ContractReferrer.bindReferrer(address, inputBindAddress, ContractsAddress.BindAddress);

    // 绑定失败
    if (!referrer) {
      setIsBindLoading(false);
    }

    // 绑定成功
    if (referrer) {
      setIsBindLoading(false);
      modalCancel(false);
      handleReferrer();
    }
  };
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    closable: false,
    width: 488
  }, /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, t('Bind')), /*#__PURE__*/react.createElement("div", {
    className: "b_addtit"
  }, t('Recommended address')), /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "text",
    placeholder: t('Referral wallet address'),
    allowClear: true,
    value: inputBindAddress,
    onChange: inputChange,
    style: {
      fontSize: "11px"
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal_buttom",
    onClick: handleBindClick
  }, !isBindLoading && /*#__PURE__*/react.createElement("span", null, t('Confirm')), isBindLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Confirm'))))));
}
/* harmony default export */ const bindReferrerModal = (BindReferrerModal);
;// ./src/components/modal/newsModal.jsx




const newsModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.news_tit {
		span {
			display: block;
	    	font-size: 13px;
		}
		p {
			font-size: 14px;
		}
	}
`;
function NewsModal(_ref) {
  let {
    modalOpen,
    modalCancel,
    noticeLatest
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: modalCancel,
    width: 488
  }, /*#__PURE__*/react.createElement(newsModal_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, noticeLatest == null ? void 0 : noticeLatest.title), /*#__PURE__*/react.createElement("div", {
    className: "news_tit",
    dangerouslySetInnerHTML: {
      __html: noticeLatest == null ? void 0 : noticeLatest.content
    }
  })));
}
/* harmony default export */ const newsModal = (NewsModal);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/ResponsiveContainer.js + 1 modules
var ResponsiveContainer = __webpack_require__(28482);
// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/LineChart.js + 40 modules
var LineChart = __webpack_require__(56375);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/CartesianGrid.js
var CartesianGrid = __webpack_require__(69107);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = __webpack_require__(77984);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(23495);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js + 61 modules
var Line = __webpack_require__(69597);
;// ./src/components/header/priceChart.jsx










function PriceChart(_ref) {
  var _chain$id;
  let {
    modalOpen,
    modalCancel,
    usdtSFTprice
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const [data, setData] = (0,react.useState)([]);
  const [holeBalance, setHoleBalance] = (0,react.useState)("0");

  // 获取价格
  const handlePriceList = async () => {
    http.get(`${axiosUrl}/assets/info/price-list`).then(function (res) {
      if (res.code === 0) {
        setData(res.data);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 获取全网总销毁数值
  const handleHoleNumber = async () => {
    const balanceOf = await ContractERC20.balanceOf(ContractsAddress.SwarmHoleAddress, ContractsAddress.SFI);
    setHoleBalance(balanceOf);
  };
  (0,react.useEffect)(() => {
    // 获取价格
    handlePriceList();
    // 获取全网总销毁数值
    handleHoleNumber();
  }, []);

  // 计算 Y 轴动态范围
  const getYAxisDomain = () => {
    if (data.length === 0) return [0, 1];
    const prices = data.map(item => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    let start;
    let end;

    // 如果所有价格相同，设置一个范围
    if (minPrice === maxPrice) {
      start = parseNumber(minPrice - 0.1);
      end = parseNumber(maxPrice + 0.1);
      return [Number(start), Number(end)];
    }
    start = parseNumber(minPrice - 0.01);
    end = parseNumber(maxPrice + 0.01);
    return [Number(start), Number(end)];
  };
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: modalOpen,
    onCancel: modalCancel,
    closable: false,
    width: 488,
    className: "price_modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_chart_trend"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_chart_title"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
  }))), t("Price trend")), /*#__PURE__*/react.createElement("div", {
    className: "header_chart_price"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, usdtSFTprice, " USDT")))), /*#__PURE__*/react.createElement(ResponsiveContainer/* ResponsiveContainer */.u, {
    width: "100%",
    height: 300
  }, /*#__PURE__*/react.createElement(LineChart/* LineChart */.b, {
    data: data,
    margin: {
      right: 15
    }
  }, /*#__PURE__*/react.createElement(CartesianGrid/* CartesianGrid */.d, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/react.createElement(XAxis/* XAxis */.W, {
    dataKey: "createDate",
    interval: 0,
    tick: {
      fontSize: 12
    }
  }), /*#__PURE__*/react.createElement(YAxis/* YAxis */.h, {
    domain: getYAxisDomain() // 动态设置范围
    // tickCount={5}               // 设置刻度数量
    ,
    tick: {
      fontSize: 12
    }
  }), /*#__PURE__*/react.createElement(Line/* Line */.N1, {
    type: "monotone",
    dataKey: "price",
    stroke: "#82ca9d"
    // isAnimationActive={false}  // 禁用动画
    ,
    activeDot: false // 禁用激活点
    // dot={false}                // 禁用数据点
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_chart_burned"
  }, /*#__PURE__*/react.createElement("span", null, t("Total Burned")), /*#__PURE__*/react.createElement("em", null, parseNumber(holeBalance)), /*#__PURE__*/react.createElement("span", null, t("Piece"))));
}
/* harmony default export */ const priceChart = (PriceChart);
;// ./src/assets/images/logo.png
const logo_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/lan.png
const lan_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABTlJREFUeAHtm+952zYQxl/n6feoE/g6QdwJig3iDcwNqg3EDaoN6E4gdwKqE8QbgJnA9gQtIREVzbz4R4Cy3OT3PGfaJHA4HA4gAMJXWJ5VLzeDfBquq5FYnnvphutjL1+H6x7vFFO5dS9tL/9kytOgp+pF8A5QKFNxnzRDORdH1YvGspWfStvLLS4A1csX5IV6Tn4jO7xRNzF9/g/kGb/FaWCUXu4z9W1wRszorhFuYVPJ1vF87dC9hXsc2CHsCBNVgoW5w7GCvsrXOLawONLWgTKY49rhmSAcMRrHhlqETaDwGq/f+43DwBAC7jw1SXMPf2PcoTA+B5gQnHreOEOTtBXiqOGOhjEV/F2zmCN8Dtg68lSYFwUW48RQNFgE/vEi+zX6u0d568nXYn4UWNgg6XK6y2m2a8weIwTzRmOWTyMdBV6hKTFvK/N8hURWiJ8BmnTVKG9F0jSYRwt/l9hE2hiKXEqToHxciCBseAo1eJdQmDdNX8cWrBwKahwrmVr4E+Zz49AX00VbR96obsEqqUfPBXGzNysPyCNU6WmUjO1keZtQgZVDuZC0JrR0pHEm3W7Io3DaWMHEaCO3Q7od4h2gwbvc2pGepf0PVqmtJ70gf+GTI+NpuouW5GtdiStwDwvCmDT3uKzKWxTio5t6rEY8K5zPCRppRNVNkOAtBwrc2NxNE1MBNjakoMCj6cBPw5XNr+9x3P2NhYXmnziFrd1xll6uHem7Xl5w3GV+xGn3eUdsNDq+Io79IAqv7VUY7WazcFFIoyY6Su0BbgvoromOw6D/ASePjDHe3yMN1rLPKEOHuPJ83JN7n80P4wS2wvob6VyTexplYM4UpNHhW2dKLyuXE/ZIh7VMbJ8N0SGuvBCscW+ME34jDx6RjmA5OnLvI9Jh9bqxY0JM4lQ6LMvPSKcj98Q4QSY3nzFvQBMsB7OnVCR8vELC8vJ/yt7VHb4rPuAHP5xgMGsHM+hMu8Qe6Shyb49yqMnf9kRLrp4DZlaXs0KzTFd6pWaLBrZMb5EO27N8MN2BefMa6ZRaJzBKDd505Wqc8EIe/Ip8BOVwLbtTYUuEzhUJgnQ6cm/JFnxBOnSJ4HLCZ6TDFktzZnWMUst0ulg0TtgThWxLPAQz6heUQci9Dmkoomdvfth5wjQa2EZLiI7cE5RBEFeejzty77C0tnuMf+HbSpvP8g+Ih0WCjajcE62fiO7UV7Ai917Vz/V9XxDPnO+GMfKE/N3mCpHb9i0i9uY9XPJ3B010VCyhAm8FQZgKb3OiVYVNS/q+eqAliXeeAhTmfVwxztVD3na46hl6rH3isZHpbRCoFCtITdKlnGh9GgpdD3pCr177Zko9Jb8hujZIjAILK1jjZHzMGaFp2OaQMriOz1CJI02NCMRRsKnMHcInWtnzudNn5SjD5wiN49cpDX9jBlkj3vtjD5sC2CmWCvNoiC5jm2DeUYBbJNJGKp6eaK1Qrktoomtalo60s8YMJKKALcnH5gtzdrQVeDgzO0NnqL4gA+N1Vx9sPfla5LdEk6DDNeO1jhNkUsHvYSF5FPKiQRzlCUnre1sVcYClgtsRGnzgm/O/DpaG5G1Iuk3ALkFhzMjqez21k0Jr8GiQQDk3Dv1qlMb8rnFmB1gE4cGywWlm6JpvpOq3eRTCby1XFy2KIO5Eq/YYvCF6jdNc6xDj2JiZ4xZnxkxaNMKG+SLGvvMV8k65abzhP4wKLv9E69kQXO6J1rMjODpDY5nKmy5T4x0dJ1A4DlQlTrTWWLDPX+E85J5oXZR/Afd/qte9voi9AAAAAElFTkSuQmCC";
;// ./src/assets/images/xiaoxi.png
const xiaoxi_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABCCAYAAADt/X6HAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAklJREFUeAHtmz1WwkAUhS/YWGpnx5R2sANmCboDd4CtFexASjuOK3AJwRXIDuIOoLWK8w4MhmHyYzJJ5k34zrlHmQCHy33zwyQZoDmk0kRpfPh7oyRSx3dK3wd9Km2U1mCAVHpV2iolFRQrrXD6ZXiDVIpQzViW6P0m8AD6EK7NmVqhw2RnaNacWcYPaBEaQD7QnsG05mgBofQFIOlQjRqlBGMAiQdqzGjXCZp6hmPmABLPRHOxsylGAkg8VYx9N8rlCsVEZd6oI+hz/aDmcnAOf1NMl21uCHlJ0gvf4G+KmmvUSPMJ/qdYKs28JFdKd+BBpTQF+KSoFWWZGWa0t7oYdoRUGtkOZJmcgiePtsYskxI8GZd9Io1Svve/LMU2Q7YkBfgibI02k75P/kWMzIYhwuPWbAjR5FklhmjyjN6aFAiM3prkPoWcYTNZemnEhd4m6cWZpBoIs8E0KcGfwsUA9xQJYTaYJqfgz9nAGWKS+vqEI0PjoAB/yOBJWGmTEuGQuREXgddWR56sm82c93WydExTlyvHfdYiZmZDVxc6NC2pDYZYqloRGaRyDbFUNZJEZ7XmSvcIFzFAiTO1zNmRyQSBQ31yjbDZUJ+kNEMefF70PwvwmhrKakHmBinHtHKnS7no9xj3gWit9I7wu+KFCywZwD00aNWZktbY3yviLQLV7wnRiuH5XtMSbua3JRzi+iTsDj1AwE2SAp5Tt2RXYECdWytiMFpSCvzfqPejqg1KpGzpLsH8R4HA3kSEvzl0e3i8QAvp/QLQwnW/fbS3zwAAAABJRU5ErkJggg==";
;// ./src/components/header/index.jsx















const header_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.header_container {
		display: flex;
		justify-content: space-between;
		position: fixed;
		max-width: 500px;
		margin: auto;
		height: 57px;
		background: #fff;
		align-items: center;
		left: 0;
		right: 0;
		top: 0;
		transform: translateY(0);
		transition: transform .1s ease-in-out;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		width: 100%;
		padding: 0 10px;
		z-index: 999;
	}
	.header_left {
		span {
    		display: flex;
    		align-items: center;
			height: 57px;
			cursor: pointer;
		}
	}
	.header_right {
		display: flex;
		align-items: center;
	}
	.header_lan {
		height: 20px;
		margin-left: 5px;
		img {
			height: 100%;
		}
	}
	.header_login {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 30px;
    	border-radius: 33px;
		margin-left: 15px;
		background: #FDD14E;
    	color: #000;
		font-size: 12px;
		cursor: pointer;
	}
	.header_price {
		display: flex;
    	align-items: center;
		font-size: 13px;
		cursor: pointer;
		span {
			margin-right: 3px;
		}
		i {
		    color: #50B848;
			font-weight: bold;
		}
	}
`;
function Header() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const {
    referrerAddress,
    noticeLatest
  } = useLayout();
  const {
    usdtSFTprice
  } = useManagement();
  const [visible, setVisible] = (0,react.useState)(false);
  const [bindOpenModal, setBindOpenModal] = (0,react.useState)(true);
  const [newsOpenModal, setNewsOpenModal] = (0,react.useState)(true);
  const [chartOpenModal, setChartOpenModal] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!address) {
      // 自动打开连接钱包
      connectWallet();
    }
  }, [address]);
  const handleNavigateClick = name => {
    navigate(name);
    window.scrollTo(0, 0);
  };
  const modalConfirm = lanu => {
    i18n.changeLanguage(lanu);
    localStorage.setItem('language', lanu);
    setVisible(false);
  };
  return /*#__PURE__*/react.createElement(header_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleNavigateClick("/");
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_right"
  }, Number(usdtSFTprice) !== 0 && /*#__PURE__*/react.createElement("div", {
    className: "header_price",
    onClick: () => setChartOpenModal(true)
  }, /*#__PURE__*/react.createElement("span", null, "SFI/USDT:"), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, usdtSFTprice, "USDT")), /*#__PURE__*/react.createElement("span", {
    style: {
      color: '#52c41a',
      fontSize: '16px'
    }
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
  })))), /*#__PURE__*/react.createElement(priceChart, {
    modalOpen: chartOpenModal,
    modalCancel: () => setChartOpenModal(false),
    usdtSFTprice: usdtSFTprice
  }), /*#__PURE__*/react.createElement("div", {
    className: "header_lan",
    onClick: () => {
      handleNavigateClick("/news");
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: xiaoxi_namespaceObject,
    alt: "",
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "header_lan",
    onClick: () => setVisible(true)
  }, /*#__PURE__*/react.createElement("img", {
    src: lan_namespaceObject,
    alt: "",
    style: {
      cursor: "pointer"
    }
  })), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header_login"
  }, address ? `${address.substring(0, 4)}...${address.substr(-2)}` : '') : /*#__PURE__*/react.createElement("div", {
    className: "header_login",
    onClick: () => connectWallet()
  }, t('Connect')))), visible && /*#__PURE__*/react.createElement(language, {
    visible: visible,
    modalCancel: () => setVisible(false),
    modalConfirm: modalConfirm,
    language: i18n.language
  }), referrerAddress === constants_address/* zeroAddress */.X && /*#__PURE__*/react.createElement(bindReferrerModal, {
    modalOpen: bindOpenModal,
    modalCancel: () => setBindOpenModal(false)
  }), referrerAddress && referrerAddress !== constants_address/* zeroAddress */.X && noticeLatest && (noticeLatest == null ? void 0 : noticeLatest.title) && /*#__PURE__*/react.createElement(newsModal, {
    modalOpen: newsOpenModal,
    modalCancel: () => {
      setNewsOpenModal(false);
    },
    noticeLatest: noticeLatest
  }));
}
/* harmony default export */ const header = (Header);
;// ./src/assets/images/footer/footer_1.png
const footer_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhhJREFUeAHtmNFx00AQhv89GcTwgktQCZQgxTxgewZQBQkVxFQQUwFJBZgKZLAtMeM4hgqSEkwHfpXH9rIiPDI+nU5Bk+S+J420urtft//odgGHw+FwPGYId8BkMg+9lncmo78Eoy23fvCev/T7nRFqpnYBs2xxRqDhv54xeNjvdj6iRmoTkCRJ23/2IpHL8GAg8zjP1fs4jtaogVoEZFkWMPylXAYlX1nlyKO4213BEgVLinxn8q9RfvEFgS+CJ9k8hCVWAqbpfCBmXf41qimBB29ZeAYWVE6h9PviE5gGqAPi897rzgdUwFhAabMawoybDeWxqS+MBFQwqynG5i7tgW/p5bsKZjUleMr+dTFX2RdKCSiM1iKVVDSrEURoF3OVNbc2hWSgE/mzfkYDbHkfv+m9Gh+K0e4AEZ2iIWQntHPrU4jlQNYcoS7A+k/cNE5A0zgBTeMENM29F9CCJcx88aSlRrsdjGpcz0N7u+WBHGaOYYGVAAaN+r0jm6LmZDa7apPCW1TELoX2+5+wRCkewwJbD1ifkyQFQ1hgJYAUnU7TReUUmmaXxzKIlQe09UCaXbEuRkZZiyHMGlVSuJQpkHrdo4Nr1Jv4dnGHJ7p9blat6T9LwUoXoE0h3vEFGkL88VUXoxWwea7OZRdu8J/502bJ1VAXpxUQR9E69ymSznLRVV7hrmH8Kuba5BTV1QB2OBwOx8PlN3B7sjtvq853AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_2.png
const footer_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABDRJREFUeAHtWWFO20oQnl2jJP3zHkfwDQoneAnRixRSBJyg9AS8G7xwAsIJgBOYJ5SkSh8kPQHpCZqeoPlXEiU7nUkCtY3XHieuVKn+JEBrj2fm252dmV0AcuTIkSPH7wwFGcLzvO1C6Y9TBeqEhi5pHyPizRSmZ8f1+gh+AjIj0O12XYRiH9jxCBgi9aZeuYaMoSEjxDnPUIgtj0hCxsiEQLt7dwIxzjOUgu2CKfwDGWPjEFo4j+qUHNyRyCPCkH5dNBrVK8gAaxO4vf1QdracS0iY+RiM0ODZpkTWCqHO+7tzcj425gVwlVaXtIL/wgZIvQJk8HKVJlMDAT6RwdcvX+DNZKLfHR9XxpASqVYgynmOaXpWQcB3cd/S+7NGfW+HZWk4CrxU6qhQMuewBsQrwEtNxpv+Z8ibcb/6nFluux/KGpxWYJapmBmK9Tf71VZIX5P0BcKHSDYb9eoZZE1gVaQ+h4zRjFab0fJ9l/64jgPjWq0yBAuiSMxhXjmo/z0AIUQEOt173rDlp3F45jdBu3PXUkqd+h4N9ut7Fen3iXuA0yX4nCeMphPdTPrO87ou90ZJctNXC10j36MyhyIIkUjAcUKbluLZli041Hi1Ou/vvxZLxc/F0p9fedxu353Y9B9XKmMOx4BTRh+BEMlZSOm/fKORrfC0e70dVMUH4NVC8M98OSnfT0v6hjf7D5vqLQgRS6Dd7nF74D6NEdTAJqvmW17I8eB7ymC20OBVoHb1v2dZ6pva7b6oNYkloJR2/WNE8ylKTtLMLY1tvbXbwkHwidmcAKl1/SNH6eiUiLJGTgGWbe9mMzMKqFSQmAAYsQQQZUooPERygThPEsUMCCixQRyKpFCJ5NIgFQFjjBslN3mlr0Sza+DC9orS9XbQtmxSYgkYMw8oUY46j8rri1yuZ5U4EovWo/GyreAEsKj0Wl8G5NEZgQDxe0Dr1yEveJaWeb1z/+B5/edZa9RqQ4Vql2SuQ9985A403DdxlWbH6R07Hq4dZDui7Y6AtReKauAiYO1buKF7fISxrWp3Ov9T2OnYgoVmttto1GJDyUpAYoCRtntkrI6jfYFoYmNnDyGtD0EAhVpUA/xwHNk3KKgvdgLSGiCUC6iW6hYUsxgC+AVERmTpLmBUh46UVuWQqNtKgGbpCgRApQ7T3Lhx9qEDUVkii3O8SJKJPZFRX/8g7XMoz1+Zmbk+OIje0LxxtVZHyqHEIAghvixo7O/tJsnFEvD6/e3CN9MMHfkYI7B1n1zMcLX0iHRYUXT/Q7I2p5fywRpAR1Y+9UmuWYSH+uUhHZYH9SEf1BcHcia2xiZeWX6+rej1+juz2XJCJhMYpLkf2uhulInRbDVpJx2KiSz/Z3AxfdStdS6yXqrLCJ1O/4gWn35oJrkNeCK0cBi+gMGB1npI1fkmC8dz5MiR49fAd6fr0+fWRUC2AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_3.png
const footer_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA6RJREFUeAHtmGFS2kAUx98uEeg4o/QEjTfAEwhqOw2MrZxAPYH0BNITaG9gT5B2rNDBscQbeAPjCYqfCgzs69tAEFISdkP81PxmdALJvrz/7tv39gGQkpKSkvI/wyBBrq5uStzgOwxYiSwXAaEweUuXru9R4N2ADy5rluVCQiQiQDqeMTJndFlSHOL0oX+ShJCVBTR/3p4DsjrEAAEbVWvvM6xAbAG2bRdy+U0b1Gc9xAO8qLzf+wQx4RCT3KsNnZAJh1bPW8WYxFqBH82bOmeZ2C9dxBBF7UNl/xtooi2g1WqZCLkOXZqQLG6/x7ZrtXJXZ5B2CI0wewjJOy8x13LiGDTRFsAZO1V81O0D26KasCWvVQaQ7Y+giVYITcLnQeFR6Xy5ZpXd8bgOjUOlsKMweq0TRlorMBwapsJjc85LLLqmlSiDwkpks3rhqSXAMLgZdR8RukHnfaYi5LEiyiE+OX4oErsOhNOLvod6Di5DSwAiRs4eY1DIUYq1aa8E782k30iEgJdLo4xl7hUeM4MidGrHYKCWsaY+gSbN1q8HCoM7Wg1XfuacFZHBzoLQoM3cL+dBRo1i4SO7lcpuCTRIrB+gVFkiUccgxcQsdNQvnFSre5c6Y2ILaDZv64gjp1p9909Ytdud4nAoSmT+cCJIBbdi7W6BJloCph0Xo/P/c8i4VKQcMRRfDw7eOsExXhFDbNCbjqJsx5l9yVIBtt0ys/nskdcmLjs+yxwv0KF68J1aR2e247pu3TbIxlnweRL3ZdDjF7qHuGcTIVy320U2Ms5htTP/XOtICaDj2aPNSqvYoOLmwIqECvCyTQKnTlmdB6y/LUXIcOr1oBucbZlmhVirM87lYc7V6ZeN0DtUlGim1PHCB56osmzOplSvuOFaUTpmBY4Ysi3N5jdOkfYUez5CmDmWk63qtsprwwUIfKK3q5Z9t/9nvhmx7U4hnx87ZVX2XVjg+DQZBCcKoQiKhAvg7DcZegMKUJgUgmEx+Tz33VLHfXuAyr9UhArAkXikmFSaCRkmkz0jU6rrfSngcXKvK/cBWSyyDD+Kctzf3FQPHFhVAGNcN62Z8o/5eYHP2vL+wzLHrYp+VgpfAcAuS/aXx0Uvie24jxFhvPti/ifguE9ECOE9JK0gQcd9Ij2k8n/M6UCG47xu0tNKWWkBsp08SaLyBtGeYpnf19fBHI3GohBFgQSa1BeYUij1BgUmhY6zjewbLuMc0lJSUlJSUlT4C5TBizKuKCJrAAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_4.png
const footer_4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA6dJREFUeAHtmF1O20AQx2c2bpz2oc0Nak5QuIFTWtQkqlqfADgBcALCCaAnKD2BQRRSgVDgBrlBfYPy0IckJZ7OODGNnE1YL19S5Z+EbHbXy8zO7O5/ACgoKCgoKCh4OhAekKOjM185ahUBff7VkzYi6AJSdwCDnaBej+COWDswYZyXGBbTZbO53JL3MAyrbuVVyK/+vDkIaH/QU1tBULsCS3I7cHx6uohDZxcyxvUBF4J6LWq32x6B24HxihsQ9Xu4ZOuEyjM4MT52xDh/sp0A98V4eY/JlZX3wBzPrVAIlhg7ICvLKx+ytdVs3wBgR57H7fM1RFiE/PhH7TMfLDB2YEjlz6BbWYRuuvqIuAGWlKC0DRYYO6AUruraaUiX8gw7nSpHx2b1U/ww7FTzfmTkwC3GJZvP+X19F+NTHsaBSi//xDZUKrk2f4KRA3XJcYRZx1zinOM4EdyRXo8vuZyYH6OknxwVvpHnLU6aENncBeanEAx3dO0sDRbTzccb+gtYEpPdt8YOfKy/v+DHRbadz/3qMzdek/fBC7VnGYXoD6oDsCDXTdyvYCDn/tQkfP5LFIIap0Acr0NOqIRBepfkxdgBEWi8y6qND2+XWIRJOkUT3Z77PE4uokbj3QEruyDTr4ejxcYvNVdquTfvvykM+H5ytqkU35TE6UHxVmIkiLzo+ETx+PxX0XB4faUUXTWbK13u84ioxUv0aUp+iOGc86xE92TjirK9dq4jG3l9qwMnP853gXAz03zB8vnbYKAOxIBEPj9/uZ2O4wi1mvXlm00/chSqsl9KJeiujFdcvitXXm6wJG+NrKG9xoflLcgBWhgPYyN32MjWHPkcsZPsxLArEZnsCMO2V66UV1k7bWajIwXPAPuBaTRmOsDKcvtmZbLGc/ibjeVNY+0vJxONTyeOgk7RZoj60K+ZOKHdxIl0nmG8TC7Gy4tx4TIy2Et+yEiWeC64Xw3G6R0getaa9QFXXjV5JumVr3DJi398fN66bdBUCo3T4qdusFRezXptfd6Y+4ZTaWFeKk1FgEaFi5a08poXofumDOW5hc50CiF+0g1M615ZfVZwq/BYEH6eV+hMO0C0oBuINDwcdc+O0EMwqbV06CLwWjew3y9djPu1EXpIENWbWX0aBzRqUgr3VKvjnepeKxDIn9XnTA0mXILM8VhSE07R45SXk9Ccv5nrP3NS3Ls9+gVPQKP+VmtrrnpA9D7FcAiPDJF9pVdQUFBQ8H/zF6S1fQYXHey3AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_5.png
const footer_5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAuNJREFUeAHtmGFy0kAYhr8vYPEXgycQTyCewEBHx8B0CiegnqDcoHAC5QZwAjpWEqdaoCeQI+QG8hNSyPotAoY0TTZhg+PMPn8gsCTvSzbvvgmAQqFQKBSKfwdCSliWVXTdZy3MaE2+zRi7dsDpNAzDBolIN3Bz813PZPAC8I9wPwxYT6YRaQbWwrOZK3qri4znRtyl2z87ezeBAzjYQFzhAUyYy/q12mkPEpDYwNC6u0BAPk10kINNRjpxjcQyMBgMCrlcnuY3XtJmEdIhlhFhAzxVGOTGkJ5wP2Rk2ajV3k/DBmkgCMPcAI4nnlNELfspapCwAYqNEhwfPWqAuAFKCzg2DO6jhggboMT5SC82HAsSv0BaECOIHaOmOa7T3lv0y7eQBiQcEduGUZ6IDE+8DljWWKd+Q5EKTZBBTOFbhA0MzdFPamRdfz6TkSIZaSc1wgB7NI/7XuG7Iqhp51Wj8irs98IGzG+jX3S0Ar21XWqWD+h0vYUslhGEGVuxvqNpnxtGebcPfxFkDGa1auVF+K4E+WretTTEvVwOapYeI/waKYJfOJ1FZ07CG+XZnvCAPkX779SM0zbIMMDZ9J8rv7CgZsmNuODqdIgW0pljSGYFhdOqOWXM7YrUiUQXMTeyFgbw2veVULM0zR91mia8T+l7XyS4kIUNfKGDrvBh6psuume6eHlUyEKLYIBwPv7kJF+P+jPEL2JrxNbCgE1C5n0zyAgtly9JYGsTAtHCn+cvt+MphVCWAd5E9b/HDr2AQ5OIR6cD0PEm0N499NYowrT6ofIGZBgY3t6WcJV91EiFjcRMIMJeAJa9Jg8ysDPyRBIRk9Vy1fEnEWV5CREK8zlciwrnC+ZiofW846UZiDJCgqdBK/aWp6MT7ukM9VK9pQxibYTx1TM8idbjeAL57ysSdqAt0h6rhJQ7mz4riCRQEqQ/2IpKoqDydggpPlrcGNHgnG8HlTeFQqFQKBT/O78B2S/RCTkuAqoAAAAASUVORK5CYII=";
;// ./src/assets/images/footer/footer_on1.png
const footer_on1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAATBJREFUeAHt2N1twjAUhuG3VQfoCBmhI2SEbgAjsEG6AWKCdoPCBIgJMkLYADYIjnDEDfgntmNHOo/0SVyQ+JjkCNsghBBCxFerHFUuKr3+vGYhGu5FP0tDwT65/9K9Jf/6u0WpVDrsxY/p9DVFqHm86z7p9LVZbfAvvJi+2BJe/JgtM3JtVt+0zNAXFX7NOqUvKhL5Zlqz+uaix4qqgeSFJ2vuNdBnSpQn0QK5JnC0FfeGXU9exhrfWTiZQG4ygdxkArktfgIfhNup/Klc8TMsy4cN0YrETH/1v4TbW8YwCn2FToTbEyB0Al+Eq0nMtmLcMN3K4f5GsVajV6Y1scsBl0uNRnNsI1+lsxXn0gM78jkQwfCYc+zKWiKeoQ43+iHtkcqYsx6ruANgIYQQ5bkBACx375+5iDcAAAAASUVORK5CYII=";
;// ./src/assets/images/footer/footer_on2.png
const footer_on2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAipJREFUeAHtmPF1gjAQxr92AkbIBnWEbNBuICO4gWxQnUA2sBvgBtoJtBPQDWxS4GkDuTswKH0vv/fuD+S43B3JlwgQiUQikUg4EmNLY0djZ2OlsY0xhX+AwiXxLptj4lDJN29DYaKkoJNvbIUJkhrbQ1bAufZNMQE0+GlDmX02xYN4x/DEXVvizmwwPNmD5/ctKgl+SPJ2TmvwCzmrY1jfY8f9DUZmCV5VNNpdtvK56IiX4Y7TScHfUZ+/NjYDTdYRV2MECtCdv4WVE7tAYDTa8idZcErol6C9JjQCkjvBU8JXoepgib8dTekhWgIQdMe+7s6R8LPzvcQwvU+cZ0sEYga51HVJY58Fmju+nAD88szcV871p8cvheykOSfu7ZzrUQo4ePxEg4F+AyfnWrQzcwVIt3ep3zfkBClAOuAhsJ+YvgUoj18OWbFr4p7b8SDFuipk5c2n65yMZp4xUrT3DrEKccyJhOwp1O2aQlsOd+hevAnaR5RroxRLhAKv6wXzPLUQc0H8m95CLhiA25x8aGHsggtELeJXyBjSJekzrB9VQOg9YJTYVAFfkDFE7k5CPzY2VUAOGXaqKcixXdVC3zVupM8Hqw2TmL1nz/mlMN4eAUjQ/svX/C/wDdxsdta2dSIl4+/+tkLgzywKl08njTJkkHfTl/iijmVjvtUWNHEOhWqt9CnE+mahEn1COJoOKmMvuCRoD3lW0XaoVOUD/Y7VkUgkMmF+AIZyhFX59bZ5AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_on3.png
const footer_on3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAeRJREFUeAHtmI9xwiAUxr/2OoAblBGygekGbtCM0A10A92gbtBuoJ3AbpA4gW7Q8i5w9ThIHgGS9OR39x0xJPDx5wERyGQymcw984C4lFJLlRZSC3X/KvUt9SW1l2owM0qpg9QPU/SswEzYgm/c1BoTQtPDp9dd2mIiQnp+8ka8IZ55rRVGQkjVQPQGUJkLePIIf1ZIs4IIqQojwO39WpkSHu8ckBgBP/O373Eb4T2NfCjhb14jwGtEgYRUPZVf0B0fQj3TVUYJD4YEcShRp4hvA649+Xp3FpY8AV6Q9tURhMDMgnjIcZqM0LG4Ub8p6JaWiin/RV27RsWEyi0xESXasz63p22qMCJ0HnIteYXKP4JvvsYIlGjP8Bej4ne4h16gHZnJel+gNX1gmKCGfSgzwihn43ie7ifZfQuEf7CYwavLO2KEYK0RZt62O1Nq6226v1N1mo0eTN+WbzPaON5zfaxQY9aWd06IQAO/FWRhMSdg702X8VsFc4Jf73PgGCdtmOXhqSPvDP7RlozRKDT426HPKr0qUVmv6F5xaCfeoA3yYPaIE8QcHZFgVdoB8zfeNYVSHmujThUXtPT9i6nSRSX1qSpuMNx4jUTGh3wP6PXdTPU16Vml+u/0PTKZTCaTScAvXIfrnzfoAUAAAAAASUVORK5CYII=";
;// ./src/assets/images/footer/footer_on4.png
const footer_on4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAeVJREFUeAHtmI1twyAQhV+rDuAR6ARNN2CEjJARvEG8QdIJnBUygUdwN3A2SDdIfcqhoOQw4B9SVXzSkyM44wcHBgfIZDKZTCbzf9G96l5drwur5TKFJ6NxNdKwKquu4LKLRzXHJmXlMKe4nq4d/OaNKDZZJ8j8GfJIGlqEmzdqkAAF98gqjtkg3ryRxsKUjge3VsyY0U+WBZe5PdcXGG/eKHotvAbGUcMrR90PX1eYzqIdSIFCJKEdOOE20vcUVsxUvhFJaAeGGv/g6wnuToZwmni/Fw154dG+YLJQYfwCLpGAxvNw6sgZ8eY7JDobkcEWw8eBNeI7MMcbLMi84t8VHnflnRW7Rth5iLKVxHzJD+vYnEFzXcnl2jKkeh0gTykqq3DLmsaCU2gHedvfWAaKu7jtXRsa1w7SPfaIFxwrZXEWJPNGFccoyNOlEwzDuoeMS9lpMVM2tnCb33vMS1OmY4W8pSa/lZSncUOI+bFqMIHDQMOKY3YzmPSpwgjUQIN1QMzcUoikDGjsMJO5ENWIpMHfGX2SfdZ6QDqNvjtij3xdIy1kfhNzg2skzCg0SJuB6Gnk2lyG6pdW5zL7JpR94nHl2x8ayf9JG3rmC+IbOuM5iF5jPikJysQR6flCJpPJZDICv8CXBPHh/DB7AAAAAElFTkSuQmCC";
;// ./src/assets/images/footer/footer_on5.png
const footer_on5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAY9JREFUeAHtmI1twjAQhb92AkbwCB3BIzCCR2CDskG7AWySdIJ2g3SDjEBjYQQy5+AIO4TqPukkZPnnPWxfLgFFURRFUf4nZojPIfoQu9C2eOwQ+yEOiVisETtEQ1q4ZMSyACzThMfhxzoegOM+4XF0zGBkNcQmLHaoFNWMGOoKl4y8UZBvmE385f0Y5YV8DjyGUY2v5NMyP18UxDDvHWip9MBbh8lrCrfMgGW8ZFiccJ+FnNBuuM/Ijmvhfk5fCHYUpOecnz+4Pp9mgpE+CIznsNEcPQXZIP97BtlIhyx8y/GJHgtvhP5bCuMSwlLHwPf/GeKXacJTx7UYLgiLF27IW3iNLLyl4kX2i5qozSKnVL9LLuo7Vgi2XAtfUXgXTsLGzn3KyDvnJJAj/LJ/MeItn2Ik9/Kf3qEv70IxfGnbTRCz574M1FGplHDIRhrkTLQOY6YI3wj9i+OQjdxKgZZ0BnI8AEdeJvK/pZciP9ayACzpTJSbgRaB4faHLcsTYDgaOX1alIo3RVEURVGemj/JLaiMZGki9wAAAABJRU5ErkJggg==";
;// ./src/components/footer/index.jsx















const footer_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: fixed;
    width: 100%;
	max-width: 500px;
    bottom: 0px;
	z-index: 99;
	.footer_container {
		background: #fff;
		border-top: 1px solid #E5E5E5;
		span {
			display: inline-block;
			width: 20%;
			text-align: center;
			padding: 5px 0;
			cursor: pointer;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #000;
		}
		img {
			width: 24px;
		}
		.on {
			em {
			    color: #428BC1;
			}
		}
	}
`;
function Footer() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [tabOn1, setTabOn1] = (0,react.useState)(false);
  const [tabOn2, setTabOn2] = (0,react.useState)(false);
  const [tabOn3, setTabOn3] = (0,react.useState)(false);
  const [tabOn4, setTabOn4] = (0,react.useState)(false);
  const [tabOn5, setTabOn5] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setTabOn1(false);
    setTabOn2(false);
    setTabOn3(false);
    setTabOn4(false);
    setTabOn5(false);
    const hash = location.hash;
    if (hash === '' || hash === '#/') {
      setTabOn1(true);
    } else if (hash.includes('hashrate')) {
      setTabOn2(true);
    } else if (hash.includes('team')) {
      setTabOn3(true);
    } else if (hash.includes('dividend')) {
      setTabOn4(true);
    } else if (hash.includes('ecology')) {
      setTabOn5(true);
    }
  }, [location.hash]);
  const handleLink = link => {
    navigate(link);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/react.createElement(footer_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "footer_container"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/");
    }
  }, tabOn1 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Home"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/hashrate");
    }
  }, tabOn2 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Hashrate"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/dividend");
    }
  }, tabOn4 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on3_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Dividend"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/team");
    }
  }, tabOn3 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on4_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Team"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/ecology");
    }
  }, tabOn5 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on5_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Ecology")))));
}
/* harmony default export */ const footer = (Footer);
;// ./src/assets/images/home1_bg.png
const home1_bg_namespaceObject = __webpack_require__.p + "ceb288cdaadffcfb361f.png";
;// ./src/components/index/comm1.jsx




const comm1_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	margin-bottom: 10px;
	img {
		width: 100%;
	}
	.comm1_conts {
		position: absolute;
    	top: 20%;
		left: 15px;
    	width: 55%;
		span {
			display: block;
			color: #000;
			font-size: 32px;
    		font-weight: bold;
			line-height: 25px;
		}
		em {
			display: block;
			padding-top: 20px;
			color: #000;
			font-size: 12px;
			line-height: 18px;
		}
	}
	.comm1_assets_conter {
		width: 92%;
		margin: auto;
		max-width: 460px;
		background: #fff;
		border-radius: 13px;
		color: #333;
		padding: 30px 15px 18px;
		margin-top: 80px;
		text-align: center;
	}
	.comm1_assets_title {
		font-size: 14px;
	}
	.comm1_assets_number {
	    font-size: 40px;
    	font-weight: bold;
		padding: 5px 0;
	}
	.comm1_miners_conter {
		display: flex;
    	gap: 10px;
		span {
			display: block;
			width: 50%;
			border-radius: 4px;
			padding: 12px 0;
			color: #fff;
			font-size: 13px;
			cursor: pointer;
		}
	}
	.comm1_miners_buy {
		background: #F09700;
	}
	.comm1_miners_renew {
		background: #428BC1;
	}
`;
function Comm1() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, /*#__PURE__*/react.createElement("img", {
    src: home1_bg_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_conts"
  }, /*#__PURE__*/react.createElement("span", null, "SwarmFi"), /*#__PURE__*/react.createElement("em", null, t("SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets."))));
}
/* harmony default export */ const comm1 = (Comm1);
;// ./src/components/index/myAssets.jsx




function MyAssets() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    assetsTotalUsdt,
    staticTotal,
    dynamicTotal
  } = useManagement();
  return /*#__PURE__*/react.createElement("div", {
    className: "homes_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_title"
  }, t("My Assets")), /*#__PURE__*/react.createElement("div", {
    className: "homes_ass_flex"
  }, /*#__PURE__*/react.createElement("span", null, t("My Hashrate")), /*#__PURE__*/react.createElement("em", null, parseNumber(assetsTotalUsdt), "USDT")), /*#__PURE__*/react.createElement("div", {
    className: "homes_ass_flex"
  }, /*#__PURE__*/react.createElement("span", null, t("Passive Income")), /*#__PURE__*/react.createElement("em", null, parseNumber(staticTotal), "SFI")), /*#__PURE__*/react.createElement("div", {
    className: "homes_ass_flex"
  }, /*#__PURE__*/react.createElement("span", null, t("Active Income")), /*#__PURE__*/react.createElement("em", null, parseNumber(dynamicTotal), "SFI")));
}
/* harmony default export */ const myAssets = (MyAssets);
;// ./src/components/index/management.jsx







function Management() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const {
    perAmount,
    maxSupply,
    tokenBalance,
    allApprove,
    isApproveLoading,
    handleApprove,
    isStakeLoading,
    handleStake
  } = useManagement();
  const [inputAmount, setInputAmount] = (0,react.useState)("");
  const inputChange = e => {
    let value = e.target.value;

    // 允许正数和小数（包括0.几），不允许负数
    // 正则：可选的数字，可选的小数部分
    if (/^\d*\.?\d*$/.test(value)) {
      // 确保不是负数
      setInputAmount(value);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "homes_man_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_title"
  }, t("Recharge Hashrate")), /*#__PURE__*/react.createElement("div", {
    className: "homes_man_amount"
  }, /*#__PURE__*/react.createElement("span", null, t("Recharge Amount"), perAmount && maxSupply && /*#__PURE__*/react.createElement("em", null, "(", perAmount, "USDT ~ ", parseNumber(maxSupply), "USDT)"))), /*#__PURE__*/react.createElement("div", {
    className: "homes_input"
  }, /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Enter recharge amount'),
    value: inputAmount,
    onChange: inputChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "homes_bac_botm"
  }, /*#__PURE__*/react.createElement("span", null, t("Balance")), /*#__PURE__*/react.createElement("span", null, parseNumber(tokenBalance), " USDT")), isConnected ? /*#__PURE__*/react.createElement(react.Fragment, null, Number(allApprove) === 0 || Number(allApprove) < Number(inputAmount) ? /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => handleApprove()
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => handleStake(inputAmount)
  }, !isStakeLoading && /*#__PURE__*/react.createElement("span", null, t('Recharge')), isStakeLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Recharge'))))) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => connectWallet()
  }, t('Connect')));
}
/* harmony default export */ const management = (Management);
;// ./src/components/index/sell.jsx







function Sell() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const {
    SFIBalance,
    allSFIApprove,
    usdtSFTprice,
    isSFIApproveLoading,
    isSFISellLoading,
    handleSFIApprove,
    handleSell
  } = useManagement();
  const [inputAmount, setInputAmount] = (0,react.useState)("");
  const inputChange = e => {
    let value = e.target.value;

    // 允许正数和小数（包括0.几），不允许负数
    // 正则：可选的数字，可选的小数部分
    if (/^\d*\.?\d*$/.test(value)) {
      // 确保不是负数
      setInputAmount(value);
    }
  };
  const handleMax = () => {
    setInputAmount(parseNumber(SFIBalance));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "homes_man_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_title"
  }, t("Sell")), /*#__PURE__*/react.createElement("div", {
    className: "homes_input"
  }, /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Enter the selling amount'),
    value: inputAmount,
    onChange: inputChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "homes_max",
    onClick: handleMax
  }, t("All"))), /*#__PURE__*/react.createElement("div", {
    className: "homes_bac_botm"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_bflex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Balance")), /*#__PURE__*/react.createElement("em", null, parseNumber(SFIBalance), " SFI")), usdtSFTprice !== "0" && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Current Price"), ":"), /*#__PURE__*/react.createElement("em", null, "1 SFI = ", usdtSFTprice, " USDT"))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Receive"), ":"), inputAmount ? /*#__PURE__*/react.createElement("em", null, parseNumber(inputAmount * usdtSFTprice), " USDT") : /*#__PURE__*/react.createElement("em", null, "0 USDT"))), isConnected ? /*#__PURE__*/react.createElement(react.Fragment, null, Number(allSFIApprove) === 0 || Number(allSFIApprove) < Number(parseNumber(inputAmount * usdtSFTprice)) ? /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => handleSFIApprove()
  }, !isSFIApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isSFIApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => handleSell(inputAmount)
  }, !isSFISellLoading && /*#__PURE__*/react.createElement("span", null, t('Sell')), isSFISellLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Sell'))))) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => connectWallet()
  }, t('Connect')));
}
/* harmony default export */ const sell = (Sell);
;// ./src/components/index/income.jsx






function Income() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const {
    dynamicTotal,
    dynamicNotclaimed,
    isDynamicClaimLoading,
    handleDynamicClaim
  } = useManagement();
  return /*#__PURE__*/react.createElement("div", {
    className: "homes_man_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_title"
  }, t("Active Income")), /*#__PURE__*/react.createElement("div", {
    className: "homes_ass_flex"
  }, /*#__PURE__*/react.createElement("span", null, t("Cumulative")), /*#__PURE__*/react.createElement("em", null, parseNumber(dynamicTotal), "SFI")), /*#__PURE__*/react.createElement("div", {
    className: "homes_ass_flex homes_botoms"
  }, /*#__PURE__*/react.createElement("span", null, t("Not claimed")), /*#__PURE__*/react.createElement("em", null, parseNumber(dynamicNotclaimed), "SFI")), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: handleDynamicClaim
  }, !isDynamicClaimLoading && /*#__PURE__*/react.createElement("span", null, t('Claim')), isDynamicClaimLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => connectWallet()
  }, t('Connect')));
}
/* harmony default export */ const income = (Income);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 87 modules
var es_select = __webpack_require__(36049);
;// ./src/components/index/account.jsx






function Account() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const {
    ecologySFIBalance
  } = useManagement();
  const [tokenAddress] = (0,react.useState)([{
    value: 1,
    label: 'SFG'
  }]);
  const [tokenValue, setTokenValue] = (0,react.useState)(1);
  const [inputAmount, setInputAmount] = (0,react.useState)("");
  const selectChange = value => {
    setTokenValue(value);
  };
  const inputChange = e => {
    let value = e.target.value;

    // 允许正数和小数（包括0.几），不允许负数
    // 正则：可选的数字，可选的小数部分
    if (/^\d*\.?\d*$/.test(value)) {
      // 确保不是负数
      setInputAmount(value);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "homes_man_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_title"
  }, t("Ecosystem Account")), /*#__PURE__*/react.createElement("div", {
    className: "homes_man_amount"
  }, /*#__PURE__*/react.createElement("span", null, t("Swap"))), /*#__PURE__*/react.createElement("div", {
    className: "homes_select"
  }, /*#__PURE__*/react.createElement(es_select/* default */.A, {
    defaultValue: tokenValue,
    options: tokenAddress,
    style: {
      width: "100%"
    },
    onChange: selectChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "homes_man_amount"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("span", null, t("Swap Amount")))), /*#__PURE__*/react.createElement("div", {
    className: "homes_input"
  }, /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Swap Amount'),
    value: inputAmount,
    onChange: inputChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "homes_bac_botm"
  }, /*#__PURE__*/react.createElement("div", {
    className: "homes_bflex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Account balance"), ":"), /*#__PURE__*/react.createElement("em", null, parseNumber(ecologySFIBalance), " SFI")))), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "homt_butom homt_not_butom"
  }, t('Swap')) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => connectWallet()
  }, t('Connect')));
}
/* harmony default export */ const account = (Account);
;// ./src/assets/images/partner/p1.png
const p1_namespaceObject = __webpack_require__.p + "14992fd1adda5233f85e.png";
;// ./src/assets/images/partner/p2.png
const p2_namespaceObject = __webpack_require__.p + "1b96239bf443088dba02.png";
;// ./src/assets/images/partner/p3.png
const p3_namespaceObject = __webpack_require__.p + "bb29ed87a6b81adfdfe5.png";
;// ./src/assets/images/partner/p4.png
const p4_namespaceObject = __webpack_require__.p + "881b00cc0498c4de2786.png";
;// ./src/assets/images/partner/p5.png
const p5_namespaceObject = __webpack_require__.p + "cf673566da117379bc3f.png";
;// ./src/assets/images/partner/p6.png
const p6_namespaceObject = __webpack_require__.p + "5b25d2d5026ea338d817.png";
;// ./src/assets/images/partner/p7.png
const p7_namespaceObject = __webpack_require__.p + "eb5ad679a0b924351e2a.png";
;// ./src/assets/images/partner/p8.png
const p8_namespaceObject = __webpack_require__.p + "54ccd5983b5fc1116d8f.png";
;// ./src/assets/images/partner/p9.png
const p9_namespaceObject = __webpack_require__.p + "8e698c4eefb74acef793.png";
;// ./src/assets/images/partner/p10.png
const p10_namespaceObject = __webpack_require__.p + "b92194964550b9e7af3c.png";
;// ./src/assets/images/partner/p11.png
const p11_namespaceObject = __webpack_require__.p + "2e2f7dc78d2fbe09a00d.png";
;// ./src/assets/images/partner/p12.png
const p12_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/partner/p13.png
const p13_namespaceObject = __webpack_require__.p + "8d597dfdb42325ad7cf4.png";
;// ./src/assets/images/partner/p14.png
const p14_namespaceObject = "data:image/png;base64,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ICmRBoCkRBoAkhJpAEhKpAEgKZEGgKREGgCSEmkASEqkl5HBwcFoQ6fTiYEBT7V/Bt1uNy5fvhws3KVLl2J6ejqaVF5T9by5vtlyLiN1pMuGuEz9Vs+jzFekc6s3+lNTU7F69epg4VatWjX72qofx34q86hfWyMjI8H1zZZzGdm/f3988803vRd5/ULv51RvsD755JM4fvx4sDBlh6ZeR01N9fp6+umnY8OGDb3l6PfzY+5UW+yIdO5tNL3cGzdujBdffHF23k2sq2Lbtm3x1FNPtbauaMZQsCyUDf/Jkyfj0Ucfjfvuu6+RQ3RldFFe1AcPHowzZ870/n7lypXg2sp6eeKJJ2LHjh29600c0iyHuNesWRMPPvhg77nyxhtvxOeffx433XRT9Ft5btx5553x+uuvx8033zxvB2+hytdfuHAhdu/eHUePHu2Nbvs9qj179mxs2rQpdu3aFW+99VY88MADcerUqRgeHo5+KutqaGgoxsfHY3R0ND744IPYu3dvb1Td77e0zp07F3fddVe88sorsXbt2qABXRpXHvY2pmrj29q8q41HK/PdvHlzt4pcdzFOnz7dffjhh1tZ7jfffLPblvfee6+V+/zyyy93l6LasWhluXfu3Nlty549e7pVsBu9v9XOT3f79u1dmuFw9zLS9MktcxlB/zllRNZt4dBieY589dVXvetNvL9a1OcrnDhxojcaXoxytGHfvn29600tdz2fAwcOtHYC16FDh2ZP9Gvifpd1VZ6X5S0smiHSwDwrVqzoXTa1k1DvPK5cuXJJO5LlEHfR1HLX82ni0PrvqdfV3Peq+6nNHf3lSqSBedoKTn1i1FK+vw1tzbeoj0J0ndB13RJpAEhKpAEgKZEGgKREGgCSEmkASEqkASApkQaApEQaAJISaQBISqQBICmRBoCkRBoAkhJpAEhKpAEgKZEGgKREGgCSEmkASEqkASApkQaApEQaAJISaQBISqQBICmRBubpdrvRhrbmC5mJNNelTqfTuzx79uyiN/7T09Nx/vz5aMPFixejDeWxmpqaijZcuHBhSaEu67qo131TlvIc+yvmXQwMNLcpb/rxXe5EugX3339/jIyMBP1TNpplwzU2NhZDQ0OxGGvWrIn169f3rpcNU7m9fk9lPoODg3HHHXe0sjEs87799tt7l02p7+dtt90Wq1atisUoy7t169bebTUZzDK/LVu2LPo5tlT33ntvb1tSdiibUO7v8PBw7z7TjE7XMSYASMlIGgCSEmkASEqkASApkQaApEQaAJISaQBISqQBICmRBoCkRBoAkhJpAEhKpAEgKZEGgKREGgCSEmkASEqkASApkQaApEQaAJISaQBISqQBICmRBoCkRBoAkhJpAEhKpAEgKZEGgKREGgCSEmkASEqkASApkQaApEQaAJISaQBISqQBICmRBoCkRBoAkhJpAEhKpAEgKZEGgKRKpH8KACCbn0qkTwUAkM1kifTXAQBkc6pEejIAgGwmSqQ/DgAgm4lOt9sdra6crKbRAAAy+KnT6fzLQPVHObv7/wIAyKJ3lHtg7l8AgBTeKX/0Il2Npieqi4kAANp2pOpy7yevOvW/VO9Nj1UXhwMAaNOtVaQny5XZXws6M5p+JwCAtrxTB7rozP2fmTO9T1TTugAAmjRZTXfPnNDdM+8DNmb+Yzz8Pm8AaNJkNY3PDXTxq0/BmhlmCzUANKP09t/nHuau/eZHVc6cVVZCPRkAQL/0jmDXZ3P/Uuda31m9R70urp7xvS4AgL/SZFwN9OTvfcHAtb575hvvDmd9A8BfqXT17msFurjmSHqumVH1/1bT1gAAFuNINf3XzI89/6EFR7pWxfrv1cWL1fRv4UM5AOCP1J+R8fFC41z705Gea+a3lNVTCfbfQrgBWL5KkE9VUzkRbDKufjbG17/80aqF+gef0kWfNVfN9AAAAABJRU5ErkJggg==";
;// ./src/assets/images/partner/p15.png
const p15_namespaceObject = __webpack_require__.p + "9b0e842f03b4926dda40.png";
;// ./src/assets/images/partner/p16.png
const p16_namespaceObject = __webpack_require__.p + "1b220b5c07da35728bb8.png";
;// ./src/components/index/comm4.jsx



















const comm4_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #F8F8F8;
	padding-bottom: 40px;
	.comm4_title {
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	.comm4_img {
	    padding: 0 15px;
		span {
			display: flex;
			gap: 4%;
			margin-bottom: 15px;
		}
		img {
			width: 48%;
		}
	}
`;
function Comm4() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm4_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm4_title"
  }, t("Partner")), /*#__PURE__*/react.createElement("div", {
    className: "comm4_img"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p6_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p7_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p8_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p9_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p10_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p11_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p12_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p13_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p14_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: p15_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: p16_namespaceObject,
    alt: ""
  }))));
}
/* harmony default export */ const comm4 = (Comm4);
;// ./src/assets/images/us_1.png
const us_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAzCAYAAAAjKt6MAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAsVJREFUeAHlmoFxmzAUhj/nOoA3qDZoRqAbZIPSCeINzAZNJyCdwN0Ab5BsAJ3A3YDyTnDGBIMAIQT97v5LACHxHk8PWRL4z75QWCgulBa6FMpLyXFS6FBIsVHEAUduDe+TOCUwrF/KxV0FnlieZ4Y5oCkxcN9Sr5wL0A6TctG9B1DocPvBckgU5BYkdqhSIdo5l5brrYS1gkfcY8sJJuqM/KRR2GVkPOPOCVHfw7TddKK9v9lEMS0nDNGh1u6+PA7rD/NIf3+bi5j5HSA2hOguceQa/XL+5kUHPRVdaHjOEgo3kWD8ggPDm2PsRkcI5Auo1Qkw7M1IJQfs8ALkjnXXCRVDE5ZUGDKNBKwZaCJprzf5n0ZWXjlEMZw3sGZkn14wJLDQWIz5eF9ILbRpqoAB2How6WYSYSH603yPsVFo1RGfWs59R/ejqUg/fOI6lP1b6L3Un0JZec5rlsjkLvTICF6BfGP6jAESwjG3/WhrkXGXh9r/GTqxJehEl5Q3Z2yDd9OCktzW8mbH6HeH7TcRIRk8Y7t0RsRD4/gX2+XcdXHXOJbukTL/RMwS7LouNiNCusdPtseZEVRRsYYEaKqQkaiNOUMxAbURZ8RYQLH+oXaARULczyTZ0BszodCLI67WIKYqxBKH0uiUj0vy/1U07FdmfF0KyxyAfGWKmYkEyFeilBmXJ9c02gyYGYXbNYgxinBIhJ9OOLEACr9GnCkTpw52TEOh+6RMk3/humfJJVmhr3g0u6Zw/3VJ8Wx/5dTtgGMkiVvhCSHLfFZf8WA6UTF8R6xN2dqgMphqMVe2Gi45jpC2R61dmiBfjaDQt8Z5MV6VWjoEqwnlCAco/JyJkrXXRV6EQjtkyZ/e0naEJ18EhfvpOWlLEqG3i0sK7RQZy9uMlGprkRfGjxliS+ZWXIfVVWLd89GgrPZXVG0ZOuPZgvM/PXhj+xpI7SEAAAAASUVORK5CYII=";
;// ./src/assets/images/us_2.png
const us_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA5CAYAAAB+pNYgAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA5JJREFUeAHtm81100AQx/8JBRAqyHRA6GCpgFBBRAe5ccRUQKjApgLgxk1JBUkHqw5ijpyMJlq9yPLK2o9Zy1L0e+9vOS/2zu5oZz9m5ROkg0qpUm9LXRh9LHULObjMvNSD0Z25FjhyzlA551spXWpjUQ5Z8g4796WWpj5HhUJVsUfYK96WggzK0d6jqd8lIjlBGNz9P5S6RtWjfLhFFY5kdGaur2Eva13qr7kW5sqhxj04gx+Fsf8VBwhVhe6uPzblqG56EgjuoTYWPZp2ibMEsJmgcgiTAdhMWNGDfw0PuhrAZsLScJioXqGfzxD0/JHCjvqHyAUzYVw9JEbRg/0SwOYFaYlACMDmBUohgCUwWIWHVA5PCMDQlR5SZHNK12zI+65kW4ERwHvmPy4fJExvW+Mrbv/OuusUuyj4ZxKmBrf/2uWDGuPqBal0jx4Uhq/kMUk1ndMOwyvMNNna5rUzpRqJ8jsjhbOyb+o/mj1LYXZUm/oQ5omms1JkFuq8+YN5n4KmjRRY/cKjv9TAyOGcYXcJkkFutuVyVGIbtZ0tSLDwe/Sv01aRNlY9Nvh/PyNtNLVl61KoUA33BW0eYcMFrodUtGTNgm+EClVwhwJtENxRCG9LUzfNQnOBAntXvBZ87ebwR6xt9WwokWG4gz8/4Mdv+BPynTbEL+wsdpTExjlk6i7gxyFs2GD/nLOzCNNGan33bmzOIvgjlW4iSWeFjHu+3wmxoSAD8YvU4s2aXexBB9jwxddGl36dQq6bOmcXDRn8e/UhbHRxzi9Snq/vvEuoUIRd15PjGBs2aWln1Y3J9jTiQsCmxv6boiDfLn1i3qRghWpBWKCavutHKzPIsbLYuEKiB1lSOmtynGLGmdlZHszO8oCdlSo3PjXWs7PcWc9h6M6TswrEU6D6iYlvMi8lHDHfS32CTBufIpD3WrGr2+Z+jVAtPCWP1nyUY/c3RZlAuYtmYVqgkoRtyFQ8F6hsn+2Fxb4SsM3bt50dASH+PK+uuG27UR+FL1ClhUJ7njbfX6D7WTIFmRu01QFsP6HLSn1BfGqjKPUe/eNFfQZQq6ss1hr7Z2+C2yFvHwWqse7W5cNsbIG4u6IxDDFjJYfcAoHOJoSHpsIwKITVdwmhRCjBz2lLDEsO957EdSUkgFA5TWN/+BGGhbD/ieuocAshg/0OZjgObOtHri/P1AdzUhvC81pq6PBrk8O+SA3iP64JRYE+r+efAAAAAElFTkSuQmCC";
;// ./src/assets/images/us_3.png
const us_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA/CAYAAABU6B73AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA8hJREFUeAHtm+txm0AUhU88+R9SgbcDkw42FUSpwHQQdSBSgdWBSAVJBzgVKK4AUoGcChSuWCxsY7h3d4HF42/mzDD2Pg93gX3oHcYnqqQrqUpXlWLzt0ZtSqP7SneV/hiVWCi60k2lotLRg6icXaUVFgDd3U2lA/x0/iVR+WRKjMBQqO/+2AZ0KUcdfbMyVQRwDVGYAQ1/49+nNpiQGwDHgFVg5OhQqEMwZBPaWmMkEwoAx4VpgzcT/JqhFm6CFzOiV2KCsxmhvx1sdA0hCbPgnyZtinneKEWlrWnDlpGePv4UmCjwh0TckTdj5nVRjuef1hF4X7k5mOyYjTn0lKHAM4TKKIy4ndA99ebgtX3wG0MxC+I6q0wn9ziHcIz+8GzWL1YmD9VzAG8KzhkezQ2I+griOkraITwS8NuftjNetK4VZFPav1g239CKirYRG8i4xLIhE9ZdfzwK9QvhkULWh2cP/ARyIw4IjxzyfmjK2AyNL5BDK80RwsKmPY/eRjbLbcEtnsJukvgQ2RpyE1KEi4a8P5eUcS3MVCB8Msj6lNAzQkHGLcJnK0wfkxFXsjz4gfCRbhMqMkL6pL3HMvgtSHtlMzRC/H5wxiYiXiPqAm+csDHiI5bBB0liGyMUloGSJCYjSshQWAaSKUBJRkhfhzYTtKnRkHEy4k6W5+EMVMhcQ8Y/m6FBJiQIGw0Z9CV6mo9LZ2s08Qo1KjaQ9+e0JmGzTEe6QXgo2PVFNQUUlgVsEA4Kdv14tKywhZ0RTWTMPUwotG0Pte3aBemehFRBjv6FUXI1wfSGaLhvPuunhe4x7BhlGooe2iFfm7S+jaFXd2La5ONYY9FVSYrhZ4EyisEfj5Quh93DdWXycutyGhYNQ9vqhTEhwvkIsKRSBTljn9pRL1WcDmTc4xzuzW61tfNMNLMOL9HQwDlskZq0qUm/Z1TqsgfCPQDiLRoahpb322cLFOrnR19kFHAnh18TUjAZusupSRe1rrW53hmROSv4eXNk8GdCIWnT0IPw6YkTus5NPm2uI9OBNdzJ4M+IBEKGhkjT2S5874tmmHhISBtQYJofjmRwN2HfV8F79ENR0fwgrQuFOjJK1FuBtMhz3/o/RQwton7HvJSVvsIR14+aAu5kjvWroQo4q9h0hz9jmT85LMFsO3c5v6z0CcvYCW8oIbiBkn2NJjLmHu8cblHfuBIjk0A2+3QlA/+Z4OO7RYRiNnAqI3LMfK5Loz86xjaCyk8QEAm6J0d7uJO9UC4Ng2A3myg8M5x/euBjzMat8nYY4Wv2P7aJn9TECdK/AAAAAElFTkSuQmCC";
;// ./src/assets/images/us_4.svg
const us_4_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyNCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDI0NTIgMTcuODUwMkw5LjM5ODk1IDEyLjUzMjZMMTkuNjMzMyAzLjg0MTgzQzIwLjA4NDYgMy40NTI5NiAxOS41MzczIDMuMjYzMDUgMTguOTMyNSAzLjYwNjdMNi4zMDc1MSAxMS4xMzA5TDAuODU0MjkxIDkuNDk0Qy0wLjMxNyA5LjE4NjUyIC0wLjMzNjIwMSA4LjQxNzgzIDEuMTIzMTEgNy44NjYxOEwyMi4zODg4IDAuMTI0OTU5QzIzLjM1ODQgLTAuMjkxMDQxIDI0LjI4OTcgMC4zNTEwNDYgMjMuOTE1MyAxLjc2MTgzTDIwLjI5NTggMTcuODUwMkMyMC4wNDYyIDE4Ljk4OTcgMTkuMzA2OSAxOS4yNyAxOC4yOTg4IDE4Ljc0NTVMMTIuNzg4IDE0LjkwMkwxMC4xMzgyIDE3LjMyNTdDMTAuMDA3IDE3LjQ4NjkgOS44Mzg1MSAxNy42MTggOS42NDU1NiAxNy43MDg5QzkuNDUyNjEgMTcuNzk5NyA5LjI0MDI0IDE3Ljg0ODEgOS4wMjQ1MiAxNy44NTAyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==";
;// ./src/assets/images/us_5.svg
const us_5_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUzODcgMEgxOS43NTg5TDEyLjcyMzggOC4wNDgyMUwyMSAxOUgxNC41MTk4TDkuNDQ0MyAxMi4zNTc4TDMuNjM2NzUgMTlIMC40MTQ2ODVMNy45MzkzNiAxMC4zOTE1TDAgMEg2LjY0NDdMMTEuMjMyNSA2LjA3MTIzTDE2LjUzODcgMFpNMTUuNDA4NiAxNy4wNzA4SDE3LjE5MjlMNS42NzUxMyAxLjgyNzkxSDMuNzYwMzZMMTUuNDA4NiAxNy4wNzA4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==";
;// ./src/components/index/comm5.jsx









const comm5_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #FFD100;
    color: #000;
    text-align: center;
	.comm5_us {
		padding-top: 40px;
		padding-bottom: 15px;
	}
	.comm5_ico {
		img {
			height: 16px;
    		padding: 0 10px;
		}
	}
	.comm5_all {
		border-top: 1px solid rgb(255, 255, 255, .57);
		margin-top: 40px;
		padding: 15px 0;
		font-size: 14px;
	}
`;
function Comm5() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm5_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm5_us"
  }, t("Follow us")), /*#__PURE__*/react.createElement("div", {
    className: "comm5_ico"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, null, /*#__PURE__*/react.createElement("img", {
    src: us_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, null, /*#__PURE__*/react.createElement("img", {
    src: us_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, null, /*#__PURE__*/react.createElement("img", {
    src: us_3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://t.me/FengFiChinese",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: us_4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://t.me/SwarmFiCommunity",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: us_4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, null, /*#__PURE__*/react.createElement("img", {
    src: us_5_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_all"
  }, "\xA9 2026. All rights reserved."));
}
/* harmony default export */ const comm5 = (Comm5);
;// ./src/pages/index/index.jsx







// import Node from "components/index/node";
// import Comm3 from "components/index/comm3";


function Index() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(comm1, null), /*#__PURE__*/react.createElement(myAssets, null), /*#__PURE__*/react.createElement(management, null), /*#__PURE__*/react.createElement(sell, null), /*#__PURE__*/react.createElement(income, null), /*#__PURE__*/react.createElement(account, null), /*#__PURE__*/react.createElement(comm4, null), /*#__PURE__*/react.createElement(comm5, null));
}
/* harmony default export */ const index = (Index);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(17308);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(34716);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(93567);
;// ./src/utils/CountdownTimestamp.jsx


function CountdownTimestamp(_ref) {
  let {
    targetTimestamp,
    onComplete
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  // 使用 state 来存储目标时间，这样当 props 改变时会重新计算
  const [targetMs, setTargetMs] = (0,react.useState)(targetTimestamp.toString().length === 10 ? targetTimestamp * 1000 : targetTimestamp);
  const [msLeft, setMsLeft] = (0,react.useState)(Math.max(0, targetMs - Date.now()));
  const timerRef = (0,react.useRef)(null);
  const onCompleteCalledRef = (0,react.useRef)(false); // 防止重复调用

  // 当 targetTimestamp 改变时，更新目标时间
  (0,react.useEffect)(() => {
    const newTargetMs = targetTimestamp.toString().length === 10 ? targetTimestamp * 1000 : targetTimestamp;
    setTargetMs(newTargetMs);
    setMsLeft(Math.max(0, newTargetMs - Date.now()));
    onCompleteCalledRef.current = false; // 重置标志
  }, [targetTimestamp]);
  (0,react.useEffect)(() => {
    const update = () => {
      const left = Math.max(0, targetMs - Date.now());
      setMsLeft(left);

      // 倒计时结束，触发回调
      if (left === 0 && !onCompleteCalledRef.current && onComplete) {
        onCompleteCalledRef.current = true;
        onComplete();
      }
    };

    // update(); // 初始化一次
    timerRef.current = setInterval(update, 1000); // 每秒刷新

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [targetMs, onComplete]); // 依赖 targetMs，当目标时间改变时重新启动计时器

  // 转换成天、时、分、秒
  const days = Math.floor(msLeft / (24 * 3600 * 1000));
  const hours = Math.floor(msLeft % (24 * 3600 * 1000) / (3600 * 1000));
  const minutes = Math.floor(msLeft % (3600 * 1000) / (60 * 1000));
  const seconds = Math.floor(msLeft % (60 * 1000) / 1000);

  // 格式化：始终两位数
  const pad = num => String(num).padStart(2, "0");
  return /*#__PURE__*/react.createElement("span", null, days, t('Day'), " ", pad(hours), ":", pad(minutes), ":", pad(seconds));
}
;// ./src/components/hashrate/myHashrate.jsx








function MyHashrate() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    loading,
    myList,
    usdtSFTprice,
    isClaimLoading,
    handleClaim,
    handleUserList
  } = useManagement();
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return /*#__PURE__*/react.createElement("div", null, !loading ? /*#__PURE__*/react.createElement("div", null, myList.length > 0 ? myList.map((item, index) => {
    var _item$ratio, _item$ratio2, _item$ratio3, _item$ratio4, _item$ratio5, _item$ratio6, _item$ratio7, _item$ratio8, _item$ratio9, _item$ratio0, _item$ratio1, _item$ratio10, _item$ratio11, _item$ratio12, _item$ratio13, _item$ratio14;
    return /*#__PURE__*/react.createElement("div", {
      key: index,
      className: "ment_conter"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_top_flex"
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "ment_cur_cycle"
    }, /*#__PURE__*/react.createElement("span", null, t("Current cycle"), ":"), /*#__PURE__*/react.createElement("em", null, (item == null || (_item$ratio = item.ratio) == null ? void 0 : _item$ratio.firstFuture.index) + 1, t("Period"))), /*#__PURE__*/react.createElement("div", {
      className: "ment_times"
    }, /*#__PURE__*/react.createElement("em", null, t("Cycle countdown"), ":"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(CountdownTimestamp, {
      targetTimestamp: item == null || (_item$ratio2 = item.ratio) == null || (_item$ratio2 = _item$ratio2.firstFuture) == null ? void 0 : _item$ratio2.endTime,
      onComplete: () => {
        // console.log('倒计时结束，刷新数据');
        setTimeout(() => {
          // 刷新列表数据
          handleUserList();
        }, 3000);
      }
    })))), currentTimestamp > (item == null || (_item$ratio3 = item.ratio) == null || (_item$ratio3 = _item$ratio3.firstFuture) == null ? void 0 : _item$ratio3.claimEndTime) && (item == null || (_item$ratio4 = item.ratio) == null ? void 0 : _item$ratio4.firstFuture.index) + 1 === 38 ? /*#__PURE__*/react.createElement("div", {
      className: "ment_status ment_end"
    }, t("Ended")) : /*#__PURE__*/react.createElement("div", {
      className: "ment_status"
    }, t("Progress"))), /*#__PURE__*/react.createElement("div", {
      className: "ment_xcont"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Staked Amount")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.usdtAmountBig), " USDT")), /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Periodic interest")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.usdtAmountBig * (item == null || (_item$ratio5 = item.ratio) == null ? void 0 : _item$ratio5.firstFuture.percentage) / 100 / usdtSFTprice), " SFI")), /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Cycle days")), Number((item == null || (_item$ratio6 = item.ratio) == null ? void 0 : _item$ratio6.firstFuture.day) - (item == null || (_item$ratio7 = item.ratio) == null ? void 0 : _item$ratio7.lastPast.day)) === 0 ? /*#__PURE__*/react.createElement("em", null, item == null || (_item$ratio8 = item.ratio) == null ? void 0 : _item$ratio8.firstFuture.day, " ", t("Day")) : /*#__PURE__*/react.createElement("em", null, (item == null || (_item$ratio9 = item.ratio) == null ? void 0 : _item$ratio9.firstFuture.day) - (item == null || (_item$ratio0 = item.ratio) == null ? void 0 : _item$ratio0.lastPast.day), " ", t("Day")))), /*#__PURE__*/react.createElement("div", {
      className: "ment_xcont"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Cyclic rate")), /*#__PURE__*/react.createElement("em", null, item == null || (_item$ratio1 = item.ratio) == null ? void 0 : _item$ratio1.firstFuture.percentage, "%")), /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Cumulative days")), /*#__PURE__*/react.createElement("em", null, item == null || (_item$ratio10 = item.ratio) == null ? void 0 : _item$ratio10.firstFuture.day, " ", t("Day")))), /*#__PURE__*/react.createElement("div", {
      className: "ment_xtflex"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_xtimes"
    }, /*#__PURE__*/react.createElement("span", null, t("Staking time")), /*#__PURE__*/react.createElement("em", null, formatTimestamp(item.timestamp * 1000, "YYYY-MM-DD HH:mm")))), currentTimestamp > (item == null || (_item$ratio11 = item.ratio) == null || (_item$ratio11 = _item$ratio11.lastPast) == null ? void 0 : _item$ratio11.endTime) && currentTimestamp < (item == null || (_item$ratio12 = item.ratio) == null || (_item$ratio12 = _item$ratio12.lastPast) == null ? void 0 : _item$ratio12.claimEndTime) && !(item != null && item.isClaimLastPast) && /*#__PURE__*/react.createElement("div", {
      className: "man_cl_kuai"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_xcont"
    }, /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Claim cycle")), /*#__PURE__*/react.createElement("em", null, (item == null || (_item$ratio13 = item.ratio) == null ? void 0 : _item$ratio13.lastPast.index) + 1, t("Period"))), /*#__PURE__*/react.createElement("div", {
      className: "ment_xpront"
    }, /*#__PURE__*/react.createElement("span", null, t("Claim income")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.usdtAmountBig * (item == null || (_item$ratio14 = item.ratio) == null ? void 0 : _item$ratio14.lastPast.percentage) / 100 / usdtSFTprice), " SFI"))), /*#__PURE__*/react.createElement("div", {
      className: "homt_butom",
      onClick: () => {
        var _item$ratio15;
        handleClaim(index, item.index, (item == null || (_item$ratio15 = item.ratio) == null ? void 0 : _item$ratio15.lastPast.index) + 1);
      }
    }, !isClaimLoading[index] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isClaimLoading[index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim'))))));
  }) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })));
}
/* harmony default export */ const myHashrate = (MyHashrate);
;// ./src/components/hashrate/myStaking.jsx








function MyStaking() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    loading,
    myStakingList,
    ratio,
    isStakingClaimLoading,
    handleStakingClaim,
    handleStakingList
  } = useStaking();
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return /*#__PURE__*/react.createElement("div", null, !loading ? /*#__PURE__*/react.createElement("div", null, myStakingList.length > 0 ? myStakingList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "ment_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ment_top_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "ment_cur_cycle"
  }, /*#__PURE__*/react.createElement("span", null, t("Order Number"), ":"), /*#__PURE__*/react.createElement("em", null, item.index + 1)), item.claimedAmount === "0" && currentTimestamp < item.endTime && /*#__PURE__*/react.createElement("div", {
    className: "ment_times"
  }, /*#__PURE__*/react.createElement("em", null, t("Countdown to claim"), ":"), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(CountdownTimestamp, {
    targetTimestamp: item.endTime,
    onComplete: () => {
      // console.log('倒计时结束，刷新数据');
      setTimeout(() => {
        // 刷新列表数据
        handleStakingList();
      }, 3000);
    }
  })))), item.claimedAmount === "0" ? /*#__PURE__*/react.createElement("div", {
    className: "ment_status"
  }, "30", t("Day")) : /*#__PURE__*/react.createElement("div", {
    className: "ment_status ment_end"
  }, t("Claimeds"))), /*#__PURE__*/react.createElement("div", {
    className: "ment_xcont"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ment_xpront"
  }, /*#__PURE__*/react.createElement("span", null, t("Pledge amount")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.amountBig), " SFI")), /*#__PURE__*/react.createElement("div", {
    className: "ment_xpront"
  }, /*#__PURE__*/react.createElement("span", null, t("Daily interest")), /*#__PURE__*/react.createElement("em", null, parseNumber(ratio / 30, 2), "%")), /*#__PURE__*/react.createElement("div", {
    className: "ment_xpront"
  }, /*#__PURE__*/react.createElement("span", null, t("Generate income")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.amountBig * ratio / 100 / 30, 4), " SFI"))), /*#__PURE__*/react.createElement("div", {
    className: "ment_xtflex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ment_xtimes"
  }, /*#__PURE__*/react.createElement("span", null, t("Start Times")), /*#__PURE__*/react.createElement("em", null, formatTimestamp(item.stakeTime * 1000, "YYYY-MM-DD HH:mm"))), /*#__PURE__*/react.createElement("div", {
    className: "ment_xtimes"
  }, /*#__PURE__*/react.createElement("span", null, t("Expiration time")), /*#__PURE__*/react.createElement("em", null, formatTimestamp(item.endTime * 1000, "YYYY-MM-DD HH:mm")))), item.claimedAmount === "0" && currentTimestamp > item.endTime && /*#__PURE__*/react.createElement("div", {
    className: "man_cl_kuai"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ment_xpront"
  }, /*#__PURE__*/react.createElement("span", null, t("Claim principal+income")), /*#__PURE__*/react.createElement("em", null, parseNumber(item.amountBig * 1 + item.amountBig * ratio / 100), " SFI")), /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: () => {
      handleStakingClaim(index, item.index);
    }
  }, !isStakingClaimLoading[index] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isStakingClaimLoading[index] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim'))))))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    description: t("No Data")
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })));
}
/* harmony default export */ const myStaking = (MyStaking);
;// ./src/components/hashrate/main.jsx




function Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const [tabon, setTabon] = (0,react.useState)(1);
  return /*#__PURE__*/react.createElement("div", {
    className: "man_catic"
  }, /*#__PURE__*/react.createElement("div", {
    className: "has_title"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabon === 1 ? 'on' : '',
    onClick: () => {
      setTabon(1);
    }
  }, t("My Hashrate")), /*#__PURE__*/react.createElement("span", {
    className: tabon === 2 ? 'on' : '',
    onClick: () => {
      setTabon(2);
    }
  }, t("My Staking"))), tabon === 1 && /*#__PURE__*/react.createElement(myHashrate, null), tabon === 2 && /*#__PURE__*/react.createElement(myStaking, null));
}
/* harmony default export */ const main = (Main);
;// ./src/pages/Hashrate/index.jsx


function Hashrate() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const pages_Hashrate = (Hashrate);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 21 modules
var pagination = __webpack_require__(39057);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(17965);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/assets/images/copy.png
const copy_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAKpJREFUeAHVkiEOwkAQRT8FgUQikUgkEhyOM3ADkKgegSNwBTgBwVX2CK2rbG/QP9ltM2l2TCva/uRlM7s7fzY7A4ytRWBvR2K/hlSSB8kkWAYuvMmFFIbBkWzJV4KoU1mST7Ar30gK9bqVuvDyyalhIGdxd1MbbHzy2TD4IfAvEQZqfgYHT9XXQPQh9ybQXcjJFe63rep/uFlopSdRWrgna8MgIU+4gZqQarlAFnGEL0KOAAAAAElFTkSuQmCC";
;// ./src/components/team/main.jsx

















const main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #F7F7F7;
    min-height: 100vh;
	padding: 30px 15px 15px 15px;
	.tem_title {
		color: #000;
    	font-weight: bold;
		margin-bottom: 15px;
	}
	.tem_info {
	    display: flex;
    	gap: 8px;
		margin-bottom: 8px;
		span {
			display: block;
			width: 50%;
			background: #fff;
			border-radius: 8px;
			padding: 10px;
		}
		em {
			display: block;
			font-size: 12px;
    		color: #454545;
		}
		i {
			display: block;
			font-size: 22px;
			font-weight: bold;
			margin-top: 3px;
		}
	}
	.tem_conylink {
		padding: 10px;
		background: #fff;
		border-radius: 8px;
		margin-bottom: 8px;
		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 12px;
		}
		img {
		    width: 12px;
		    cursor: pointer;
		}
	}
	.tem_table {
		margin-top: 30px;
		margin-bottom: 10px;
		span {
			font-size: 16px;
			color: #454545;
			margin-right: 30px;
			opacity: .8;
			cursor: pointer;
		}
		.on {
			color: #000;
    		font-weight: bold;
			opacity: 1;
		}
	}
	.tem_list_conter {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-radius: 6px;
		padding: 13px 10px;
		margin-bottom: 6px;
		span {
    		font-size: 12px;
		}
	}
	.tem_list_wid1 {
	    width: 45%;
	}
	.tem_list_wid2 {
		width: 25%;
	}
	.tem_list_wid3 {
		width: 30%;
		text-align: right;
	}
	.tem_claim_miner {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		line-height: 40px;
		background: #428BC1;
		border-radius: 10px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		margin-bottom: 10px;
		cursor: pointer;
	}
`;
function main_Main() {
  var _chain$id;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const {
    referrerAddress
  } = useLayout();
  const [teamCount, setTeamCount] = (0,react.useState)("-");
  const [directCount, setDirectCount] = (0,react.useState)("-");
  const [teamTotal, setTeamTotal] = (0,react.useState)("-");
  const [nodePerformance, setNodePerformance] = (0,react.useState)("-");
  const [teamLevel, setTeamLevel] = (0,react.useState)("0");
  const [teamList, setTeamList] = (0,react.useState)([]);
  const [loading, setLoading] = (0,react.useState)(true);
  const [tabon, setTabon] = (0,react.useState)(1);
  const [invitationUrl, setInvitationUrl] = (0,react.useState)(0);
  const [loadingList, setLoadingList] = (0,react.useState)(true);
  const [pageNo, setPageNo] = (0,react.useState)(1); // 当前页码
  const [pageSize, setPageSize] = (0,react.useState)(10); // 每页条数
  const [total, setTotal] = (0,react.useState)(); // 总共数据条数

  // 生成我的邀请链接
  const handleInvitationLink = () => {
    const currentURL = new URL(window.location.href);
    const origin = currentURL.origin;
    const url = origin + "/#/?invitation=" + address;
    setInvitationUrl(url);
  };

  // 接口获取数据
  const handleChange = async () => {
    setLoading(true);
    http.get(`${axiosUrl}/user/relation/invite-info?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setLoading(false);
        // 团队总人数
        setTeamCount(data.teamCount);
        // 直推人数
        setDirectCount(data.inviteCount);
        // 团队业绩
        setTeamTotal(data.stakePerformance);
        // 小区总业绩
        setNodePerformance(data.smallPerformance);
        // 团队等级
        setTeamLevel(data.level);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };

  // 查询我的邀请人列表
  const handleReferrerList = async () => {
    setLoadingList(true);
    http.get(`${axiosUrl}/user/relation/invite-list?address=${address}&pageNo=${pageNo}&pageSize=${pageSize}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setLoadingList(false);
        setTeamList(data.list);
        setTotal(data.total);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 生成我的邀请链接
      handleInvitationLink();
      // 接口获取数据
      handleChange();
    } else {
      setLoading(false);
    }
  }, [address, chain]);
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询我的邀请人列表(接口获取)
      handleReferrerList();
    } else {
      setLoadingList(false);
    }
  }, [address, chain, pageNo, pageSize]);
  const handleCopy = text => {
    if (copy_to_clipboard_default()(text)) {
      message/* default */.Ay.success(t("Copy successful"));
    }
  };
  const onChangePage = (page, pageSize) => {
    setPageNo(page);
    setPageSize(pageSize);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_title"
  }, t("Team Information")), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team count")), /*#__PURE__*/react.createElement("i", null, teamCount)), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Direct count")), /*#__PURE__*/react.createElement("i", null, directCount))), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team Performances"), "(V", teamLevel, ")"), /*#__PURE__*/react.createElement("i", null, parseNumber(teamTotal))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Total community sales")), /*#__PURE__*/react.createElement("i", null, parseNumber(nodePerformance)))), address && /*#__PURE__*/react.createElement("div", {
    className: "tem_conylink"
  }, /*#__PURE__*/react.createElement("span", null, t("My invitation link")), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleCopy(invitationUrl);
    }
  }, invitationUrl ? `${invitationUrl.substring(0, 10)}...${invitationUrl.substr(-8)}` : '--', /*#__PURE__*/react.createElement("img", {
    src: copy_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "tem_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabon === 1 ? 'on' : '',
    onClick: () => {
      setTabon(1);
    }
  }, t("Recommended List"))), tabon === 1 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, t("Wallet address")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, t("Team Performances")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, t("Performance"))), !loadingList ? /*#__PURE__*/react.createElement("div", null, teamList.length > 0 ? teamList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, item.address.substring(0, 6), "...", item.address.substr(-4)), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, item.stakePerformance), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, item.stakeTotal))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, null))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  })), teamList.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "pagination_conter"
  }, /*#__PURE__*/react.createElement(pagination/* default */.A, {
    onChange: onChangePage,
    defaultCurrent: pageNo,
    defaultPageSize: pageSize,
    total: total
  }))), tabon === 2 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, t("Source address")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, t("Date")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, t("Quantity"))), /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, null))));
}
/* harmony default export */ const team_main = (main_Main);
;// ./src/pages/team/index.jsx


function Team() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(team_main, null));
}
/* harmony default export */ const team = (Team);
;// ./src/components/dividend/main.jsx










function dividend_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const {
    promotionRewardBig,
    rewardPoolV5,
    rewardPoolV6,
    rewardPoolV7,
    rewardPoolV8,
    rewardPoolV9,
    claimablePoolV5,
    claimablePoolV6,
    claimablePoolV7,
    claimablePoolV8,
    claimablePoolV9,
    isPromotionLoading,
    handlePromotionClaim,
    isLevelLoading,
    handleLevelClaim
  } = useStaking();
  const [teamLevel, setTeamLevel] = (0,react.useState)("0");
  const handleChange = async () => {
    http.get(`${axiosUrl}/user/relation/invite-info?address=${address}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        // 团队等级
        setTeamLevel(data.level);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      handleChange();
    }
  }, [address, chain]);
  return /*#__PURE__*/react.createElement("div", {
    className: "man_catic"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_conters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "man_title"
  }, t("Promotion Reward")), /*#__PURE__*/react.createElement("div", {
    className: "ment_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_conbotm"
  }, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ":"), /*#__PURE__*/react.createElement("em", null, parseNumber(promotionRewardBig), "USDT")), parseNumber(promotionRewardBig) === "0" ? /*#__PURE__*/react.createElement("div", {
    className: "homt_butom homt_not_butom"
  }, t('Claim')) : /*#__PURE__*/react.createElement("div", {
    className: "homt_butom",
    onClick: handlePromotionClaim
  }, !isPromotionLoading && /*#__PURE__*/react.createElement("span", null, t('Claim')), isPromotionLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))))), Number(teamLevel) >= 5 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "man_title"
  }, t("Level Reward")), /*#__PURE__*/react.createElement("div", {
    className: "ment_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_lev_conbotm"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_lev_flex"
  }, /*#__PURE__*/react.createElement("span", null, t("My Level"), ":"), /*#__PURE__*/react.createElement("em", null, "V", teamLevel))), Number(teamLevel) === 5 && /*#__PURE__*/react.createElement("div", {
    className: "div_lev_pool"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_pool_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "V5", t("Reward Pool"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(rewardPoolV5), "USDT")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(claimablePoolV5), "USDT"))), Number(claimablePoolV5) !== 0 ? /*#__PURE__*/react.createElement("div", {
    className: "div_butom",
    onClick: () => {
      handleLevelClaim(5);
    }
  }, !isLevelLoading[5] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isLevelLoading[5] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "div_butom div_not_butom"
  }, t('Claim')))), Number(teamLevel) === 6 && /*#__PURE__*/react.createElement("div", {
    className: "div_lev_pool"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_pool_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "V6", t("Reward Pool"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(rewardPoolV6), "USDT")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(claimablePoolV6), "USDT"))), Number(claimablePoolV6) !== 0 ? /*#__PURE__*/react.createElement("div", {
    className: "div_butom",
    onClick: () => {
      handleLevelClaim(6);
    }
  }, !isLevelLoading[6] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isLevelLoading[6] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "div_butom div_not_butom"
  }, t('Claim')))), Number(teamLevel) === 7 && /*#__PURE__*/react.createElement("div", {
    className: "div_lev_pool"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_pool_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "V7", t("Reward Pool"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(rewardPoolV7), "USDT")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(claimablePoolV7), "USDT"))), Number(claimablePoolV7) !== 0 ? /*#__PURE__*/react.createElement("div", {
    className: "div_butom",
    onClick: () => {
      handleLevelClaim(7);
    }
  }, !isLevelLoading[7] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isLevelLoading[7] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "div_butom div_not_butom"
  }, t('Claim')))), Number(teamLevel) === 8 && /*#__PURE__*/react.createElement("div", {
    className: "div_lev_pool"
  }, /*#__PURE__*/react.createElement("div", {
    className: "div_pool_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "V8", t("Reward Pool"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(rewardPoolV8), "USDT")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(claimablePoolV8), "USDT"))), Number(claimablePoolV8) !== 0 ? /*#__PURE__*/react.createElement("div", {
    className: "div_butom",
    onClick: () => {
      handleLevelClaim(8);
    }
  }, !isLevelLoading[8] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isLevelLoading[8] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "div_butom div_not_butom"
  }, t('Claim')))), Number(teamLevel) === 9 && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "div_pool_flex"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "V9", t("Reward Pool"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(rewardPoolV9), "USDT")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Claimable"), ": "), /*#__PURE__*/react.createElement("em", null, parseNumber(claimablePoolV9), "USDT"))), Number(claimablePoolV9) !== 0 ? /*#__PURE__*/react.createElement("div", {
    className: "div_butom",
    onClick: () => {
      handleLevelClaim(9);
    }
  }, !isLevelLoading[9] && /*#__PURE__*/react.createElement("span", null, t('Claim')), isLevelLoading[9] && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Claim')))) : /*#__PURE__*/react.createElement("div", {
    className: "div_butom div_not_butom"
  }, t('Claim')))))));
}
/* harmony default export */ const dividend_main = (dividend_main_Main);
;// ./src/pages/dividend/index.jsx


function Dividend() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(dividend_main, null));
}
/* harmony default export */ const dividend = (Dividend);
;// ./src/assets/images/ecology/games_1.png
const games_1_namespaceObject = __webpack_require__.p + "1c4e15ba266ea16f6f66.png";
;// ./src/assets/images/ecology/games_2.png
const games_2_namespaceObject = __webpack_require__.p + "c4a35328d7fb6721d3d5.png";
;// ./src/assets/images/ecology/games_3.png
const games_3_namespaceObject = __webpack_require__.p + "ca4cc6ca05584dbb3855.png";
;// ./src/assets/images/ecology/games_4.png
const games_4_namespaceObject = __webpack_require__.p + "c7fd27fbcde08caf40ee.png";
;// ./src/assets/images/ecology/games_5.png
const games_5_namespaceObject = __webpack_require__.p + "9bef90e997c39001809f.png";
;// ./src/assets/images/ecology/games_6.png
const games_6_namespaceObject = __webpack_require__.p + "76b19138da401356c25b.png";
;// ./src/assets/images/ecology/games_7.png
const games_7_namespaceObject = __webpack_require__.p + "c215f906fd625a32d190.png";
;// ./src/assets/images/ecology/games_8.png
const games_8_namespaceObject = __webpack_require__.p + "83d4e33862e3b36249fe.png";
;// ./src/assets/images/coming.png
const coming_namespaceObject = __webpack_require__.p + "6bb3989f117e757292b4.png";
;// ./src/components/ecology/main.jsx












const ecology_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    width: 90%;
    margin: auto;
	max-width: 500px;
    padding-top: 20px;
    padding-bottom: 100px;
	.game_title {
	    font-size: 20px;
		font-weight: bold;
		margin-bottom: 15px;
	}
	.game_conter {
    	padding-bottom: 40px;
	}
	.game_flex {
	    display: flex;
    	gap: 12px;
		margin-bottom: 5px;
		span {
			display: inline-block;
			width: 50%;
		}
		img {
			width: 100%;
		}
	}
	.museum_conter {
		text-align: center;
		span {
			display: block;
			margin-top: -90px;
			font-size: 14px;
    		color: #454545;
		}
	}
`;
function ecology_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(ecology_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "game_title"
  }, t("Game Ecology")), /*#__PURE__*/react.createElement("div", {
    className: "game_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://ddz.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_1_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://tetris.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_2_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://snake.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_3_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://petcrush.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_4_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://guandan.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_5_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://mahjong.cryptoarena.io",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_6_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "game_flex"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://cryptoarena.io/game/100006",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_7_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://cryptoarena.io/game/100008",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: games_8_namespaceObject,
    alt: ""
  }))))));
}
/* harmony default export */ const ecology_main = (ecology_main_Main);
;// ./src/pages/ecology/index.jsx


function Ecology() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(ecology_main, null));
}
/* harmony default export */ const ecology = (Ecology);
;// ./src/assets/images/news/news_bg.png
const news_bg_namespaceObject = __webpack_require__.p + "7e20140c867567dc93db.png";
;// ./src/assets/images/news/fanhui.png
const fanhui_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAR5JREFUeAHtlDF2wjAMhmX3Au2EnaljR9s5ASehR2DsVo6Sjt06doOeAB8BJmdMNyYL6b0MPB7ENoQJ/sXOi/JJjn4L4KETeoJCGWNedVWtldb/bQh+KFZCGdgIKZeACBDjKhWfDT8EI+LUe79JfZMFr+t61oO7XHAWnMERsSHwhsA2F5yEO+c+e7DvK+6gQHIITG1bEPTrEjAMga1zaKxt4AqdrJwqfaelo80CbgCfsjPIIWu2IFwoce4F30QhxBKEeMYY+Z97KNTZhrLljk4wg7HgBwksW5ESNMa5ORQoObjatt0ppb6lEG/0OK+0hhDCH4wtS9Zki7JVc+KLRi6d4odG7QttP2jdpkZu8Twn4K+aTLbUhxUlG+fW3pf2QuycbrgvBO4AAAAASUVORK5CYII=";
;// ./src/assets/images/news/des.png
const des_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALVJREFUeAGtj70NwjAQhZ/5E2VGYAQGIEqyAWzACNChNJwbKGhCRQsTABPgSCkoYZOUSEgc584gxw18je/53jv7gF/Iiaa51suQp+WKHnBi5mCo7QpjzGOUpmcpizhJVFWW12DAUhlT25BSahdnWS367vYV0LjPUI7jE5hsiG7eHVxeQC3Tou7XvTewIBpI48LAfOVMt3QazczbtdZ7hF6YEUXWLOVBzAU8fAT6wNia5RuEf/EGRMs7JDI8JYUAAAAASUVORK5CYII=";
;// ./src/assets/images/news/gao1.png
const gao1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAM1JREFUeAGtk9ERwiAQRG8yFoAdYAXGDijBEiwhlmAF2oF2YjrADkgH2oHumUMxQmKIO/M+SJgHxwFRmzW4Ags0ZcaBu+ByRCYQhBzHyA4JiYdL3FNbsk5JzgOSLlxuBZRIVSGDMdFgCUoR2oImdMNLc3bylYL+EJbcaFqamUhySmrADtQ8ONFwW/2T4Avo2/sKl3NJrFSDLViAOVjJmHduupOVrORX5cunI1ITzKki/58fvSAVG0h0alLf4W7o82Fmxf2yi76U9O5Q9CweIxJN5OTja7UAAAAASUVORK5CYII=";
;// ./src/components/news/main.jsx













const news_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #FFFFFF;
	height: 100vh;
	.news_title {
		position: relative;
		text-align: center;
		color: #000;
    	font-weight: bold;
		padding: 10px 0;
		background: #F7F7F7;
		span {
			position: absolute;
    		left: 15px;
		}
		img {
			width: 18px;
			cursor: pointer;
		}
	}
	.news_banner_img {
		img {
			width: 100%;
		}
	}
	.news_conter {
		position: absolute;
		width: 100%;
		max-width: 500px;
		height: 30vh;
		margin-top: -30px;
		background: #FFFFFF;
		border-radius: 20px 20px 0 0;
		padding: 20px 15px;
		z-index: 9;
	}
	.news_con_title {
		font-size: 20px;
		margin-bottom: 10px;
	}
	.news_con_new {
		display: inline-block;
		background: #000000;
		color: #FDD14E;
		font-size: 12px;
		border-radius: 5px;
		padding: 2px 5px;
		margin-bottom: 10px;
	}
	.news_list_conter {
		padding-bottom: 15px;
		margin-bottom: 15px;
		border-bottom: 1px solid #F0F0F0;
		cursor: pointer;
	}
	.news_des_time {
		display: flex;
    	justify-content: space-between;
		em {
			display: flex;
			align-items: center;
			font-size: 13px;
			color: #454545;
		}
		i {
			display: block;
			font-size: 13px;
			color: #000;
		}
	}
	.news_des_title {
		display: flex;
    	align-items: center;
		margin-top: 5px;
		span {
			font-size: 13px;
			margin-left: 10px;
		}
	}
`;
function news_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [loading, setLoading] = (0,react.useState)(true);
  const [newsList, setNewsList] = (0,react.useState)([]);
  const handleLink = link => {
    navigate(link);
    window.scrollTo(0, 0);
  };
  const goBack = () => {
    navigate(-1); // 返回上一页
  };
  const handleChange = async () => {
    setLoading(true);
    let lang;
    if ((i18n == null ? void 0 : i18n.language) === "zhCN" || (i18n == null ? void 0 : i18n.language) === "zhTW") {
      lang = "zh";
    } else {
      lang = "en";
    }
    http.get(`${axiosUrl}/common/notice/page?lang=` + lang).then(function (res) {
      if (res.code === 0) {
        var _res$data;
        const data = (_res$data = res.data) == null ? void 0 : _res$data.list;
        setNewsList(data);
        setLoading(false);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    handleChange();
  }, [i18n == null ? void 0 : i18n.language]);
  return /*#__PURE__*/react.createElement(news_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "news_title"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: goBack
  }, /*#__PURE__*/react.createElement("img", {
    src: fanhui_namespaceObject,
    alt: ""
  })), t("Announcement")), /*#__PURE__*/react.createElement("div", {
    className: "news_banner_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: news_bg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "news_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "news_con_title"
  }, t("New Announcement")), /*#__PURE__*/react.createElement("div", {
    className: "news_con_new"
  }, "New"), !loading ? /*#__PURE__*/react.createElement("div", null, newsList.length > 0 ? newsList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "news_list_conter",
    onClick: () => {
      handleLink("/newsDetails/" + item.id);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "news_des_time"
  }, /*#__PURE__*/react.createElement("em", null, formatTimestamp(item.createTime, "YYYY-MM-DD HH:mm")), /*#__PURE__*/react.createElement("em", null, t("Details"), /*#__PURE__*/react.createElement("img", {
    src: des_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "news_des_title"
  }, /*#__PURE__*/react.createElement("img", {
    src: gao1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, item.title)))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, null))) : /*#__PURE__*/react.createElement("div", {
    className: "load_conter"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 48,
        color: "#FBBD15"
      },
      spin: true
    })
  }))));
}
/* harmony default export */ const news_main = (news_main_Main);
;// ./src/pages/news/index.jsx


function News() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(news_main, null));
}
/* harmony default export */ const news = (News);
;// ./src/assets/images/news/des_bg.png
const des_bg_namespaceObject = __webpack_require__.p + "e19a5bd3ae82d5071863.png";
;// ./src/components/newsDetails/main.jsx









const newsDetails_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	padding: 0 15px;
	.news_back {
		padding: 10px 0px;
		img {
			cursor: pointer;
		}
	}
	.news_title {
		span {
		    display: block;
			font-size: 18px;
			font-weight: bold;
		}
		em {
			display: block;
			font-size: 13px;
			color: #454545;
			margin: 5px 0;
		}
	}
	.news_banner {
		img {
			width: 100%;
		}
	}
	.news_des_conter {
    	padding-bottom: 50px;
		span {
		    display: block;
			font-size: 14px;
		}
		p {
			font-size: 14px;
		}
	}
`;
function newsDetails_main_Main() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    id
  } = (0,react_router_dist/* useParams */.g)();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [newsDetails, setNewsDetails] = (0,react.useState)({});
  const goBack = () => {
    navigate(-1); // 返回上一页
  };

  // 公告详情
  const handleNewsDetails = async () => {
    let lang;
    if ((i18n == null ? void 0 : i18n.language) === "zhCN" || (i18n == null ? void 0 : i18n.language) === "zhTW") {
      lang = "zh";
    } else {
      lang = "en";
    }
    http.get(`${axiosUrl}/common/notice/detail?id=${id}&lang=${lang}`).then(function (res) {
      if (res.code === 0) {
        const data = res.data;
        setNewsDetails(data);
      }
    }).catch(function (error) {
      console.log("error===>", error);
    });
  };
  (0,react.useEffect)(() => {
    // 公告详情
    handleNewsDetails();
  }, [i18n == null ? void 0 : i18n.language]);
  return /*#__PURE__*/react.createElement(newsDetails_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "news_back",
    onClick: goBack
  }, /*#__PURE__*/react.createElement("img", {
    src: fanhui_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "news_title"
  }, /*#__PURE__*/react.createElement("span", null, newsDetails == null ? void 0 : newsDetails.title), /*#__PURE__*/react.createElement("em", null, formatTimestamp(newsDetails == null ? void 0 : newsDetails.createTime, "YYYY-MM-DD HH:mm"))), /*#__PURE__*/react.createElement("div", {
    className: "news_banner"
  }, /*#__PURE__*/react.createElement("img", {
    src: des_bg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "news_des_conter",
    dangerouslySetInnerHTML: {
      __html: newsDetails == null ? void 0 : newsDetails.content
    }
  }));
}
/* harmony default export */ const newsDetails_main = (newsDetails_main_Main);
;// ./src/pages/newsDetails/index.jsx


function NewsDetails() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(newsDetails_main, null));
}
/* harmony default export */ const newsDetails = (NewsDetails);
;// ./src/pages/app.jsx




















const metaMaskConnector = new metaMask/* MetaMaskConnector */.j({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */.s({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const app_client = (0,wagmi_dist/* createClient */.UU)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  const [ready, setReady] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.qZ, {
    client: app_client,
    className: `${"Index"}`
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(LayoutProvider, null, /*#__PURE__*/react.createElement(ManagementProvider, null, /*#__PURE__*/react.createElement(StakingProvider, null, /*#__PURE__*/react.createElement(dist/* HashRouter */.I9, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(footer, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/hashrate",
    element: /*#__PURE__*/react.createElement(pages_Hashrate, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/team",
    element: /*#__PURE__*/react.createElement(team, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/dividend",
    element: /*#__PURE__*/react.createElement(dividend, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/ecology",
    element: /*#__PURE__*/react.createElement(ecology, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/news",
    element: /*#__PURE__*/react.createElement(news, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/newsDetails/:id",
    element: /*#__PURE__*/react.createElement(newsDetails, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))))))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(16033);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(7566);
;// ./src/index.jsx





if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n);
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ },

/***/ 47790
() {

/* (ignored) */

/***/ },

/***/ 42038
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Select Language":"Select Language","Home":"Home","Power":"Power","Dividend":"Dividend","Team":"Team","Ecology":"Ecology","Coming Soon":"Coming Soon","Partner":"Partner","Follow us":"Follow us","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.","SwarmFi Node Recruitment":"SwarmFi Node Recruitment","Starter":"Starter","Advanced":"Advanced","Premium":"Premium","Supreme":"Supreme","Subscription Amount":"Subscription Amount","Contribution value":"Contribution value","Approve":"Approve","SwarmFi Node Benefits":"SwarmFi Node Benefits","Node Gift":"Node Gift","Enable Multi-Channel Earnings:":"Enable Multi-Channel Earnings:","50% Deposit":"50% Deposit","Value-Added Earnings":"Value-Added Earnings","Stable Compound Growth:":"Stable Compound Growth:","+1.5% Per Period":"+1.5% Per Period","Planet Storm":"Planet Storm","Dual-Track Ecosystem Incentives:":"Dual-Track Ecosystem Incentives:","Withdrawal Fee":"Withdrawal Fee","Fee Rebate Dividends:":"Fee Rebate Dividends:","After-Tax Net Profit":"Individual income tax payment","Compliant Tax Optimization:":"Compliant Tax Optimization:","Minimum 3,000U, 10% x 15%":"Minimum 3,000U, 10% x 15%","Profit Tax":"Profit Tax","After-Tax Income Redistribution:":"After-Tax Income Redistribution:","Buy Slippage":"Buy Slippage","Trading Friction Earnings:":"Trading Friction Earnings:","Sell Slippage":"Sell Slippage","Liquidity Provision Rewards:":"Liquidity Provision Rewards:","My SwarmFi Node":"My SwarmFi Node","Tier":"Tier","Node ID":"Node ID","Game Ecology":"Game Ecology","Mint":"Mint","Bind":"Bind","Recommended address":"Recommended address","Referral wallet address":"Referral wallet address","Bind successful":"Bind successful","Confirm":"Confirm","Invalid referrer wallet address format":"Invalid referrer wallet address format","Incorrect binding address":"Incorrect binding address","Please bind the inviter first to make a purchase":"Please bind the inviter first to make a purchase","Insufficient Balance":"Insufficient Balance","Mint successful":"Mint successful","Dividend value":"Dividend value","Team Information":"Team Information","Team count":"Team count","Direct count":"Direct count","Team Performance":"Regional Performance","Team Incentives":"Team Incentives","My superior":"My superior","My invitation link":"My invitation link","Recommended List":"Recommended List","Reward Details":"Reward Details","Wallet address":"Wallet address","Performance":"Personal Holdings","Source address":"Source address","Date":"Date","Copy successful":"Copy successful","Quantity":"Quantity","Total Team Performance":"Total Team Performance","Node Performance":"Node Performance","Announcement":"Announcement","BeeFI Good News Announcement":"BeeFI Good News Announcement","BeeFI Node Internal Ranking Event is Now Open!":"BeeFI Node Internal Ranking Event is Now Open!","Limited dividend points released simultaneously. First come, first served!":"Limited dividend points released simultaneously. First come, first served!","Internal Ranking Period: March 13 - March 16":"Internal Ranking Period: March 13 - March 16","Official Recharge: Starts at 9:58 on March 16":"Official Recharge: Starts at 9:58 on March 16","Node Rewards":"Node Rewards","500U Node: 5 Nodes + 2 Dividend Points":"500U Node: 5 Nodes + 2 Dividend Points","1000U Node: 10 Nodes + 5 Dividend Points":"1000U Node: 10 Nodes + 5 Dividend Points","Please contact your referrer in advance to secure your internal ranking eligibility.":"Please contact your referrer in advance to secure your internal ranking eligibility.","Join the flash sale at 9:58 on March 16!":"Join the flash sale at 9:58 on March 16!","New Announcement":"New Announcement","Details":"Details","My Assets":"My Assets","Passive Income":"Static Income","Active Income":"Dynamic Income","Participate in Wealth Management":"Participate in Management","Wealth Management Amount":"Management Amount","All":"All","Balance":"Balance:","Wealth Management":"Management","Sell":"Sell","Sell Amount":"Sell Amount","Current Price":"Current Price","Receive":"Receive","Ecosystem Account":"Ecosystem Account","Swap":"Swap","Swap Amount":"Swap Amount","Swap Ratio":"Swap Ratio","Staked Amount":"Staked Amount","Staked Principal":"Staked Principal:","Daily Interest Rate":"Daily Interest Rate:","Start Time":"Start Time:","Countdown":"Countdown:","Claim":"Claim","Progress":"Progress","Ended":"Ended","Enter the financial amount":"Enter the financial amount","Max":"Max","Account balance":"Account balance","My Management":"My Management","The investment amount must be a multiple of 100":"The investment amount must be a multiple of 100","Successful participation":"Successful participation","Claimed successfully":"Claimed successfully","Current cycle":"Current cycle","Cycle days":"Cycle days","Periodic interest":"Periodic interest","Cumulative days":"Cumulative days","Accumulated interest":"Accumulated interest","Period":"Period","Day":"Day","Cyclic rate":"Cyclic rate","Claim cycle":"Claim cycle","Claim income":"Claim income","Staking":"Staking","Staking time":"Staking time","Cycle start time":"Cycle start time","Cycle countdown":"Cycle countdown","Enter the selling amount":"Enter the selling amount","Sell successful":"Sell successful","Claimed":"Claimed","Cumulative":"Cumulative","My Staking":"My Staking","My principal":"My principal","The amount exceeds the range":"The amount exceeds the range","Order Number":"Order Number","Amount":"Amount","Start Times":"Start Time","Expiration time":"Expiration time","Daily interest":"Daily interest","Generate income":"Generate income","Monthly interest":"Monthly interest","Price":"Price","Claimeds":"Claimed","Claim principal+income":"Claim principal+income","Pledge amount":"Pledge amount","Countdown to claim":"Countdown to claim","Not claimed":"Not claimed","Collection successful, expected to arrive in 1-2 minutes":"Collection successful, expected to arrive in 1-2 minutes","No unclaimed income":"No unclaimed income","Team Performances":"Team Performance","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 58062
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Ikonekta ang Wallet","Select Language":"Pumili ng Wika","Home":"Home","Power":"Kakayahan","Dividend":"Dividendo","Team":"Team","Ecology":"Ekolohiya","Coming Soon":"Darating Na","Partner":"Kasosyo","Follow us":"I-follow kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Ang SwarmFi Protocol ay isang desentralisadong imprastraktura sa pananalapi na nakatuon sa pagbabago ng Real World Assets (RWA) sa pamantayan, mapapatunayan, at likidong on-chain na mga asset.","SwarmFi Node Recruitment":"Pangangalap ng SwarmFi Node","Starter":"Starter","Advanced":"Advanced","Premium":"Premium","Supreme":"Supreme","Subscription Amount":"Halaga ng Subskripsyon","Contribution value":"Halaga ng Kontribusyon","Approve":"Aprubahan","SwarmFi Node Benefits":"Mga Benepisyo ng SwarmFi Node","Node Gift":"Regalo ng Node","Enable Multi-Channel Earnings:":"Paganahin ang Multi-Channel na Kita:","50% Deposit":"50% Deposito","Value-Added Earnings":"Kita na may Idinagdag na Halaga","Stable Compound Growth:":"Matatag na Paglago ng Compound:","+1.5% Per Period":"+1.5% Bawat Panahon","Planet Storm":"Planet Storm","Dual-Track Ecosystem Incentives:":"Dalawahan na Insentibo ng Ekolohiya:","Withdrawal Fee":"Bayad sa Pag-withdraw","Fee Rebate Dividends:":"Dividendo sa Rebate ng Bayad:","After-Tax Net Profit":"Pagbabayad ng Buwis sa Personal na Kita","Compliant Tax Optimization:":"Pagsunod sa Pag-optimize ng Buwis:","Minimum 3,000U, 10% x 15%":"Minimum na 3,000U, 10% x 15%","Profit Tax":"Buwis sa Kita","After-Tax Income Redistribution:":"Muling Pamamahagi ng Kita Pagkatapos ng Buwis:","Buy Slippage":"Buy Slippage","Trading Friction Earnings:":"Kita sa Friction ng Trading:","Sell Slippage":"Sell Slippage","Liquidity Provision Rewards:":"Gantimpala sa Pagbibigay ng Liquidity:","My SwarmFi Node":"Aking SwarmFi Node","Tier":"Antas","Node ID":"ID ng Node","Game Ecology":"Ekolohiya ng Laro","Mint":"Bumili","Bind":"Itali","Recommended address":"Inirerekomendang address","Referral wallet address":"Pakilagay ang wallet address ng referrer","Bind successful":"Matagumpay na natakda","Confirm":"Kumpirmahin","Invalid referrer wallet address format":"Di-wasto ang format ng wallet address ng referrer","Incorrect binding address":"Mali ang address na itinakda","Please bind the inviter first to make a purchase":"Pakitali muna ang nag-imbita bago bumili","Insufficient Balance":"Hindi Sapat ang Balanse","Mint successful":"Matagumpay na nakabili","Dividend value":"Halaga ng Dividendo","Team Information":"Impormasyon ng Team","Team count":"Kabuuang bilang ng team","Direct count":"Bilang ng direktang rekomendasyon","Team Performance":"Pagganap ng Rehiyon","Team Incentives":"Mga Insentibo ng Team","My superior":"Aking superyor","My invitation link":"Aking link ng imbitasyon","Recommended List":"Listahan ng Rekomendasyon","Reward Details":"Mga Detalye ng Gantimpala","Wallet address":"Wallet address","Performance":"Personal na Paghawak","Source address":"Pinagmulang address","Date":"Petsa","Copy successful":"Matagumpay na nakopya","Quantity":"Dami","Total Team Performance":"Kabuuang Pagganap ng Koponan","Node Performance":"Pagganap ng Node","Announcement":"Anunsyo","BeeFI Good News Announcement":"Anunsyo ng Magandang Balita ng BeeFI","BeeFI Node Internal Ranking Event is Now Open!":"Bukas na ang BeeFI Node Internal Ranking Event!","Limited dividend points released simultaneously. First come, first served!":"Sabay-sabay na inilabas ang limitadong dividend points. Mauna ka na!","Internal Ranking Period: March 13 - March 16":"Panahon ng Internal Ranking: Marso 13 - Marso 16","Official Recharge: Starts at 9:58 on March 16":"Opisyal na Recharge: Magsisimula sa 9:58 ng Marso 16","Node Rewards":"Mga Gantimpala sa Node","500U Node: 5 Nodes + 2 Dividend Points":"500U Node: 5 Node + 2 Dividend Points","1000U Node: 10 Nodes + 5 Dividend Points":"1000U Node: 10 Node + 5 Dividend Points","Please contact your referrer in advance to secure your internal ranking eligibility.":"Mangyaring makipag-ugnayan sa iyong referrer nang maaga upang makuha ang iyong internal ranking eligibility.","Join the flash sale at 9:58 on March 16!":"Sumali sa flash sale sa 9:58 ng Marso 16!","New Announcement":"Bagong Anunsyo","Details":"Mga Detalye","My Assets":"Aking Mga Asset","Passive Income":"Passive na Kita","Active Income":"Aktibong Kita","Participate in Wealth Management":"Makilahok sa Pamamahala ng Yaman","Wealth Management Amount":"Halaga ng Pamamahala ng Yaman","All":"Lahat","Balance":"Balans:","Wealth Management":"Pamamahala ng Yaman","Sell":"Ibenta","Sell Amount":"Halaga ng Ibebenta","Current Price":"Kasalukuyang Presyo","Receive":"Matatanggap","Ecosystem Account":"Account ng Ecosystem","Swap":"Magpalit","Swap Amount":"Halaga ng Pagpapalit","Swap Ratio":"Ratio ng Pagpapalit","Staked Amount":"Halaga ng Naka-stake","Staked Principal":"Principal na Naka-stake:","Daily Interest Rate":"Araw-araw na Interest Rate:","Start Time":"Oras ng Pagsisimula:","Countdown":"Countdown:","Claim":"I-claim","Progress":"Isinasagawa","Ended":"Tapos na","Enter the financial amount":"Ilagay ang halaga ng pamumuhunan","Max":"Pinakamataas","Account balance":"Balansye ng account","My Management":"Aking pamumuhunan","The investment amount must be a multiple of 100":"Ang halaga ng pamumuhunan ay dapat na multiple ng 100","Successful participation":"Matagumpay na pakikilahok","Claimed successfully":"Matagumpay na na-claim","Current cycle":"Kasalukuyang cycle","Cycle days":"Mga araw ng cycle","Periodic interest":"Interes ng cycle","Cumulative days":"Naipon na araw","Accumulated interest":"Naipon na interes","Period":"Panahon","Day":"Araw","Cyclic rate":"Rate ng cycle","Claim cycle":"Cycle ng pag-claim","Claim income":"I-claim ang kita","Staking":"Staking","Staking time":"Oras ng staking","Cycle start time":"Oras ng pagsisimula ng cycle","Cycle countdown":"Countdown ng cycle","Enter the selling amount":"Ilagay ang halaga ng ibebenta","Sell successful":"Matagumpay na naibenta","Claimed":"Na-claim na","Cumulative":"Naipon","My Staking":"Aking staking","My principal":"Aking principal","The amount exceeds the range":"Lumalampas ang halaga sa saklaw","Order Number":"Numero ng Order","Amount":"Halaga","Start Times":"Oras ng Pagsisimula","Expiration time":"Oras ng pag-expire","Daily interest":"Araw-araw na interes","Generate income":"Makabuo ng kita","Monthly interest":"Buwanang interes","Price":"Presyo","Claimeds":"Na-claim na","Claim principal+income":"I-claim ang principal + kita","Pledge amount":"Halaga ng staking","Countdown to claim":"Countdown bago mag-claim","Not claimed":"Hindi pa na-claim","Collection successful, expected to arrive in 1-2 minutes":"Matagumpay ang pag-claim, inaasahang darating sa loob ng 1-2 minuto","No unclaimed income":"Walang hindi pa na-claim na kita","Team Performances":"Pagganap ng Koponan","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 7352
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Hubungkan Dompet","Select Language":"Pilih Bahasa","Home":"Beranda","Power":"Daya","Dividend":"Dividen","Team":"Tim","Ecology":"Ekologi","Coming Soon":"Segera Hadir","Partner":"Mitra","Follow us":"Ikuti Kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Protokol SwarmFi adalah infrastruktur keuangan terdesentralisasi yang fokus pada mengubah Aset Dunia Nyata (RWA) menjadi aset on-chain yang terstandarisasi, dapat diverifikasi, dan likuid.","SwarmFi Node Recruitment":"Rekrutmen Node SwarmFi","Starter":"Pemula","Advanced":"Lanjutan","Premium":"Premium","Supreme":"Agung","Subscription Amount":"Jumlah Langganan","Contribution value":"Nilai Kontribusi","Approve":"Setujui","SwarmFi Node Benefits":"Manfaat Node SwarmFi","Node Gift":"Hadiah Node","Enable Multi-Channel Earnings:":"Aktifkan Pendapatan Multi-Saluran:","50% Deposit":"Deposit 50%","Value-Added Earnings":"Pendapatan Nilai Tambah","Stable Compound Growth:":"Pertumbuhan Majemuk Stabil:","+1.5% Per Period":"+1.5% Per Periode","Planet Storm":"Badai Planet","Dual-Track Ecosystem Incentives:":"Insentif Ekologi Jalur Ganda:","Withdrawal Fee":"Biaya Penarikan","Fee Rebate Dividends:":"Dividen Pengembalian Biaya:","After-Tax Net Profit":"Pembayaran Pajak Penghasilan","Compliant Tax Optimization:":"Optimalisasi Pajak yang Patuh:","Minimum 3,000U, 10% x 15%":"Minimum 3.000U, 10% x 15%","Profit Tax":"Pajak Keuntungan","After-Tax Income Redistribution:":"Redistribusi Pendapatan Setelah Pajak:","Buy Slippage":"Slippage Beli","Trading Friction Earnings:":"Pendapatan Gesekan Perdagangan:","Sell Slippage":"Slippage Jual","Liquidity Provision Rewards:":"Hadiah Penyediaan Likuiditas:","My SwarmFi Node":"Node SwarmFi Saya","Tier":"Tingkat","Node ID":"ID Node","Game Ecology":"Ekologi Game","Mint":"Beli Cepat","Bind":"Ikat","Recommended address":"Alamat yang Direkomendasikan","Referral wallet address":"Masukkan alamat dompet perujuk","Bind successful":"Pengikatan berhasil","Confirm":"Konfirmasi","Invalid referrer wallet address format":"Format alamat dompet perujuk tidak valid","Incorrect binding address":"Alamat pengikatan salah","Please bind the inviter first to make a purchase":"Harap ikat pengundang terlebih dahulu untuk melakukan pembelian","Insufficient Balance":"Saldo Tidak Mencukupi","Mint successful":"Pembelian berhasil","Dividend value":"Nilai Dividen","Team Information":"Informasi Tim","Team count":"Jumlah Tim","Direct count":"Jumlah Rujukan Langsung","Team Performance":"Kinerja Wilayah","Team Incentives":"Insentif Tim","My superior":"Atasan Saya","My invitation link":"Tautan Undangan Saya","Recommended List":"Daftar yang Direkomendasikan","Reward Details":"Rincian Hadiah","Wallet address":"Alamat Dompet","Performance":"Kepemilikan Pribadi","Source address":"Alamat Sumber","Date":"Tanggal","Copy successful":"Salinan berhasil","Quantity":"Kuantitas","Total Team Performance":"Total Kinerja Tim","Node Performance":"Kinerja Node","Announcement":"Pengumuman","BeeFI Good News Announcement":"Pengumuman Kabar Baik BeeFI","BeeFI Node Internal Ranking Event is Now Open!":"Acara Peringkat Internal Node BeeFI Kini Dibuka!","Limited dividend points released simultaneously. First come, first served!":"Poin dividen terbatas dirilis secara bersamaan. Cepat dapatkan, siapa cepat dia dapat!","Internal Ranking Period: March 13 - March 16":"Periode Peringkat Internal: 13 Maret - 16 Maret","Official Recharge: Starts at 9:58 on March 16":"Isi Ulang Resmi: Dimulai pukul 9:58 pada 16 Maret","Node Rewards":"Hadiah Node","500U Node: 5 Nodes + 2 Dividend Points":"Node 500U: 5 Node + 2 Poin Dividen","1000U Node: 10 Nodes + 5 Dividend Points":"Node 1000U: 10 Node + 5 Poin Dividen","Please contact your referrer in advance to secure your internal ranking eligibility.":"Harap hubungi perujuk Anda terlebih dahulu untuk mengamankan kelayakan peringkat internal Anda.","Join the flash sale at 9:58 on March 16!":"Ikuti penjualan cepat pada pukul 9:58, 16 Maret!","New Announcement":"Pengumuman Terbaru","Details":"Detail","My Assets":"Aset Saya","Passive Income":"Pendapatan Pasif","Active Income":"Pendapatan Aktif","Participate in Wealth Management":"Ikut Serta Pengelolaan Kekayaan","Wealth Management Amount":"Jumlah Pengelolaan Kekayaan","All":"Semua","Balance":"Saldo:","Wealth Management":"Pengelolaan Kekayaan","Sell":"Jual","Sell Amount":"Jumlah Penjualan","Current Price":"Harga Saat Ini","Receive":"Terima","Ecosystem Account":"Akun Ekosistem","Swap":"Tukar","Swap Amount":"Jumlah Penukaran","Swap Ratio":"Rasio Penukaran","Staked Amount":"Jumlah Staking","Staked Principal":"Pokok Staking:","Daily Interest Rate":"Suku Bunga Harian:","Start Time":"Waktu Mulai:","Countdown":"Hitung Mundur:","Claim":"Klaim","Progress":"Berlangsung","Ended":"Selesai","Enter the financial amount":"Masukkan jumlah investasi","Max":"Maks","Account balance":"Saldo akun","My Management":"Investasi Saya","The investment amount must be a multiple of 100":"Jumlah investasi harus kelipatan 100","Successful participation":"Partisipasi berhasil","Claimed successfully":"Klaim berhasil","Current cycle":"Siklus saat ini","Cycle days":"Hari siklus","Periodic interest":"Bunga periode","Cumulative days":"Hari kumulatif","Accumulated interest":"Bunga terakumulasi","Period":"Periode","Day":"Hari","Cyclic rate":"Tingkat siklus","Claim cycle":"Siklus klaim","Claim income":"Klaim pendapatan","Staking":"Staking","Staking time":"Waktu staking","Cycle start time":"Waktu mulai siklus","Cycle countdown":"Countdown siklus","Enter the selling amount":"Masukkan jumlah penjualan","Sell successful":"Penjualan berhasil","Claimed":"Diklaim","Cumulative":"Kumulatif","My Staking":"Staking Saya","My principal":"Pokok saya","The amount exceeds the range":"Jumlah melebihi batas","Order Number":"Nomor Pesanan","Amount":"Jumlah","Start Times":"Waktu Mulai","Expiration time":"Waktu kedaluwarsa","Daily interest":"Bunga harian","Generate income":"Hasilkan pendapatan","Monthly interest":"Bunga bulanan","Price":"Harga","Claimeds":"Telah diklaim","Claim principal+income":"Klaim pokok + pendapatan","Pledge amount":"Jumlah jaminan","Countdown to claim":"Countdown klaim","Not claimed":"Belum diklaim","Collection successful, expected to arrive in 1-2 minutes":"Klaim berhasil, diharapkan tiba dalam 1-2 menit","No unclaimed income":"Tidak ada pendapatan yang belum diklaim","Team Performances":"Kinerja Tim","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 34175
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"ウォレット接続","Select Language":"言語選択","Home":"ホーム","Power":"計算力","Dividend":"配当","Team":"チーム","Ecology":"エコシステム","Coming Soon":"近日公開","Partner":"パートナー","Follow us":"フォローする","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFiプロトコルは、現実世界の資産（RWA）を標準化、検証可能、かつ流動性の高いオンチェーン資産に変換することに特化した分散型金融インフラです。","SwarmFi Node Recruitment":"SwarmFiノード募集","Starter":"スターター","Advanced":"アドバンスド","Premium":"プレミアム","Supreme":"スプリーム","Subscription Amount":"申込金額","Contribution value":"貢献価値","Approve":"承認","SwarmFi Node Benefits":"SwarmFiノードの利点","Node Gift":"ノード特典","Enable Multi-Channel Earnings:":"マルチチャンネル収益の有効化：","50% Deposit":"50%入金","Value-Added Earnings":"付加価値収益","Stable Compound Growth:":"安定した複利成長：","+1.5% Per Period":"毎期+1.5%","Planet Storm":"プラネットストーム","Dual-Track Ecosystem Incentives:":"エコシステムインセンティブの二重構造：","Withdrawal Fee":"出金手数料","Fee Rebate Dividends:":"手数料還元配当：","After-Tax Net Profit":"个人所得税の納付","Compliant Tax Optimization:":"準拠した税務最適化：","Minimum 3,000U, 10% x 15%":"最低3,000U、10% x 15%","Profit Tax":"利益税","After-Tax Income Redistribution:":"税後所得の再分配：","Buy Slippage":"買いスリッページ","Trading Friction Earnings:":"取引摩擦収益：","Sell Slippage":"売りスリッページ","Liquidity Provision Rewards:":"流動性提供報酬：","My SwarmFi Node":"マイSwarmFiノード","Tier":"レベル","Node ID":"ノードID","Game Ecology":"ゲームエコシステム","Mint":"購入","Bind":"バインド","Recommended address":"紹介アドレス","Referral wallet address":"紹介者のウォレットアドレスを入力してください","Bind successful":"バインド成功","Confirm":"確認","Invalid referrer wallet address format":"紹介者のウォレットアドレスの形式が正しくありません","Incorrect binding address":"バインドアドレスが正しくありません","Please bind the inviter first to make a purchase":"購入するにはまず招待者をバインドしてください","Insufficient Balance":"残高不足","Mint successful":"購入成功","Dividend value":"配当価値","Team Information":"チーム情報","Team count":"チーム総人数","Direct count":"直接紹介者数","Team Performance":"エリア業績","Team Incentives":"チームインセンティブ","My superior":"私の上位者","My invitation link":"招待リンク","Recommended List":"紹介リスト","Reward Details":"報酬明細","Wallet address":"ウォレットアドレス","Performance":"個人保有","Source address":"ソースアドレス","Date":"日付","Copy successful":"コピー成功","Quantity":"数量","Total Team Performance":"チーム総業績","Node Performance":"ノード業績","Announcement":"お知らせ","BeeFI Good News Announcement":"BeeFI嬉しいお知らせ","BeeFI Node Internal Ranking Event is Now Open!":"BeeFIノード内部ランキングイベント開催中！","Limited dividend points released simultaneously. First come, first served!":"限定配当ポイントも同時リリース。数に限りがございますのでお早めに！","Internal Ranking Period: March 13 - March 16":"内部ランキング期間：3月13日〜3月16日","Official Recharge: Starts at 9:58 on March 16":"正式チャージ：3月16日 9:58 開始","Node Rewards":"ノード特典","500U Node: 5 Nodes + 2 Dividend Points":"500Uノード：ノード5個 + 配当ポイント2個","1000U Node: 10 Nodes + 5 Dividend Points":"1000Uノード：ノード10個 + 配当ポイント5個","Please contact your referrer in advance to secure your internal ranking eligibility.":"内部ランキング参加資格確保のため、事前に紹介者へご連絡ください。","Join the flash sale at 9:58 on March 16!":"3月16日 9:58 のタイムセールにぜひご参加ください！","New Announcement":"最新のお知らせ","Details":"詳細","My Assets":"私の資産","Passive Income":"静的収益","Active Income":"動的収益","Participate in Wealth Management":"資産運用に参加","Wealth Management Amount":"資産運用金額","All":"すべて","Balance":"残高：","Wealth Management":"資産運用","Sell":"売却","Sell Amount":"売却金額","Current Price":"現在の価格","Receive":"獲得","Ecosystem Account":"エコシステムアカウント","Swap":"交換","Swap Amount":"交換数量","Swap Ratio":"交換比率","Staked Amount":"ステーキング数量","Staked Principal":"ステーキング元本：","Daily Interest Rate":"日次利率：","Start Time":"開始時間：","Countdown":"カウントダウン：","Claim":"受け取る","Progress":"進行中","Ended":"終了","Enter the financial amount":"運用金額を入力してください","Max":"最大","Account balance":"アカウント残高","My Management":"私の運用","The investment amount must be a multiple of 100":"運用金額は100の倍数である必要があります","Successful participation":"参加成功","Claimed successfully":"受取成功","Current cycle":"現在のサイクル","Cycle days":"サイクル日数","Periodic interest":"サイクル利息","Cumulative days":"累計日数","Accumulated interest":"累計利息","Period":"期","Day":"日","Cyclic rate":"サイクル利率","Claim cycle":"受取サイクル","Claim income":"収益を受け取る","Staking":"ステーキング","Staking time":"ステーキング時間","Cycle start time":"サイクル開始時間","Cycle countdown":"サイクルカウントダウン","Enter the selling amount":"売却金額を入力してください","Sell successful":"売却成功","Claimed":"受取済み","Cumulative":"累計","My Staking":"私のステーキング","My principal":"私の元本","The amount exceeds the range":"金額が範囲を超えています","Order Number":"注文番号","Amount":"金額","Start Times":"開始時間","Expiration time":"有効期限","Daily interest":"日利","Generate income":"収益を生み出す","Monthly interest":"月利","Price":"価格","Claimeds":"受取済み","Claim principal+income":"元本+収益を受け取る","Pledge amount":"ステーキング金額","Countdown to claim":"受取までのカウントダウン","Not claimed":"未受取","Collection successful, expected to arrive in 1-2 minutes":"受取成功、1～2分で到着予定","No unclaimed income":"未受取の収益はありません","Team Performances":"チーム実績","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 56628
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"지갑 연결","Select Language":"언어 선택","Home":"홈","Power":"연산력","Dividend":"배당","Team":"팀","Ecology":"생태계","Coming Soon":"출시 예정","Partner":"파트너","Follow us":"팔로우하기","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi 프로토콜은 실물 자산(RWA)을 표준화되고 검증 가능하며 유동성 있는 온체인 자산으로 전환하는 데 초점을 맞춘 탈중앙화 금융 인프라입니다.","SwarmFi Node Recruitment":"SwarmFi 노드 모집","Starter":"스타터","Advanced":"어드밴스드","Premium":"프리미엄","Supreme":"슈프림","Subscription Amount":"청약 금액","Contribution value":"기여 가치","Approve":"승인","SwarmFi Node Benefits":"SwarmFi 노드 혜택","Node Gift":"노드 증정","Enable Multi-Channel Earnings:":"다중 채널 수익 활성화:","50% Deposit":"50% 입금","Value-Added Earnings":"부가가치 수익","Stable Compound Growth:":"안정적인 복리 성장:","+1.5% Per Period":"매 기간 +1.5%","Planet Storm":"플래닛 스톰","Dual-Track Ecosystem Incentives:":"생태계 인센티브 듀얼 트랙:","Withdrawal Fee":"출금 수수료","Fee Rebate Dividends:":"수수료 환급 배당:","After-Tax Net Profit":"개인소득세 납부","Compliant Tax Optimization:":"규정 준수 세금 최적화:","Minimum 3,000U, 10% x 15%":"최소 3,000U, 10% x 15%","Profit Tax":"이익 세금","After-Tax Income Redistribution:":"세후 소득 재분배:","Buy Slippage":"매수 슬리피지","Trading Friction Earnings:":"거래 마찰 수익:","Sell Slippage":"매도 슬리피지","Liquidity Provision Rewards:":"유동성 공급 보상:","My SwarmFi Node":"내 SwarmFi 노드","Tier":"등급","Node ID":"노드 ID","Game Ecology":"게임 생태계","Mint":"선착순 구매","Bind":"바인딩","Recommended address":"추천 주소","Referral wallet address":"추천인 지갑 주소를 입력하세요","Bind successful":"바인딩 성공","Confirm":"확인","Invalid referrer wallet address format":"추천인 지갑 주소 형식이 올바르지 않습니다","Incorrect binding address":"바인딩 주소가 올바르지 않습니다","Please bind the inviter first to make a purchase":"구매하려면 먼저 초대자를 바인딩하세요","Insufficient Balance":"잔액 부족","Mint successful":"구매 성공","Dividend value":"배당 가치","Team Information":"팀 정보","Team count":"팀 총 인원","Direct count":"직접 추천인 수","Team Performance":"지역 실적","Team Incentives":"팀 인센티브","My superior":"내 상위","My invitation link":"내 초대 링크","Recommended List":"추천 목록","Reward Details":"보상 내역","Wallet address":"지갑 주소","Performance":"개인 보유량","Source address":"소스 주소","Date":"날짜","Copy successful":"복사 성공","Quantity":"수량","Total Team Performance":"팀 전체 실적","Node Performance":"노드 실적","Announcement":"공지사항","BeeFI Good News Announcement":"BeeFI 희소식 공지","BeeFI Node Internal Ranking Event is Now Open!":"BeeFI 노드 내부 랭킹 이벤트가 지금 활발하게 시작됩니다!","Limited dividend points released simultaneously. First come, first served!":"한정된 배당 포인트가 동시에 공개됩니다. 선착순 마감!","Internal Ranking Period: March 13 - March 16":"내부 랭킹 기간: 3월 13일 - 3월 16일","Official Recharge: Starts at 9:58 on March 16":"공식 충전: 3월 16일 오전 9:58에 시작","Node Rewards":"노드 보상","500U Node: 5 Nodes + 2 Dividend Points":"500U 노드: 노드 5개 + 배당 포인트 2개","1000U Node: 10 Nodes + 5 Dividend Points":"1000U 노드: 노드 10개 + 배당 포인트 5개","Please contact your referrer in advance to secure your internal ranking eligibility.":"내부 랭킹 자격을 확보하려면 사전에 추천인에게 문의하시기 바랍니다.","Join the flash sale at 9:58 on March 16!":"3월 16일 오전 9:58에 진행되는 플래시 세일에 참여하세요!","New Announcement":"최신 공지사항","Details":"자세한 내용","My Assets":"내 자산","Passive Income":"정적 수익","Active Income":"동적 수익","Participate in Wealth Management":"자산 관리 참여","Wealth Management Amount":"자산 관리 금액","All":"전체","Balance":"잔액:","Wealth Management":"자산 관리","Sell":"매도","Sell Amount":"매도 금액","Current Price":"현재 가격","Receive":"획득","Ecosystem Account":"생태계 계정","Swap":"교환","Swap Amount":"교환 수량","Swap Ratio":"교환 비율","Staked Amount":"스테이킹 수량","Staked Principal":"스테이킹 원금:","Daily Interest Rate":"일일 이자율:","Start Time":"시작 시간:","Countdown":"카운트다운:","Claim":"수령","Progress":"진행 중","Ended":"종료됨","Enter the financial amount":"투자 금액 입력","Max":"최대","Account balance":"계좌 잔액","My Management":"나의 투자","The investment amount must be a multiple of 100":"투자 금액은 100의 배수여야 합니다","Successful participation":"참여 성공","Claimed successfully":"수령 성공","Current cycle":"현재 주기","Cycle days":"주기 일수","Periodic interest":"주기 이자","Cumulative days":"누적 일수","Accumulated interest":"누적 이자","Period":"기","Day":"일","Cyclic rate":"주기 이자율","Claim cycle":"수령 주기","Claim income":"수익 수령","Staking":"스테이킹","Staking time":"스테이킹 시간","Cycle start time":"주기 시작 시간","Cycle countdown":"주기 카운트다운","Enter the selling amount":"판매 금액 입력","Sell successful":"판매 성공","Claimed":"수령 완료","Cumulative":"누적","My Staking":"나의 스테이킹","My principal":"나의 원금","The amount exceeds the range":"금액이 범위를 초과했습니다","Order Number":"주문 번호","Amount":"금액","Start Times":"시작 시간","Expiration time":"만료 시간","Daily interest":"일일 이자","Generate income":"수익 창출","Monthly interest":"월 이자","Price":"가격","Claimeds":"수령 완료됨","Claim principal+income":"원금+수익 수령","Pledge amount":"스테이킹 금액","Countdown to claim":"수령까지 카운트다운","Not claimed":"미수령","Collection successful, expected to arrive in 1-2 minutes":"수령 성공, 1~2분 내 입금 예정","No unclaimed income":"미수령 수익이 없습니다","Team Performances":"팀 성과","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 33232
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Sambung Dompet","Select Language":"Pilih Bahasa","Home":"Laman Utama","Power":"Kuasa","Dividend":"Dividen","Team":"Pasukan","Ecology":"Ekologi","Coming Soon":"Akan Datang","Partner":"Rakan Kongsi","Follow us":"Ikuti Kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Protokol SwarmFi ialah infrastruktur kewangan terdesentralisasi yang memberi tumpuan kepada mengubah Aset Dunia Sebenar (RWA) kepada aset on-chain yang standard, boleh disahkan dan cair.","SwarmFi Node Recruitment":"Rekrutmen Nod SwarmFi","Starter":"Pemula","Advanced":"Lanjutan","Premium":"Premium","Supreme":"Agung","Subscription Amount":"Jumlah Langganan","Contribution value":"Nilai Sumbangan","Approve":"Luluskan","SwarmFi Node Benefits":"Faedah Nod SwarmFi","Node Gift":"Hadiah Nod","Enable Multi-Channel Earnings:":"Dayakan Pendapatan Berbilang Saluran:","50% Deposit":"Deposit 50%","Value-Added Earnings":"Pendapatan Nilai Tambah","Stable Compound Growth:":"Pertumbuhan Kompaun Stabil:","+1.5% Per Period":"+1.5% Setiap Tempoh","Planet Storm":"Ribut Planet","Dual-Track Ecosystem Incentives:":"Insentif Ekologi Dwi-Landasan:","Withdrawal Fee":"Yuran Pengeluaran","Fee Rebate Dividends:":"Dividen Bayaran Balik Yuran:","After-Tax Net Profit":"Cukai Pendapatan Individu","Compliant Tax Optimization:":"Pengoptimuman Cukai Patuh:","Minimum 3,000U, 10% x 15%":"Minimum 3,000U, 10% x 15%","Profit Tax":"Cukai Keuntungan","After-Tax Income Redistribution:":"Pengagihan Semula Pendapatan Selepas Cukai:","Buy Slippage":"Gelinciran Beli","Trading Friction Earnings:":"Pendapatan Geseran Perdagangan:","Sell Slippage":"Gelinciran Jual","Liquidity Provision Rewards:":"Ganjaran Penyediaan Kecairan:","My SwarmFi Node":"Nod SwarmFi Saya","Tier":"Tahap","Node ID":"ID Nod","Game Ecology":"Ekologi Permainan","Mint":"Beli Cepat","Bind":"Ikat","Recommended address":"Alamat yang Disyorkan","Referral wallet address":"Sila masukkan alamat dompet perujuk","Bind successful":"Pengikatan berjaya","Confirm":"Sahkan","Invalid referrer wallet address format":"Format alamat dompet perujuk tidak sah","Incorrect binding address":"Alamat pengikatan tidak betul","Please bind the inviter first to make a purchase":"Sila ikat penjemput terlebih dahulu untuk membuat pembelian","Insufficient Balance":"Baki Tidak Mencukupi","Mint successful":"Pembelian berjaya","Dividend value":"Nilai Dividen","Team Information":"Maklumat Pasukan","Team count":"Jumlah Pasukan","Direct count":"Jumlah Rujukan Langsung","Team Performance":"Prestasi Wilayah","Team Incentives":"Insentif Pasukan","My superior":"Atasan Saya","My invitation link":"Pautan Jemputan Saya","Recommended List":"Senarai Disyorkan","Reward Details":"Butiran Ganjaran","Wallet address":"Alamat Dompet","Performance":"Pegangan Peribadi","Source address":"Alamat Sumber","Date":"Tarikh","Copy successful":"Salinan berjaya","Quantity":"Kuantiti","Total Team Performance":"Jumlah Prestasi Pasukan","Node Performance":"Prestasi Nod","Announcement":"Pengumuman","BeeFI Good News Announcement":"Pengumuman Berita Baik BeeFI","BeeFI Node Internal Ranking Event is Now Open!":"Acara Ranking Dalaman Nod BeeFI Kini Dibuka!","Limited dividend points released simultaneously. First come, first served!":"Mata dividen terhad dikeluarkan serentak. Cepat dapatkan, siapa cepat dia dapat!","Internal Ranking Period: March 13 - March 16":"Tempoh Ranking Dalaman: 13 Mac - 16 Mac","Official Recharge: Starts at 9:58 on March 16":"Isi Ulang Rasmi: Bermula pada 9:58, 16 Mac","Node Rewards":"Ganjaran Nod","500U Node: 5 Nodes + 2 Dividend Points":"Nod 500U: 5 Nod + 2 Mata Dividen","1000U Node: 10 Nodes + 5 Dividend Points":"Nod 1000U: 10 Nod + 5 Mata Dividen","Please contact your referrer in advance to secure your internal ranking eligibility.":"Sila hubungi perujuk anda lebih awal untuk memastikan kelayakan ranking dalaman anda.","Join the flash sale at 9:58 on March 16!":"Sertai jualan cepat pada 9:58, 16 Mac!","New Announcement":"Pengumuman Terkini","Details":"Butiran","My Assets":"Aset Saya","Passive Income":"Pendapatan Pasif","Active Income":"Pendapatan Aktif","Participate in Wealth Management":"Sertai Pengurusan Kekayaan","Wealth Management Amount":"Jumlah Pengurusan Kekayaan","All":"Semua","Balance":"Baki:","Wealth Management":"Pengurusan Kekayaan","Sell":"Jual","Sell Amount":"Jumlah Jualan","Current Price":"Harga Semasa","Receive":"Terima","Ecosystem Account":"Akaun Ekosistem","Swap":"Tukar","Swap Amount":"Jumlah Pertukaran","Swap Ratio":"Nisbah Pertukaran","Staked Amount":"Jumlah Staking","Staked Principal":"Prinsipal Staking:","Daily Interest Rate":"Kadar Faedah Harian:","Start Time":"Masa Mula:","Countdown":"Kiraan Detik:","Claim":"Tuntut","Progress":"Sedang Berjalan","Ended":"Telah Tamat","Enter the financial amount":"Masukkan jumlah pelaburan","Max":"Maksimum","Account balance":"Baki akaun","My Management":"Pelaburan Saya","The investment amount must be a multiple of 100":"Jumlah pelaburan mestilah gandaan 100","Successful participation":"Penyertaan berjaya","Claimed successfully":"Tuntutan berjaya","Current cycle":"Kitaran semasa","Cycle days":"Hari kitaran","Periodic interest":"Faedah kitaran","Cumulative days":"Hari terkumpul","Accumulated interest":"Faedah terkumpul","Period":"Tempoh","Day":"Hari","Cyclic rate":"Kadar kitaran","Claim cycle":"Kitaran tuntutan","Claim income":"Tuntut pendapatan","Staking":"Staking","Staking time":"Masa staking","Cycle start time":"Masa mula kitaran","Cycle countdown":"Kiraan detik kitaran","Enter the selling amount":"Masukkan jumlah jualan","Sell successful":"Jualan berjaya","Claimed":"Dituntut","Cumulative":"Terkumpul","My Staking":"Staking Saya","My principal":"Prinsipal saya","The amount exceeds the range":"Jumlah melebihi had","Order Number":"Nombor Pesanan","Amount":"Jumlah","Start Times":"Masa Mula","Expiration time":"Masa tamat tempoh","Daily interest":"Faedah harian","Generate income":"Hasilkan pendapatan","Monthly interest":"Faedah bulanan","Price":"Harga","Claimeds":"Telah dituntut","Claim principal+income":"Tuntut prinsipal + pendapatan","Pledge amount":"Jumlah cagaran","Countdown to claim":"Kiraan detik untuk tuntutan","Not claimed":"Belum dituntut","Collection successful, expected to arrive in 1-2 minutes":"Tuntutan berjaya, dijangka tiba dalam 1-2 minit","No unclaimed income":"Tiada pendapatan yang belum dituntut","Team Performances":"Prestasi Pasukan","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 58150
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"เชื่อมต่อกระเป๋าเงิน","Select Language":"เลือกภาษา","Home":"หน้าหลัก","Power":"พลังคำนวณ","Dividend":"เงินปันผล","Team":"ทีม","Ecology":"ระบบนิเวศ","Coming Soon":"เร็วๆ นี้","Partner":"พันธมิตร","Follow us":"ติดตามเรา","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi Protocol คือโครงสร้างพื้นฐานทางการเงินแบบกระจายศูนย์ที่มุ่งเน้นการเปลี่ยนสินทรัพย์ในโลกจริง (RWA) ให้เป็นสินทรัพย์บนเชนที่ได้มาตรฐาน ตรวจสอบได้ และมีสภาพคล่อง","SwarmFi Node Recruitment":"การรับสมัครโหนด SwarmFi","Starter":"รุ่นเริ่มต้น","Advanced":"รุ่นขั้นสูง","Premium":"รุ่นพรีเมียม","Supreme":"รุ่นสูงสุด","Subscription Amount":"จำนวนเงินที่จองซื้อ","Contribution value":"มูลค่าการมีส่วนร่วม","Approve":"อนุมัติ","SwarmFi Node Benefits":"สิทธิประโยชน์ของโหนด SwarmFi","Node Gift":"ของขวัญโหนด","Enable Multi-Channel Earnings:":"เปิดรับรายได้หลายช่องทาง:","50% Deposit":"ฝาก 50%","Value-Added Earnings":"รายได้มูลค่าเพิ่ม","Stable Compound Growth:":"การเติบโตแบบทบต้นที่มั่นคง:","+1.5% Per Period":"+1.5% ต่อรอบ","Planet Storm":"พายุดาวเคราะห์","Dual-Track Ecosystem Incentives:":"แรงจูงใจระบบนิเวศแบบคู่ขนาน:","Withdrawal Fee":"ค่าธรรมเนียมการถอน","Fee Rebate Dividends:":"เงินปันผลคืนค่าธรรมเนียม:","After-Tax Net Profit":"การชำระภาษีเงินได้บุคคลธรรมดา","Compliant Tax Optimization:":"การปรับภาษีอย่างถูกต้องตามข้อกำหนด:","Minimum 3,000U, 10% x 15%":"เริ่มต้น 3,000U, 10% x 15%","Profit Tax":"ภาษีกำไร","After-Tax Income Redistribution:":"การกระจายรายได้หลังหักภาษี:","Buy Slippage":"Slippage ตอนซื้อ","Trading Friction Earnings:":"รายได้จากแรงเสียดทานในการซื้อขาย:","Sell Slippage":"Slippage ตอนขาย","Liquidity Provision Rewards:":"รางวัลการให้สภาพคล่อง:","My SwarmFi Node":"โหนด SwarmFi ของฉัน","Tier":"ระดับ","Node ID":"ID โหนด","Game Ecology":"ระบบนิเวศเกม","Mint":"จับจอง","Bind":"ผูก","Recommended address":"ที่อยู่แนะนำ","Referral wallet address":"กรุณาใส่ที่อยู่กระเป๋าเงินผู้แนะนำ","Bind successful":"ผูกข้อมูลสำเร็จ","Confirm":"ยืนยัน","Invalid referrer wallet address format":"รูปแบบที่อยู่กระเป๋าเงินผู้แนะนำไม่ถูกต้อง","Incorrect binding address":"ที่อยู่ที่ผูกไม่ถูกต้อง","Please bind the inviter first to make a purchase":"กรุณาผูกข้อมูลผู้เชิญก่อนทำการจับจอง","Insufficient Balance":"ยอดเงินไม่เพียงพอ","Mint successful":"ซื้อสำเร็จ","Dividend value":"มูลค่าเงินปันผล","Team Information":"ข้อมูลทีม","Team count":"จำนวนสมาชิกในทีมทั้งหมด","Direct count":"จำนวนผู้แนะนำตรง","Team Performance":"ผลงานภูมิภาค","Team Incentives":"แรงจูงใจทีม","My superior":"ผู้บังคับบัญชาของฉัน","My invitation link":"ลิงก์เชิญของฉัน","Recommended List":"รายการแนะนำ","Reward Details":"รายละเอียดรางวัล","Wallet address":"ที่อยู่กระเป๋าเงิน","Performance":"การถือครองส่วนบุคคล","Source address":"ที่อยู่ต้นทาง","Date":"วันที่","Copy successful":"คัดลอกสำเร็จ","Quantity":"จำนวน","Total Team Performance":"ผลงานรวมของทีม","Node Performance":"ผลงานของโหนด","Announcement":"ประกาศ","BeeFI Good News Announcement":"ประกาศข่าวดี BeeFI","BeeFI Node Internal Ranking Event is Now Open!":"กิจกรรมจัดอันดับภายในโหนด BeeFI เปิดแล้ว!","Limited dividend points released simultaneously. First come, first served!":"ปล่อยคะแนนเงินปันผลแบบจำกัดพร้อมกัน จำนวนจำกัด ใครมาก่อนได้ก่อน!","Internal Ranking Period: March 13 - March 16":"ระยะเวลาจัดอันดับภายใน: 13 มีนาคม - 16 มีนาคม","Official Recharge: Starts at 9:58 on March 16":"เติมเงินอย่างเป็นทางการ: เริ่มเวลา 9:58 น. ของวันที่ 16 มีนาคม","Node Rewards":"รางวัลโหนด","500U Node: 5 Nodes + 2 Dividend Points":"โหนด 500U: 5 โหนด + 2 คะแนนเงินปันผล","1000U Node: 10 Nodes + 5 Dividend Points":"โหนด 1000U: 10 โหนด + 5 คะแนนเงินปันผล","Please contact your referrer in advance to secure your internal ranking eligibility.":"โปรดติดต่อผู้แนะนำของคุณล่วงหน้าเพื่อรักษาสิทธิ์การจัดอันดับภายในของคุณ","Join the flash sale at 9:58 on March 16!":"ร่วม flash sale เวลา 9:58 น. ของวันที่ 16 มีนาคม!","New Announcement":"ประกาศล่าสุด","Details":"รายละเอียด","My Assets":"สินทรัพย์ของฉัน","Passive Income":"รายได้แบบพาสซีฟ","Active Income":"รายได้แบบแอคทีฟ","Participate in Wealth Management":"เข้าร่วมการจัดการความมั่งคั่ง","Wealth Management Amount":"จำนวนเงินจัดการความมั่งคั่ง","All":"ทั้งหมด","Balance":"ยอดคงเหลือ:","Wealth Management":"จัดการความมั่งคั่ง","Sell":"ขาย","Sell Amount":"จำนวนเงินขาย","Current Price":"ราคาปัจจุบัน","Receive":"รับ","Ecosystem Account":"บัญชีระบบนิเวศ","Swap":"แลกเปลี่ยน","Swap Amount":"จำนวนแลกเปลี่ยน","Swap Ratio":"อัตราส่วนการแลกเปลี่ยน","Staked Amount":"จำนวนที่ stake","Staked Principal":"เงินต้นที่ stake:","Daily Interest Rate":"อัตราดอกเบี้ยรายวัน:","Start Time":"เวลาเริ่มต้น:","Countdown":"การนับถอยหลัง:","Claim":"รับ","Progress":"กำลังดำเนินการ","Ended":"สิ้นสุดแล้ว","Enter the financial amount":"กรุณากรอกจำนวนเงินลงทุน","Max":"สูงสุด","Account balance":"ยอดคงเหลือในบัญชี","My Management":"การลงทุนของฉัน","The investment amount must be a multiple of 100":"จำนวนเงินลงทุนต้องเป็นพหุคูณของ 100","Successful participation":"การลงทุนสำเร็จ","Claimed successfully":"รับเงินสำเร็จ","Current cycle":"รอบปัจจุบัน","Cycle days":"จำนวนวันต่อรอบ","Periodic interest":"ดอกเบี้ยต่องวด","Cumulative days":"จำนวนวันสะสม","Accumulated interest":"ดอกเบี้ยสะสม","Period":"งวดที่","Day":"วัน","Cyclic rate":"อัตราดอกเบี้ยต่อรอบ","Claim cycle":"รอบการรับผลตอบแทน","Claim income":"รับผลตอบแทน","Staking":"การ Stake","Staking time":"เวลาในการ Stake","Cycle start time":"เวลาเริ่มรอบ","Cycle countdown":"เวลานับถอยหลังรอบ","Enter the selling amount":"กรุณากรอกจำนวนเงินที่ต้องการขาย","Sell successful":"ขายสำเร็จ","Claimed":"รับแล้ว","Cumulative":"สะสม","My Staking":"การ Stake ของฉัน","My principal":"เงินต้นของฉัน","The amount exceeds the range":"จำนวนเงินเกินช่วงที่กำหนด","Order Number":"หมายเลขคำสั่งซื้อ","Amount":"จำนวนเงิน","Start Times":"เวลาเริ่มต้น","Expiration time":"เวลาหมดอายุ","Daily interest":"ดอกเบี้ยรายวัน","Generate income":"สร้างรายได้","Monthly interest":"ดอกเบี้ยรายเดือน","Price":"ราคา","Claimeds":"รับแล้ว","Claim principal+income":"รับเงินต้น + ผลตอบแทน","Pledge amount":"จำนวนเงินที่นำเข้า Stake","Countdown to claim":"เวลานับถอยหลังก่อนรับ","Not claimed":"ยังไม่ได้รับ","Collection successful, expected to arrive in 1-2 minutes":"รับสำเร็จ คาดว่าจะเข้าบัญชีใน 1-2 นาที","No unclaimed income":"ไม่มีรายได้ที่ยังไม่ได้รับ","Team Performances":"ผลงานของทีม","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 27095
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Kết nối Ví","Select Language":"Chọn Ngôn ngữ","Home":"Trang chủ","Power":"Sức mạnh","Dividend":"Cổ tức","Team":"Đội nhóm","Ecology":"Hệ sinh thái","Coming Soon":"Sắp mở","Partner":"Đối tác","Follow us":"Theo dõi chúng tôi","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Giao thức SwarmFi là cơ sở hạ tầng tài chính phi tập trung tập trung vào việc chuyển đổi Tài sản Thế giới Thực (RWA) thành tài sản trên chuỗi được tiêu chuẩn hóa, có thể xác minh và có tính thanh khoản.","SwarmFi Node Recruitment":"Tuyển dụng Nút SwarmFi","Starter":"Phiên bản Cơ bản","Advanced":"Phiên bản Nâng cao","Premium":"Phiên bản Cao cấp","Supreme":"Phiên bản Tối thượng","Subscription Amount":"Số tiền đăng ký","Contribution value":"Giá trị đóng góp","Approve":"Phê duyệt","SwarmFi Node Benefits":"Lợi ích của Nút SwarmFi","Node Gift":"Quà tặng Nút","Enable Multi-Channel Earnings:":"Kích hoạt Thu nhập Đa kênh:","50% Deposit":"Nạp tiền 50%","Value-Added Earnings":"Thu nhập Gia tăng","Stable Compound Growth:":"Tăng trưởng Kép Ổn định:","+1.5% Per Period":"+1.5% Mỗi Kỳ","Planet Storm":"Bão Hành tinh","Dual-Track Ecosystem Incentives:":"Ưu đãi Hệ sinh thái Đường đôi:","Withdrawal Fee":"Phí rút tiền","Fee Rebate Dividends:":"Cổ tức Hoàn lại Phí:","After-Tax Net Profit":"Nộp thuế thu nhập cá nhân","Compliant Tax Optimization:":"Tối ưu hóa Thuế Tuân thủ:","Minimum 3,000U, 10% x 15%":"Tối thiểu 3.000U, 10% x 15%","Profit Tax":"Thuế lợi nhuận","After-Tax Income Redistribution:":"Phân phối lại Thu nhập Sau thuế:","Buy Slippage":"Trượt giá Mua","Trading Friction Earnings:":"Thu nhập từ Ma sát Giao dịch:","Sell Slippage":"Trượt giá Bán","Liquidity Provision Rewards:":"Phần thưởng Cung cấp Thanh khoản:","My SwarmFi Node":"Nút SwarmFi của tôi","Tier":"Cấp độ","Node ID":"ID Nút","Game Ecology":"Hệ sinh thái Trò chơi","Mint":"Mua nhanh","Bind":"Liên kết","Recommended address":"Địa chỉ giới thiệu","Referral wallet address":"Vui lòng nhập địa chỉ ví người giới thiệu","Bind successful":"Liên kết thành công","Confirm":"Xác nhận","Invalid referrer wallet address format":"Định dạng địa chỉ ví người giới thiệu không hợp lệ","Incorrect binding address":"Địa chỉ liên kết không chính xác","Please bind the inviter first to make a purchase":"Vui lòng liên kết người mời trước khi mua","Insufficient Balance":"Số dư không đủ","Mint successful":"Mua thành công","Dividend value":"Giá trị cổ tức","Team Information":"Thông tin Đội nhóm","Team count":"Tổng số thành viên trong nhóm","Direct count":"Số người giới thiệu trực tiếp","Team Performance":"Kết quả hoạt động Khu vực","Team Incentives":"Ưu đãi của nhóm","My superior":"Cấp trên của tôi","My invitation link":"Liên kết mời của tôi","Recommended List":"Danh sách giới thiệu","Reward Details":"Chi tiết phần thưởng","Wallet address":"Địa chỉ ví","Performance":"Nắm giữ Cá nhân","Source address":"Địa chỉ nguồn","Date":"Ngày","Copy successful":"Sao chép thành công","Quantity":"Số lượng","Total Team Performance":"Tổng Kết quả hoạt động Nhóm","Node Performance":"Hiệu suất nút","Announcement":"Thông báo","BeeFI Good News Announcement":"Thông báo Tin vui BeeFI","BeeFI Node Internal Ranking Event is Now Open!":"Sự kiện Xếp hạng Nội bộ Nút BeeFI hiện đã mở!","Limited dividend points released simultaneously. First come, first served!":"Điểm cổ tức giới hạn được phát hành đồng thời. Số lượng có hạn, ai nhanh tay người đó được!","Internal Ranking Period: March 13 - March 16":"Thời gian Xếp hạng Nội bộ: 13 tháng 3 - 16 tháng 3","Official Recharge: Starts at 9:58 on March 16":"Nạp tiền Chính thức: Bắt đầu lúc 9:58 ngày 16 tháng 3","Node Rewards":"Phần thưởng Nút","500U Node: 5 Nodes + 2 Dividend Points":"Nút 500U: 5 Nút + 2 Điểm cổ tức","1000U Node: 10 Nodes + 5 Dividend Points":"Nút 1000U: 10 Nút + 5 Điểm cổ tức","Please contact your referrer in advance to secure your internal ranking eligibility.":"Vui lòng liên hệ trước với người giới thiệu của bạn để đảm bảo đủ điều kiện tham gia xếp hạng nội bộ.","Join the flash sale at 9:58 on March 16!":"Tham gia chương trình bán hàng chớp nhoáng lúc 9:58 ngày 16 tháng 3!","New Announcement":"Thông báo mới nhất","Details":"Chi tiết","My Assets":"Tài Sản Của Tôi","Passive Income":"Thu Nhập Thụ Động","Active Income":"Thu Nhập Chủ Động","Participate in Wealth Management":"Tham Gia Quản Lý Tài Sản","Wealth Management Amount":"Số Tiền Quản Lý Tài Sản","All":"Tất Cả","Balance":"Số Dư:","Wealth Management":"Quản Lý Tài Sản","Sell":"Bán","Sell Amount":"Số Tiền Bán","Current Price":"Giá Hiện Tại","Receive":"Nhận Được","Ecosystem Account":"Tài Khoản Hệ Sinh Thái","Swap":"Đổi","Swap Amount":"Số Lượng Đổi","Swap Ratio":"Tỷ Lệ Đổi","Staked Amount":"Số Lượng Staking","Staked Principal":"Gốc Staking:","Daily Interest Rate":"Lãi Suất Hàng Ngày:","Start Time":"Thời Gian Bắt Đầu:","Countdown":"Đếm Ngược:","Claim":"Nhận","Progress":"Đang Diễn Ra","Ended":"Đã Kết Thúc","Enter the financial amount":"Nhập số tiền đầu tư","Max":"Tối đa","Account balance":"Số dư tài khoản","My Management":"Đầu tư của tôi","The investment amount must be a multiple of 100":"Số tiền đầu tư phải là bội số của 100","Successful participation":"Tham gia thành công","Claimed successfully":"Nhận thành công","Current cycle":"Chu kỳ hiện tại","Cycle days":"Số ngày chu kỳ","Periodic interest":"Lãi chu kỳ","Cumulative days":"Số ngày tích lũy","Accumulated interest":"Lãi tích lũy","Period":"Kỳ","Day":"Ngày","Cyclic rate":"Lãi suất chu kỳ","Claim cycle":"Chu kỳ nhận","Claim income":"Nhận thu nhập","Staking":"Staking","Staking time":"Thời gian staking","Cycle start time":"Thời gian bắt đầu chu kỳ","Cycle countdown":"Đếm ngược chu kỳ","Enter the selling amount":"Nhập số tiền bán","Sell successful":"Bán thành công","Claimed":"Đã nhận","Cumulative":"Tích lũy","My Staking":"Staking của tôi","My principal":"Vốn gốc của tôi","The amount exceeds the range":"Số tiền vượt quá giới hạn","Order Number":"Mã đơn hàng","Amount":"Số tiền","Start Times":"Thời gian bắt đầu","Expiration time":"Thời gian hết hạn","Daily interest":"Lãi ngày","Generate income":"Tạo ra thu nhập","Monthly interest":"Lãi tháng","Price":"Giá","Claimeds":"Đã nhận","Claim principal+income":"Nhận gốc + lãi","Pledge amount":"Số tiền cam kết","Countdown to claim":"Đếm ngược nhận thưởng","Not claimed":"Chưa nhận","Collection successful, expected to arrive in 1-2 minutes":"Nhận thành công, dự kiến có sau 1-2 phút","No unclaimed income":"Không có thu nhập chưa nhận","Team Performances":"Hiệu suất đội nhóm","My Hashrate":"My Hashrate","Hashrate":"Hashrate","Hashrate Amount":"Hashrate Amount","Join Mining":"Join Mining","Enter the amount of computing power":"Enter the amount of computing power","Promotion Reward":"Promotion Reward","Claimable":"Claimable","Level Reward":"Level Reward","My Level":"My Level","Reward Pool":"Reward Pool","Recharge Hashrate":"Recharge Hashrate","Recharge Amount":"Recharge Amount","Recharge":"Recharge","Enter recharge amount":"Enter recharge amount","Total community sales":"Total community sales","Price trend":"Price trend","Total Burned":"Total Burned","Piece":"Piece","":""}');

/***/ },

/***/ 65372
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Select Language":"选择语言","Home":"首页","Power":"算力","Dividend":"分红","Team":"团队","Ecology":"生态","Coming Soon":"即将开放","Partner":"合作伙伴","Follow us":"关注我们","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi协议是一个去中心化的金融基础设施，专注于将现实世界资产（RWA）转化为标准化、可验证和流动的链上资产。","SwarmFi Node Recruitment":"SwarmFi节点招募","Starter":"入门版","Advanced":"进阶版","Premium":"尊享版","Supreme":"至尊版","Subscription Amount":"认购金额","Contribution value":"贡献价值","Approve":"授权","SwarmFi Node Benefits":"SwarmFi节点优势","Node Gift":"节点赠送","Enable Multi-Channel Earnings:":"开通多渠道收益:","50% Deposit":"50%入金","Value-Added Earnings":"增值收益","Stable Compound Growth:":"稳定复利增长:","+1.5% Per Period":"每期+1.5%","Planet Storm":"星球风暴","Dual-Track Ecosystem Incentives:":"生态激励双轨制:","Withdrawal Fee":"提现手续费","Fee Rebate Dividends:":"手续费返还分红:","After-Tax Net Profit":"个税缴纳","Compliant Tax Optimization:":"合规税务优化:","Minimum 3,000U, 10% x 15%":"3,000U起征 10%x15%","Profit Tax":"盈利税","After-Tax Income Redistribution:":"税后收益再分配:","Buy Slippage":"买入滑点","Trading Friction Earnings:":"交易摩擦收益:","Sell Slippage":"卖出滑点","Liquidity Provision Rewards:":"流动性提供奖励:","My SwarmFi Node":"我的SwarmFi节点","Tier":"等级","Node ID":"节点ID","Game Ecology":"游戏生态","Mint":"抢购","Bind":"绑定","Recommended address":"推荐地址","Referral wallet address":"请输入推荐人钱包地址","Bind successful":"绑定成功","Confirm":"确认","Invalid referrer wallet address format":"推荐人钱包地址格式不正确","Incorrect binding address":"绑定地址不正确","Please bind the inviter first to make a purchase":"请先绑定邀请人在进行抢购","Insufficient Balance":"余额不足","Mint successful":"购买成功","Dividend value":"分红值","Team Information":"团队信息","Team count":"团队总人数","Direct count":"直推人数","Team Performance":"大区业绩","Team Incentives":"团队奖励","My superior":"我的上级","My invitation link":"我的邀请链接","Recommended List":"推荐列表","Reward Details":"奖励明细","Wallet address":"钱包地址","Performance":"个人持仓","Source address":"来源地址","Date":"日期","Copy successful":"复制成功","Quantity":"数量","Total Team Performance":"团队总业绩","Node Performance":"节点业绩","Announcement":"公告","BeeFI Good News Announcement":"蜂FI喜讯公告","BeeFI Node Internal Ranking Event is Now Open!":"蜂FI节点内排活动火热开启！","Limited dividend points released simultaneously. First come, first served!":"限量分红值同步释放，名额有限，先到先得","Internal Ranking Period: March 13 - March 16":"内排时间：3月13日—3月16日","Official Recharge: Starts at 9:58 on March 16":"正式充值：3月16日 9:58 准时开启","Node Rewards":"节点奖励","500U Node: 5 Nodes + 2 Dividend Points":"500U节点：5个节点 + 2个分红值","1000U Node: 10 Nodes + 5 Dividend Points":"1000U节点：10个节点 + 5个分红值","Please contact your referrer in advance to secure your internal ranking eligibility.":"请提前联系推荐人锁定内排资格。","Join the flash sale at 9:58 on March 16!":"3月16日 9:58 准时参与抢购！","New Announcement":"最新公告","Details":"详情","My Assets":"我的资产","Passive Income":"静态收益","Active Income":"动态收益","Participate in Wealth Management":"参与理财","Wealth Management Amount":"理财金额","All":"全部","Balance":"余额:","Wealth Management":"理财","Sell":"卖出","Sell Amount":"卖出金额","Current Price":"当前价格","Receive":"获得","Ecosystem Account":"生态账号","Swap":"兑换","Swap Amount":"兑换数量","Swap Ratio":"兑换比例","Staked Amount":"质押数量","Staked Principal":"质押本金:","Daily Interest Rate":"每日利率:","Start Time":"开始时间:","Countdown":"倒计时:","Claim":"领取","Progress":"进行中","Ended":"已结束","Enter the financial amount":"输入理财金额","Max":"最大","Account balance":"账号余额","My Management":"我的理财","The investment amount must be a multiple of 100":"理财金额必须为100的倍数","Successful participation":"参与成功","Claimed successfully":"领取成功","Current cycle":"当前周期","Cycle days":"周期天数","Periodic interest":"周期利息","Cumulative days":"累计天数","Accumulated interest":"累计利息","Period":"期","Day":"天","Cyclic rate":"周期利率","Claim cycle":"领取周期","Claim income":"领取收益","Staking":"质押","Staking time":"质押时间","Cycle start time":"周期开始时间","Cycle countdown":"周期倒计时","Enter the selling amount":"输入卖出金额","Sell successful":"卖出成功","Claimed":"已领","Cumulative":"累计","My Staking":"我的质押","My principal":"我的本金","The amount exceeds the range":"金额超出范围","Order Number":"订单号","Amount":"金额","Start Times":"开始时间","Expiration time":"到期时间","Daily interest":"日利息","Generate income":"产生收益","Monthly interest":"月利息","Price":"价格","Claimeds":"已领取","Claim principal+income":"领取本金+收益","Pledge amount":"质押金额","Countdown to claim":"领取倒计时","Not claimed":"未领","Collection successful, expected to arrive in 1-2 minutes":"领取成功，预计1~2分钟到账","No unclaimed income":"没有未领收益","Team Performances":"团队业绩","My Hashrate":"我的算力","Hashrate":"算力","Hashrate Amount":"算力金额","Join Mining":"参与挖矿","Enter the amount of computing power":"输入算力金额","Promotion Reward":"推广奖励","Claimable":"可领取","Level Reward":"等级奖励","My Level":"我的等级","Reward Pool":"奖励池","Recharge Hashrate":"充值算力","Recharge Amount":"充值金额","Recharge":"充值","Enter recharge amount":"输入充值金额","Total community sales":"小区总业绩","Price trend":"价格走势","Total Burned":"全网总销毁","Piece":"枚","":""}');

/***/ },

/***/ 48380
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Select Language":"選擇語言","Home":"首頁","Power":"算力","Dividend":"分紅","Team":"團隊","Ecology":"生態","Coming Soon":"即將開放","Partner":"合作夥伴","Follow us":"關注我們","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi協議是一個去中心化的金融基礎設施，專注於將現實世界資產（RWA）轉化為標準化、可驗證和流動的鏈上資產。","SwarmFi Node Recruitment":"SwarmFi節點招募","Starter":"入門版","Advanced":"進階版","Premium":"尊享版","Supreme":"至尊版","Subscription Amount":"認購金額","Contribution value":"貢獻價值","Approve":"授權","SwarmFi Node Benefits":"SwarmFi節點優勢","Node Gift":"節點贈送","Enable Multi-Channel Earnings:":"開通多渠道收益：","50% Deposit":"50%入金","Value-Added Earnings":"增值收益","Stable Compound Growth:":"穩定複利增長：","+1.5% Per Period":"每期+1.5%","Planet Storm":"星球風暴","Dual-Track Ecosystem Incentives:":"生態激勵雙軌制：","Withdrawal Fee":"提現手續費","Fee Rebate Dividends:":"手續費返還分紅：","After-Tax Net Profit":"個稅繳納","Compliant Tax Optimization:":"合規稅務最佳化：","Minimum 3,000U, 10% x 15%":"3,000U起徵 10%x15%","Profit Tax":"盈利稅","After-Tax Income Redistribution:":"稅後收益再分配：","Buy Slippage":"買入滑點","Trading Friction Earnings:":"交易摩擦收益：","Sell Slippage":"賣出滑點","Liquidity Provision Rewards:":"流動性提供獎勵：","My SwarmFi Node":"我的SwarmFi節點","Tier":"等級","Node ID":"節點ID","Game Ecology":"遊戲生態","Mint":"搶購","Bind":"綁定","Recommended address":"推薦地址","Referral wallet address":"請輸入推薦人錢包地址","Bind successful":"綁定成功","Confirm":"確認","Invalid referrer wallet address format":"推薦人錢包地址格式不正確","Incorrect binding address":"綁定地址不正確","Please bind the inviter first to make a purchase":"請先綁定邀請人再進行搶購","Insufficient Balance":"餘額不足","Mint successful":"購買成功","Dividend value":"分紅值","Team Information":"團隊資訊","Team count":"團隊總人數","Direct count":"直推人數","Team Performance":"大區業績","Team Incentives":"團隊獎勵","My superior":"我的上級","My invitation link":"我的邀請連結","Recommended List":"推薦列表","Reward Details":"獎勵明細","Wallet address":"錢包地址","Performance":"個人持倉","Source address":"來源地址","Date":"日期","Copy successful":"複製成功","Quantity":"數量","Total Team Performance":"團隊總業績","Node Performance":"節點業績","Announcement":"公告","BeeFI Good News Announcement":"蜂FI喜訊公告","BeeFI Node Internal Ranking Event is Now Open!":"蜂FI節點內排活動火熱開啟！","Limited dividend points released simultaneously. First come, first served!":"限量分紅值同步釋放，名額有限，先到先得！","Internal Ranking Period: March 13 - March 16":"內排時間：3月13日—3月16日","Official Recharge: Starts at 9:58 on March 16":"正式充值：3月16日 9:58 準時開啟","Node Rewards":"節點獎勵","500U Node: 5 Nodes + 2 Dividend Points":"500U節點：5個節點 + 2個分紅值","1000U Node: 10 Nodes + 5 Dividend Points":"1000U節點：10個節點 + 5個分紅值","Please contact your referrer in advance to secure your internal ranking eligibility.":"請提前聯繫推薦人鎖定內排資格。","Join the flash sale at 9:58 on March 16!":"3月16日 9:58 準時參與搶購！","New Announcement":"最新公告","Details":"詳情","My Assets":"我的資產","Passive Income":"靜態收益","Active Income":"動態收益","Participate in Wealth Management":"參與理財","Wealth Management Amount":"理財金額","All":"全部","Balance":"餘額：","Wealth Management":"理財","Sell":"賣出","Sell Amount":"賣出金額","Current Price":"當前價格","Receive":"獲得","Ecosystem Account":"生態帳號","Swap":"兌換","Swap Amount":"兌換數量","Swap Ratio":"兌換比例","Staked Amount":"質押數量","Staked Principal":"質押本金：","Daily Interest Rate":"每日利率：","Start Time":"開始時間：","Countdown":"倒計時：","Claim":"領取","Progress":"進行中","Ended":"已結束","Enter the financial amount":"輸入理財金額","Max":"最大","Account balance":"帳號餘額","My Management":"我的理財","The investment amount must be a multiple of 100":"理財金額必須為100的倍數","Successful participation":"參與成功","Claimed successfully":"領取成功","Current cycle":"當前週期","Cycle days":"週期天數","Periodic interest":"週期利息","Cumulative days":"累計天數","Accumulated interest":"累計利息","Period":"期","Day":"天","Cyclic rate":"週期利率","Claim cycle":"領取週期","Claim income":"領取收益","Staking":"質押","Staking time":"質押時間","Cycle start time":"週期開始時間","Cycle countdown":"週期倒數計時","Enter the selling amount":"輸入賣出金額","Sell successful":"賣出成功","Claimed":"已領","Cumulative":"累計","My Staking":"我的質押","My principal":"我的本金","The amount exceeds the range":"金額超出範圍","Order Number":"訂單號","Amount":"金額","Start Times":"開始時間","Expiration time":"到期時間","Daily interest":"日利息","Generate income":"產生收益","Monthly interest":"月利息","Price":"價格","Claimeds":"已領取","Claim principal+income":"領取本金+收益","Pledge amount":"質押金額","Countdown to claim":"領取倒計時","Not claimed":"未領","Collection successful, expected to arrive in 1-2 minutes":"領取成功，預計1~2分鐘到賬","No unclaimed income":"沒有未領收益","Team Performances":"團隊業績","My Hashrate":"我的算力","Hashrate":"算力","Hashrate Amount":"理財金額","Join Mining":"參與挖礦","Enter the amount of computing power":"輸入算力金額","Promotion Reward":"推廣獎勵","Claimable":"可領取","Level Reward":"等級獎勵","My Level":"我的等級","Reward Pool":"獎勵池","Recharge Hashrate":"充值算力","Recharge Amount":"充值金額","Recharge":"充值","Enter recharge amount":"輸入充值金額","Total community sales":"社區總業績","Price trend":"價格走勢","Total Burned":"全網總銷毀","Piece":"枚","":""}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktoken"] = self["webpackChunktoken"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [81], () => (__webpack_require__(82472)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;