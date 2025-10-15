// components/AnimateOnScroll.tsx
'use client'

import { motion, useAnimation, type Variants, type Transition } from 'framer-motion'
import { type ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// 1. Interface de props APRIMORADA
interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  /**
   * Objeto de variantes da animação (estados 'hidden' e 'visible').
   */
  variants?: Variants
  /**
   * Configurações de transição (duração, delay, ease, etc.).
   */
  transition?: Transition
  /**
   * Quão visível o elemento deve estar (de 0.0 a 1.0) para disparar a animação.
   * @default 0.1
   */
  threshold?: number
  /**
   * Se a animação deve ocorrer apenas uma vez.
   * @default true
   */
  triggerOnce?: boolean

  delay?: number
}

// 2. Variantes padrão para um efeito de "fade-up"
const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const AnimateOnScroll = ({
  children,
  className,
  // 3. Desestruturando as novas props com valores padrão
  variants = defaultVariants,
  transition = { duration: 0.8 },
  threshold = 0.1,
  triggerOnce = false,
  delay = 0,
}: AnimateOnScrollProps) => {
  const controls = useAnimation()
  // 4. Usando as props para configurar o 'useInView'
  const [ref, inView] = useInView({ threshold, triggerOnce })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!triggerOnce) {
      // Só volta para 'hidden' se triggerOnce for false
      controls.start('hidden')
    }
  }, [controls, inView, triggerOnce])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial='hidden'
      animate={controls}
      // 5. Passando as variantes e transições personalizadas
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}

export { AnimateOnScroll }