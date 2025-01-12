import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function GamingHero() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6 neon-text">
            Твоя Ultimate<br />Gaming Зона
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Погрузись в мир современных игр на топовом оборудовании.
            Играй с друзьями или тренируйся для киберспортивных турниров!
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-gamer-neon text-background hover:bg-gamer-purple transition-colors duration-300">
              Забронировать место
            </Button>
            <Button size="lg" variant="outline" className="border-gamer-neon text-gamer-neon hover:bg-gamer-neon hover:text-background transition-colors duration-300">
              Узнать цены
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-gamer-neon neon-border">
            <img 
              src="/gaming-setup.jpg" 
              alt="Gaming Setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm p-6 rounded-lg border border-gamer-neon">
            <p className="text-gamer-neon font-bold text-xl mb-2">Наше оборудование:</p>
            <ul className="space-y-2 text-sm">
              <li className="text-gamer-purple">✦ RTX 4090 Gaming PC</li>
              <li className="text-gamer-blue">✦ PlayStation 5 Pro</li>
              <li className="text-gamer-red">✦ Meta Quest 3</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}