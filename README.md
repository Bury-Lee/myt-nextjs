# 第47日份麦芽唐 · 个人作品站

一个基于 **Next.js 16 + TypeScript + Tailwind CSS v4** 构建的静态个人网站，用于展示画师主页、OC 设定、作品集与约稿价目表。

项目当前包含两个主要页面：

- `/`：首页，包含个人介绍、关于、约稿说明、社交信息与作品集
- `/pricing/`：独立价目表页面，展示各类稿件、说明与示例图

## 项目特性

- **静态导出**：已启用 `output: 'export'`，可直接部署到静态托管平台
- **双页面结构**：首页与价目表独立拆分，便于维护与扩展
- **统一视觉风格**：导航、背景装饰、卡片、字体与配色保持一致
- **响应式布局**：适配桌面端与移动端浏览
- **作品灯箱预览**：支持大图查看、切换与键盘操作
- **价目表示例预览**：支持多张例图展示与放大预览
- **约稿注意事项**：包含未成年人警告条款与 10 条详细约稿条款
- **数据集中管理**：主要内容集中在 `src/data/siteData.ts`

## 技术栈

- **框架**：Next.js 16（App Router）
- **语言**：TypeScript
- **样式**：Tailwind CSS v4 + 全局 CSS
- **运行时**：React 19
- **构建方式**：Static Export

## 快速开始

### 1. 安装依赖

```bash
npm install
```

如果你使用 pnpm，也可以执行：

```bash
pnpm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认访问地址：

- http://localhost:3000/
- http://localhost:3000/pricing/

### 3. 构建生产版本

```bash
npm run build
```

静态导出结果默认生成在 `out/` 目录。

### 4. 本地预览

如果你使用的是 Next.js 生产服务：

```bash
npm start
```

如果你需要预览静态导出结果，建议使用任意静态服务器打开 `out/` 目录。

## 常用脚本

```bash
npm run dev    # 启动开发环境
npm run build  # 构建并导出静态站点
npm run start  # 启动生产服务
npm run lint   # 执行 ESLint 检查
```

## 项目结构

```text
myt-nextjs/
├── public/
│   ├── fonts/
│   │   └── HanTang.woff2
│   └── images/
│       ├── avatar.png
│       ├── oc-InkyShimmer.jpg
│       ├── oc-JasperAureole.jpg
│       ├── oc-ReveriNesty.png
│       ├── pricing/
│       │   └── ... 价目表示例图
│       └── work-*.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── pricing/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CommissionSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ...
│   └── data/
│       └── siteData.ts
├── next.config.ts
├── package.json
└── README.md
```

## 数据维护说明

项目主要内容集中在 `src/data/siteData.ts`，包括：

- `profileData`：主页展示的个人信息与平台信息
- `hobbies`：爱好标签
- `ocList`：OC 设定内容
- `galleryImages`：作品集图片
- `pricingItems`：价目表卡片数据
- `pricingColumnLayout`：桌面端价目表左右列分配
- `pricingGuideQuestions` / `pricingGuideNote`：价目表问答区内容

### 维护价目表时的建议

#### 1. 新增或修改价目项
直接编辑 `pricingItems`：

```ts
{
  id: "headshot",
  order: "01",
  title: "大头",
  price: "底价 69r",
  priceDetail: "浮动 0 ~ 20r ｜ 自带简易背景",
  description: ["包含一枚脑袋和两只爪子。"],
  images: [{ src: "/images/pricing/headshot.jpg", alt: "大头例图" }],
}
```

#### 2. 调整桌面端左右列顺序
直接编辑 `pricingColumnLayout`：

```ts
export const pricingColumnLayout = {
  left: ["headshot", "mini-q", "tiny-nosega"],
  right: ["animal-fullbody", "animal-halfbody", "design-refresh", "business-card"],
};
```

这里使用的是稳定的 `id`，不是展示编号 `order`，因此后续调整排序或文案时更安全。

#### 3. 添加价目表示例图
将素材放到：

```text
public/images/pricing/
```

然后在对应 `pricingItems[].images` 中填写图片路径即可。

#### 4. 维护约稿注意事项

价目表页面包含两处约稿注意事项展示：

**顶部未成年人警告条款**（`minorWarning`）：

```ts
export const minorWarning = {
  title: "未成年人约稿条款",
  content: "本人不接受未成年人约稿。如您未满 18 周岁，请勿下单。",
};
```

显示在价目表标题下方，橙色警告样式，用于醒目提示。

**完整约稿注意事项**（`commissionTerms`）：

```ts
export const commissionTerms: CommissionTerm[] = [
  {
    title: "约稿流程",
    items: [
      "联系画师并说明需求",
      "确认价格与交稿时间",
      "支付定金后开始绘制",
    ],
  },
  // ... 更多条款
];
```

显示在价目表底部，卡片式布局，包含 10 条详细条款与重要说明。

修改约稿条款时，直接编辑 `siteData.ts` 中的对应数组即可，无需修改组件代码。

## 页面说明

### 首页 `/`

首页由多个 section 组成：

- `#profile`：个人头部
- `#about`：关于与 OC 展示
- `#commission`：约稿说明与社群信息
- `#gallery`：作品画廊

### 价目表 `/pricing/`

价目表页面复用了站点统一的：

- 顶部导航
- 背景装饰
- 页脚

并额外包含：

- 价目卡片
- 示例图预览灯箱
- 问答式约稿说明区
- 未成年人约稿警告条款
- 完整约稿注意事项（10 条条款 + 重要说明）

## 部署说明

由于项目启用了：

```ts
output: "export"
```

因此适合部署到任意静态托管平台，例如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Nginx / Apache 静态目录

### 部署后注意事项

- 当前配置已开启 `trailingSlash: true`
- 静态导出后页面会生成到 `out/`
- 如果部署到子路径，需要额外确认静态资源路径与访问前缀配置

## 开发建议

- 站点内容优先维护在 `siteData.ts`，尽量避免把文案散落到组件里
- 新增页面时尽量复用 `Navbar`、`BackgroundDecor`、`Footer`，保持风格统一
- 如果修改锚点结构，建议同时检查 `page.tsx` 中各 section 的 `id` 挂载位置
- 修改图片资源后，记得检查静态导出结果中的路径是否正常

## 致谢

本项目页面风格参考并沿用了：

- [Bury-Lee / bury-lee](https://github.com/Bury-Lee/bury-lee)

## License

本项目主要用于个人展示与学习，请在尊重原作者与素材版权的前提下使用。
