"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Features",          id: "features"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="StockerPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Optimizing Inventory for Global Scale"
      description="Professional stock management solutions to streamline your warehouse operations, improve inventory accuracy, and drive higher profitability through data-driven precision."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/filter-icon-front-side_187299-45145.jpg",          imageAlt: "Dashboard overview"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-manager-scanning-boxes-barcode-using-store-scanner-listening-music-warehouse-inventory-employee-looking-storehouse-shelves-preparing-customers-orders-delivery_482257-73207.jpg",          imageAlt: "Warehouse overview"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-man-ecommerce-business-worker-talking-smartphone-using-touchpad-office_839833-23095.jpg",          imageAlt: "Tracking on mobile"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139291.jpg",          imageAlt: "Data flow visualization"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-staff-printing-awb-tracking-numbers-tags-new-parcel-shipment-managing-airway_482257-136207.jpg",          imageAlt: "Logistics analysis"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-latin-man-entrepreneur-with-lot-orders-his-online-shop-business-owner-writing-customers-information-clipboard_662251-2175.jpg",          imageAlt: "Item hierarchy"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-representation-reselling-market_23-2150473105.jpg",          imageAlt: "Hierarchy overview"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294598.jpg",          imageAlt: "Logistics operations"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176791.jpg",          imageAlt: "Supply chain flow"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanic-holding-digital-tablet_1170-1351.jpg",          imageAlt: "Manager view"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-warehouse-staff-overseeing-order-fulfillment-with-ai-brain-support_482257-129608.jpg",          imageAlt: "Facility overview"},
        {
          imageSrc: "http://img.b2bpic.net/free-vector/dashboard-admin-panel-with-gradient-style_23-2147864515.jpg",          imageAlt: "Software interface"},
      ]}
      buttons={[
        {
          text: "Get Started",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/minimal-laptop-black-white-workspace-calm-tech-backdrop_169016-70803.jpg",          alt: "Minimal laptop user"},
        {
          src: "http://img.b2bpic.net/free-photo/business-analytics-financial-technology-concept-generative-ai_8829-2894.jpg",          alt: "Analytics manager"},
        {
          src: "http://img.b2bpic.net/free-photo/laptop-green-neon-coding-data-eco-tech-work_169016-70845.jpg",          alt: "Tech logistics specialist"},
        {
          src: "http://img.b2bpic.net/free-photo/row-identical-laptops-monochrome-light-corporate-teams-digital-device-fleet_169016-70819.jpg",          alt: "Corporate team lead"},
        {
          src: "http://img.b2bpic.net/free-photo/distribution-warehouse-building-interior-large-storage-area-with-goods-shelf_342744-1452.jpg",          alt: "Warehouse operations lead"},
      ]}
      avatarText="Trusted by 500+ global logistics teams"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/3d-cartoon-business-character_1048-16612.jpg",          alt: "Brand 1"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/pin-pointer-mark-location-parcels-box-smartphone-online-delivery-transportation-logistics-concept-pink-background-3d-rendering-illustration_56104-1293.jpg",          alt: "Brand 2"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827291.jpg",          alt: "Brand 3"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827235.jpg",          alt: "Brand 4"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/happy-delivery-boy_23-2151952971.jpg",          alt: "Brand 5"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      features={[
        {
          title: "Real-Time Tracking",          description: "Monitor your entire supply chain with instantaneous updates from all warehouse nodes.",          imageSrc: "http://img.b2bpic.net/free-vector/admin-dashboard-template-with-flat-design_23-2147866451.jpg",          imageAlt: "Tracking"},
        {
          title: "Predictive Analytics",          description: "AI-driven stock projections to anticipate demand surges before they affect operations.",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg",          imageAlt: "Analytics"},
        {
          title: "Workflow Automation",          description: "Automate pick-and-pack workflows to reduce errors and improve team output throughput.",          imageSrc: "http://img.b2bpic.net/free-vector/different-infographic-elements_1284-12076.jpg",          imageAlt: "Automation"},
      ]}
      title="Built for Precision"
      description="Sophisticated tools to manage every aspect of your professional stockroom lifecycle."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "99.8%",          title: "Accuracy",          items: [
            "Verified across warehouse networks"],
        },
        {
          id: "2",          value: "45%",          title: "Time Saved",          items: [
            "Reduction in picking processing time"],
        },
        {
          id: "3",          value: "$2.5M",          title: "Cost Reduction",          items: [
            "Average client savings per fiscal year"],
        },
      ]}
      title="Proven Performance"
      description="Our professional stock management systems deliver results where it matters most."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "pro",          badge: "Core",          price: "$499/mo",          subtitle: "Optimized for professional teams",          buttons: [
            {
              text: "Start Pro",              href: "#contact"},
          ],
          features: [
            "Full Dashboard Access",            "Up to 5 Users",            "Basic Analytics"],
        },
        {
          id: "enterprise",          badge: "Custom",          price: "$1,299/mo",          subtitle: "For international warehouse chains",          buttons: [
            {
              text: "Contact Sales",              href: "#contact"},
          ],
          features: [
            "Unlimited Users",            "Predictive Analytics",            "Dedicated Support"],
        },
      ]}
      title="Scalable Plans"
      description="Professional solutions designed to support your growth, from startup stockrooms to international enterprise chains."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="split"
      animationType="slide-up"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Miller",          role: "Supply Chain Lead",          company: "TechLogistics",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-grey-haired-logistic-worker-hardhat-uniform-standing-shelves-warehouse-with-arms-folded-looking-camera-smiling-vertical-shot-labor-blue-collar-portrait-concept_74855-14227.jpg"},
        {
          id: "2",          name: "James Chen",          role: "Warehouse Director",          company: "GlobalSystems",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/depot-workers-reviewing-goods-shelves-checking-inventory-list-computer-team-warehouse-coworkers-verifying-products-racks-before-shipping-retail-store-orders-handheld-shot_482257-64839.jpg"},
        {
          id: "3",          name: "Elena Rossi",          role: "Operations VP",          company: "EcoSupply",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-entrepreneur-with-corporate-job-looking-camera-business-office-portrait-young-man-preparing-work-planning-development-industry-with-technology-computer_482257-29387.jpg"},
        {
          id: "4",          name: "Marcus Thorne",          role: "Stock Strategist",          company: "AlphaWarehouse",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-hands-belt-standing-warehouse_259150-56875.jpg"},
        {
          id: "5",          name: "Lisa Wang",          role: "Audit Lead",          company: "PrecisionLogistics",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg"},
      ]}
      title="Industry Leaders Trust Us"
      description="Partnering with the world's most innovative companies to refine inventory management."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Scale Your Operations Today"
      description="Ready to streamline your warehouse performance? Connect with our team of inventory experts for a consultation."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Full Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
        {
          name: "company",          type: "text",          placeholder: "Company Name"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/roof-building_1204-86.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="StockerPro"
      copyrightText="© 2024 StockerPro | Professional Stock Management"
      socialLinks={[
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}