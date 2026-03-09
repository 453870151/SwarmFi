/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7566
() {

// extracted by mini-css-extract-plugin

/***/ },

/***/ 1961
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.esm.js
var index_esm = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(706);
;// ./src/utils/wagmi.ts





const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(3376);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(2635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(2389);
;// ./i18n.ts
/* unused harmony import specifier */ var i18n;



const resources = {
  en: {
    translation: __webpack_require__(2038),
  },
  zhCN: {
    translation: __webpack_require__(5372),
  },
  zhTW: {
    translation: __webpack_require__(8380),
  },
  malay: {
    translation: __webpack_require__(3232),
  },
  indonesian: {
    translation: __webpack_require__(7352),
  },
  vietnamese: {
    translation: __webpack_require__(7095),
  },
  thai: {
    translation: __webpack_require__(8150),
  },
  korean: {
    translation: __webpack_require__(6628),
  },
  japanese: {
    translation: __webpack_require__(4175),
  },
  filipino: {
    translation: __webpack_require__(8062),
  },
}

i18next/* default.use */.Ay.use(es/* initReactI18next */.r9).init({
  resources,
  lng: "en",
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(7208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2837);
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
    BindAddress: '0xADF44Dc74b7a0F754bDD74d7E241Ff180080Af03',
    // 购买节点
    NodeMallAddress: '0x5ed2e9bdd97e6bb2bd268c52462aaa58417b9398',
    // 查询节点
    NodeAddress: '0xDF12Bd2f00D1E30cF6675FFdf55B7406c382f1f3'
  },
  97: {
    USDT: "0x44004827f2F72566E12884A38f63f72F2a5143ea",
    // 绑定邀请关系
    BindAddress: '0x14156d2b093C202eaa8d4f1D35506bDFF5E8FadF',
    // 购买节点
    NodeMallAddress: '0x4ac10128286959df8df7389a02c7ea318d2254dc',
    // 查询节点
    NodeAddress: '0x1e43BA0139a37562D8B45daA0E63aF8C5BE8dE22'
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(6910);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/.store/viem@2.46.3/node_modules/viem/_esm/constants/address.js
var constants_address = __webpack_require__(5750);
;// ./src/config/abi/BindUserAbi.json
const BindUserAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"UserBound","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DEPTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"bind","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directRefCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getDirectReferees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referee","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"}],"name":"getReferrers","outputs":[{"internalType":"address[]","name":"referrers","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"referees","type":"address[]"},{"internalType":"address[]","name":"referrers","type":"address[]"}],"name":"setBindings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"name":"setUserWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
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
}
ContractReferrer.i18n = null;
ContractReferrer.message = null;
;// ./src/context/LayoutContext.jsx





const LayoutContext = /*#__PURE__*/(0,react.createContext)();
const LayoutProvider = _ref => {
  var _chain$id;
  let {
    children
  } = _ref;
  const [referrerAddress, setReferrerAddress] = (0,react.useState)("");
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
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询我的邀请人
      handleReferrer();
    }
  }, [address, chain]);
  return /*#__PURE__*/react.createElement(LayoutContext.Provider, {
    value: {
      referrerAddress,
      handleReferrer
    }
  }, children);
};
const useLayout = () => (0,react.useContext)(LayoutContext);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 56 modules
var modal = __webpack_require__(5074);
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
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(3532);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 38 modules
var input = __webpack_require__(9572);
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
;// ./src/utils/common.js
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
const parseNumber = (num, decimal) => {
  let newNum = "";
  let count = 0;
  let numStr = String(num); // 数字转为字符串;
  // 当字符串不含有小数点
  if (numStr.indexOf(".") == -1) {
    let i;
    for (i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    // numStr= newNum + ".00"; // 自动补小数点后两位
    numStr = newNum;
    return numStr;
  } else {
    var _numberArr$;
    // 当字符串含有小数点
    for (let i = numStr.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum; // 字符拼接
      }
      count++;
    }
    const reg = /^0+/;
    const numberArr = String(numStr).split('.');

    //  小数点后面 0 的个数
    const zeroArrCount = numberArr && ((_numberArr$ = numberArr[1]) == null ? void 0 : _numberArr$.match(reg));
    const zeroCount = zeroArrCount == null ? void 0 : zeroArrCount[0];
    const zeroCountLen = (zeroCount == null ? void 0 : zeroCount.length) || 0;
    // 保留几位小数
    const zeroDecimal = zeroCountLen !== 0 ? zeroCountLen + 2 : 0;
    const numDecimal = decimal ? decimal + 1 : 3 + 1;
    const decimalNewNum = zeroDecimal === 0 ? numDecimal : zeroDecimal + 1;
    numStr = newNum + (numStr + "00").substr((numStr + "00").indexOf("."), decimalNewNum);
    return numStr;
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
    onChange: inputChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal_buttom",
    onClick: handleBindClick
  }, !isBindLoading && /*#__PURE__*/react.createElement("span", null, t('Confirm')), isBindLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Confirm'))))));
}
/* harmony default export */ const bindReferrerModal = (BindReferrerModal);
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
		margin-left: 15px;
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
    referrerAddress
  } = useLayout();
  const [visible, setVisible] = (0,react.useState)(false);
  const [bindOpenModal, setBindOpenModal] = (0,react.useState)(true);
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
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_lan"
  }, /*#__PURE__*/react.createElement("img", {
    src: xiaoxi_namespaceObject,
    alt: ""
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
    switch (location.pathname) {
      case '/':
        setTabOn1(true);
        break;
      case '/power':
        setTabOn2(true);
        break;
      case '/team':
        setTabOn3(true);
        break;
      case '/dividend':
        setTabOn4(true);
        break;
      case '/ecology':
        setTabOn5(true);
        break;
      default:
        break;
    }
  }, [location.pathname]);
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
      handleLink("/power");
    }
  }, tabOn2 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Power"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/team");
    }
  }, tabOn3 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on3_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Team"))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleLink("/dividend");
    }
  }, tabOn4 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on4_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("Dividend"))), /*#__PURE__*/react.createElement("span", {
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
;// ./src/config/abi/NodeMallAbi.json
const NodeMallAbi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BindUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Node","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReceiveAddress1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReceiveAddress2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nodeType","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"dividend","type":"uint256"}],"name":"setUserDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"userWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// ./src/utils/contractNodeUtils.js



const contractNodeUtils_ethereumHelper = window.ethereum || false;
const contractNodeUtils_web3 = new (web3_min_default())(contractNodeUtils_ethereumHelper);

/**
 * 节点合约
 */
class ContractNode {
  // 初始化方法
  static init(i18nInstance, messageInstance) {
    ContractNode.i18n = i18nInstance;
    ContractNode.message = messageInstance;
  }

