"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/components/language-provider";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link
        href="/"
        className="flex items-center hover:text-primary-custom transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        {t("breadcrumb.home")}
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-custom transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
