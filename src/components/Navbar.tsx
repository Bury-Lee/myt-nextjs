"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  BrushIcon,
  GalleryIcon,
  PriceTagIcon,
} from "@/components/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSectionNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (isHomePage) {
      return;
    }

    event.preventDefault();
    const targetUrl = sectionId === "profile" ? "/" : `/#${sectionId}`;
    window.location.assign(targetUrl);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <a href="/" className="top-nav-brand">
          <img
            src="/images/avatar.png"
            alt="头像"
            className="top-nav-brand-icon"
          />
          <span>麦芽唐</span>
        </a>
        <ul className="top-nav-links">
          <li>
            <a href="/#profile" onClick={(event) => handleSectionNavigation(event, "profile")}>
              <HomeIcon size={14} />
              <span>主页</span>
            </a>
          </li>
          <li className="top-nav-item-about top-nav-item-about-compact">
            <a href="/#about" onClick={(event) => handleSectionNavigation(event, "about")}>
              <UserIcon size={14} />
              <span>关于</span>
            </a>
          </li>
          <li>
            <a
              href="/#commission"
              onClick={(event) => handleSectionNavigation(event, "commission")}
            >
              <BrushIcon size={14} />
              <span>约稿</span>
            </a>
          </li>
          <li>
            <a href="/#gallery" onClick={(event) => handleSectionNavigation(event, "gallery")}>
              <GalleryIcon size={14} />
              <span>作品</span>
            </a>
          </li>
          <li>
            <a href="/pricing">
              <PriceTagIcon size={14} />
              <span>价目表</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