  // 购买节点
  static async mint(address, contractsAddress, nodeType) {
    try {
      var _ContractNode$i18n;
      const contract = new contractNodeUtils_web3.eth.Contract(NodeMallAbi_namespaceObject, contractsAddress);
      const gas = await contractNodeUtils_web3.eth.getGasPrice();
      await contract.methods.mint(nodeType).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          console.log('mint err===>', err);
          return false;
        }
      });
      ContractNode.message.success((_ContractNode$i18n = ContractNode.i18n) == null ? void 0 : _ContractNode$i18n.t('Mint successful'));
      return true;
    } catch (error) {
      console.log("error===>", error);
      return false;
    }
  }

  // 查询是否购买节点
  static async getMint(address, contractsAddress) {
    try {
      const contract = new contractNodeUtils_web3.eth.Contract(NodeAbi_namespaceObject, contractsAddress);
      const balanceOf = await contract.methods.balanceOf(address).call();
      return balanceOf;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询节点ID
  static async tokenOfOwnerByIndex(address, contractsAddress) {
    try {
      const contract = new contractNodeUtils_web3.eth.Contract(NodeAbi_namespaceObject, contractsAddress);
      const tokenID = await contract.methods.tokenOfOwnerByIndex(address, 0).call();
      return tokenID;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 查询等级
  static async nodeTypes(contractsAddress, tokenID) {
    try {
      const contract = new contractNodeUtils_web3.eth.Contract(NodeAbi_namespaceObject, contractsAddress);
      const tiers = await contract.methods.nodeTypes(tokenID).call();
      return tiers;
    } catch (error) {
      console.log("error===>", error);
    }
  }
}
ContractNode.i18n = null;
ContractNode.message = null;
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(346);
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
      const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-decimals).toString();
      return allowanceBig;
    } catch (error) {
      console.log("error===>", error);
    }
  }

  // 授权
  static async approve(address, tokenAddress, contractsAddress, amount) {
    if (amount === void 0) {
      amount = 1000000000000000000000000000;
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
;// ./src/components/index/node.jsx












const node_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: #fff;
	padding: 0px 15px 30px 15px;
	.comm2_title {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
    	padding: 30px 0px 20px;
	}
	.comm2_table {
	    display: flex;
    	gap: 10px;
		span {
		    display: inline-block;
			background: #EFEFEF;
			border-radius: 34px;
			font-size: 13px;
			color: #454545;
			padding: 4px 10px;
			cursor: pointer;
			&:hover {
				opacity: .8;
			}
		}
		.on {
			background: #FFD100;
		}
	}
	.comm2_cont_flex {
		display: flex;
		justify-content: space-between;
		background: #FFFBE5;
		border-radius: 10px;
		margin-top: 20px;
		padding: 15px;
	}
	.comm2_subs {
		span {
		    display: block;
			font-size: 12px;
			color: #454545;
		}
		em {
			display: block;
			font-size: 16px;
			font-weight: bold;
			padding-top: 5px;
		}
	}
	.comm2_val_rin {
	    text-align: right;
	}
	.comm2_butom {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 38px;
		background: #000000;
		border-radius: 50px;
		font-size: 14px;
		color: #FFD100;
		margin-top: 30px;
		cursor: pointer;
		&:hover {
			opacity: .8;
		}
	}
	.comm2_grid {
		display: grid;
    	grid-template-columns: repeat(2, 1fr);
		background: #FFFBE5;
		border-radius: 10px;
		padding: 15px;
		gap: 20px;
	}
	.comm2_myrin {
		text-align: right;
	}
`;
function Node() {
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
  (0,react.useEffect)(() => {
    ContractNode.init(i18n, message/* default */.Ay);
  }, [i18n]);
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ContractsAddress = Contracts_Address[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56];
  const {
    referrerAddress
  } = useLayout();
  const [isMintBalance, setIsMintBalance] = (0,react.useState)(0);
  const [tokenID, setTokenID] = (0,react.useState)();
  const [tier, setTier] = (0,react.useState)();
  const [nodeType, setNodeType] = (0,react.useState)(1);
  const [dividendValue, setDividendValue] = (0,react.useState)(0);
  const [amount, setAmount] = (0,react.useState)(100);
  const [tokenBalance, setTokenBalance] = (0,react.useState)("0");
  const [allApprove, setAllApprove] = (0,react.useState)("1000");
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isMintLoading, setIsMintLoading] = (0,react.useState)(false);

  // 查询是否购买节点
  const handleIsMint = async () => {
    const getMint = await ContractNode.getMint(address, ContractsAddress.NodeAddress);
    setIsMintBalance(getMint);
    if (getMint > 0) {
      const tokenOfID = await ContractNode.tokenOfOwnerByIndex(address, ContractsAddress.NodeAddress);
      setTokenID(tokenOfID);
    }
  };

  // 查询余额
  const handleBalance = async () => {
    const balanceOf = await ContractERC20.balanceOf(address, ContractsAddress.USDT);
    // console.log("balanceOf===>", balanceOf)
    setTokenBalance(balanceOf);
  };

  // 查询授权
  const handleAllowance = async () => {
    const allowance = await ContractERC20.allowance(address, ContractsAddress.USDT, ContractsAddress.NodeMallAddress);
    // console.log("allowance===>", allowance)
    setAllApprove(allowance);
  };

  // 查询等级
  const handleTier = async () => {
    const tiers = await ContractNode.nodeTypes(ContractsAddress.NodeAddress, tokenID);
    // console.log("tiers===>", tiers)
    setTier(tiers);
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 查询是否购买节点
      handleIsMint();
      // 查询余额
      handleBalance();
      // 查询授权
      handleAllowance();
    }
  }, [address, chain]);
  (0,react.useEffect)(() => {
    if (tokenID) {
      // 查询等级
      handleTier();
    }
  }, [tokenID]);
  const handleType = (type, dividend, amount) => {
    setNodeType(type);
    setDividendValue(dividend);
    setAmount(amount);
  };

  // 授权
  const handleApprove = async () => {
    setIsApproveLoading(true);
    const approve = await ContractERC20.approve(address, ContractsAddress.USDT, ContractsAddress.NodeMallAddress, amount);

    // 授权失败
    if (!approve) {
      setIsApproveLoading(false);
    }

    // 授权成功
    if (approve) {
      setIsApproveLoading(false);
      handleAllowance();
    }
  };

  // 购买
  const handleMint = async () => {
    if (referrerAddress === constants_address/* zeroAddress */.X) {
      message/* default */.Ay.error(t("Please bind the inviter first to make a purchase"));
      return;
    }
    if (Number(tokenBalance) < Number(amount)) {
      message/* default */.Ay.error(t("Insufficient Balance"));
      return;
    }
    setIsMintLoading(true);
    const mint = await ContractNode.mint(address, ContractsAddress.NodeMallAddress, nodeType);

    // 购买失败
    if (!mint) {
      setIsMintLoading(false);
    }

    // 购买成功
    if (mint) {
      setIsMintLoading(false);
      handleIsMint();
    }
  };
  return /*#__PURE__*/react.createElement(node_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_title"
  }, t("SwarmFi Node Recruitment")), Number(isMintBalance) === 0 ?
  /*#__PURE__*/
  // 未购买节点
  react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: nodeType === 1 ? 'on' : '',
    onClick: () => {
      handleType(1, 0, 100);
    }
  }, t("Starter")), /*#__PURE__*/react.createElement("span", {
    className: nodeType === 2 ? 'on' : '',
    onClick: () => {
      handleType(2, 0, 300);
    }
  }, t("Advanced")), /*#__PURE__*/react.createElement("span", {
    className: nodeType === 3 ? 'on' : '',
    onClick: () => {
      handleType(3, 2, 500);
    }
  }, t("Premium")), /*#__PURE__*/react.createElement("span", {
    className: nodeType === 4 ? 'on' : '',
    onClick: () => {
      handleType(4, 5, 1000);
    }
  }, t("Supreme"))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_cont_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm2_subs"
  }, /*#__PURE__*/react.createElement("span", null, t("Subscription Amount")), /*#__PURE__*/react.createElement("em", null, amount, "USDT")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_subs"
  }, /*#__PURE__*/react.createElement("span", null, t("Dividend value")), /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, dividendValue))), isConnected ? /*#__PURE__*/react.createElement(react.Fragment, null, Number(allApprove) < Number(amount) ? /*#__PURE__*/react.createElement("div", {
    className: "comm2_butom",
    onClick: () => handleApprove()
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "comm2_butom",
    onClick: () => handleMint()
  }, !isMintLoading && /*#__PURE__*/react.createElement("span", null, t('Mint')), isMintLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Mint'))))) : /*#__PURE__*/react.createElement("div", {
    className: "comm2_butom",
    onClick: () => connectWallet()
  }, t('Connect'))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_grid"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm2_subs"
  }, /*#__PURE__*/react.createElement("span", null, t("Tier")), tier == 1 ? /*#__PURE__*/react.createElement("em", null, t("Starter")) : tier == 2 ? /*#__PURE__*/react.createElement("em", null, t("Advanced")) : tier == 3 ? /*#__PURE__*/react.createElement("em", null, t("Premium")) : tier == 4 ? /*#__PURE__*/react.createElement("em", null, t("Supreme")) : /*#__PURE__*/react.createElement("em", null, "--")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_subs comm2_myrin"
  }, /*#__PURE__*/react.createElement("span", null, t("Dividend value")), tier == 1 ? /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, "0") : tier == 2 ? /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, "0") : tier == 3 ? /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, "2") : tier == 4 ? /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, "5") : /*#__PURE__*/react.createElement("em", {
    className: "comm2_val_rin"
  }, "--")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_subs"
  }, /*#__PURE__*/react.createElement("span", null, t("Subscription Amount")), tier == 1 ? /*#__PURE__*/react.createElement("em", null, "100USDT") : tier == 2 ? /*#__PURE__*/react.createElement("em", null, "300USDT") : tier == 3 ? /*#__PURE__*/react.createElement("em", null, "500USDT") : tier == 4 ? /*#__PURE__*/react.createElement("em", null, "1000USDT") : /*#__PURE__*/react.createElement("em", null, "--")))));
}
/* harmony default export */ const node = (Node);
;// ./src/assets/images/pa1.png
const pa1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACZNJREFUeAHtnU1sG8cVx98MKQJOI4eGc2gNpKJToC7QouIC8aUtYCrIoS1sicg5qKXkklxqpkB7sz7iY4FayqW91JKK9NrKtlD3UMTUpYe6AMm0h7ZA7FWDBjkkKJ0ACSBxZ/LekkuTFD+W5C73rTQ/gFpySY3o/fu9efPe7IyAGKJLufQhPJWRkMhqEBkhxAyAomOm8ZF049FK1XtorfEobTzuC1BlBcpOWX8qQwwREANIMAem8xp0Vkp5CU9lIRzKoHXZ0bDnwGHxlPVnG5jDVsDD0uWclIBiyTyEJ9ggykqpPTzuTFm7RWAIKwHJ0pR8+hqKtogvM8ALG8W8XYPaOifLZCEgWRv2Xyv4yEEMwL6ziD82ktbuDkRMpALWSlcWUbRr+C2icpHjYjtKr6Wsu1sQEZEIWCtdzmMwclPzc5OjEpmQExUwbq5yBOwDdTA3yT5yIgLWg5PpFfxzBTgJaL11oA/XJiFk6AKS1SWk3DxG7tIvE3GroQl44qyuJ3pdqs/WhFWsQgiEIqAu/TCjZer+CbS6XoTWN0oImFpl/qqSqZIRr41MCq8JRd8QMIEK6PxjfgVNeguOJpINeE2ElH90KpdXIEACc6FO5cpN09/5Ra0mZnfXIAACEdB578omaLEIBv8IvZX47t0lGJOxBTTijUEAIo4loBEvAMYUceQghgIWI14A4DWsxw+jMZKArngKVsEQEKIwanQ6tAulsQyFw2AIHBw7LyZn72wP8ztDCUgZFhqkgxnnhUUVMzbWMBkb3y6UcpuUHgMjXpikU5SCxGvt9xd8C0iJaZMemwiZehHAH75cqDv1QYpNMEwMpdScn5lwAwU0lYXIsKX61BpUhhroQh1IrhrxIsGXK+1rgY2o8xEYImOQK+1rgY2o0xAhCSH6WmFPASlwMa4zerQQuX6F4J4CSikCLTwaRgczXz1zpV0FNNbHjswBatLtja4CGuvjR0KKa93OHxGQ/K2xPpZkaY5t58mjFphIdFXaED3dItK2caAZ9/EHszNnWrMzydY3a5AqBD5RNEC273wA27c/gMq/H0P1s0NIT0/B7IVn4OrCc3B1/jlfbez9/RNs479QxOP+h5+3tZF74SzMnHsKOFODp2nm36r3us0CVWX+Ecf+z8YL/XLhgStcLzJ44d/97fd6CkBtvHq9jAJ+3LeNP6xfdAVljJ2YvXPee9EU8LCUz0mpWGZenv/RX1xrIdLTSbj0wrOu5ZAV3r7/UdtnN29k4SfzX287R+K9+Npfm20Ql9DaSDBqo4z/MfY//KLR/hS8f+8l98iV1vRaiwtVgU/7DoK9Bx83L/zC3Ffh1g2r7eKSOBvvPIS3f//Qfb2EVjZz7iuuQN77reLR+U1so9NS1379L3jrN/9xBd3AtlZevwCMyeGjSE+aXV59RQh+PGpYBvHTV75xxDLIim7+4jvwq59/u3nu5cLfXMFIjFbxlt+4gG72+13d7Mob32o+3//f58AZKeVC8zn9oOgTgOd96mdOPxGsX/91DcVdfv2b7nMSjtzu2R/ca4pHQU4/qyJL93iGsftskPWmXbgCOjCVA6aQy6N+j3gbXWVnn9cKWZHnOlvJnDuF7/UWj9zs0vKThZoKrzwP3DmEabfLa/SBOsdtzR+yHLvhPiloIeHIssg9kjUtvPi1roFG7uKz7lChFfp9astucccEtVdEy/sdDk/oOTF74XTzs/UhxmngiACdrR+B7iyap6mCLFzoxjvvN4MJDlAfS2PEZX5BTRmHE5YnoAYG/OyX/3QjSo6Q1VMEzAnKysiD0o9ZWB5lWbiKR7hZIHxwAnNRGRw9yAwwgLN4HpTG44WTlRokCwvslybjQr9hTBQIEBkpTO0vttBCtxKLTDNgiCdanZdCa3OzSkwRkixQ6zNgiC0SHSnr4pehL2nKhbJwoTOYr+ROht93TCeBCVTmKT74BDgzd/EscENwSaMZRoONBXpQEvvxmIlsqud5lYrWaRRBtMcNEpCmqLEZSuy8+xG8tlyCcaDyEU1wIpaul46Ul4bl1luWW5FgSJWGEfxzWIZeVDlPAzUMpiq1lGYmdkzRSj+W4Oh9MMQTIR9hOQlsMMQS2j4Py0naBkMsob0PpQInlhsfGgAUJG05BSkbDLEkZe2UpbB2aCBvrDB+uJq540ClYA8M8UKIJwJiIGMsMGY4jrs1bF3ABCQi34nSMBwOJIp0rFug6QfjRvmUtWPTk2YuVAHcBkMsaOys7fKkHqhkEaQ6Fgv80CThV6/XS1KddyQdE5pdXts9ZU75io3RTaTzRKmgSzdmcuLhvZc4rV7RtshBWzlJCbEFEUOVb1opgsMkJ7qx9NaNLKulR2gv+9bXHQv95NNKqv+DgS0HSp73AhiizQIpGhVCFMHAEqz/7bWKRxypyDuOCGRfO0MY6PXOM11vjFeVedpCleWqFSeYtuDFo+ucGKX0BhhYQVuadzvfc2kKruumnVC6Wh/Rc1YahqtvgoEFvayP6Ls4jHpv4b7WtIaMIUJ6Wh/Rd16oiUijB8d9c/3e7yvglLVTxCS3CWiiAjNjneO+TgbOzE4quSrM1MMosA98eMCBAlJ2xlFy7P3ODcNBgcsg6yN83RthXOlkwRHARsq6u+Xns75vbjGudGLYSUiu+v2wbwHdRHc9IqqCISyqFHU2prj4Yqjby7BhGzPiZoAfElqpJT/9XitD3x+YrPtmMz4MGqXWktbu0LMDR16m97Ayv47qm216ggDFS1i7qzACY62z7FQub6ERXwXDGKjtxOzuIozI2AtlGxHHYTzxiEBWOjcijsL44hGBLHLQ+CImsPEJDdSDEI8IbJUKLHmsghFxMBiwTFm7BQiIwDeLoB1AhZSbwGjxICZUaQyd9Jki80sou33oUj6jpbpvpmQ0sSnDMuwg3Q+hLPRDGRtMu1kmAV7v7yReizDEI0Lfb4e2NKddsU+gNdoKy3BUyYEQCX2pLfL5lARHAbfhhOBZXdjiERPd8eq4943479rTWHabhHAekWxZdgzdKlZp1JujJKPHJRIBPeIuJF68ck1p39XzkL5D9NRK+TxIVcAvw3Ib2E6icJW9YCGgB/WRNVCFhIQFdlap9T5N88PgZH2YinnYsBKwFdoWnXbWlgJy+C1nIQo0VPBv7+BwoMjB2rrBVsBWyDIdcHIgRU5oyIYmKAqmNBRp4SNaO4eTpfUiFgJ246CUz+IgNqNBZd0d2CRkUFzMv+p0Yzeazlxs1VsfXAthg8LIEaNHWm5TQaI8Rc9jIFgnXwICk/cJpbounAAAAABJRU5ErkJggg==";
;// ./src/assets/images/pa2.png
const pa2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACbFJREFUeAHtnUFsI1cZx7/3PLHYqqGpKJdKsN5y2AOIeKBwoId49wJCu1mLQy9UJEs5wIVNK8GtTVJuIHUTLsulJJHgwgGc3QjBZWMjdS8t2F5AIhzYiRBbpLaqt1VbKfa81+8be7IeZ8Ye2zOeN877SV7PTMZj7/z1fe/7vvfmPQYpRFYLc014JMchk5fAcoyxswCC3nOdU+Y6r24a7ktKie/cwvdDBqImQFhZ8481SCEMUgAJZsNsUYLMc84X8FAe4qEGUtZsCRUbmuUz5p8sUBxlBWxWLxU4BxSLFyE+wQZRE0JU8L00Y+6VQUGUEpAsTfBHr6Foy7ibA7WwUMzdFrQ2VLJMJQQka8P2axVfBUgB2HaW8Z9Nw9wrQcIkKmCrenkZRbuGvyIpFzkuli3keta8tQ0JkYiAreqlIgYj16V6bnJUEhNyogKmzVWOgHUkji5Mso2ciIDt4GR2Fb9uBU4DUm4fyeb6JISMXUCyugznW1PkLsMyEbcam4CnzuoCkRtcfLDOzHIDYiAWAWX1WznJs/un0OqCiK1t5BAxrfrikuDZqhbPQy6L94Sib4iYSAW0/764iia9DScLyRq8J4zzP9j1S6sQIZG5ULt++bpu78Ii1jLze+sQAZEIaN+9vAWSLYMmPExuZ7586yqMydgCavHGIAIRxxJQixcBY4o4chBDAYsWLwLwHrbjh9EYSUBHPAFroIkItjJqdDq0C6VchsJh0EQO5s7LxvzNnWE+M5SAVGGhJB10nhcXDazYmMNUbEK7UKptUnkMtHhxMpelEiTe67AfCC0gFaZ1eWwi5NqdAOEI5UKdoQ+cbYFmYgghLoQZCTdQQN2zkBgWF++bg7qhBrpQG4w1LV4ihHKlfS2wE3XeA01iDHKlfS2wE3VqEiTDWF8rDBSQAhftOpNHMlbo1xEcKCDnLNKOR83oYOUrsFbqK6C2PuXIHaEmfn/wFVBbn3pkOLvmd/yEgORvtfUpSZ7G2PYePGmBmYyv0prk8YtIPXmgzvvUB6szj3dXZzwW2IKsHlWmOC141KORR8AMhyugURrO+ZJn391oVosFHbykglx3MNNlgSLyYd+a2Ci4G8cCtmeE0KQBdKPHTZ0TheroM3240ahBOzbMFFIx408END5oQv3gfbD+95GzTa/D+7TdcrYt3H7QOb76o/Pw8g/Pg4o0YZaavG2jvSsLKZm0aSxInK8+W3HECcP6jQNYWvwcnH3yEVANBtKZ2cNpA7HaPQ+nABIkrHgu9+5/DCrSmXLsOIhJ6zwtQ5E//2kYlkN0tYqSp+GHxlH126kVz22v5s8/Fur8a899AeZmZ6Dy5ruOW6TX4f0P4Ze//Y/TBvoxrMVOkibM5QwOPAcphMS7+Pwdp+X+6+8WHGHCsHTl887r4TUOAsVzz1EXO88l8NRZoCseRY+0/Z2VN2BYyLLoc4c9Ai08/RnP/gOFLZABy3GWsvJZt3gulTffgU10g2Eh8ega9YMHnuMvY9rw6k+/dOJcVaGJbjl2Mp2FlOAnnssrGGH2ChJEkHirmPP1umKlXagU5ziTMhUPqwS5vN6/D7KY779UPSHej7/7lCMekevJ+R70aR+ThnGyQCkfB8UJcnmUZHdD1kKWGASJt3Pzv55j38NrXO9xm3OzhueaKsPRkYaLwRMkyOX9+mcmvPqTL3qOU1u4u///E9cIEm8Lr9FLd1qy8PQToDBzzK4vSlAYvxtPLq/bai4+/7qT27lQO/Y3TC3cEtgrN/4F67/6t+caFG3efu0Z3+8ki9+9/ZbzTilH2BQlCZQWMKzVtIOb17F9fFj2Isu5/do3fMWbx4oMiaeyMGFRVsAXf/EP2PyNNzUIcnlE5Y134OIP7niOkYiUYnQzTeIRkU92FwVkNb3i0Y0PEo9Y+NoTjmvtple83JNnpko8gizwPVDsuffM/E3P/jBW85Vny05/Xy+ueCp2DY1Bg9KIcNnvBOkuZw3r8n6/8XVPGkBMqXhEI4MJ7AqmEkpZILlD4pvPfBZuvDQ/lMujcz+V5fDnO287+1MsHmGx1t0r+1iNKcCUcRUj2L9gGzjF4mElTVYMsOWhmqHMeFCeSD0J0yqeA+P3DElmCNMHudJpijb9oOXzsDtJWqBJJbT2IRdgp3LhQw2AAMMyZiBrCdxUDSqPvfjzf0LtIJksp4CpDI0LVbkNzZqlmsHMUgOTebJCpYZW0BDA3f23ICl2bn4Ej2Eb2tvVpBCO53TiTyGgApp0wdhDATGQUa4dbLuvM5AU1Ce48txToCq27SwN6z7cUpwTXLwHmtRwJPi5M2bJalsgtoPQ8amaVFAj8WjjuAaDceguaFJBZ2Vth4dFNMHLoEkLx4sve6podu2yhdFNasaJnlIs7C895+54ytiCsW3QKA2tZd+97xHQEHwDNErTAsOjkUdAikYZY2XQKAn1/7nRp8uJnkDbZpGsa6eJA3nCQ/p2BYr6Ii2heiqe2k0RnuDFxbcvXgi5CRqloCXN/Y4HdsajFd7TU28pg6/1EYGjYTBcfQE0ShBkfUTf4TDi7pV9OYUj1lJGoPURfcej6Yg0ebDX4UK/v/cVcMYslbHIrQOapMDKWG/e18vAEaFYnVlDP2uBZtJYRyE84EABnTEzgo+93rlmOChwGWR9RKgx2dqVThbMADaz5q3tMOeGHlSvXenEsAww1sKeHFpAp9DdjogaoImLBkWdnSEuoRjqsRa8sIUVcZ3gx4QU4mqYdq+boZ9LMtq+WeeHUSPEumHulYb92MgPJjXrixuovl6mJwpQvIy5twYjMNaTZXb90jYa8RJoxkDsZOb3lmFExn40UIs4DuOJR0TybKcWcRTGF4+I5OHqzg/RgU1IKFGPQjwisqfjsctjDbSIg8GAZcbci2yVuMgfj6cVQBnnW6DY5EEK0KAc2ghZIgtLLPMbyGoxJ7nY10MyjrGowjJskh6GWCYYoYoNlt1MXQBvt3cc70Uc4hGxzzBCS5rTqtin0Botgd1w1JMDMRL7FD/k86kIjgLuwCnBtbq4xSMmOsfPtLeN+P+qSOx2m4RwLolM0jSFbhV7acQLoxSjxyXRWbbSLiTevFpLyNC95zH9huRpVYtF4GIFf0wqloFNwlUGoYSALtRGtkCs0HLoylmllIc0zA+Dk41heszjRikBu6Fl0Wllbc6ggL8ymQUqJdTxu0uYDpRVsDY/lBWwG7JMG+wCcFZgEvKxCYqCCQllmvgoA5mSSpYWRCoE9OOoWsxjEpuTIPLOCmwccigu1l/lXGc1mt5abMOdH1wyZoHAyNGZK1VaAjK1GdpOgWC9fAJ8MUBkYvYBYAAAAABJRU5ErkJggg==";
;// ./src/assets/images/pa3.png
const pa3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAC21JREFUeAHtnUFsG8cVht8MKQIOoppBcnACJKabg3sIKrJIekgKmDJaoC1skcihlwS20/TgXio5QHtrJDm3FIilXtpDbctBeumhlW2h7qGxqENzqNOSdJODD7ZXKeDm4KJ0jLaAxJ3JvCWXXlK75JDc5T5K8wE0V9wll96f7817b2ZnGIwhspxPb8NjGQ6JrASWYYwdBBD4nGkekm4+vNTch5RSPXNLPW8yEBUBwkrl/liBMYTBGICC2TBZlCCznPMj6qUsREMFpKzYEjZs2C7ty/3JAuKQFXC7fCzPOSixeBGiE6wXFSHEhnpencitlYAgpARESxP88Vkl2in1ZwZoYSkxL9ehvkTJMkkIiNam2q959cjDGKDazpL6ZzmZW1uFmIlVwHr5+Ckl2qz6FnG5yGGxbCEXU7mrKxATsQhYLx8rqmDknKTnJgclNiFHKuC4ucoBsLbE1vQo28iRCNgITibn1enmYC8g5cqW3F4chZCRC4hWl+D84i5yl7qMxK1GJuCes7pA5BIXDxdZrlSDCIhEQFn+bkby1PoetLogImsbOYRMvTpzUvBU2YjXRialrglG3xAyoQpo/2NmXpn0CuwsJBvUNWGc/8GuHpuHEAnNhdrV4+dMe6eLWEhMrS1CCIQioH3z+EWQ7BQY9GFyJfH1q2/AkAwtoBFvCEIQcSgBjXghMKSIAwcxGLAY8UJAXcNG/DAYAwnoiCdgAQwhweYGjU77dqGYy2A4DIbQUbnzqeTUlUv9vKcvAbHCgkk6mDwvKmqqYpPrp2Kj7UKxtonlMTDiRUk6hSVIda1136AtIBamTXlsJGQanQB6aLlQZ+gDZxfBMDKEENM6I+F6Cmh6FmLD4uKLXK9uqJ4u1IbkghEvFrRcaVcLbEadd8EQG71caVcLbEadhhhJMNbVCgMFxMDFuM74kYzlu3UEBwrIOQu149EwOKryFVgr9RXQWB85MltKE78dvgIa66NHgrNZv9d3CIj+1lgfSbI4xrbzxZ0WmEj4Km2IH7+ItC0PNHkffVR15glvdabNAuuQGvtRZbWH23Dm3U/gyW9dcx4//HkZNu/9r23/OFOHx9s0arNAUZ25Oy7tHwrxy9/egdXrn8Pff3fEec1SQh1986M2wZDMM4/B39Qx6ckJ5+9X5/7qbM//+DAcVPvGDCsxdeWQ+0dLwO1yMc+5IF95QeHO/voWLH9wx/n7w/OvQP7FJ51tFG/j4/u+7zvy4lNw/fzLzvbGjftw9EcfOdsnZ54dOyG95TWPCxWhD/sOm+UPbsPz3/tzSzwUxRXv0pV/BoqH4D48xnnfS0+p9z56Hwrv7hsT8u5GS8DGjBB0eesXn6jHp21t2OxrLU8Ci7+61fMzznqOmT99uLWNrhfbyrdU2zkOcM4LrW38B6NPAJr3qaNgaCGu1blkntkHhaNPO9toPZ3tnh8o1MbH/3a20QrTk8m2/cuqTcVzjUGgk3WHXTgC2jCRB6K8OnfD1zWi+3S5fP1foIvXUk/MPLdjP54Lz0mdbZh0mrymC5V5IAi6zaB27UShcfHRWi6vfw66VG89aFlYcfqA7zF4TurulIF0PKYjoKp2TwEx0C12uk0vbvDiukRdUDyMQpGpr+0PPA7d6ftXPgOqNKccawUxpNo/bKu6BSVe91m6ERx5BlFqio65oBuN+nHm3U8pt4dOO8i3yt8nF7ygeN2CkqnDX2lt92uBjffc93xWsBU6OadGdBsX25DOqOyBZ4AQaH3v98jJMp6kG9u0fqne+qK13U1ABF0pXSu0s0kJPEttysIPf/Ny1/3ZZtuFF7bXsb0oHj2gfhDDfUZcMGAZVi/PrDAOJ8EwdkjJVpKqk+mg2gIKoEU90HBXbt1S93g/9qsAxi1u6xQBvMeTQYpDSSYlmZtVLl3+zCmXdQPbv9vXvu1sY5qBhe1BeFuV0rCIjUz79GB08t5PX4DZ178KlGCcHeTK+p4AIuhElPs95S9Lw3KC8AqmY1mDBEujgANj+4EI1r3/9zwmPZlqbT8IKTrsrIn6MUi6MgLSmMiTcaGb9/7b1/HDhPfeH4tOXyDRVCId+lRbw1B7WO95jI61RAHVXJCUgDqQiwRjhpSAOtYVhSXotKVUfzgoYCTzWA7Cfk+AEoTXzQ4zjsX7Y6lp5Z77gCA1TCPIxMdZT5E6iNrDLQiDfi0qQ3PQU42UC+3WtePywGOBw7g1r/XqpC/eLixC1Fj9ZmFdVWPyQAB0ZTruLOMppQ3aJqY9pTGdgkCaYClNCrmRBFtuUgll+r1IYV1Uou6xN4zfVd1JYFHqTkKL8vbX+YEduq5wg1ZI3M/QOR+OgKM48BeXz0sykBa1RcyOvvmXrvsvnM3BycKzWscGYVdnnGedAvqdZvGcGrj2IRdgk1r4EK3iJ691r/pXPIXlXj3qfniHZPQKYHDoPdVh9wKSFp+AlAXEwG6ebkm91+XpRK6deCPKbr0M6DrdLieKpHKrFc5yq5jIk7PCt08HXzgclORGn/mX+g/v3SGJzhDDLm0ofgfCN704mjnxpxCwAcSYff35rq7UtUK0wH4L3EeaoncTD899svAckIWxRwKqQIbkAsDnfvZCoItcbQ6nR2vtpx0sTB9oRbCrAUPy8Rg8N2Vs21katiFgAhKxr0QZxO+Xvukronfo4fxp/Xaq4BlO72eBeK4L7+SAOjYkSvjcsECC7aALWsv186/scKfe9gtdok6xGYMS1y363dGE58BzjUGXVWVfbtXCjVYNRgBcBsKgS7twNtsm1GLA/X5BeAMjzP9csA298E6WvNt0aa6s7fCoiCZ4CYiD1oMWcmKmkcRjNOpaIe7rllLgPtf68OYW931odbevfUfle4QDlp20mry2EoxdOW6p6OYgjAHuDTDYGYvtpPsaVmY2O5JzdJ0ovJsSfOMHJactxEh3DHv4/Sc5QLarMwvKJMdumi1sD709CyjslfVGhFmYfhreU65xtwzFUO5zeSK31ppqpGOin2JacPEfMJBlS/BDbgCDtHUkYTTKGCuBgSTY/+cVD9nRE2jbLJR17QxRIJc6X/HtRxLVGVxCleSsFXuYtuDFxbcvXgi5DAZS4JLmfq8H9uSO07xpewBf60MCR8OocPUMGEgQZH1I17EU4mZhXRIZsbaHCbQ+pOt4NBORxo/K+6a77e8q4ERutaSK3CagiQvGVjrzvk56jghNCr6g/KwFhlFjbWl4wJ4CYnXGFnzo9c4N/YGBSy/rQ7TGZBtXOlqwYJ3KXV3ROVZ7UL1xpSPDSkJyQfdgbQGdQncjIiJzP+EupIZRZ3OIixZ93daiPthSFXGT4EeEFOINnXbPS9/3JSUbvtnkh2EjxGIyt9b36MCB72pRvfdLSn2zTE8YKPESubUFGIChbkuyq8dWlBGbifKGQlxKTK2dggEZ+r4yI+IwDCceEsqNgUbEQRhePCSUm6ubX8QENppgoh6GeEhod8erLo8FMCL2RgUs3mGBwxL6vdW4Aijj/CIQmkSPCDXMoZOaJTJdIrk5XpaLGcnFuhmS0cLCCku/SboOkUwwghUbVXbLmQJ4o73j6lpEIR4S+fQUuKQ5roq9B63REqobDntyIEIin+IHfT4WwZWAl2CP4Fpd1OIhI50gZre3jer/tSFVt9sohHOJZYafXehWVS+NODNIMXpYYp2iadyFVBevUhdSu/c8ou8QP/VysQhczKkvQ3oZWJc4XGUQJAR0wTayDmIuwaFAziql3MRhfio4WeqnxzxqSAnoBZdFx5W1OYO8+pbxLFApoarOvarSgRIFa/ODrIBe0DJtsPPAWZ5JyEYmqBJMSCjhxEc4dw4lSwtiLAT0Y6tczKokNiNB4PJ5GZXRZpS4qv4q083VaDprsTV3fnDJmAVCRY7OXKnSEpCoTOD2GAjWyZeUGdtnW+UwzgAAAABJRU5ErkJggg==";
;// ./src/assets/images/pa4.png
const pa4_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/pa5.png
const pa5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACiJJREFUeAHtnU1sG8cVx98MKQIOIotBekgKBKZdoC7QouKmTQ9tAVNGC7SFLRE99NKglptLeqnkAO0tkeTcGqCWcmkuiaQgveTQyraQ9FDE1KE99ItkmgJ1gdqrBAlySBDaBhJA5M7kvSWXJqkluSR3ObPU/ACaXHop0fv3e/M+ZmcYxBBZzKWr8ECGQyIrgWUYYycABD1nGqekG49WKt5DSonP3MbnfQaiJEDYKeuNEsQQBjGABHNgOi9BZjnnZ/CtLERDCaQsORL2HKgWjll/skFztBWwWjyX4xxQLJ6H6ATrR0kIsYfPO1PWbgE0RCsBydIEf3AJRVvEwwzohY1iXq1BbV0ny9RCQLI2HL9W8JGDGIBjZwH/2EhauzugGKUC1ornF1G0JfwWqlzkqNiOkGsp6/oWKEKJgLXiuTwGI1ekfm5yWJQJOVYB4+Yqh8A+EAdz4xwjxyJgPTiZXsFftwxHASm3DmR1bRxCRi4gWV2C880JcpdBGYtbjUzAI2d1XZHrXNxbY1ahAhEQiYCy+IOM5KkbR9DquhHZ2MghZGrl+QuCp4pGvDYyKbwmFH1DyIQqoPPv+RU06S04XEg24DVhnP/RKZ9bgRAJzYU65fNXzHgXFLGamN1dgxAIRUDn7fObINkiGILD5Fbi69cvwoiMLKARbwRCEHEkAY14ITCiiEMHMRSwGPFCAK9hPX4YjqEEdMUTsAqGkGDLw0anA7tQymUoHAZD6GDuvJicvbY9yGcGEpAqLJSkg8nzoqKCFRtrkIpNYBdKtU0qj4ERL0rSKSpB4rUO+oHAAlJh2pTHxkKm3gQIRiAX6k594GwTDGNDCDEXZCZcXwFNZ0EZNhd3rX5tqL4u1IHkqhFPCYFcaU8LbESdt8GgjH6utKcFNqJOg0ISjPW0wq4CUuBiXKd6JGO5Xo3grgJyzkJtPBqGBytfXWulvgIa69OOzAFq4vcXvgIa69OPBGdLfu8fEpD8rbE+LcnSHNvONw9bYCLhq7RBPX4RaVseaPI+/cHqzEOt1Zk2C6xByswq05waPNimUZuACQ4LYNAazvmFtmPvRbWYz5ngJRZkWoOZFgsUoU/7NkRGznvRFLC+IoQhDqAbbQ51bhRqos/44UWjSTpwYCqncrWDs0/9Fco370DlXrXrORfmH4NXnreax4nZa6CCzBcfgH++fgbS01OgkipM05C31XChMgeKuHrjQ9j7x0c9xdMJ+4NP3YdqGEh3ZQ/XArHaPQuK+ORuPIQj0tNJ+OVPT0H29AyoprHkWF1AgNiu0zJWXnn+cViYewQ0IUvTD/lB8UdGvICc+ebDoBNVSGcwe+AZOKJQYDSIRf382SLsazD+3cfJJiXwbCzWnAzIc09/GRbOPupGifb7n8L2tffgVXx00hrVPvzdNzCIqvX92fWA62N46+Vvw6wG4yADlkmyCSqf/fZXX4WlJ7/kviZLyT3xBfdBYr74+1tt56784rT7TAIHEc+DouXSf+/qISBjJzg2mU7ABEAieeKt/e4mnPrhn11rIZaePNV2LlnfCcznvHMHgcbB3BOajIVSnORMSqU3q1hfOY4X8xiMSqtFUF5JFP5ef6bkm1IAj1brG2RMIwt/6+XvNMVXDeNkgVI+BAqhC3/rze+71Y0whCS8KklrcWBmOuU+D2t9rRauExwdqXpnjlByvHnZgmGp3Dtovp5pCNha7vIsbVjro/8MnkvWiDSV0rS53+8MBhzDsv/BZ02Ly599xE0PFhcec4/3Gq7Uz/rItc6ePu6Obf08wNmn/gLP/OYd0Ih06EttjcIo9VD67OWGKAtzj8If1r/likXvX3rhP+77ndb3MxT0/+i+//V6zh3byJXTONeLDYxmdbLEJGjE9tV3YRTo4lKuRsJQ4FLCDserbppQPWR9GbS2K7/+mutmqRNSunnXPYfGOfc/w0v/6/p7Zqb1uWxafBO6YJSnDRrS+0GdgssvHf45ndZHLtYbIy8+W3JFJFdKYzEVAvwEJNGfe/q0FsVsDxKQpqgpGwfJYn68/DeIEv+x736A47nuMiboJE63Xp9OKUSDCqURd0Ah42gnBY08031c44ziJq4PFa2CmCjolve1BkyZRvQ5c7yeK+6/7y/yN36yp1kxGwWUnE/0XJhu1keRpHdMRW2KPnONdtGWT/GboPH1cRRRl9kDUsg7HBy5DxMKBSrdqi4kAs3FISEpYqXokwR95oV3fLsXrZ+jiFULGL+N7SSwJ6md1EoZL/TGa7fc2qif6yOLouR8ENxitiaNXdo+D9tJ0o7JLnQDYzcsKixuvfk9raJQ2vuQC3BiufHhuKEcUbMUAgQkbT4FKRsMfSF3rFsxO2XtlDizdiiRN1YYABovNzo6+wpxNXPzQCFgDxRxMqQe4Lh48TVNBGTsvoAYyCizQGoh0WRZ3caXbsxrMi/UcdytYb2bW/JpwcUnYIgNB4KfPGbt2HULNONg3CiRePSiWQsV2BgAQyxo7Kztcr+YLXgBDHGhuflyWwnGKZ23MbqZiHmiE4ydmL120jtoaycJxrbAoDW0l33rcZuAScHXwaA1NUi2adQmIEWjjLECGLQE+397XvTpcagj7zgslH3tDFEgD3lI3z6SKM/TFqrmxk+9aAtePHznxAghN8CgFbSlud/7XTu5aIW3zdJb2uBrfUTXWWkYrl4CgxZ0sz6i51wK8fbCDSnVrSFjcOlqfUTPeaEmIlUPdh3mev19TwGnrJ0CFrlNQKMKrIx15n2d9J2ZjdWZVfSzNhjGjX0QwAP2FZCqM47gI+93bhgMClz6WR8R6N4I40rHC2YAGynr+laQcwPf3GJc6diwk5BcDXpyYAHdQnc9IqqAISoqFHU2prgEYqDby/AH21gRNwl+REghLgYZ91oZ+P7AZN03m/wwbIRYS1q7O4N+bOi7Wqrl+XVU32zTEwYoXsLaXYUhGOm2JKd8bguN+AIYRkBsJ2Z3F2FIRr6vzIg4CqOJR4RyY6ARcRhGF48IZZGDxhcxgU1AKFEPQzwitFUqsOWxCkbE/mDAMmXthrZLXOj3VtMOoIzzTdBoET1NqFAOnQxYIgtKJDfHy2I+I7m4YaZkNLGpwjJokh6ESBb6oYoNlt0sUwCvj3ccr0UU4hGRL09BW5rTrthH0BptgW046uRAhES+1Bb5fCqCo4DbcETwrC5q8YixLhAz6WMj/rv2JLbdxiGch5IVfibQrWKXRlwaphg9KkqXaIq7kHjxSjUhA3fPI/oO6qkV83ngYhm/TCy2gVXhKruhhYAeNEbWQCzTdujaWaWU+zTND4OT9UE65lGjlYCt0LbotLM2Z5DDb6lmg0oJZfzdO5gOFHSwNj+0FbAVskwHnBxwlmMSspEJioIJCQVa+CgBiR2dLK0bsRDQj4NiPotJbEaCyLo7sHHIoLhYf5Xpxm40nbXYirc+uGTMBoGRo7tWqrQFJEpT9DoGgnXyOTfYQERj4LDgAAAAAElFTkSuQmCC";
;// ./src/assets/images/pa6.png
const pa6_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/pa7.png
const pa7_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/pa8.png
const pa8_namespaceObject = "data:image/png;base64,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";
;// ./src/components/index/comm3.jsx











const comm3_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm3_title {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
    	padding: 30px 0px 20px;
	}
	.comm3_flex {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		margin: 0 15px;
	}
	.comm3_conter {
		background: #fff;
		border-radius: 10px;
		padding: 15px;
		img {
			width: 60px;
		}
	    span {
			display: block;
		}
		em {
			display: block;
			font-size: 15px;
			font-weight: bold;
			padding: 10px 0 5px;
		}
		i {
			display: block;
			font-size: 12px;
			color: #454545;
			line-height: 18px;
		}
	}
`;
function Comm3() {
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
  return /*#__PURE__*/react.createElement(comm3_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm3_title"
  }, t("SwarmFi Node Benefits")), /*#__PURE__*/react.createElement("div", {
    className: "comm3_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Node Gift")), /*#__PURE__*/react.createElement("i", null, t("Enable Multi-Channel Earnings:")), /*#__PURE__*/react.createElement("i", null, t("50% Deposit")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Value-Added Earnings")), /*#__PURE__*/react.createElement("i", null, t("Stable Compound Growth:")), /*#__PURE__*/react.createElement("i", null, t("+1.5% Per Period")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Planet Storm")), /*#__PURE__*/react.createElement("i", null, "30% x 20% x 15%"))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Withdrawal Fee")), /*#__PURE__*/react.createElement("i", null, t("Fee Rebate Dividends:")), /*#__PURE__*/react.createElement("i", null, "2% x 15%"))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("After-Tax Net Profit")), /*#__PURE__*/react.createElement("i", null, t("Minimum 3,000U, 10% x 15%")))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa6_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Profit Tax")), /*#__PURE__*/react.createElement("i", null, t("After-Tax Income Redistribution:")), /*#__PURE__*/react.createElement("i", null, "25% x 15%"))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa7_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Buy Slippage")), /*#__PURE__*/react.createElement("i", null, t("Trading Friction Earnings:")), /*#__PURE__*/react.createElement("i", null, "3% x 20%"))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: pa8_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Sell Slippage")), /*#__PURE__*/react.createElement("i", null, t("Liquidity Provision Rewards:")), /*#__PURE__*/react.createElement("i", null, "10% x 20%")))));
}
/* harmony default export */ const comm3 = (Comm3);
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






