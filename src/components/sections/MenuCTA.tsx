"use client";

import Link from "next/link";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function MenuCTA() {
  return (
    <Section className="bg-sumi-900 border-y border-gold-500/20 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-sumi-50 font-bold mb-6 tracking-widest">
          探索完整菜單
        </h2>
        <p className="text-sumi-300 mb-8 max-w-2xl mx-auto leading-loose">
          從嚴選肉品到季節時蔬，我們為您準備了豐富多樣的選擇。
          <br className="hidden md:block"/>
          點擊下方按鈕查看完整品項與價格。
        </p>
        <Link href="/menu">
           <Button variant="outline">
             查看完整菜單
           </Button>
        </Link>
      </div>
    </Section>
  );
}
