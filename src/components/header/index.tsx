// src/components/layout/Header.tsx
'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

type NavChild = {
  label: string;
  description?: string;
  href: string;
};

type NavSection = {
  id: string;
  label: string;
  href?: string;
  hasDropdown?: boolean;
  children?: NavChild[];
  isPrimary?: boolean; // for "Pricing"
};

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'products',
    label: 'Products',
    hasDropdown: true,
    children: [
      {
        label: 'Find your next project tender',
        description: 'Find the best solution for you.',
        href: '/products/project-tender',
      },
      {
        label: 'Demonstrate your Compliance',
        description: 'Find the best solution for you.',
        href: '/products/compliance',
      },
      {
        label: 'Manage your supply chain',
        description: 'Find the best solution for you.',
        href: '/products/supply-chain',
      },
      {
        label: 'Reduce supply chain risk',
        description: 'Find the best solution for you.',
        href: '/products/supply-chain-risk',
      },
      {
        label: 'Tender and Supplier Sourcing',
        description: 'Find the best solution for you.',
        href: '/products/tender-sourcing',
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    hasDropdown: true,
  },
  {
    id: 'events',
    label: 'Events',
    hasDropdown: true,
  },
  {
    id: 'resources',
    label: 'Resources',
    hasDropdown: true,
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/pricing',
    isPrimary: true,
  },
];

const ArrowRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.25 10.75L10.75 3.25M10.75 3.25H4.5M10.75 3.25V9.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSectionId, setOpenMobileSectionId] = useState<string | null>(
    'products'
  ); // Products open by default like Figma

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSection = (id: string) => {
    setOpenMobileSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <header
      className="border-b border-brand-border bg-brand-primary"
      role="banner"
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-4 lg:px-6">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Once For All, go to homepage"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            {/* Replace with real logo */}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <span className="h-4 w-4 rounded-full bg-white" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              ONCE FOR ALL
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-6 text-sm">
            {NAV_SECTIONS.map((section) => {
              const isActive = section.href && pathname === section.href;

              if (section.isPrimary && section.href) {
                // "Pricing" pill
                return (
                  <li key={section.id}>
                    <Link
                      href={section.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white"
                    >
                      {section.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={section.id}>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
                    aria-haspopup={section.hasDropdown ? 'true' : undefined}
                    aria-expanded={false}
                  >
                    <span>{section.label}</span>
                    {section.hasDropdown && (
                      <span className="mt-[1px] inline-flex">
                        <ChevronDownIcon />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions + mobile trigger */}
        <div className="flex items-center gap-3">
          {/* Search (desktop) */}
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary md:flex"
            aria-label="Search"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.25"
                cy="7.25"
                r="4.75"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="10.4"
                y1="10.4"
                x2="13.25"
                y2="13.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Log In (desktop) */}
          <Link
            href="/login"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary md:inline-flex"
          >
            Log In
          </Link>

          {/* Contact Us (desktop) */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary md:inline-flex"
          >
            <span>Contact Us</span>
            <ArrowRightIcon />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
            onClick={toggleMobileMenu}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H15M3 9H15M3 13H11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <nav
        id="mobile-primary-navigation"
        className={`md:hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden border-t border-brand-border bg-white transition-all duration-200`}
        aria-label="Primary navigation mobile"
      >
        <div className="mx-auto flex max-w-xs flex-col gap-4 px-4 py-4">
          {/* Logo + close inside drawer (matches Figma top strip) */}
          <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-3">
            <Link
              href="/"
              aria-label="Once For All, go to homepage"
              className="flex items-center gap-2"
              onClick={closeMobileMenu}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/5">
                <span className="h-4 w-4 rounded-full bg-brand-primary" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-brand-primary">
                ONCE FOR ALL
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-1 text-sm">
            {NAV_SECTIONS.map((section) => {
              const isSectionOpen = openMobileSectionId === section.id;

              // Sections with children -> accordion
              if (section.hasDropdown) {
                return (
                  <li
                    key={section.id}
                    className="border-b border-slate-100 pb-1"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-slate-800"
                      aria-expanded={isSectionOpen}
                      aria-controls={`mobile-section-${section.id}`}
                      onClick={() => toggleMobileSection(section.id)}
                    >
                      <span>{section.label}</span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex transform transition-transform ${
                          isSectionOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {section.children && (
                      <div
                        id={`mobile-section-${section.id}`}
                        className={`overflow-hidden transition-all duration-200 ${
                          isSectionOpen ? 'max-h-[600px]' : 'max-h-0'
                        }`}
                      >
                        <ul className="mt-1 flex flex-col gap-1 rounded-md bg-slate-50">
                          {section.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="flex items-center justify-between px-3 py-2 text-left"
                                onClick={closeMobileMenu}
                              >
                                <div>
                                  <p className="text-sm font-medium text-slate-900">
                                    {child.label}
                                  </p>
                                  {child.description && (
                                    <p className="text-xs text-slate-500">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                                <span
                                  aria-hidden="true"
                                  className="inline-flex text-brand-accent"
                                >
                                  <ArrowRightIcon />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              // Simple link sections, e.g. Pricing
              if (section.href) {
                const isActive = pathname === section.href;

                return (
                  <li
                    key={section.id}
                    className="border-b border-slate-100 pb-1"
                  >
                    <Link
                      href={section.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="flex w-full items-center justify-between py-2 text-sm font-semibold text-slate-800"
                      onClick={closeMobileMenu}
                    >
                      <span>{section.label}</span>
                    </Link>
                  </li>
                );
              }

              return null;
            })}
          </ul>

          {/* CTA buttons */}
          <div className="mt-3 flex flex-col gap-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 text-sm font-semibold text-white"
              onClick={closeMobileMenu}
            >
              <span>Contact Us</span>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
              onClick={closeMobileMenu}
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