function Index() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(comm1, null), /*#__PURE__*/react.createElement(node, null), /*#__PURE__*/react.createElement(comm3, null), /*#__PURE__*/react.createElement(comm4, null), /*#__PURE__*/react.createElement(comm5, null));
}
/* harmony default export */ const index = (Index);
;// ./src/assets/images/coming.png
const coming_namespaceObject = __webpack_require__.p + "6bb3989f117e757292b4.png";
;// ./src/components/power/main.jsx




const main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	text-align: center;
	img {
	    margin-top: 50px;
	}
	span {
	    display: block;
    	margin-top: -70px;
		font-size: 14px;
    	color: #454545;
	}
`;
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
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, /*#__PURE__*/react.createElement("img", {
    src: coming_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Coming Soon")));
}
/* harmony default export */ const main = (Main);
;// ./src/pages/power/index.jsx


function Power() {
  return /*#__PURE__*/react.createElement("div", {
    className: "conter_top"
  }, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const power = (Power);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(7308);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(4716);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(3567);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(7965);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/assets/images/copy.png
const copy_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAKpJREFUeAHVkiEOwkAQRT8FgUQikUgkEhyOM3ADkKgegSNwBTgBwVX2CK2rbG/QP9ltM2l2TCva/uRlM7s7fzY7A4ytRWBvR2K/hlSSB8kkWAYuvMmFFIbBkWzJV4KoU1mST7Ar30gK9bqVuvDyyalhIGdxd1MbbHzy2TD4IfAvEQZqfgYHT9XXQPQh9ybQXcjJFe63rep/uFlopSdRWrgna8MgIU+4gZqQarlAFnGEL0KOAAAAAElFTkSuQmCC";
;// ./src/components/team/main.jsx
















const team_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
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
  const [directCount, setDirectCount] = (0,react.useState)(0);
  const [teamCount, setTeamCount] = (0,react.useState)(0);
  const [teamTotal, setTeamTotal] = (0,react.useState)(0);
  const [teamReward, setTeamReward] = (0,react.useState)(0);
  const [teamList, setTeamList] = (0,react.useState)([]);
  const [loading, setLoading] = (0,react.useState)(true);
  const [tabon, setTabon] = (0,react.useState)(1);
  const [invitationUrl, setInvitationUrl] = (0,react.useState)(0);

  // 生成我的邀请链接
  const handleInvitationLink = () => {
    const currentURL = new URL(window.location.href);
    const origin = currentURL.origin;
    const url = origin + "?invitation=" + address;
    setInvitationUrl(url);
  };

  // 查询我的邀请人列表
  const handleReferrerList = async () => {
    setLoading(true);
    const list = await ContractReferrer.referrerList(address, ContractsAddress.BindAddress, ContractsAddress.NodeAddress);
    setLoading(false);
    setTeamList(list);
  };
  (0,react.useEffect)(() => {
    if (address && chain) {
      // 生成我的邀请链接
      handleInvitationLink();
      // 查询我的邀请人、直推数、团队总数
      // handleReferrer();
      // 查询我的邀请人列表
      handleReferrerList();
    } else {
      setLoading(false);
    }
  }, [address, chain]);
  const handleCopy = text => {
    if (copy_to_clipboard_default()(text)) {
      message/* default */.Ay.success(t("Copy successful"));
    }
  };
  return /*#__PURE__*/react.createElement(team_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_title"
  }, t("Team Information")), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team count")), /*#__PURE__*/react.createElement("i", null, teamCount)), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Direct count")), /*#__PURE__*/react.createElement("i", null, directCount))), /*#__PURE__*/react.createElement("div", {
    className: "tem_info"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team Performance")), /*#__PURE__*/react.createElement("i", null, teamTotal)), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Team Incentives")), /*#__PURE__*/react.createElement("i", null, teamReward))), /*#__PURE__*/react.createElement("div", {
    className: "tem_conylink"
  }, /*#__PURE__*/react.createElement("span", null, t("My superior")), referrerAddress === constants_address/* zeroAddress */.X ? /*#__PURE__*/react.createElement("span", null, t("None")) : /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      handleCopy(referrerAddress);
    }
  }, referrerAddress ? `${referrerAddress.substring(0, 6)}...${referrerAddress.substr(-4)}` : '--', /*#__PURE__*/react.createElement("img", {
    src: copy_namespaceObject,
    alt: ""
  }))), address && /*#__PURE__*/react.createElement("div", {
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
  }, t("Recommended List")), /*#__PURE__*/react.createElement("span", {
    className: tabon === 2 ? 'on' : '',
    onClick: () => {
      setTabon(2);
    }
  }, t("Reward Details"))), tabon === 1 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, t("Wallet address")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, t("Performance")), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, t("Team Performance"))), !loading ? /*#__PURE__*/react.createElement("div", null, teamList.length > 0 ? teamList.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index,
    className: "tem_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid1"
  }, item.address.substring(0, 6), "...", item.address.substr(-4)), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid2"
  }, item.total_amount), /*#__PURE__*/react.createElement("span", {
    className: "tem_list_wid3"
  }, "0"))) : /*#__PURE__*/react.createElement("div", {
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




const dividend_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	text-align: center;
	img {
	    margin-top: 50px;
	}
	span {
	    display: block;
    	margin-top: -70px;
		font-size: 14px;
    	color: #454545;
	}
`;
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
  return /*#__PURE__*/react.createElement(dividend_main_CustomStyle, null, /*#__PURE__*/react.createElement("img", {
    src: coming_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Coming Soon")));
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
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(LayoutProvider, null, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(footer, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/power",
    element: /*#__PURE__*/react.createElement(power, null)
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
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
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

/***/ 7790
() {

/* (ignored) */

/***/ },

/***/ 2038
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Select Language":"Select Language","Home":"Home","Power":"Power","Dividend":"Dividend","Team":"Team","Ecology":"Ecology","Coming Soon":"Coming Soon","Partner":"Partner","Follow us":"Follow us","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.","SwarmFi Node Recruitment":"SwarmFi Node Recruitment","Starter":"Starter","Advanced":"Advanced","Premium":"Premium","Supreme":"Supreme","Subscription Amount":"Subscription Amount","Contribution value":"Contribution value","Approve":"Approve","SwarmFi Node Benefits":"SwarmFi Node Benefits","Node Gift":"Node Gift","Enable Multi-Channel Earnings:":"Enable Multi-Channel Earnings:","50% Deposit":"50% Deposit","Value-Added Earnings":"Value-Added Earnings","Stable Compound Growth:":"Stable Compound Growth:","+1.5% Per Period":"+1.5% Per Period","Planet Storm":"Planet Storm","Dual-Track Ecosystem Incentives:":"Dual-Track Ecosystem Incentives:","Withdrawal Fee":"Withdrawal Fee","Fee Rebate Dividends:":"Fee Rebate Dividends:","After-Tax Net Profit":"After-Tax Net Profit","Compliant Tax Optimization:":"Compliant Tax Optimization:","Minimum 3,000U, 10% x 15%":"Minimum 3,000U, 10% x 15%","Profit Tax":"Profit Tax","After-Tax Income Redistribution:":"After-Tax Income Redistribution:","Buy Slippage":"Buy Slippage","Trading Friction Earnings:":"Trading Friction Earnings:","Sell Slippage":"Sell Slippage","Liquidity Provision Rewards:":"Liquidity Provision Rewards:","My SwarmFi Node":"My SwarmFi Node","Tier":"Tier","Node ID":"Node ID","Game Ecology":"Game Ecology","Mint":"Mint","Bind":"Bind","Recommended address":"Recommended address","Referral wallet address":"Referral wallet address","Bind successful":"Bind successful","Confirm":"Confirm","Invalid referrer wallet address format":"Invalid referrer wallet address format","Incorrect binding address":"Incorrect binding address","Please bind the inviter first to make a purchase":"Please bind the inviter first to make a purchase","Insufficient Balance":"Insufficient Balance","Mint successful":"Mint successful","Dividend value":"Dividend value","Team Information":"Team Information","Team count":"Team count","Direct count":"Direct count","Team Performance":"Team Performance","Team Incentives":"Team Incentives","My superior":"My superior","My invitation link":"My invitation link","Recommended List":"Recommended List","Reward Details":"Reward Details","Wallet address":"Wallet address","Performance":"Performance","Source address":"Source address","Date":"Date","Copy successful":"Copy successful","Quantity":"Quantity","":""}');

/***/ },

/***/ 8062
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Ikonekta ang Wallet","Select Language":"Pumili ng Wika","Home":"Home","Power":"Kakayahan","Dividend":"Dividendo","Team":"Team","Ecology":"Ekolohiya","Coming Soon":"Darating Na","Partner":"Kasosyo","Follow us":"I-follow kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Ang SwarmFi Protocol ay isang desentralisadong imprastraktura sa pananalapi na nakatuon sa pagbabago ng Real World Assets (RWA) sa pamantayan, mapapatunayan, at likidong on-chain na mga asset.","SwarmFi Node Recruitment":"Pangangalap ng SwarmFi Node","Starter":"Starter","Advanced":"Advanced","Premium":"Premium","Supreme":"Supreme","Subscription Amount":"Halaga ng Subskripsyon","Contribution value":"Halaga ng Kontribusyon","Approve":"Aprubahan","SwarmFi Node Benefits":"Mga Benepisyo ng SwarmFi Node","Node Gift":"Regalo ng Node","Enable Multi-Channel Earnings:":"Paganahin ang Multi-Channel na Kita:","50% Deposit":"50% Deposito","Value-Added Earnings":"Kita na may Idinagdag na Halaga","Stable Compound Growth:":"Matatag na Paglago ng Compound:","+1.5% Per Period":"+1.5% Bawat Panahon","Planet Storm":"Planet Storm","Dual-Track Ecosystem Incentives:":"Dalawahan na Insentibo ng Ekolohiya:","Withdrawal Fee":"Bayad sa Pag-withdraw","Fee Rebate Dividends:":"Dividendo sa Rebate ng Bayad:","After-Tax Net Profit":"Netong Kita Pagkatapos ng Buwis","Compliant Tax Optimization:":"Pagsunod sa Pag-optimize ng Buwis:","Minimum 3,000U, 10% x 15%":"Minimum na 3,000U, 10% x 15%","Profit Tax":"Buwis sa Kita","After-Tax Income Redistribution:":"Muling Pamamahagi ng Kita Pagkatapos ng Buwis:","Buy Slippage":"Buy Slippage","Trading Friction Earnings:":"Kita sa Friction ng Trading:","Sell Slippage":"Sell Slippage","Liquidity Provision Rewards:":"Gantimpala sa Pagbibigay ng Liquidity:","My SwarmFi Node":"Aking SwarmFi Node","Tier":"Antas","Node ID":"ID ng Node","Game Ecology":"Ekolohiya ng Laro","Mint":"Bumili","Bind":"Itali","Recommended address":"Inirerekomendang address","Referral wallet address":"Pakilagay ang wallet address ng referrer","Bind successful":"Matagumpay na natakda","Confirm":"Kumpirmahin","Invalid referrer wallet address format":"Di-wasto ang format ng wallet address ng referrer","Incorrect binding address":"Mali ang address na itinakda","Please bind the inviter first to make a purchase":"Pakitali muna ang nag-imbita bago bumili","Insufficient Balance":"Hindi Sapat ang Balanse","Mint successful":"Matagumpay na nakabili","Dividend value":"Halaga ng Dividendo","Team Information":"Impormasyon ng Team","Team count":"Kabuuang bilang ng team","Direct count":"Bilang ng direktang rekomendasyon","Team Performance":"Pagganap ng Team","Team Incentives":"Mga Insentibo ng Team","My superior":"Aking superyor","My invitation link":"Aking link ng imbitasyon","Recommended List":"Listahan ng Rekomendasyon","Reward Details":"Mga Detalye ng Gantimpala","Wallet address":"Wallet address","Performance":"Personal na pagganap","Source address":"Pinagmulang address","Date":"Petsa","Copy successful":"Matagumpay na nakopya","Quantity":"Dami","":""}');

/***/ },

/***/ 7352
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Hubungkan Dompet","Select Language":"Pilih Bahasa","Home":"Beranda","Power":"Daya","Dividend":"Dividen","Team":"Tim","Ecology":"Ekologi","Coming Soon":"Segera Hadir","Partner":"Mitra","Follow us":"Ikuti Kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Protokol SwarmFi adalah infrastruktur keuangan terdesentralisasi yang fokus pada mengubah Aset Dunia Nyata (RWA) menjadi aset on-chain yang terstandarisasi, dapat diverifikasi, dan likuid.","SwarmFi Node Recruitment":"Rekrutmen Node SwarmFi","Starter":"Pemula","Advanced":"Lanjutan","Premium":"Premium","Supreme":"Agung","Subscription Amount":"Jumlah Langganan","Contribution value":"Nilai Kontribusi","Approve":"Setujui","SwarmFi Node Benefits":"Manfaat Node SwarmFi","Node Gift":"Hadiah Node","Enable Multi-Channel Earnings:":"Aktifkan Pendapatan Multi-Saluran:","50% Deposit":"Deposit 50%","Value-Added Earnings":"Pendapatan Nilai Tambah","Stable Compound Growth:":"Pertumbuhan Majemuk Stabil:","+1.5% Per Period":"+1.5% Per Periode","Planet Storm":"Badai Planet","Dual-Track Ecosystem Incentives:":"Insentif Ekologi Jalur Ganda:","Withdrawal Fee":"Biaya Penarikan","Fee Rebate Dividends:":"Dividen Pengembalian Biaya:","After-Tax Net Profit":"Laba Bersih Setelah Pajak","Compliant Tax Optimization:":"Optimalisasi Pajak yang Patuh:","Minimum 3,000U, 10% x 15%":"Minimum 3.000U, 10% x 15%","Profit Tax":"Pajak Keuntungan","After-Tax Income Redistribution:":"Redistribusi Pendapatan Setelah Pajak:","Buy Slippage":"Slippage Beli","Trading Friction Earnings:":"Pendapatan Gesekan Perdagangan:","Sell Slippage":"Slippage Jual","Liquidity Provision Rewards:":"Hadiah Penyediaan Likuiditas:","My SwarmFi Node":"Node SwarmFi Saya","Tier":"Tingkat","Node ID":"ID Node","Game Ecology":"Ekologi Game","Mint":"Beli Cepat","Bind":"Ikat","Recommended address":"Alamat yang Direkomendasikan","Referral wallet address":"Masukkan alamat dompet perujuk","Bind successful":"Pengikatan berhasil","Confirm":"Konfirmasi","Invalid referrer wallet address format":"Format alamat dompet perujuk tidak valid","Incorrect binding address":"Alamat pengikatan salah","Please bind the inviter first to make a purchase":"Harap ikat pengundang terlebih dahulu untuk melakukan pembelian","Insufficient Balance":"Saldo Tidak Mencukupi","Mint successful":"Pembelian berhasil","Dividend value":"Nilai Dividen","Team Information":"Informasi Tim","Team count":"Jumlah Tim","Direct count":"Jumlah Rujukan Langsung","Team Performance":"Kinerja Tim","Team Incentives":"Insentif Tim","My superior":"Atasan Saya","My invitation link":"Tautan Undangan Saya","Recommended List":"Daftar yang Direkomendasikan","Reward Details":"Rincian Hadiah","Wallet address":"Alamat Dompet","Performance":"Kinerja Pribadi","Source address":"Alamat Sumber","Date":"Tanggal","Copy successful":"Salinan berhasil","Quantity":"Kuantitas","":""}');

/***/ },

/***/ 4175
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"ウォレット接続","Select Language":"言語選択","Home":"ホーム","Power":"計算力","Dividend":"配当","Team":"チーム","Ecology":"エコシステム","Coming Soon":"近日公開","Partner":"パートナー","Follow us":"フォローする","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFiプロトコルは、現実世界の資産（RWA）を標準化、検証可能、かつ流動性の高いオンチェーン資産に変換することに特化した分散型金融インフラです。","SwarmFi Node Recruitment":"SwarmFiノード募集","Starter":"スターター","Advanced":"アドバンスド","Premium":"プレミアム","Supreme":"スプリーム","Subscription Amount":"申込金額","Contribution value":"貢献価値","Approve":"承認","SwarmFi Node Benefits":"SwarmFiノードの利点","Node Gift":"ノード特典","Enable Multi-Channel Earnings:":"マルチチャンネル収益の有効化：","50% Deposit":"50%入金","Value-Added Earnings":"付加価値収益","Stable Compound Growth:":"安定した複利成長：","+1.5% Per Period":"毎期+1.5%","Planet Storm":"プラネットストーム","Dual-Track Ecosystem Incentives:":"エコシステムインセンティブの二重構造：","Withdrawal Fee":"出金手数料","Fee Rebate Dividends:":"手数料還元配当：","After-Tax Net Profit":"税後純利益","Compliant Tax Optimization:":"準拠した税務最適化：","Minimum 3,000U, 10% x 15%":"最低3,000U、10% x 15%","Profit Tax":"利益税","After-Tax Income Redistribution:":"税後所得の再分配：","Buy Slippage":"買いスリッページ","Trading Friction Earnings:":"取引摩擦収益：","Sell Slippage":"売りスリッページ","Liquidity Provision Rewards:":"流動性提供報酬：","My SwarmFi Node":"マイSwarmFiノード","Tier":"レベル","Node ID":"ノードID","Game Ecology":"ゲームエコシステム","Mint":"購入","Bind":"バインド","Recommended address":"紹介アドレス","Referral wallet address":"紹介者のウォレットアドレスを入力してください","Bind successful":"バインド成功","Confirm":"確認","Invalid referrer wallet address format":"紹介者のウォレットアドレスの形式が正しくありません","Incorrect binding address":"バインドアドレスが正しくありません","Please bind the inviter first to make a purchase":"購入するにはまず招待者をバインドしてください","Insufficient Balance":"残高不足","Mint successful":"購入成功","Dividend value":"配当価値","Team Information":"チーム情報","Team count":"チーム総人数","Direct count":"直接紹介者数","Team Performance":"チーム実績","Team Incentives":"チームインセンティブ","My superior":"私の上位者","My invitation link":"招待リンク","Recommended List":"紹介リスト","Reward Details":"報酬明細","Wallet address":"ウォレットアドレス","Performance":"個人実績","Source address":"ソースアドレス","Date":"日付","Copy successful":"コピー成功","Quantity":"数量","":""}');

/***/ },

