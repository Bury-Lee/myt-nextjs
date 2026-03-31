"use client";

import { HomeIcon, UserIcon, BrushIcon, GalleryIcon } from "@/components/Icons";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <div className="top-nav-brand">
          <img
            src="/images/avatar.png"
            alt="头像"
            className="top-nav-brand-icon"
          />
          <span>麦芽唐</span>
        </div>
        <ul className="top-nav-links">
          <li>
            <a href="#profile">
              <HomeIcon size={14} />
              <span>主页</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <UserIcon size={14} />
              <span>关于</span>
            </a>
          </li>
          <li>
            <a href="#commission">
              <BrushIcon size={14} />
              <span>约稿</span>
            </a>
          </li>
          <li>
            <a href="#gallery">
              <GalleryIcon size={14} />
              <span>作品</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
