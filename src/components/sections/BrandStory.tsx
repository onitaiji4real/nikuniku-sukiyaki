import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ASSETS } from "@/lib/assets";
import { brandInfo } from "@/lib/data";

export function BrandStory() {
  return (
    <Section id="story"  className="bg-sumi-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <SectionHeading title="品牌故事" subtitle="Brand Story" />
          <div className="space-y-6 text-sumi-200 leading-loose font-serif text-lg text-justify">
            <p>
              <span className="text-gold-500 font-bold text-xl">「{brandInfo.name}」</span>
              秉持著日本職人精神，將正宗關西壽喜燒帶回台南。
              我們堅持使用最上等的食材，從信州A5和牛到伊比利梅花豚，
              每一片肉都承載著我們對美味的堅持。
            </p>
            <p>
              不同於一般壽喜燒，我們採用「這才是壽喜燒」的道地吃法：
              先以牛油熱鍋，將洋蔥炒香，再放入頂級肉片煎至半熟，
              最後淋上獨家秘製醬汁。
            </p>
            <p>
              這不僅僅是一顿飯，而是一場視覺與味覺的饗宴。
            </p>
          </div>
        </div>

        {/* Image Composition */}
        <div className="relative h-[400px] md:h-[600px] w-full">
           <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-sm border border-sumi-800 shadow-2xl z-10">
            <Image
              src={ASSETS.food.meatPlatter}
              alt="A5 Wagyu"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 overflow-hidden rounded-sm border border-sumi-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
             <Image
              src={ASSETS.food.soupPour}
              alt="Pouring Sauce"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
