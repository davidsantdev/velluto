import { About } from "@/components/about";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Categories } from "@/components/categories";
import { FeaturedPieces } from "@/components/featured-pieces";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { InstagramFeed } from "@/components/instagram-feed";
import { Quote } from "@/components/quote";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main id="inicio" className="flex-1">
        <Hero />
        <Categories />
        <FeaturedPieces />
        <HowToOrder />
        <About />
        <Quote />
        <InstagramFeed />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
