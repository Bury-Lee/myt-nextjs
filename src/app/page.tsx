"use client";

import Navbar from "@/components/Navbar";
import BackgroundDecor from "@/components/BackgroundDecor";
import ProfileHeader from "@/components/ProfileHeader";
import NoticeBar from "@/components/NoticeBar";
import AboutSection from "@/components/AboutSection";
import CommissionSection from "@/components/CommissionSection";
import CommunitySection from "@/components/CommunitySection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundDecor />
      <div className="container">
        {/* 头部/个人简介 */}
        <ProfileHeader />

        {/* 通知/版权声明 */}
        <NoticeBar />

        {/* 爱好与OC信息 */}
        <AboutSection />

        {/* 约稿 + 社交 网格布局 */}
        <div id="commission" className="grid-layout">
          <CommissionSection />
          <CommunitySection />
        </div>

        {/* 作品展示 */}
        <GallerySection />

        {/* 页脚 */}
        <Footer />
      </div>
    </>
  );
}