/***/ 6628
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"지갑 연결","Select Language":"언어 선택","Home":"홈","Power":"연산력","Dividend":"배당","Team":"팀","Ecology":"생태계","Coming Soon":"출시 예정","Partner":"파트너","Follow us":"팔로우하기","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi 프로토콜은 실물 자산(RWA)을 표준화되고 검증 가능하며 유동성 있는 온체인 자산으로 전환하는 데 초점을 맞춘 탈중앙화 금융 인프라입니다.","SwarmFi Node Recruitment":"SwarmFi 노드 모집","Starter":"스타터","Advanced":"어드밴스드","Premium":"프리미엄","Supreme":"슈프림","Subscription Amount":"청약 금액","Contribution value":"기여 가치","Approve":"승인","SwarmFi Node Benefits":"SwarmFi 노드 혜택","Node Gift":"노드 증정","Enable Multi-Channel Earnings:":"다중 채널 수익 활성화:","50% Deposit":"50% 입금","Value-Added Earnings":"부가가치 수익","Stable Compound Growth:":"안정적인 복리 성장:","+1.5% Per Period":"매 기간 +1.5%","Planet Storm":"플래닛 스톰","Dual-Track Ecosystem Incentives:":"생태계 인센티브 듀얼 트랙:","Withdrawal Fee":"출금 수수료","Fee Rebate Dividends:":"수수료 환급 배당:","After-Tax Net Profit":"세후 순이익","Compliant Tax Optimization:":"규정 준수 세금 최적화:","Minimum 3,000U, 10% x 15%":"최소 3,000U, 10% x 15%","Profit Tax":"이익 세금","After-Tax Income Redistribution:":"세후 소득 재분배:","Buy Slippage":"매수 슬리피지","Trading Friction Earnings:":"거래 마찰 수익:","Sell Slippage":"매도 슬리피지","Liquidity Provision Rewards:":"유동성 공급 보상:","My SwarmFi Node":"내 SwarmFi 노드","Tier":"등급","Node ID":"노드 ID","Game Ecology":"게임 생태계","Mint":"선착순 구매","Bind":"바인딩","Recommended address":"추천 주소","Referral wallet address":"추천인 지갑 주소를 입력하세요","Bind successful":"바인딩 성공","Confirm":"확인","Invalid referrer wallet address format":"추천인 지갑 주소 형식이 올바르지 않습니다","Incorrect binding address":"바인딩 주소가 올바르지 않습니다","Please bind the inviter first to make a purchase":"구매하려면 먼저 초대자를 바인딩하세요","Insufficient Balance":"잔액 부족","Mint successful":"구매 성공","Dividend value":"배당 가치","Team Information":"팀 정보","Team count":"팀 총 인원","Direct count":"직접 추천인 수","Team Performance":"팀 실적","Team Incentives":"팀 인센티브","My superior":"내 상위","My invitation link":"내 초대 링크","Recommended List":"추천 목록","Reward Details":"보상 내역","Wallet address":"지갑 주소","Performance":"개인 실적","Source address":"소스 주소","Date":"날짜","Copy successful":"복사 성공","Quantity":"수량","":""}');

