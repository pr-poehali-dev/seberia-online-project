import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleLauncherClick = () => {
    toast({
      title: "Пока не доступно",
      description: "Скачивание лаунчера временно недоступно",
    });
  };

  const features = [
    {
      icon: "Gamepad2",
      title: "Уникальный геймплей",
      description: "Захватывающий игровой процесс с авторскими механиками",
    },
    {
      icon: "Shield",
      title: "Защита от читеров",
      description: "Надежная античит-система для честной игры",
    },
    {
      icon: "MessageCircle",
      title: "Активное сообщество",
      description: "Тысячи игроков онлайн каждый день",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Команда поддержки всегда готова помочь",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/0c856444-4639-4817-a706-57320383973b.jpg)' }}>
      <nav className="border-b border-white/10 backdrop-blur-sm bg-[#16213E]/80 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
              SEBERIA ONLINE
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white/80 hover:text-white transition-colors font-medium">
                Играть
              </a>
              <button onClick={() => setIsDonateModalOpen(true)} className="text-white/80 hover:text-white transition-colors font-medium">
                Донат
              </button>
              <a href="https://t.me/forumsiberiaonline" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors font-medium">
                Форум
              </a>
              <a href="https://t.me/Twix181" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors font-medium">
                Поддержка
              </a>
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" className="text-white" />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDR2NGgtNHptMCAwaDR2NGgtNHptMCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#FF6B00] text-white border-none px-6 py-2 text-sm font-medium">
              СЕРВЕР ОНЛАЙН
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              SEBERIA
              <br />
              <span className="text-[#FF6B00]">ONLINE</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Погрузись в мир приключений! Тысячи игроков уже с нами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#FF6B00]/30 transition-all hover:scale-105"
                onClick={() => window.open('https://drive.google.com/file/d/1Bzjz8hhCZYxscWu9Kqa9v39HPHqfwwLP/view?usp=sharing', '_blank')}
              >
                <Icon name="Gamepad2" className="mr-2" size={24} />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl"
                onClick={handleLauncherClick}
              >
                Скачать лаунчер
              </Button>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#16213E]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#FF6B00]/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#FF6B00]/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={28} className="text-[#FF6B00]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 bg-[#0F3460]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Sparkles" size={48} className="text-[#FF6B00] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Поддержи проект
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Получи эксклюзивные привилегии и помоги развитию сервера
            </p>
            <Button
              size="lg"
              className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold px-12 py-6 text-lg rounded-xl shadow-lg shadow-[#FF6B00]/30"
              onClick={() => setIsDonateModalOpen(true)}
            >
              Открыть донат-магазин
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 bg-[#16213E]/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">SEBERIA ONLINE</h4>
              <p className="text-white/60 text-sm">
                Лучший игровой сервер с активным комьюнити
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3">Навигация</h5>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#play" className="hover:text-white transition-colors">Играть</a></li>
                <li><a href="#donate" className="hover:text-white transition-colors">Донат</a></li>
                <li><a href="https://t.me/forumsiberiaonline" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Форум</a></li>
                <li><a href="https://t.me/Twix181" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3">Социальные сети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-white/20 hover:border-[#FF6B00] hover:bg-[#FF6B00]/10" onClick={() => window.open('https://t.me/siberiacrmp01', '_blank')}>
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </Button>
                <Button size="icon" variant="outline" className="border-white/20 hover:border-[#FF6B00] hover:bg-[#FF6B00]/10" onClick={() => window.open('https://discord.gg/KCgeJJGV', '_blank')}>
                  <Icon name="Youtube" size={20} className="text-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            © 2024 SEBERIA ONLINE. Все права защищены
          </div>
        </div>
      </footer>

      {isDonateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setIsDonateModalOpen(false)}>
          <div className="bg-[#16213E] border border-white/20 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <Icon name="Heart" size={48} className="text-[#FF6B00] mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Выбери через кого донатить
              </h3>
              <p className="text-white/70">
                Поддержи команду проекта
              </p>
            </div>
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold py-6 text-lg rounded-xl shadow-lg"
                onClick={() => window.open('https://t.me/Twix181', '_blank')}
              >
                <Icon name="User" className="mr-2" size={24} />
                Твикс
              </Button>
              <Button
                size="lg"
                className="w-full bg-[#0F3460] hover:bg-[#0F3460]/80 text-white font-bold py-6 text-lg rounded-xl shadow-lg border border-white/20"
                onClick={() => window.open('https://t.me/Mr_Boyko6', '_blank')}
              >
                <Icon name="User" className="mr-2" size={24} />
                Максон
              </Button>
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-white/70 hover:text-white"
              onClick={() => setIsDonateModalOpen(false)}
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;