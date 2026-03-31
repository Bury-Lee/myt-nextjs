"use client";

import { profileData } from "@/data/siteData";
import { PaletteIcon } from "@/components/Icons";

export default function CommissionSection() {
  return (
    <section className="card commission-card">
      <h2 className="section-heading">
        <span className="section-heading-icon">
          <PaletteIcon size={20} color="var(--primary-color)" />
        </span>
        约稿说明
      </h2>
      <div className="products">
        {profileData.main_products.map((product, index) => (
          <span className="product-badge" key={index}>
            {product}
          </span>
        ))}
      </div>
      <p className="details">{profileData.details}</p>
    </section>
  );
}