/***/ },

/***/ 3232
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Sambung Dompet","Select Language":"Pilih Bahasa","Home":"Laman Utama","Power":"Kuasa","Dividend":"Dividen","Team":"Pasukan","Ecology":"Ekologi","Coming Soon":"Akan Datang","Partner":"Rakan Kongsi","Follow us":"Ikuti Kami","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Protokol SwarmFi ialah infrastruktur kewangan terdesentralisasi yang memberi tumpuan kepada mengubah Aset Dunia Sebenar (RWA) kepada aset on-chain yang standard, boleh disahkan dan cair.","SwarmFi Node Recruitment":"Rekrutmen Nod SwarmFi","Starter":"Pemula","Advanced":"Lanjutan","Premium":"Premium","Supreme":"Agung","Subscription Amount":"Jumlah Langganan","Contribution value":"Nilai Sumbangan","Approve":"Luluskan","SwarmFi Node Benefits":"Faedah Nod SwarmFi","Node Gift":"Hadiah Nod","Enable Multi-Channel Earnings:":"Dayakan Pendapatan Berbilang Saluran:","50% Deposit":"Deposit 50%","Value-Added Earnings":"Pendapatan Nilai Tambah","Stable Compound Growth:":"Pertumbuhan Kompaun Stabil:","+1.5% Per Period":"+1.5% Setiap Tempoh","Planet Storm":"Ribut Planet","Dual-Track Ecosystem Incentives:":"Insentif Ekologi Dwi-Landasan:","Withdrawal Fee":"Yuran Pengeluaran","Fee Rebate Dividends:":"Dividen Bayaran Balik Yuran:","After-Tax Net Profit":"Keuntungan Bersih Selepas Cukai","Compliant Tax Optimization:":"Pengoptimuman Cukai Patuh:","Minimum 3,000U, 10% x 15%":"Minimum 3,000U, 10% x 15%","Profit Tax":"Cukai Keuntungan","After-Tax Income Redistribution:":"Pengagihan Semula Pendapatan Selepas Cukai:","Buy Slippage":"Gelinciran Beli","Trading Friction Earnings:":"Pendapatan Geseran Perdagangan:","Sell Slippage":"Gelinciran Jual","Liquidity Provision Rewards:":"Ganjaran Penyediaan Kecairan:","My SwarmFi Node":"Nod SwarmFi Saya","Tier":"Tahap","Node ID":"ID Nod","Game Ecology":"Ekologi Permainan","Mint":"Beli Cepat","Bind":"Ikat","Recommended address":"Alamat yang Disyorkan","Referral wallet address":"Sila masukkan alamat dompet perujuk","Bind successful":"Pengikatan berjaya","Confirm":"Sahkan","Invalid referrer wallet address format":"Format alamat dompet perujuk tidak sah","Incorrect binding address":"Alamat pengikatan tidak betul","Please bind the inviter first to make a purchase":"Sila ikat penjemput terlebih dahulu untuk membuat pembelian","Insufficient Balance":"Baki Tidak Mencukupi","Mint successful":"Pembelian berjaya","Dividend value":"Nilai Dividen","Team Information":"Maklumat Pasukan","Team count":"Jumlah Pasukan","Direct count":"Jumlah Rujukan Langsung","Team Performance":"Prestasi Pasukan","Team Incentives":"Insentif Pasukan","My superior":"Atasan Saya","My invitation link":"Pautan Jemputan Saya","Recommended List":"Senarai Disyorkan","Reward Details":"Butiran Ganjaran","Wallet address":"Alamat Dompet","Performance":"Prestasi Peribadi","Source address":"Alamat Sumber","Date":"Tarikh","Copy successful":"Salinan berjaya","Quantity":"Kuantiti","":""}');

