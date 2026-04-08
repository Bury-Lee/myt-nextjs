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
        <section id="profile" className="anchor-section">
          {/* 头部/个人简介 */}
          <ProfileHeader />
        </section>

        {/* 通知/版权声明 */}
        <NoticeBar />

        <section id="about" className="anchor-section">
          {/* 爱好与OC信息 */}
          <AboutSection />
        </section>

        <section id="commission" className="anchor-section">
          {/* 约稿 + 社交 网格布局 */}
          <div className="grid-layout">
            <CommissionSection />
            <CommunitySection />
          </div>
        </section>

        <section id="gallery" className="anchor-section">
          {/* 作品展示 */}
          <GallerySection />
        </section>

        {/* 页脚 */}
        <Footer />
      </div>
    </>
  );
}
