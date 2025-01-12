import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function GamingFeatures() {
  const features = [
    {
      icon: '🎮',
      title: 'Топовое оборудование',
      description: 'RTX 4090, PS5, Meta Quest 3 и другое современное gaming-оборудование'
    },
    {
      icon: '🏆',
      title: 'Турниры',
      description: 'Регулярные соревнования по популярным играм с призовым фондом'
    },
    {
      icon: '🌟',
      title: 'Комфорт',
      description: 'Удобные кресла, кондиционер, напитки и снеки'
    },
    {
      icon: '👥',
      title: 'Сообщество',
      description: 'Дружелюбное комьюнити и совместные игровые сессии'
    }
  ]

  return (
    <section className="container py-20">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text">Почему мы?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-gamer-neon bg-background/50 backdrop-blur h-full transition-transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gamer-neon mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}