"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"tg-payment-guide","metadata":{"permalink":"/blog/tg-payment-guide","source":"@site/blog/tg-payments-guide/index.md","title":"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0","description":"\u57fa\u4e8eGrammy\u6846\u67b6\u7684 Telegram Bot \u652f\u4ed8\u673a\u5668\u4eba\uff08TON\u3001Star\uff09\u5f00\u53d1\u5c0f\u8bb0","date":"2024-08-01T00:00:00.000Z","tags":[{"inline":true,"label":"telegram","permalink":"/blog/tags/telegram"}],"readingTime":6.04,"hasTruncateMarker":false,"authors":[{"name":"\u5c0f\u5b66\u540e\u751f","title":"Full Stack Developer","url":"https://dnevend.github.io","imageURL":"https://github.com/Dnevend.png","key":"Dnevend"}],"frontMatter":{"slug":"tg-payment-guide","title":"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0","description":"\u57fa\u4e8eGrammy\u6846\u67b6\u7684 Telegram Bot \u652f\u4ed8\u673a\u5668\u4eba\uff08TON\u3001Star\uff09\u5f00\u53d1\u5c0f\u8bb0","date":"2024-08-01T00:00:00.000Z","authors":["Dnevend"],"tags":["telegram"]},"unlisted":false,"nextItem":{"title":"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5","permalink":"/blog/parallax-scrolling-effect"}},"content":"![](./telegram-stars.jpeg)\\n\\n\u968f\u7740 Telegram \u8fc8\u5411\u533a\u5757\u94fe&\u5c0f\u7a0b\u5e8f\u65f6\u4ee3\uff0cTelegram \u5185\u90e8\u5df2\u7ecf\u4e0e TON \u94b1\u5305\u505a\u4e86\u96c6\u6210\uff0c\u5e76\u4e3a\u4e86\u5e94\u5bf9 Apple \u548c Google \u5173\u4e8e\u6570\u5b57\u4ea7\u54c1\u9500\u552e\u7684\u653f\u7b56\u76d1\u7ba1\u9700\u8981\u4e0a\u7ebf\u4e86 Telegram Stars \u4f5c\u4e3a\u652f\u4ed8\u65b9\u5f0f\u3002\u4f9d\u6258 Telegram \u751f\u6001\u7684\u6570\u4ebf\u7528\u6237\uff0c\u5b58\u5728\u7740\u5927\u91cf\u673a\u9047\uff0c\u5e76\u4e3a\u533a\u5757\u94fe\u8d70\u5411 Mass Adoption \u94fa\u8bbe\u4e86\u4e00\u6761\u65b0\u7684\u9ad8\u901f\u516c\u8def\u3002\\n\\n## \u652f\u4ed8\u673a\u5668\u4eba\\n\\n[\u70b9\u51fb\u6b64\u5904\u8bbf\u95ee\u5b8c\u6574 Demo \u5730\u5740](https://github.com/Dnevend/tg-payment-bot)\\n\\n### \u521d\u59cb\u5316\\n\\n\u5728\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\u673a\u5668\u4eba\u5f00\u53d1\u65f6\uff0c\u521b\u5efa Bot \u5b9e\u4f8b\uff0c\u9700\u8981\u5c06`environment`\u6307\u5b9a\u4e3a`test`\uff0c\u5426\u5219\u5c06\u4f1a\u4ea7\u751f`401 Unauthorized`\u9519\u8bef\u3002\\n\\n\u53e6\u5916\u5982\u679c\u5f53\u524d\u7684\u7f51\u7edc\u73af\u5883\u9700\u8981\u4f7f\u7528\u79d1\u5b66\u4e0a\u7f51\u624d\u80fd\u8bbf\u95ee Telegram\uff0c\u8fd8\u9700\u8981\u914d\u7f6e`baseFetchConfig.agent`\u4e3a\u4f60\u7684\u4ee3\u7406\u5730\u5740\u3002\\n\\n```javascript title=\\"Bot Init\\"\\nnew Bot(process.env.BOT_TOKEN!, {\\n    client: {\\n        baseFetchConfig: {\\n            // highlight-next-line\\n            agent: isDevEnv ? new HttpsProxyAgent(\'http://127.0.0.1:7890\') : null\\n        },\\n        // highlight-next-line\\n        environment: isDevEnv ? \'test\' : \'prod\'\\n    }\\n})\\n```\\n\\n### Stars \u652f\u4ed8\u6d41\u7a0b\\n\\n```javascript title=\\"Pay With Stars\\"\\n// highlight-next-line\\n// 1. \u8c03\u7528 `sendInvoice` \u53d1\u9001\u53d1\u7968\uff0ccurrency \u53c2\u6570\u6307\u5b9a\u4e3a`XTR`\\nctx.api.sendInvoice(ctx.chat!.id, \'Title\', \'Description\', `payload`, \'XTR\', [{ label: \'Label\', amount: 1 }])\\n\\n// highlight-next-line\\n// 2. \u68c0\u67e5\u53d1\u7968\uff0c\u7b49\u5f85\u5b57\u6bb5 `pre_checkout_query` \u7684\u66f4\u65b0\\nbot.on(\'pre_checkout_query\', (ctx) => {\\n\\n// highlight-next-line\\n// 3. \u901a\u8fc7 `answerPreCheckoutQuery` \u6279\u51c6\u6216\u53d6\u6d88\u8ba2\u5355\\n    ctx.answerPreCheckoutQuery(true)\\n    // ctx.answerPreCheckoutQuery(false, {\\n    //     error_message: \'An unexpected error occurred. Please try again later.\'\\n    // })\\n})\\n\\n// highlight-next-line\\n// 4. \u7b49\u5f85\u5b57\u6bb5 `successful_payment` \u7684\u66f4\u65b0\\nbot.on(\':successful_payment\', ctx => {\\n\\n// highlight-next-line\\n// 5. \u652f\u4ed8\u6210\u529f\u56de\u8c03\uff0c\u5b58\u50a8\u6210\u529f\u652f\u4ed8\u7684 `telegram_payment_charge_id`\uff08\u672a\u6765\u53ef\u80fd\u9700\u8981\u7528\u5b83\u6765\u53d1\u8d77\u9000\u6b3e\uff09\\n    console.log(ctx.message?.successful_payment.telegram_payment_charge_id)\\n\\n// highlight-next-line\\n// 6. \u5411\u7528\u6237\u4ea4\u4ed8\u5176\u6240\u8d2d\u4e70\u7684\u5546\u54c1\u548c\u670d\u52a1\uff0c\u4e1a\u52a1\u903b\u8f91...\\n    ctx.reply(\'payment-success\').catch(console.error)\\n})\\n```\\n\\n### TON \u652f\u4ed8\u6d41\u7a0b\\n\\n1. \u751f\u6210\u6307\u5b9a\u94b1\u5305\u7684\u652f\u4ed8\u94fe\u63a5\\n\\n```javascript\\nfunction generatePaymentLink(\\n  toWallet: string,\\n  amount: number | string | bigint,\\n  comment: string,\\n  app: \\"tonhub\\" | \\"tonkeeper\\"\\n) {\\n  if (app === \\"tonhub\\") {\\n    return `https://tonhub.com/transfer/${toWallet}?amount=${toNano(\\n      amount\\n    )}&text=${comment}`;\\n  }\\n\\n  return `https://app.tonkeeper.com/transfer/${toWallet}?amount=${toNano(\\n    amount\\n  )}&text=${comment}`;\\n}\\n```\\n\\n2. \u5c06\u751f\u6210\u7684\u94fe\u63a5\u4ee5\u83dc\u5355\u5f62\u5f0f\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u5e76\u63d0\u4f9b`check_transaction`\u4e8b\u4ef6\u7528\u4e8e\u68c0\u67e5\u4ea4\u6613\\n\\n```javascript\\nconst tonhubPaymentLink = generatePaymentLink(process.env.OWNER_WALLET!, amount, comment, \'tonhub\')\\nconst tonkeeperPaymentLink = generatePaymentLink(process.env.OWNER_WALLET!, amount, comment, \'tonkeeper\')\\n\\nconst menu = new InlineKeyboard()\\n    .url(\\"Click to pay in TonHub\\", tonhubPaymentLink)\\n    .row()\\n    .url(\\"Click to pay in TonKeeper\\", tonkeeperPaymentLink)\\n    .row()\\n    .text(`I sent ${amount} TON`, \\"check_transaction\\");\\n\\nawait ctx.reply(\\n    `Tips`,\\n    { reply_markup: menu, parse_mode: \\"HTML\\" }\\n);\\n```\\n\\n3. \u76d1\u542c`check_transaction`\u4e8b\u4ef6\uff0c\u6821\u9a8c\u652f\u4ed8\u72b6\u6001\uff0c\u5904\u7406\u652f\u4ed8\u6210\u529f\u7684\u903b\u8f91\\n\\n```javascript\\nbot.callbackQuery(\\"check_transaction\\", checkTransaction);\\n\\nasync function checkTransaction(ctx) {\\n  await verifyTransactionExistance(\\n    process.env.OWNER_WALLET,\\n    ctx.session.amount,\\n    ctx.session.comment\\n  );\\n}\\n\\nasync function verifyTransactionExistance(\\n  toWallet: Address,\\n  value: number,\\n  comment: string\\n) {\\n  const endpoint =\\n    process.env.NETWORK === \\"mainnet\\"\\n      ? \\"https://toncenter.com/api/v2/jsonRPC\\"\\n      : \\"https://testnet.toncenter.com/api/v2/jsonRPC\\";\\n\\n  const httpClient = new HttpApi(endpoint, {\\n    apiKey: process.env.TONCENTER_TOKEN,\\n  });\\n\\n  const transactions = await httpClient.getTransactions(toWallet, {\\n    limit: 100,\\n  });\\n\\n  let incomingTransactions = transactions.filter(\\n    (tx) => Object.keys(tx.out_msgs).length === 0\\n  );\\n\\n  for (let i = 0; i < incomingTransactions.length; i++) {\\n    let tx = incomingTransactions[i];\\n    // Skip the transaction if there is no comment in it\\n    if (!tx.in_msg?.msg_data) {\\n      continue;\\n    }\\n\\n    // Convert transaction value from nano\\n    let txValue = fromNano(tx.in_msg.value);\\n    // Get transaction comment\\n    let txComment = tx.in_msg.message;\\n    if (txComment === comment && txValue === value.toString()) {\\n      return true;\\n    }\\n  }\\n\\n  return false;\\n}\\n```\\n\\n## \u6ce8\u610f\u4e8b\u9879\\n\\n- **\u6d4b\u8bd5\u73af\u5883\u8d26\u53f7\u6ce8\u518c**\\n\\n  \u5728 Telegram \u7684\u8d26\u53f7\u4f53\u7cfb\u4e2d\uff0c\u6d4b\u8bd5\u73af\u5883\u4e0e\u4e3b\u73af\u5883\u5b8c\u5168\u9694\u79bb\uff0c\u56e0\u6b64\u5728\u8fdb\u884c\u6d4b\u8bd5\u73af\u5883\u767b\u5f55\u65f6\uff0c\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u73b0\u6709\u8d26\u53f7\u8fdb\u884c\u767b\u5f55\uff0c\u5728\u626b\u7801\u65f6\u4f1a\u63d0\u793a`AUTH_TOKEN_INVALID2`\u9519\u8bef\uff0c\u4ee5\u53ca\u65e0\u6cd5\u6536\u5230\u9a8c\u8bc1\u7801\u7684\u60c5\u51b5\u3002\\n  \u6240\u4ee5\u4f60\u9700\u8981\u5148\u6ce8\u518c\u4e00\u4e2a\u6d4b\u8bd5\u8d26\u53f7\uff0c\u622a\u6b62 2024 \u5e74 8 \u6708\uff0c\u6d4b\u8bd5\u8d26\u53f7\u53ea\u80fd\u901a\u8fc7 iPhone \u7aef Telegram \u8fdb\u884c\u3002\u5177\u4f53\u64cd\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a\\n\\n  > 1\u3001\u767b\u5f55 Telegram iPhone\\n  > 2\u3001\u591a\u6b21\u70b9\u51fb\u53f3\u4e0b\u89d2`Setting`Tab \u8fdb\u5165 Debug \u9875\u9762\\n  > 3\u3001\u70b9\u51fb\u64cd\u4f5c\u5217\u8868\u4e2d\u7684`Accounts`\u9879\\n  > 4\u3001\u70b9\u51fb`Login to another account`\u9009\u62e9`Test`\u73af\u5883\uff0c\u5b8c\u6210\u8d26\u53f7\u6ce8\u518c\\n\\n  \u8d26\u53f7\u6ce8\u518c\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u5b98\u65b9\u6d41\u7a0b\u8fdb\u5165\u6d4b\u8bd5\u73af\u5883\u3002\u5728\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u65f6\uff0c\u60a8\u53ef\u4ee5\u91c7\u7528\u672a\u52a0\u5bc6\u7684 HTTP \u94fe\u63a5\u6765\u6d4b\u8bd5\u60a8\u7684 Web \u5e94\u7528\u6216 Web \u767b\u5f55\u529f\u80fd\u3002\\n\\n  \u53e6\u5916\u6d4b\u8bd5\u73af\u5883\u7684 Telegram Star \u4e5f\u9700\u8981\u8fdb\u884c\u8d2d\u4e70\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u53c2\u8003\u4e0b\u6587\u4f7f\u7528 stripe \u63d0\u4f9b\u7684\u6d4b\u8bd5\u4fe1\u7528\u5361\u65e0\u9650\u5236\u8fdb\u884c\u8d2d\u4e70\u3002\\n\\n- **\u4fe1\u7528\u5361\u6d4b\u8bd5\u652f\u4ed8**\\n\\n  \u5728\u60a8\u7684\u673a\u5668\u4eba\u652f\u4ed8\u529f\u80fd\u4ecd\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u9636\u6bb5\u65f6\uff0c\u8bf7\u4f7f\u7528 **\u201cStripe \u6d4b\u8bd5\u6a21\u5f0f\u201d** \u63d0\u4f9b\u5546\u3002\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u8fdb\u884c\u652f\u4ed8\u64cd\u4f5c\u800c\u4e0d\u4f1a\u5b9e\u9645\u8ba1\u8d39\u4efb\u4f55\u8d26\u6237\u3002\u6d4b\u8bd5\u6a21\u5f0f\u4e2d\u65e0\u6cd5\u4f7f\u7528\u771f\u5b9e\u4fe1\u7528\u5361\uff0c\u4f46\u60a8\u53ef\u4ee5\u4f7f\u7528\u6d4b\u8bd5\u5361\uff0c\u5982 `4242 4242 4242 4242` [(\u5b8c\u6574\u6d4b\u8bd5\u5361\u5217\u8868)](https://docs.stripe.com/testing#cards)\u3002\u60a8\u53ef\u4ee5\u968f\u610f\u5728\u6d4b\u8bd5\u6a21\u5f0f\u4e0e\u5b9e\u65f6\u6a21\u5f0f\u95f4\u5207\u6362\uff0c\u4f46\u5728\u6b63\u5f0f\u4e0a\u7ebf\u524d\uff0c\u8bf7\u52a1\u5fc5\u67e5\u9605[\u4e0a\u7ebf\u68c0\u67e5\u6e05\u5355](https://core.telegram.org/bots/payments#going-live)\u3002\\n\\n## \u5f15\u7528\u53c2\u8003\\n\\n- [grammY \u6846\u67b6](https://grammy.dev/zh/guide/)\\n\\n  grammY \u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa Telegram Bot \u7684\u6846\u67b6\u3002\u5b83\u53ef\u4ee5\u4ece TypeScript \u548c JavaScript \u4e2d\u4f7f\u7528\uff0c\u5728 Node.js\u3001 Deno \u548c\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002\\n\\n- [Bot Payments API for Digital Goods and Services](https://core.telegram.org/bots/payments-stars)\\n\\n  \u7528\u4e8e\u6570\u5b57\u5546\u54c1\u548c\u670d\u52a1\u7684\u673a\u5668\u4eba\u652f\u4ed8 API\\n\\n- [How to integrate Telegram Stars Payment to your bot](https://teletype.in/@alteregor/how-to-integrate-telegram-stars)\\n\\n  \u5982\u4f55\u5c06 Telegram Stars \u652f\u4ed8\u96c6\u6210\u5230\u60a8\u7684\u673a\u5668\u4eba\u4e2d\\n\\n- [\u6d4b\u8bd5\u73af\u5883\u8d26\u53f7\u6ce8\u518c](https://medium.com/@Asher_Tan/telegram-test-server%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C-24b0d424a2ff)\\n\\n- [TON Faucet \u6c34\u9f99\u5934](https://faucet.tonfura.com/)\\n\\n- [\u5b98\u65b9 Demo \u51fa\u552e\u997a\u5b50\u7684\u673a\u5668\u4eba](https://docs.ton.org/mandarin/develop/dapps/tutorials/accept-payments-in-a-telegram-bot-js)\\n\\n- [\u672c\u6587\u9879\u76ee Demo \u5730\u5740](https://github.com/Dnevend/tg-payment-bot)"},{"id":"parallax-scrolling-effect","metadata":{"permalink":"/blog/parallax-scrolling-effect","source":"@site/blog/parallax-scrolling-effect/index.mdx","title":"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5","description":"\u89c6\u5dee\u6eda\u52a8\u662f\u4e00\u79cd\u5728\u7f51\u9875\u8bbe\u8ba1\u548c\u89c6\u9891\u6e38\u620f\u4e2d\u5e38\u89c1\u7684\u89c6\u89c9\u6548\u679c\u6280\u672f\uff0c\u5b83\u901a\u8fc7\u5728\u4e0d\u540c\u901f\u5ea6\u4e0a\u79fb\u52a8\u9875\u9762\u6216\u5c4f\u5e55\u4e0a\u7684\u591a\u5c42\u56fe\u50cf\uff0c\u521b\u9020\u51fa\u6df1\u5ea6\u611f\u548c\u52a8\u611f\u3002","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"},{"inline":true,"label":"css","permalink":"/blog/tags/css"}],"readingTime":7.355,"hasTruncateMarker":false,"authors":[{"name":"\u5c0f\u5b66\u540e\u751f","title":"Full Stack Developer","url":"https://dnevend.github.io","imageURL":"https://github.com/Dnevend.png","key":"Dnevend"}],"frontMatter":{"slug":"parallax-scrolling-effect","title":"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5","description":"\u89c6\u5dee\u6eda\u52a8\u662f\u4e00\u79cd\u5728\u7f51\u9875\u8bbe\u8ba1\u548c\u89c6\u9891\u6e38\u620f\u4e2d\u5e38\u89c1\u7684\u89c6\u89c9\u6548\u679c\u6280\u672f\uff0c\u5b83\u901a\u8fc7\u5728\u4e0d\u540c\u901f\u5ea6\u4e0a\u79fb\u52a8\u9875\u9762\u6216\u5c4f\u5e55\u4e0a\u7684\u591a\u5c42\u56fe\u50cf\uff0c\u521b\u9020\u51fa\u6df1\u5ea6\u611f\u548c\u52a8\u611f\u3002","date":"2024-07-01T00:00:00.000Z","authors":["Dnevend"],"tags":["frontend","css"]},"unlisted":false,"prevItem":{"title":"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0","permalink":"/blog/tg-payment-guide"},"nextItem":{"title":"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357","permalink":"/blog/debug-mobile-web"}},"content":"export const BackgroundAttachmentDemo = () => (\\n  <iframe\\n    src=\\"https://codesandbox.io/embed/23v327?view=preview&hidenavigation=1\\"\\n    style={{\\n      width: \\"100%\\",\\n      height: \\"500px\\",\\n      border: \\"0\\",\\n      borderRadius: \\"4px\\",\\n      overflow: \\"hidden\\",\\n    }}\\n    title=\\"scroll-parallax\\"\\n    allow=\\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\\"\\n    sandbox=\\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\\"\\n  ></iframe>\\n);\\n\\nexport const Transform3DDemo = () => (\\n  <iframe\\n    src=\\"https://codesandbox.io/embed/svg6y8?view=preview&hidenavigation=1\\"\\n    style={{\\n      width: \\"100%\\",\\n      height: \\"500px\\",\\n      border: \\"0\\",\\n      borderRadius: \\"4px\\",\\n      overflow: \\"hidden\\",\\n    }}\\n    title=\\"transfrom-3d\\"\\n    allow=\\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\\"\\n    sandbox=\\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\\"\\n  />\\n);\\n\\nexport const ReactScrollParallaxDemo = () => (\\n  <iframe\\n    src=\\"https://codesandbox.io/embed/lr9mxt?view=preview&module=%2Fsrc%2FApp.js&hidenavigation=1\\"\\n    style={{\\n      width: \\"100%\\",\\n      height: \\"500px\\",\\n      border: \\"0\\",\\n      borderRadius: \\"4px\\",\\n      overflow: \\"hidden\\",\\n    }}\\n    title=\\"react-scroll-parallax\\"\\n    allow=\\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\\"\\n    sandbox=\\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\\"\\n  ></iframe>\\n);\\n\\n> \u89c6\u5dee\u6eda\u52a8\u662f\u4e00\u79cd\u5728\u7f51\u9875\u8bbe\u8ba1\u548c\u89c6\u9891\u6e38\u620f\u4e2d\u5e38\u89c1\u7684\u89c6\u89c9\u6548\u679c\u6280\u672f\uff0c\u5b83\u901a\u8fc7\u5728\u4e0d\u540c\u901f\u5ea6\u4e0a\u79fb\u52a8\u9875\u9762\u6216\u5c4f\u5e55\u4e0a\u7684\u591a\u5c42\u56fe\u50cf\uff0c\u521b\u9020\u51fa\u6df1\u5ea6\u611f\u548c\u52a8\u611f\u3002\\n> \u8fd9\u79cd\u6548\u679c\u901a\u8fc7\u524d\u666f\u3001\u4e2d\u666f\u548c\u80cc\u666f\u4ee5\u4e0d\u540c\u7684\u901f\u5ea6\u79fb\u52a8\u6765\u5b9e\u73b0\uff0c\u4f7f\u5f97\u8fd1\u5904\u7684\u5bf9\u8c61\u770b\u8d77\u6765\u79fb\u52a8\u5f97\u66f4\u5feb\uff0c\u800c\u8fdc\u5904\u7684\u5bf9\u8c61\u79fb\u52a8\u5f97\u8f83\u6162\u3002\\n\\n![parallax-scroll](./example.gif)\\n\\n## \u5b9e\u73b0\u65b9\u5f0f\\n\\n### 1\u3001background-attachment\\n\\n\u901a\u8fc7\u914d\u7f6e\u8be5 CSS \u5c5e\u6027\u503c\u4e3a`fixed`\u53ef\u4ee5\u8fbe\u5230\u80cc\u666f\u56fe\u50cf\u7684\u4f4d\u7f6e\u76f8\u5bf9\u4e8e\u89c6\u53e3\u56fa\u5b9a\uff0c\u5176\u4ed6\u5143\u7d20\u6b63\u5e38\u6eda\u52a8\u7684\u6548\u679c\u3002\u4f46\u8be5\u65b9\u6cd5\u7684\u89c6\u89c9\u8868\u73b0\u5355\u4e00\uff0c\u6ca1\u6709\u7eb5\u6df1\uff0c\u7f3a\u5c11\u52a8\u611f\u3002\\n\\n<BackgroundAttachmentDemo />\\n\\n```css\\n.parallax-box {\\n  width: 100%;\\n  height: 100vh;\\n  background-image: url(\\"https://picsum.photos/800\\");\\n  background-size: cover;\\n  // highlight-next-line\\n  background-attachment: fixed;\\n\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n```\\n\\n### 2\u3001Transform 3D\\n\\n\u5728 CSS \u4e2d\u4f7f\u7528 3D \u53d8\u6362\u6548\u679c\uff0c\u901a\u8fc7\u5c06\u5143\u7d20\u5212\u5206\u81f3\u4e0d\u540c\u7684\u7eb5\u6df1\u5c42\u7ea7\uff0c\u5728\u6eda\u52a8\u65f6\u76f8\u5bf9\u89c6\u53e3\u4e0d\u540c\u8ddd\u79bb\u7684\u5143\u7d20\uff0c\u6eda\u52a8\u6240\u4ea7\u751f\u7684\u4f4d\u79fb\u5728\u89c6\u89c9\u4e0a\u5c31\u4f1a\u5448\u73b0\u8d8a\u8fd1\u7684\u5143\u7d20\u6eda\u52a8\u901f\u5ea6\u8d8a\u5feb\uff0c\u76f8\u53cd\u8d8a\u8fdc\u7684\u5143\u7d20\u6eda\u52a8\u901f\u5ea6\u5c31\u8d8a\u6162\u3002\\n\\n\u4e3a\u65b9\u4fbf\u7406\u89e3\uff0c\u4f60\u53ef\u4ee5\u60f3\u8c61\u6b63\u5f00\u8f66\u884c\u9a76\u5728\u516c\u8def\u4e0a\uff0c\u6c7d\u8f66\u5411\u524d\u79fb\u52a8\uff0c\u4f60\u8f6c\u5934\u770b\u5411\u7a97\u5916\uff0c\u8fd1\u5904\u7684\u6811\u6728\u4e00\u95ea\u800c\u8fc7\uff0c\u8fdc\u65b9\u7684\u7fa4\u5c71\u548c\u98ce\u666f\u6162\u6162\u7684\u6e10\u884c\u6e10\u8fdc\uff0c\u9010\u6e10\u7684\u5728\u89c6\u91ce\u4e2d\u6d88\u5931\uff0c\u800c\u5929\u8fb9\u7684\u592a\u9633\u5374\u53ea\u4f1a\u5728\u5f88\u957f\u7684\u4e00\u6bb5\u8ddd\u79bb\u7ec6\u5fae\u7684\u79fb\u52a8\u3002\\n\\n<Transform3DDemo />\\n\\n```css\\n.parallax {\\n  // highlight-next-line\\n  perspective: 1px; /* \u8bbe\u7f6e\u900f\u89c6\u6548\u679c\uff0c\u4e3a3D\u53d8\u6362\u521b\u9020\u6df1\u5ea6\u611f */\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n  height: 100vh;\\n}\\n\\n.parallax__group {\\n  // highlight-next-line\\n  transform-style: preserve-3d; /* \u4fdd\u7559\u5b50\u5143\u7d203D\u53d8\u6362\u6548\u679c */\\n  position: relative;\\n  height: 100vh;\\n}\\n\\n.parallax__layer {\\n  position: absolute;\\n  inset: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* \u80cc\u666f\u5c42\u6837\u5f0f\uff0c\u8bbe\u7f6e\u4e3a\u6700\u8fdc\u7684\u5c42 */\\n.parallax__layer--back {\\n  transform: translateZ(-2px) scale(3);\\n  z-index: 1;\\n}\\n\\n/* \u4e2d\u95f4\u5c42\u6837\u5f0f\uff0c\u8bbe\u7f6e\u4e3a\u4e2d\u7b49\u8ddd\u79bb\u7684\u5c42 */\\n.parallax__layer--base {\\n  transform: translateZ(-1px) scale(2);\\n  z-index: 2;\\n}\\n\\n/* \u524d\u666f\u5c42\u6837\u5f0f\uff0c\u8bbe\u7f6e\u4e3a\u6700\u8fd1\u7684\u5c42 */\\n.parallax__layer--front {\\n  transform: translateZ(0px);\\n  z-index: 3;\\n}\\n```\\n\\n![principle](./principle.png)\\n\\n\u901a\u8fc7\u8bbe\u7f6e perspective \u5c5e\u6027\uff0c\u4e3a\u6574\u4e2a\u5bb9\u5668\u521b\u5efa\u4e00\u4e2a 3D \u7a7a\u95f4\u3002\\n\\n\u4f7f\u7528 transform-style: preserve-3d \u4fdd\u6301\u5b50\u5143\u7d20\u7684 3D \u53d8\u6362\u6548\u679c\u3002\\n\\n\u5c06\u5185\u5bb9\u5206\u4e3a\u591a\u4e2a\u5c42\uff08\u80cc\u666f\u3001\u4e2d\u95f4\u3001\u524d\u666f\uff09\uff0c\u4f7f\u7528 translateZ() \u5c06\u5b83\u4eec\u653e\u7f6e\u5728 3D \u7a7a\u95f4\u7684\u4e0d\u540c\u6df1\u5ea6\u3002\\n\\n\u5bf9\u4e8e\u8f83\u8fdc\u7684\u5c42\uff08\u5982\u80cc\u666f\u5c42\uff09\uff0c\u4f7f\u7528 scale() \u8fdb\u884c\u653e\u5927\uff0c\u4ee5\u8865\u507f\u7531\u4e8e\u8ddd\u79bb\u4ea7\u751f\u7684\u89c6\u89c9\u7f29\u5c0f\u6548\u679c\u3002\\n\\n\u5f53\u7528\u6237\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u7531\u4e8e\u5404\u5c42\u4f4d\u4e8e\u4e0d\u540c\u7684 Z \u8f74\u4f4d\u7f6e\uff0c\u5b83\u4eec\u4f1a\u4ee5\u4e0d\u540c\u7684\u901f\u5ea6\u79fb\u52a8\uff0c\u4ece\u800c\u4ea7\u751f\u89c6\u5dee\u6548\u679c\u3002\\n\\n### 3\u3001ReactScrollParallax\\n\\n\u60f3\u5f97\u5230\u66f4\u70ab\u9177\u7684\u6eda\u52a8\u89c6\u5dee\u6548\u679c\uff0c\u7eaf CSS \u7684\u5b9e\u73b0\u65b9\u5f0f\u5c31\u4f1a\u6709\u4e9b\u5403\u529b\u3002\\n\\n\u5982\u4e0b\u662f\u5728 React \u4e2d\u5b9e\u73b0\u793a\u4f8b\uff0c\u901a\u8fc7\u76d1\u542c\u6eda\u52a8\u4e8b\u4ef6\uff0c\u5c01\u88c5\u7edf\u4e00\u7684\u89c6\u5dee\u7ec4\u4ef6\uff0c\u6765\u8fbe\u5230\u591a\u6837\u7684\u52a8\u753b\u6548\u679c\u3002\\n\\n<ReactScrollParallaxDemo />\\n\\n```javascript\\nconst Parallax = ({ children, effects = [], speed = 1, style = {} }) => {\\n  // \u72b6\u6001hooks\uff1a\u7528\u4e8e\u5b58\u50a8\u52a8\u753b\u6548\u679c\u7684\u5f53\u524d\u503c\\n  const [transform, setTransform] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    if (!Array.isArray(effects) || effects.length === 0) {\\n      console.warn(\\"ParallaxElement: effects should be a non-empty array\\");\\n      return;\\n    }\\n\\n    const handleScroll = () => {\\n      // \u8ba1\u7b97\u6eda\u52a8\u8fdb\u5ea6\\n      const scrollProgress =\\n        (window.scrollY /\\n          (document.documentElement.scrollHeight - window.innerHeight)) *\\n        speed;\\n\\n      let transformString = \\"\\";\\n\\n      // \u5904\u7406\u6bcf\u4e2a\u6548\u679c\\n      effects.forEach((effect) => {\\n        const { property, startValue, endValue, unit = \\"\\" } = effect;\\n        const value =\\n          startValue +\\n          (endValue - startValue) * Math.min(Math.max(scrollProgress, 0), 1);\\n\\n        switch (property) {\\n          case \\"translateX\\":\\n          case \\"translateY\\":\\n            transformString += `${property}(${value}${unit}) `;\\n            break;\\n          case \\"scale\\":\\n            transformString += `scale(${value}) `;\\n            break;\\n          case \\"rotate\\":\\n            transformString += `rotate(${value}${unit}) `;\\n            break;\\n          // \u66f4\u591a\u7684\u52a8\u753b\u6548\u679c...\\n          default:\\n            console.warn(`Unsupported effect property: ${property}`);\\n        }\\n      });\\n\\n      // \u66f4\u65b0\u72b6\u6001\\n      setTransform(transformString);\\n    };\\n\\n    window.addEventListener(\\"scroll\\", handleScroll);\\n    // \u521d\u59cb\u5316\u4f4d\u7f6e\\n    handleScroll();\\n\\n    return () => {\\n      window.removeEventListener(\\"scroll\\", handleScroll);\\n    };\\n  }, [effects, speed]);\\n\\n  // \u6e32\u67d3\u5e26\u6709\u8ba1\u7b97\u6837\u5f0f\u7684\u5b50\u5143\u7d20\\n  return <div style={{ ...style, transform }}>{children}</div>;\\n};\\n```\\n\\n\u5728\u6b64\u57fa\u7840\u4e0a\u4f60\u53ef\u4ee5\u6dfb\u52a0`\u7f13\u52a8\u51fd\u6570`\u4f7f\u52a8\u753b\u6548\u679c\u66f4\u52a0\u5e73\u6ed1\uff1b\u4ee5\u53ca\u4f7f\u7528`requestAnimationFrame`\u83b7\u5f97\u66f4\u9ad8\u7684\u52a8\u753b\u6027\u80fd\u3002\\n\\n:::tip requestAnimationFrame \u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\\n\u540c\u6b65\u6d4f\u89c8\u5668\u6e32\u67d3\u5468\u671f\uff1arequestAnimationFrame \u4f1a\u5728\u6d4f\u89c8\u5668\u4e0b\u4e00\u6b21\u91cd\u7ed8\u4e4b\u524d\u8c03\u7528\u6307\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u786e\u4fdd\u4e86\u52a8\u753b\u66f4\u65b0\u4e0e\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u5468\u671f\u540c\u6b65\uff0c\u4ece\u800c\u4ea7\u751f\u66f4\u6d41\u7551\u7684\u52a8\u753b\u6548\u679c\u3002\\n\\n\u63d0\u9ad8\u6027\u80fd\uff1a\u4e0e\u4f7f\u7528 setInterval \u6216 setTimeout \u76f8\u6bd4\uff0crequestAnimationFrame \u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u52a8\u753b\u3002\u5b83\u53ea\u5728\u6d4f\u89c8\u5668\u51c6\u5907\u597d\u8fdb\u884c\u4e0b\u4e00\u6b21\u91cd\u7ed8\u65f6\u624d\u4f1a\u6267\u884c\uff0c\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u548c\u91cd\u7ed8\u3002\\n\\n\u4f18\u5316\u7535\u6c60\u4f7f\u7528\uff1a\u5728\u4e0d\u53ef\u89c1\u7684\u6807\u7b7e\u9875\u6216\u6700\u5c0f\u5316\u7684\u7a97\u53e3\u4e2d\uff0crequestAnimationFrame \u4f1a\u81ea\u52a8\u6682\u505c\uff0c\u8fd9\u53ef\u4ee5\u8282\u7701 CPU \u5468\u671f\u548c\u7535\u6c60\u5bff\u547d\u3002\\n\\n\u9002\u5e94\u663e\u793a\u5668\u5237\u65b0\u7387\uff1arequestAnimationFrame \u4f1a\u81ea\u52a8\u9002\u5e94\u663e\u793a\u5668\u7684\u5237\u65b0\u7387\u3002\u8fd9\u610f\u5473\u7740\u5728 60Hz\u3001120Hz \u6216\u5176\u4ed6\u5237\u65b0\u7387\u7684\u663e\u793a\u5668\u4e0a\uff0c\u52a8\u753b\u90fd\u80fd\u4fdd\u6301\u6d41\u7551\u3002\\n\\n\u907f\u514d\u4e22\u5e27\uff1a\u7531\u4e8e\u4e0e\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u5468\u671f\u540c\u6b65\uff0c\u4f7f\u7528 requestAnimationFrame \u53ef\u4ee5\u51cf\u5c11\u4e22\u5e27\u73b0\u8c61\uff0c\u7279\u522b\u662f\u5728\u9ad8\u8d1f\u8377\u60c5\u51b5\u4e0b\u3002\\n\\n\u66f4\u7cbe\u786e\u7684\u65f6\u95f4\u63a7\u5236\uff1arequestAnimationFrame \u63d0\u4f9b\u4e86\u4e00\u4e2a\u65f6\u95f4\u6233\u53c2\u6570\uff0c\u5141\u8bb8\u66f4\u7cbe\u786e\u5730\u63a7\u5236\u52a8\u753b\u7684\u65f6\u95f4\u3002\\n:::\\n\\n### 4\u3001\u7ec4\u4ef6\u5e93\u65b9\u6848\\n\\n\u5728\u5f53\u524d\u6210\u719f\u7684\u524d\u7aef\u751f\u6001\u4e2d\uff0c\u60f3\u8981\u83b7\u5f97\u7cbe\u5f69\u7684\u89c6\u5dee\u52a8\u753b\u6548\u679c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u73b0\u6709\u7684\u5f00\u6e90\u7ec4\u4ef6\u5e93\u6765\u9ad8\u6548\u7684\u5b8c\u6210\u5f00\u53d1\u3002\\n\\n\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u7684\u4e3b\u6d41\u7ec4\u4ef6\u5e93\uff1a\\n\\n- [rellax (Lightweight, vanilla javascript parallax library)](https://github.com/dixonandmoe/rellax)\\n\\n- [react-scroll-parallax](https://github.com/jscottsmith/react-scroll-parallax)\\n\\n- [framer-motion](https://www.framer.com/motion/scroll-animations/)\\n\\n## \u5f15\u7528\u53c2\u8003\\n\\n[MDN - background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)\\n\\n[MDN - transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)\\n\\n[Pure CSS Parallax Websites](https://keithclark.co.uk/articles/pure-css-parallax-websites/)\\n\\n[How to create parallax scrolling with CSS](https://blog.logrocket.com/create-parallax-scrolling-css/)\\n\\n[\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5](https://shirleyhwj.github.io/blog/2018/07/19/%E8%A7%86%E5%B7%AE%E6%BB%9A%E5%8A%A8%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E7%8E%B0/)"},{"id":"debug-mobile-web","metadata":{"permalink":"/blog/debug-mobile-web","source":"@site/blog/debug-mobile-web/index.md","title":"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357","description":"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5","date":"2024-06-01T00:00:00.000Z","tags":[{"inline":true,"label":"tech","permalink":"/blog/tags/tech"}],"readingTime":4.09,"hasTruncateMarker":false,"authors":[{"name":"\u5c0f\u5b66\u540e\u751f","title":"Full Stack Developer","url":"https://dnevend.github.io","imageURL":"https://github.com/Dnevend.png","key":"Dnevend"}],"frontMatter":{"slug":"debug-mobile-web","title":"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357","description":"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5","date":"2024-06-01T00:00:00.000Z","authors":["Dnevend"],"tags":["tech"]},"unlisted":false,"prevItem":{"title":"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5","permalink":"/blog/parallax-scrolling-effect"}},"content":"\u5f53\u79fb\u52a8\u7aef web \u9879\u76ee\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883\uff0c\u9879\u76ee\u90e8\u7f72\u5728 Android/iOS \u6216\u5176\u4ed6\u79fb\u52a8\u8bbe\u5907\u4e0b\u53d1\u751f\u95ee\u9898, \u6216\u60f3\u8981\u6a21\u62df\u8bf7\u6c42\u4e0e\u62e6\u622a\u54cd\u5e94\u6570\u636e\u65f6\uff0c\u4f60\u4f1a\u901a\u8fc7\u4ec0\u4e48\u65b9\u5f0f\u6765\u8fdb\u884c\u5904\u7406\u4e0e\u8c03\u8bd5\uff1f\\n\\n\u5f53\u9879\u76ee\u662f\u79fb\u52a8\u7aef\u7684\u666e\u901a\u7f51\u9875\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chrome \u6d4f\u89c8\u5668\u81ea\u5e26\u7684 `chrome://inspect` \u529f\u80fd\uff0c\u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u771f\u673a\u8bbe\u5907\u4ee5\u5b9e\u73b0\u5f00\u53d1\u8c03\u8bd5\u3002\\n\\n\u4f46\u5f53\u9047\u5230\u9700\u8981\u6a21\u62df\u7279\u5b9a\u8bf7\u6c42\u6216\u54cd\u5e94\u5185\u5bb9\u3001\u6ce8\u5165\u811a\u672c\u3001\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u5934\u7684\u573a\u666f\u65f6\uff0cinspect \u5c31\u96be\u4ee5\u5e94\u5bf9\u4e86\u3002\u53c8\u6216\u8005\uff0c\u4f60\u7684\u9879\u76ee\u4f5c\u4e3a WebView \u6216 JsBridge \u9875\u9762\u5d4c\u5165\u5728\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u5185\uff0c\u5728\u8fd9\u51e0\u79cd\u573a\u666f\u4e0b\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u6293\u5305\u5de5\u5177\u6765\u5b8c\u6210\u66f4\u9ad8\u7ea7\u7684\u8c03\u8bd5\u64cd\u4f5c\u3002\\n\\n\u5e38\u89c1\u7684\u4e3b\u6d41\u4ee3\u7406\u5de5\u5177\u6709\uff1aFiddler\u3001Charles\uff0c\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u5229\u7528`Whistle`\u8fdb\u884c\u8c03\u8bd5\u64cd\u4f5c\uff0cWhistle \u57fa\u4e8e Node \u5b9e\u73b0\u8de8\u5e73\u53f0\uff0c\u65e0\u9700\u7b2c\u4e09\u65b9\u5b89\u88c5\u5305\uff0c\u66f4\u7b26\u5408\u524d\u7aef\u7684\u64cd\u4f5c\u4e60\u60ef\u3002\\n\\n## \u4f7f\u7528 chrome://inspect\\n\\n### \u8bbe\u5907\u5f00\u542f USB \u8c03\u8bd5\\n\\n\u5728\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5bf9\u8bbe\u5907\u5f00\u653e\u57fa\u7840\u7684\u8c03\u8bd5\u914d\u7f6e\uff0c\u5728 Android \u548c iOS \u4e0b\u6709\u4e0d\u540c\u7684\u5f00\u542f\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee\u4e0b\u9762\u94fe\u63a5\u4e86\u89e3\u66f4\u591a\uff1a\\n\\n- [Android \u914d\u7f6e\u5f00\u53d1\u8005\u9009\u9879](https://developer.android.com/studio/debug/dev-options?hl=zh-cn#Enable-debugging)\\n\\n- [iOS \u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5](https://dev.to/nimajafari/remote-debugging-using-google-chrome-on-ios-devices-with-macos-ca9)\\n\\n### \u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177\\n\\n\u5728\u5b8c\u6210\u8bbe\u5907\u7684\u914d\u7f6e\u540e\uff0c\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u4e2d\u8f93\u5165 `chrome://inspect` \u8bbf\u95ee\u5f00\u53d1\u8005\u5de5\u5177\u3002\\n\\n![inspect page](./inspect.png)\\n\\n![dev-tools](./dev-tools.png)\\n\\n## \u4f7f\u7528 Whistle\\n\\n### \u5b98\u65b9\u4ecb\u7ecd\\n\\n> whistle(\u8bfb\u97f3[\u02c8w\u026as\u0259l]\uff0c\u62fc\u97f3[w\u0113is\u01d2u]) \u57fa\u4e8e Node \u5b9e\u73b0\u7684\u8de8\u5e73\u53f0 web \u8c03\u8bd5\u4ee3\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u7684\u5de5\u5177\u6709 Windows \u5e73\u53f0\u4e0a\u7684 Fiddler\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u770b\u3001\u4fee\u6539 HTTP\u3001HTTPS\u3001Websocket \u7684\u8bf7\u6c42\u3001\u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668\u4f7f\u7528\uff0c\u4e0d\u540c\u4e8e Fiddler \u901a\u8fc7\u65ad\u70b9\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u7684\u65b9\u5f0f\uff0cwhistle \u91c7\u7528\u7684\u662f\u7c7b\u4f3c\u914d\u7f6e\u7cfb\u7edf hosts \u7684\u65b9\u5f0f\uff0c\u4e00\u5207\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5b9e\u73b0\uff0c\u652f\u6301\u57df\u540d\u3001\u8def\u5f84\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001\u901a\u914d\u7b26\u3001\u901a\u914d\u8def\u5f84\u7b49\u591a\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u4e14\u53ef\u4ee5\u901a\u8fc7 Node \u6a21\u5757\u6269\u5c55\u529f\u80fd\\n\\n### \u5b89\u88c5&\u542f\u52a8\\n\\n> \u6b65\u9aa4: \u5b89\u88c5 Node > \u5b89\u88c5 whistle > \u542f\u52a8 whistle > \u914d\u7f6e\u4ee3\u7406 > \u5b89\u88c5\u6839\u8bc1\u4e66\\n\\n```\\n# \u5b89\u88c5\\nnpm install -g whistle\\n\\n# \u68c0\u67e5: \u6267\u884c\u4e0b\u65b9\u547d\u4ee4\u540e\u5982\u679c\u6b63\u5e38\u8f93\u51fawhistle\u5e2e\u52a9\u4fe1\u606f, \u4ee3\u8868\u5b89\u88c5\u6210\u529f\\nw2 help\\n\\n# \u542f\u52a8: \u8fd0\u884c\u540e\u9ed8\u8ba4\u8bbf\u95ee\u5730\u5740\u4e3a http://127.0.0.1:8899/\\nw2 start\\n```\\n\\n> \u66f4\u591a\u547d\u4ee4\u89c1 [\u5b98\u65b9\u6587\u6863](https://wproxy.org/whistle/options.html)\\n\\n### \u4ee3\u7406&\u8bc1\u4e66\u914d\u7f6e\\n\\n\u5728\u4f7f\u7528\u5de5\u5177\u524d\uff0c\u8bf7\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u5b89\u88c5\u5de5\u5177\u7684 HTTPS \u8bc1\u4e66\uff0c\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u8c03\u8bd5\u80fd\u529b\u3002\\n\\n> \u5f53\u4ee3\u7406\u5de5\u5177\u62e6\u622a HTTPS \u8bf7\u6c42\u65f6\uff0c\u5b83\u4f1a\u5145\u5f53\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u4e2d\u95f4\u4eba\uff08MITM\uff09\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u4f2a\u9020\u7684\u8bc1\u4e66\u6765\u66ff\u6362\u539f\u6709\u7684\u670d\u52a1\u5668\u8bc1\u4e66\u3002\u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709\u4fe1\u4efb\u8fd9\u4e2a\u4f2a\u9020\u7684\u8bc1\u4e66\uff0c\u5c31\u4f1a\u51fa\u73b0\u8bc1\u4e66\u9519\u8bef\u3002\\n\\n![qrcode](./qrcode.png)\\n\\n![network](./network.png)\\n\\n### \u539f\u7406&\u6d41\u7a0b\\n\\n![principle](./principle.png)\\n\\n### \u5e38\u7528\u89c4\u5219\\n\\n```\\n# \u4fee\u6539\u8bf7\u6c42\u5217\u8868\u663e\u793aStyle\\n    style://color=@fff&fontStyle=italic&bgColor=red\\n# \u4fee\u6539UserAgent\\n\\tua://{ua}\\n# \u4fee\u6539\u72b6\u6001\u7801\\n\\tstatusCode://[statusCode]\\n# \u4fee\u6539\u8bf7\u6c42\u5934/\u54cd\u5e94\u5934\\n\\treqHeaders://{value}  resHeaders://{value}\\n# \u4fee\u6539\u8bf7\u6c42\u5185\u5bb9\\n\\treqBody://{request.json}\\n# \u4fee\u6539\u54cd\u5e94\u5185\u5bb9\\n\\tresBody://{response.json}\\n# \u6a21\u62df\u5ef6\u65f6\\n\\treqDelay://[delayTime]\\n# \u5904\u7406\u8de8\u57df\\n\\tresCors://*\\n# \u4fee\u6539Host\u914d\u7f6e\\n\\t[originHost] [targetHost]\\n\\n```\\n\\n## \u5f15\u7528\u53c2\u8003\\n\\n[Whistle](https://wproxy.org/whistle/)"}]}}')}}]);