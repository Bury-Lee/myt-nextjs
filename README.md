# 麦芽唐 - 个人网站

一个基于 Next.js 16 构建的静态个人作品集网站，展示插画、OC 设定和作品集。

##  功能特性

-  **作品展示** - 瀑布流布局展示插画作品
-  **个人简介** - 展示头像、关于信息、兴趣爱好
-  **社区互动** - 展示社交媒体链接
-  **响应式设计** - 完美适配桌面和移动端
-  **静态导出** - 可部署到任何静态托管服务

##  技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: 汉唐字体 (HanTang.woff2)
- **图标**: 内置 SVG 图标组件
- **部署**: 静态导出 (Static Export)

##  项目结构

```
myt-nextjs/
├── public/
│   ├── fonts/
│   │   └── HanTang.woff2          # 汉唐字体文件
│   └── images/
│       ├── avatar.png             # 头像
│       ├── oc-auralith.jpg        # OC 瑭珥
│       ├── oc-qianyaoyao.jpg      # OC 黔曜曜
│       ├── work-1.jpg             # 作品 1
│       ├── work-2.jpg             # 作品 2
│       ├── work-3.jpg             # 作品 3
│       ├── work-4.jpg             # 作品 4
│       ├── work-5.jpg             # 作品 5
│       └── work-6.jpg             # 作品 6
├── src/
│   ├── app/
│   │   ├── layout.tsx             # 根布局
│   │   └── page.tsx               # 首页
│   ├── components/
│   │   ├── Header.tsx             # 顶部导航栏
│   │   ├── Footer.tsx             # 页脚
│   │   ├── NoticeBar.tsx          # 公告栏
│   │   ├── ProfileHeader.tsx      # 个人资料头部
│   │   ├── AboutSection.tsx       # 关于我
│   │   ├── CommissionSection.tsx  # 作品集
│   │   ├── CommunitySection.tsx   # 社区互动
│   │   ├── GallerySection.tsx     # 作品画廊
│   │   └── Icons.tsx              # SVG 图标组件
│   └── data/
│       └── siteData.ts            # 站点数据
├── next.config.ts                 # Next.js 配置
├── tailwind.config.ts             # Tailwind CSS 配置
├── tsconfig.json                  # TypeScript 配置
└── package.json                   # 项目依赖
```

##  快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm start
```

##  部署

本项目使用静态导出，可以部署到任何静态托管服务：

- **Vercel**: 推荐部署平台
- **Netlify**: 支持静态站点
- **GitHub Pages**: 免费静态托管
- **Cloudflare Pages**: 快速部署
- **其他**: 任何支持静态 HTML 的服务器

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并部署

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建命令: `npm run build`
4. 发布目录: `out` (或 `dist`)

##  自定义

### 修改站点数据

编辑 `src/data/siteData.ts` 文件，可以修改：
- 个人信息（头像、昵称、简介）
- 作品集内容
- 社交媒体链接
- 公告内容

### 修改样式

编辑 `src/app/globals.css` 文件，可以修改：
- 全局颜色主题
- 字体设置
- 布局样式

### 添加新作品

1. 将图片文件放入 `public/images/` 目录
2. 在 `src/data/siteData.ts` 的 `galleryImages` 数组中添加新作品信息

```typescript
{ src: "/images/work-new.jpg", alt: "作品名称" },
```

##  许可证

本项目仅供个人学习使用。

##  感谢 & 贡献

感谢：本项目页面样式沿用[https://github.com/Bury-Lee/bury-lee](https://github.com/Bury-Lee/bury-lee)项目样式

欢迎提交 Issue 和 Pull Request！

---
