import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

export function GamingHeader() {
  return (
    <header className="border-b border-gamer-neon bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <a href="/" className="mr-8 text-3xl font-bold tracking-wider text-gamer-neon animate-neon-pulse">GAME ZONE</a>
        
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-semibold text-gamer-neon hover:text-gamer-purple transition-colors">
                Игровые зоны
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md">
                    <div className="text-lg font-semibold text-gamer-blue">PlayStation 5</div>
                    <p className="text-sm text-muted-foreground">4K gaming с полным погружением</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md">
                    <div className="text-lg font-semibold text-gamer-red">Gaming PC</div>
                    <p className="text-sm text-muted-foreground">Мощные компьютеры для киберспорта</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md">
                    <div className="text-lg font-semibold text-gamer-purple">VR Zone</div>
                    <p className="text-sm text-muted-foreground">Виртуальная реальность</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-semibold text-gamer-neon hover:text-gamer-purple transition-colors">
                Цены
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg font-semibold text-gamer-neon hover:text-gamer-purple transition-colors">
                Турниры
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" className="border-gamer-neon text-gamer-neon hover:bg-gamer-neon hover:text-background transition-colors duration-300">
          Забронировать
        </Button>
      </div>
    </header>
  )
}