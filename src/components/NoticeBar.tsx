"use client";

import { profileData } from "@/data/siteData";
import { AlertIcon } from "@/components/Icons";

export default function NoticeBar() {
  return (
    <div className="notice-bar">
      <span className="notice-icon">
        <AlertIcon size={20} color="#856404" />
      </span>
      <span>{profileData.notice}</span>
    </div>
  );
}
