"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const showBalance = (publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection("http://localhost:8899", "confirmed");
    const response = yield connection.getAccountInfo(publicKey);
    if (!response) {
        return 0;
        console.log("requested account not found! please look for any errors.");
    }
    return response.lamports / web3_js_1.LAMPORTS_PER_SOL;
});
exports.showBalance = showBalance;
(0, exports.showBalance)(new web3_js_1.PublicKey("H2CTBNHDFqa5KQ4MNNejS7msQ6DF95116jSkUvgfqUXj"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const publicKey = "H2CTBNHDFqa5KQ4MNNejS7msQ6DF95116jSkUvgfqUXj";
    const balance = yield (0, exports.showBalance)(new web3_js_1.PublicKey(publicKey));
    console.log(`\nBalance for address ${publicKey} is ${balance} SOL`);
    yield (0, airdrop_1.airdrop)(publicKey, 4);
    const updatedBalance = yield (0, exports.showBalance)(new web3_js_1.PublicKey(publicKey));
    console.log(`\nBalance for address ${publicKey} is ${updatedBalance} SOL`);
}))();
//# sourceMappingURL=index.js.map