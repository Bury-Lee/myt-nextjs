import type { Metadata } from "next";
import BackgroundDecor from "@/components/BackgroundDecor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "价目表 - 第47日份麦芽唐",
  description: "第47日份麦芽唐的约稿价目表与定价说明。",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <BackgroundDecor />
      <div className="container pricing-page-container">
        <section id="pricing" className="anchor-section">
          <PricingSection />
        </section>
        <Footer />
      </div>
    </>
  );
}
