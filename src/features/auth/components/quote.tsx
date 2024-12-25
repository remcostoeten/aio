
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
    <aside className="hidden lg:flex flex-1 bg-black items-center justify-center p-20">
      <motion.div 
        className="max-w-md space-y-6"
        variants={quoteVariants.container}
        initial="hidden"
        animate="visible"
      >
        <motion.blockquote 
          className="text-xl leading-relaxed"
          variants={quoteVariants.text}
        >
          {QUOTE_DATA.text}
        </motion.blockquote>
        
        <motion.div
          className="flex items-center gap-3"
          variants={quoteVariants.author}
        >
          <img
            src={QUOTE_DATA.author.avatar}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-medium">{QUOTE_DATA.author.handle}</div>
            <div className="text-sm text-neutral-400">{QUOTE_DATA.author.title}</div>
          </div>
        </motion.div>
      </motion.div>
    </aside>
  )
} 
