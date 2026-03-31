"use client";

import { hobbies, ocList } from "@/data/siteData";
import type { HobbyIconName, OcDescIconName } from "@/data/siteData";
import {
  HeartIcon,
  StarIcon,
  TvIcon,
  BookIcon,
  PlaneIcon,
  MoonIcon,
  SnakeIcon,
  CatIcon,
  SparkleIcon,
  SettingsIcon,
  StoryIcon,
  CoffeeIcon,
  DiamondIcon,
  SmileIcon,
  EyeIcon,
  ZapIcon,
} from "@/components/Icons";
import React from "react";

// 爱好图标映射
const hobbyIconMap: Record<HobbyIconName, React.FC<{ size?: number; color?: string }>> = {
  tv: TvIcon,
  book: BookIcon,
  plane: PlaneIcon,
  moon: MoonIcon,
  snake: SnakeIcon,
  cat: CatIcon,
  sparkle: SparkleIcon,
};

// OC描述图标映射
const ocDescIconMap: Record<OcDescIconName, React.FC<{ size?: number; color?: string }>> = {
  settings: SettingsIcon,
  story: StoryIcon,
  coffee: CoffeeIcon,
  diamond: DiamondIcon,
  smile: SmileIcon,
  eye: EyeIcon,
  zap: ZapIcon,
};

export default function AboutSection() {
  return (
    <section id="about" className="card about-section">
      {/* 爱好 */}
      <div className="hobbies-card">
        <h2 className="section-heading">
          <span className="section-heading-icon">
            <HeartIcon size={20} color="var(--primary-color)" />
          </span>
          我的爱好
        </h2>
        <ul className="hobby-list">
          {hobbies.map((hobby, index) => {
            const IconComp = hobbyIconMap[hobby.iconName];
            return (
              <li key={index}>
                <IconComp size={16} /> {hobby.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* OC 列表 */}
      {ocList.map((oc, index) => (
        <div className="oc-card" key={index}>
          <h2 className="section-heading">
            <span className="section-heading-icon">
              <StarIcon size={20} color="var(--accent-color)" />
            </span>
            我的OC - {oc.name}
          </h2>
          <div className="oc-content">
            <img src={oc.image} alt={`我的OC ${oc.name}`} />
            <div className="oc-desc">
              {oc.descriptions.map((desc, i) => {
                const DescIcon = ocDescIconMap[desc.iconName];
                return (
                  <p key={i}>
                    <DescIcon size={16} color="var(--primary-color)" />{" "}
                    <strong>{desc.title}：</strong>
                    {desc.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