/***/ },

/***/ 8150
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"เชื่อมต่อกระเป๋าเงิน","Select Language":"เลือกภาษา","Home":"หน้าหลัก","Power":"พลังคำนวณ","Dividend":"เงินปันผล","Team":"ทีม","Ecology":"ระบบนิเวศ","Coming Soon":"เร็วๆ นี้","Partner":"พันธมิตร","Follow us":"ติดตามเรา","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi Protocol คือโครงสร้างพื้นฐานทางการเงินแบบกระจายศูนย์ที่มุ่งเน้นการเปลี่ยนสินทรัพย์ในโลกจริง (RWA) ให้เป็นสินทรัพย์บนเชนที่ได้มาตรฐาน ตรวจสอบได้ และมีสภาพคล่อง","SwarmFi Node Recruitment":"รับสมัครโหนด SwarmFi","Starter":"รุ่นเริ่มต้น","Advanced":"รุ่นขั้นสูง","Premium":"รุ่นพรีเมียม","Supreme":"รุ่นสูงสุด","Subscription Amount":"จำนวนเงินที่จองซื้อ","Contribution value":"มูลค่าการมีส่วนร่วม","Approve":"อนุมัติ","SwarmFi Node Benefits":"สิทธิประโยชน์ของโหนด SwarmFi","Node Gift":"ของขวัญโหนด","Enable Multi-Channel Earnings:":"เปิดรับรายได้หลายช่องทาง:","50% Deposit":"ฝาก 50%","Value-Added Earnings":"รายได้มูลค่าเพิ่ม","Stable Compound Growth:":"การเติบโตแบบทบต้นที่มั่นคง:","+1.5% Per Period":"+1.5% ต่อรอบ","Planet Storm":"พายุดาวเคราะห์","Dual-Track Ecosystem Incentives:":"แรงจูงใจระบบนิเวศแบบคู่ขนาน:","Withdrawal Fee":"ค่าธรรมเนียมการถอน","Fee Rebate Dividends:":"เงินปันผลคืนค่าธรรมเนียม:","After-Tax Net Profit":"กำไรสุทธิหลังหักภาษี","Compliant Tax Optimization:":"การปรับภาษีอย่างถูกต้องตามข้อกำหนด:","Minimum 3,000U, 10% x 15%":"เริ่มต้น 3,000U, 10% x 15%","Profit Tax":"ภาษีกำไร","After-Tax Income Redistribution:":"การกระจายรายได้หลังหักภาษี:","Buy Slippage":"Slippage ตอนซื้อ","Trading Friction Earnings:":"รายได้จากแรงเสียดทานในการซื้อขาย:","Sell Slippage":"Slippage ตอนขาย","Liquidity Provision Rewards:":"รางวัลการให้สภาพคล่อง:","My SwarmFi Node":"โหนด SwarmFi ของฉัน","Tier":"ระดับ","Node ID":"ID โหนด","Game Ecology":"ระบบนิเวศเกม","Mint":"จับจอง","Bind":"ผูก","Recommended address":"ที่อยู่แนะนำ","Referral wallet address":"กรุณาใส่ที่อยู่กระเป๋าเงินผู้แนะนำ","Bind successful":"ผูกข้อมูลสำเร็จ","Confirm":"ยืนยัน","Invalid referrer wallet address format":"รูปแบบที่อยู่กระเป๋าเงินผู้แนะนำไม่ถูกต้อง","Incorrect binding address":"ที่อยู่ที่ผูกไม่ถูกต้อง","Please bind the inviter first to make a purchase":"กรุณาผูกข้อมูลผู้เชิญก่อนทำการจับจอง","Insufficient Balance":"ยอดเงินไม่เพียงพอ","Mint successful":"ซื้อสำเร็จ","Dividend value":"มูลค่าเงินปันผล","Team Information":"ข้อมูลทีม","Team count":"จำนวนสมาชิกในทีมทั้งหมด","Direct count":"จำนวนผู้แนะนำตรง","Team Performance":"ผลงานทีม","Team Incentives":"แรงจูงใจทีม","My superior":"ผู้บังคับบัญชาของฉัน","My invitation link":"ลิงก์เชิญของฉัน","Recommended List":"รายการแนะนำ","Reward Details":"รายละเอียดรางวัล","Wallet address":"ที่อยู่กระเป๋าเงิน","Performance":"ผลงานส่วนบุคคล","Source address":"ที่อยู่ต้นทาง","Date":"วันที่","Copy successful":"คัดลอกสำเร็จ","Quantity":"จำนวน","":""}');

