import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第47日份麦芽唐 - 小画师主页",
  description:
    "第47日份麦芽唐 - 在校上学的学生w，努力积攒绘画经验的小画师",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
