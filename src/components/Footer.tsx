"use client";

import { useState, useEffect } from "react";
import { profileData } from "@/data/siteData";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <p>
        © {year} {profileData.homepage_name} -
        这里是没有米的麦芽唐,也许未来会成为有米的麦芽唐.
      </p>
    </footer>
  );
}
