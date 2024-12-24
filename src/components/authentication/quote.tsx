"use client"

import { motion } from 'framer-motion'
import { quoteVariants } from '@/shared/config/animations'

const QUOTE_DATA = {
  text: "What an application this is. Beautiful, performant, actually useful, and a beautiful SOLID-like architecture, and thankfully, no AI. 👽 ⚡️",
  author: {
    handle: "@remcostoeten",
    title: "definitely not the author",
    avatar: "/remco.jpg"
  }
}

export function Quote() {
  return (
    <aside className="bg-black border-neutral-800 border-l hidden xl:flex flex-[1_1_40%] min-h-full">
      <motion.div 
        className="flex-1 flex items-center justify-center p-6"
        variants={quoteVariants.container}
        initial="hidden"
        animate="visible"
      >
        <div className="relative flex flex-col gap-6 max-w-2xl">
          <motion.span
            className="select-none absolute -left-11 -top-2 text-[66px] text-balance leading-none text-neutral-600"
            variants={quoteVariants.quoteMark}
            aria-hidden="true"
          >
            &ldquo;
          </motion.span>
          
          <motion.blockquote 
            className="z-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed tracking-tight text-white"
            variants={quoteVariants.text}
          >
            {QUOTE_DATA.text}
          </motion.blockquote>
          
          <motion.a
            href="https://twitter.com/remcostoeten"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity"
            variants={quoteVariants.author}
          >
            <img
              src={QUOTE_DATA.author.avatar}
              alt="Author avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-white font-medium not-italic">
                {QUOTE_DATA.author.handle}
              </span>
              <span className="text-sm text-neutral-400 hover:text-neutral-400/80 text-[16px] transition-colors">
                {QUOTE_DATA.author.title}
              </span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </aside>
  )
}