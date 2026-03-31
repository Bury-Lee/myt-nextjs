"use client";

import { profileData } from "@/data/siteData";
import { UsersIcon, MessageIcon } from "@/components/Icons";

export default function CommunitySection() {
  return (
    <section className="card community-card">
      <h2 className="section-heading">
        <span className="section-heading-icon">
          <UsersIcon size={20} color="var(--primary-color)" />
        </span>
        社交与社群
      </h2>
      <div className="platforms">
        {profileData.platforms.map((platform, index) => (
          <div className="platform-item" key={index}>
            <span className="platform-name">{platform.name}</span>
            <span className="platform-id">ID: {platform.id}</span>
          </div>
        ))}
      </div>
      <div className="community-box">
        <span className="community-icon">
          <MessageIcon size={24} color="#12b7f5" />
        </span>
        <p>{profileData.community}</p>
      </div>
    </section>
  );
}