/***/ },

/***/ 7095
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Kết nối Ví","Select Language":"Chọn Ngôn ngữ","Home":"Trang chủ","Power":"Sức mạnh","Dividend":"Cổ tức","Team":"Đội nhóm","Ecology":"Hệ sinh thái","Coming Soon":"Sắp mở","Partner":"Đối tác","Follow us":"Theo dõi chúng tôi","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"Giao thức SwarmFi là cơ sở hạ tầng tài chính phi tập trung tập trung vào việc chuyển đổi Tài sản Thế giới Thực (RWA) thành tài sản trên chuỗi được tiêu chuẩn hóa, có thể xác minh và có tính thanh khoản.","SwarmFi Node Recruitment":"Tuyển dụng Nút SwarmFi","Starter":"Phiên bản Cơ bản","Advanced":"Phiên bản Nâng cao","Premium":"Phiên bản Cao cấp","Supreme":"Phiên bản Tối thượng","Subscription Amount":"Số tiền đăng ký","Contribution value":"Giá trị đóng góp","Approve":"Phê duyệt","SwarmFi Node Benefits":"Lợi ích của Nút SwarmFi","Node Gift":"Quà tặng Nút","Enable Multi-Channel Earnings:":"Kích hoạt Thu nhập Đa kênh:","50% Deposit":"Nạp tiền 50%","Value-Added Earnings":"Thu nhập Gia tăng","Stable Compound Growth:":"Tăng trưởng Kép Ổn định:","+1.5% Per Period":"+1.5% Mỗi Kỳ","Planet Storm":"Bão Hành tinh","Dual-Track Ecosystem Incentives:":"Ưu đãi Hệ sinh thái Đường đôi:","Withdrawal Fee":"Phí rút tiền","Fee Rebate Dividends:":"Cổ tức Hoàn lại Phí:","After-Tax Net Profit":"Lợi nhuận ròng sau thuế","Compliant Tax Optimization:":"Tối ưu hóa Thuế Tuân thủ:","Minimum 3,000U, 10% x 15%":"Tối thiểu 3.000U, 10% x 15%","Profit Tax":"Thuế lợi nhuận","After-Tax Income Redistribution:":"Phân phối lại Thu nhập Sau thuế:","Buy Slippage":"Trượt giá Mua","Trading Friction Earnings:":"Thu nhập từ Ma sát Giao dịch:","Sell Slippage":"Trượt giá Bán","Liquidity Provision Rewards:":"Phần thưởng Cung cấp Thanh khoản:","My SwarmFi Node":"Nút SwarmFi của tôi","Tier":"Cấp độ","Node ID":"ID Nút","Game Ecology":"Hệ sinh thái Trò chơi","Mint":"Mua nhanh","Bind":"Liên kết","Recommended address":"Địa chỉ giới thiệu","Referral wallet address":"Vui lòng nhập địa chỉ ví người giới thiệu","Bind successful":"Liên kết thành công","Confirm":"Xác nhận","Invalid referrer wallet address format":"Định dạng địa chỉ ví người giới thiệu không hợp lệ","Incorrect binding address":"Địa chỉ liên kết không chính xác","Please bind the inviter first to make a purchase":"Vui lòng liên kết người mời trước khi mua","Insufficient Balance":"Số dư không đủ","Mint successful":"Mua thành công","Dividend value":"Giá trị cổ tức","Team Information":"Thông tin Đội nhóm","Team count":"Tổng số thành viên trong nhóm","Direct count":"Số người giới thiệu trực tiếp","Team Performance":"Kết quả hoạt động của nhóm","Team Incentives":"Ưu đãi của nhóm","My superior":"Cấp trên của tôi","My invitation link":"Liên kết mời của tôi","Recommended List":"Danh sách giới thiệu","Reward Details":"Chi tiết phần thưởng","Wallet address":"Địa chỉ ví","Performance":"Kết quả cá nhân","Source address":"Địa chỉ nguồn","Date":"Ngày","Copy successful":"Sao chép thành công","Quantity":"Số lượng","":""}');

