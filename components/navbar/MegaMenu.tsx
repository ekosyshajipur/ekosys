"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sun, Building2, HeartPulse, Compass, Monitor } from "lucide-react";
import Container from "@/components/ui/Container";
import { DIVISIONS } from "@/lib/constants";

const divisionIcons = [Sun, Building2, HeartPulse, Compass, Monitor];

interface MegaMenuProps {
  onClose: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ onClose, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
      onMouseLeave={onMouseLeave}
      role="menu"
    >
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-5 gap-4">
            {DIVISIONS.map((division, index) => {
              const Icon = divisionIcons[index];
              return (
                <Link
                  key={division.id}
                  href={division.link}
                  className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                  onClick={onClose}
                  role="menuitem"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${division.iconBg} flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold text-navy-900 group-hover:text-green-700 transition-colors">
                          {division.category}
                        </h3>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {division.description}
                      </p>
                      <span className="text-[11px] text-gray-400 mt-2 block">
                        {division.subdomain}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
