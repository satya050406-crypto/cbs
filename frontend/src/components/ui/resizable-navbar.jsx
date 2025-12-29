"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = ({ children, className }) => {
    return (
        <div className={cn("fixed inset-x-0 top-0 z-[5000] flex justify-center pointer-events-none", className)}>
            {children}
        </div>
    );
};

export const NavBody = ({ children, className }) => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.div
            layout
            initial={{ width: "100%", borderRadius: 0, y: 0, border: "0px solid transparent" }}
            animate={{
                width: isScrolled ? "80%" : "100%",
                maxWidth: isScrolled ? "1200px" : "100%",
                borderRadius: isScrolled ? "9999px" : "0px",
                y: isScrolled ? 12 : 0,
                backgroundColor: "rgba(255, 255, 255, 0.9)", // You might want to make this configurable
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "pointer-events-auto relative flex items-center justify-between px-4 py-2 sm:px-8 shadow-sm backdrop-blur-md dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 transition-colors",
                isScrolled && "border shadow-lg",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, activeIdx }) => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <div className={cn("hidden md:flex items-center gap-1", className)}>
            {items.map((item, idx) => (
                <a
                    key={idx}
                    href={item.link}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                >
                    <span className={cn(
                        "relative z-10 transition-colors",
                        (activeIdx === idx || hoveredIdx === idx)
                            ? "text-black dark:text-white"
                            : "text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white"
                    )}>
                        {item.name}
                    </span>
                    {(hoveredIdx === idx || (hoveredIdx === null && activeIdx === idx)) && (
                        <motion.span
                            layoutId="hover-pill"
                            className="absolute inset-0 z-0 bg-neutral-300 dark:bg-neutral-700 rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                </a>
            ))}
        </div>
    );
};

export const NavbarLogo = ({ className, children }) => {
    return (
        <div className={cn("flex items-center gap-2 font-bold text-xl text-neutral-800 dark:text-neutral-100", className)}>
            {children || "Logo"}
        </div>
    );
};

export const NavbarButton = ({ children, variant = "primary", className, onClick }) => {
    const variants = {
        primary: "bg-black text-white dark:bg-white dark:text-black hover:bg-black/80",
        secondary: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white hover:bg-neutral-200",
        ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                variants[variant],
                className
            )}
        >
            {children}
        </button>
    );
};

export const MobileNav = ({ children, className }) => {
    return <div className={cn("md:hidden pointer-events-auto", className)}>{children}</div>;
};

export const MobileNavHeader = ({ children, className }) => {
    return (
        <div className={cn("flex items-center justify-between p-4 bg-white dark:bg-neutral-950", className)}>
            {children}
        </div>
    );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
    return (
        <button onClick={onClick} className={cn("p-2", className)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    );
};

export const MobileNavMenu = ({ isOpen, onClose, children, className }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                        "fixed inset-x-0 top-[60px] z-40 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl",
                        className
                    )}
                >
                    <div className="flex flex-col gap-4 p-6">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