/***/ },

/***/ 5372
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Select Language":"选择语言","Home":"首页","Power":"算力","Dividend":"分红","Team":"团队","Ecology":"生态","Coming Soon":"即将开放","Partner":"合作伙伴","Follow us":"关注我们","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi协议是一个去中心化的金融基础设施，专注于将现实世界资产（RWA）转化为标准化、可验证和流动的链上资产。","SwarmFi Node Recruitment":"SwarmFi节点招聘","Starter":"入门版","Advanced":"进阶版","Premium":"尊享版","Supreme":"至尊版","Subscription Amount":"认购金额","Contribution value":"贡献价值","Approve":"授权","SwarmFi Node Benefits":"SwarmFi节点优势","Node Gift":"节点赠送","Enable Multi-Channel Earnings:":"开通多渠道收益:","50% Deposit":"50%入金","Value-Added Earnings":"增值收益","Stable Compound Growth:":"稳定复利增长:","+1.5% Per Period":"每期+1.5%","Planet Storm":"星球风暴","Dual-Track Ecosystem Incentives:":"生态激励双轨制:","Withdrawal Fee":"提现手续费","Fee Rebate Dividends:":"手续费返还分红:","After-Tax Net Profit":"个税纯盈利","Compliant Tax Optimization:":"合规税务优化:","Minimum 3,000U, 10% x 15%":"3,000U起征 10%x15%","Profit Tax":"盈利税","After-Tax Income Redistribution:":"税后收益再分配:","Buy Slippage":"买入滑点","Trading Friction Earnings:":"交易摩擦收益:","Sell Slippage":"卖出滑点","Liquidity Provision Rewards:":"流动性提供奖励:","My SwarmFi Node":"我的SwarmFi节点","Tier":"等级","Node ID":"节点ID","Game Ecology":"游戏生态","Mint":"抢购","Bind":"绑定","Recommended address":"推荐地址","Referral wallet address":"请输入推荐人钱包地址","Bind successful":"绑定成功","Confirm":"确认","Invalid referrer wallet address format":"推荐人钱包地址格式不正确","Incorrect binding address":"绑定地址不正确","Please bind the inviter first to make a purchase":"请先绑定邀请人在进行抢购","Insufficient Balance":"余额不足","Mint successful":"购买成功","Dividend value":"分红值","Team Information":"团队信息","Team count":"团队总人数","Direct count":"直推人数","Team Performance":"团队业绩","Team Incentives":"团队奖励","My superior":"我的上级","My invitation link":"我的邀请链接","Recommended List":"推荐列表","Reward Details":"奖励明细","Wallet address":"钱包地址","Performance":"个人业绩","Source address":"来源地址","Date":"日期","Copy successful":"复制成功","Quantity":"数量","":""}');

/***/ },

/***/ 8380
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Select Language":"選擇語言","Home":"首頁","Power":"算力","Dividend":"分紅","Team":"團隊","Ecology":"生態","Coming Soon":"即將開放","Partner":"合作夥伴","Follow us":"關注我們","SwarmFi Protocol is a decentralized financial infrastructure focused on transforming Real World Assets (RWA) into standardized,verifiable, and liquid on-chain assets.":"SwarmFi協議是一個去中心化的金融基礎設施，專注於將現實世界資產（RWA）轉化為標準化、可驗證和流動的鏈上資產。","SwarmFi Node Recruitment":"SwarmFi節點招募","Starter":"入門版","Advanced":"進階版","Premium":"尊享版","Supreme":"至尊版","Subscription Amount":"認購金額","Contribution value":"貢獻價值","Approve":"授權","SwarmFi Node Benefits":"SwarmFi節點優勢","Node Gift":"節點贈送","Enable Multi-Channel Earnings:":"開通多渠道收益：","50% Deposit":"50%入金","Value-Added Earnings":"增值收益","Stable Compound Growth:":"穩定複利增長：","+1.5% Per Period":"每期+1.5%","Planet Storm":"星球風暴","Dual-Track Ecosystem Incentives:":"生態激勵雙軌制：","Withdrawal Fee":"提現手續費","Fee Rebate Dividends:":"手續費返還分紅：","After-Tax Net Profit":"稅後純利潤","Compliant Tax Optimization:":"合規稅務最佳化：","Minimum 3,000U, 10% x 15%":"3,000U起徵 10%x15%","Profit Tax":"盈利稅","After-Tax Income Redistribution:":"稅後收益再分配：","Buy Slippage":"買入滑點","Trading Friction Earnings:":"交易摩擦收益：","Sell Slippage":"賣出滑點","Liquidity Provision Rewards:":"流動性提供獎勵：","My SwarmFi Node":"我的SwarmFi節點","Tier":"等級","Node ID":"節點ID","Game Ecology":"遊戲生態","Mint":"搶購","Bind":"綁定","Recommended address":"推薦地址","Referral wallet address":"請輸入推薦人錢包地址","Bind successful":"綁定成功","Confirm":"確認","Invalid referrer wallet address format":"推薦人錢包地址格式不正確","Incorrect binding address":"綁定地址不正確","Please bind the inviter first to make a purchase":"請先綁定邀請人再進行搶購","Insufficient Balance":"餘額不足","Mint successful":"購買成功","Dividend value":"分紅值","Team Information":"團隊資訊","Team count":"團隊總人數","Direct count":"直推人數","Team Performance":"團隊業績","Team Incentives":"團隊獎勵","My superior":"我的上級","My invitation link":"我的邀請連結","Recommended List":"推薦列表","Reward Details":"獎勵明細","Wallet address":"錢包地址","Performance":"個人業績","Source address":"來源地址","Date":"日期","Copy successful":"複製成功","Quantity":"數量","":""}');

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [407], () => (__webpack_require__(1961)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;