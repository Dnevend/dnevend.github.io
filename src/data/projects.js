import StoicPrinter from "../../static/img/projects/stoic-printer.webp";
import StoicPrinterSecond from "../../static/img/projects/stoic-printer-2.webp";
import StoicPipeline from "../../static/img/projects/stoic-pipeline.png";
import AttentionWebsite from "../../static/img/projects/attention-website.png";
import AttentionExtension from "../../static/img/projects/attention-extension.png";
import AttentionUnblurred from "../../static/img/projects/attention-unblurred.webp";
import SSCHome from '../../static/img/projects/ssc-home.png';
import SSCDetail from '../../static/img/projects/ssc-detail.png';
import SSCData from '../../static/img/projects/ssc-data.png';

// 项目数据：新增项目时复制一个对象即可。
// status 只使用 "active"（活跃）或 "ended"（结束）。
export const projects = [
  {
    title: "短线交易数据台",
    description:
      "通过策略脚本24小时执行，筛选出具有潜在交易机会的币种数据。通过该数据减少在交易前的发现成本，执行时的决策成本。详情页面同时提供多个常用工具入口，减少决策链路，同时可复制带有实时数据的提示词交给大模型进行风险控制和制定交易计划。",
    image: SSCHome,
    imageAlt: "短线交易数据台页面",
    gallery: [
      { src: SSCHome, alt: "数据台筛选列表页" },
      { src: SSCDetail, alt: "币种详情状态页" },
      { src: SSCData, alt: "币种实时线上数据" },
    ],
    href: "https://ssc.dnevend.site",
    status: "active",
    year: "2026",
    tags: ["AI", "Trade"],
  },
  {
    title: "斯多葛打印机",
    description:
      "每天抓取斯多葛相关文章，定时让热敏打印机输出一篇对应英语学习文档，同时合成音频推送至手机。",
    image: StoicPipeline,
    imageAlt: "斯多葛打印机运行流程",
    gallery: [
      { src: StoicPipeline, alt: "斯多葛打印机运行流程" },
      { src: StoicPrinterSecond, alt: "斯多葛打印机打印成品" },
      { src: StoicPrinter, alt: "斯多葛打印机与打印出的纸条" },
    ],
    href: "https://github.com/Dnevend/daily-stoic-printer",
    status: "active",
    year: "2026",
    tags: ["AI", "自动化", "硬件"],
  },
  {
    title: "X-Comfort-Browser",
    description:
      "在浏览推特等内容平台时主动屏蔽图片视频和广告，减少阅读噪音与注意力分散的浏览器插件。",
    image: AttentionWebsite,
    imageAlt: "X-Comfort-Browser 插件效果截图",
    gallery: [
      { src: AttentionWebsite, alt: "X-Comfort-Browser 网站" },
      { src: AttentionExtension, alt: "X-Comfort-Browser 模糊干扰内容的效果" },
      { src: AttentionUnblurred, alt: "X-Comfort-Browser 恢复原始内容的效果" },
    ],
    href: "https://x-comfort-browser.dnevend.site",
    status: "active",
    year: "2024",
    tags: ["浏览器插件"],
  }
];
