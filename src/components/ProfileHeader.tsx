"use client";

import { profileData } from "@/data/siteData";

export default function ProfileHeader() {
  return (
    <header className="card profile-header">
      <div className="avatar-container">
        <img
          src="/images/avatar.png"
          alt="头像"
          className="avatar-img"
        />
      </div>
      <div className="profile-info">
        <h1>{profileData.homepage_name}</h1>
        <div className="tags">
          <span className="tag">@{profileData.alias}</span>
          <span className="tag tag-identity">{profileData.identity}</span>
        </div>
        <p className="abstract">{profileData.abstract}</p>
      </div>
    </header>
  );
}
