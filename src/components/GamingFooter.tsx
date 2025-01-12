import { Separator } from '@/components/ui/separator'

export function GamingFooter() {
  return (
    <footer className="border-t border-gamer-neon bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gamer-neon mb-4">GAME ZONE</h3>
            <p className="text-sm text-muted-foreground">
              Лучшая игровая комната в городе.
              Современное оборудование и дружелюбная атмосфера.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gamer-purple mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@gamezone.ru</li>
              <li>Адрес: ул. Геймерская, 42</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gamer-blue mb-4">Режим работы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пн-Пт: 10:00 - 23:00</li>
              <li>Сб-Вс: 09:00 - 00:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gamer-red mb-4">Соцсети</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-gamer-neon transition-colors">VK</a>
              </li>
              <li>
                <a href="#" className="hover:text-gamer-neon transition-colors">Telegram</a>
              </li>
              <li>
                <a href="#" className="hover:text-gamer-neon transition-colors">Discord</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gamer-neon/30" />

        <div className="text-center text-sm text-muted-foreground">
          © 2024 Game Zone. Все права защищены.
        </div>
      </div>
    </footer>
  )
}