import StoicPrinter from "../../static/img/projects/stoic-printer.webp";
import AttentionExtension from "../../static/img/projects/attention-extension.png";
import TelegramPaymentBot from "../../static/img/projects/tg-payment-bot.jpeg";
import ParallaxScrolling from "../../static/img/projects/parallax-scrolling.png";

// 项目数据：新增项目时复制一个对象即可。
// status 只使用 "active"（活跃）或 "ended"（结束）。
export const projects = [
  {
    title: "斯多葛打印机",
    description:
      "用 AI 调度起一条流水线，每天清晨九点让打印机吐出一页英语学习文档。",
    image: StoicPrinter,
    imageAlt: "斯多葛打印机与打印出的纸条",
    href: "/blog/stoic-printer",
    status: "active",
    year: "2026",
    tags: ["AI", "自动化", "硬件"],
  },
  {
    title: "为革命保护“视”力",
    description:
      "在推特冲浪时减少噪音与注意力分散的浏览器插件，名为 X-Comfort-Browser。",
    image: AttentionExtension,
    imageAlt: "X-Comfort-Browser 插件封面",
    href: "/blog/attention-and-extension",
    status: "ended",
    year: "2024",
    tags: ["浏览器插件", "前端"],
  },
  {
    title: "Telegram 支付机器人",
    description:
      "基于 grammY 框架的 Telegram Bot 支付机器人，支持 TON 与 Telegram Stars。",
    image: TelegramPaymentBot,
    imageAlt: "Telegram Stars 支付机器人配图",
    href: "https://github.com/Dnevend/tg-payment-bot",
    status: "ended",
    year: "2024",
    tags: ["Telegram", "支付", "TON"],
  },
  {
    title: "视差滚动实践",
    description:
      "通过多层图像以不同速度移动，做出有纵深与动感的视差滚动效果。",
    image: ParallaxScrolling,
    imageAlt: "视差滚动原理示意图",
    href: "/blog/parallax-scrolling-effect",
    status: "ended",
    year: "2024",
    tags: ["前端", "CSS"],
  },
];
