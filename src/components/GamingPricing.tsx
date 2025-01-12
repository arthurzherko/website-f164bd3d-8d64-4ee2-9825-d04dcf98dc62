import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function GamingPricing() {
  return (
    <section className="container py-20">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text">Наши тарифы</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-gamer-neon bg-background/50 backdrop-blur transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl text-gamer-blue">Старт</CardTitle>
            <CardDescription>Для casual геймеров</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gamer-neon mb-6">150₽/час</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Доступ к PS5</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>2 геймпада</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Базовые игры</span>
              </li>
            </ul>
            <Button className="w-full bg-gamer-blue hover:bg-gamer-purple transition-colors">
              Выбрать
            </Button>
          </CardContent>
        </Card>

        <Card className="border-gamer-purple bg-background/50 backdrop-blur transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl text-gamer-purple">Про</CardTitle>
            <CardDescription>Для хардкор геймеров</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gamer-neon mb-6">250₽/час</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Мощный Gaming PC</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>144Hz монитор</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Pro периферия</span>
              </li>
            </ul>
            <Button className="w-full bg-gamer-purple hover:bg-gamer-blue transition-colors">
              Выбрать
            </Button>
          </CardContent>
        </Card>

        <Card className="border-gamer-red bg-background/50 backdrop-blur transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl text-gamer-red">VR</CardTitle>
            <CardDescription>Виртуальная реальность</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gamer-neon mb-6">350₽/час</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Meta Quest 3</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Большая VR зона</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gamer-neon">✦</span>
                <span>Все VR игры</span>
              </li>
            </ul>
            <Button className="w-full bg-gamer-red hover:bg-gamer-purple transition-colors">
              Выбрать
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}