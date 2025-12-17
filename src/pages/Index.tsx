import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  challenge: string;
  process: string[];
  outcome: string;
  image: string;
}

const Index = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      subtitle: "Интерактивная научно-фантастическая игра",
      year: "2024",
      role: "Ведущий нарративный дизайнер",
      challenge: "Создать нелинейную историю с 12 возможными концовками, где каждое решение игрока влияет на судьбу колонии на Марсе",
      process: [
        "Разработка основной сюжетной канвы и карты взаимосвязей персонажей",
        "Создание системы моральных дилемм с долгосрочными последствиями",
        "Написание 45 000 слов диалогов и описаний",
        "Тесное сотрудничество с геймдизайнерами для интеграции механик выбора"
      ],
      outcome: "Критики отметили эмоциональную глубину персонажей. 87% игроков прошли игру повторно, чтобы исследовать альтернативные сюжетные ветки.",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80"
    },
    {
      id: 2,
      title: "The Last Archive",
      subtitle: "Повествовательная адвенчура с элементами детектива",
      year: "2023",
      role: "Сценарист и нарративный консультант",
      challenge: "Выстроить сложную многоуровневую тайну, где каждая деталь окружения рассказывает историю",
      process: [
        "Исследование реальных архивных методологий и истории библиотек",
        "Создание 200+ артефактов окружения с уникальными историями",
        "Разработка системы улик и записей для environmental storytelling",
        "Балансировка между явным повествованием и скрытыми деталями"
      ],
      outcome: "Игра получила награду 'Best Narrative Design' на IndieCade. Сообщество создало вики с расшифровкой всех скрытых историй.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
    },
    {
      id: 3,
      title: "Whispers in the Code",
      subtitle: "Киберпанк-визуальная новелла",
      year: "2023",
      role: "Главный сценарист",
      challenge: "Передать темы идентичности и трансгуманизма через интимную историю о потере памяти",
      process: [
        "Разработка системы фрагментарного повествования",
        "Создание 8 персонажей с уникальными голосами и мотивациями",
        "Написание 30 000 слов нелинейного текста",
        "Работа с художниками над визуальной метафорой разрушения памяти"
      ],
      outcome: "Средняя сессия игры — 4.5 часа. Игроки отметили эмоциональный резонанс истории и неожиданные повороты сюжета.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    }
  ];

  const upcomingWorks = [
    {
      title: "Project Chronos",
      description: "Работаю над нарративом для тактической RPG с путешествиями во времени",
      status: "В разработке"
    },
    {
      title: "Voices Unheard",
      description: "Консультирую команду по созданию аутентичных персонажей для исторической драмы",
      status: "Пре-продакшн"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-wide">Анна Соколова</h1>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О себе</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#upcoming" className="hover:text-primary transition-colors">Анонсы</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-light mb-6 text-[#1A1F2C] leading-tight">
            Создаю истории,<br />которые остаются с вами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Нарративный дизайнер с 7-летним опытом в разработке интерактивных повествований для игр и интерактивных медиа
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-[#1A1F2C]">О подходе к работе</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Для меня нарративный дизайн — это искусство создания эмоциональных связей между игроком и историей. Каждое решение, каждая деталь окружения должны работать на повествование.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Я специализируюсь на нелинейных сюжетах, где выборы игрока имеют вес и последствия, а environmental storytelling раскрывает скрытые слои истории.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="BookOpen" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1A1F2C] mb-2">Методология</h4>
                  <p className="text-gray-600">Сочетание классического сторителлинга с интерактивным дизайном и теорией игр</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1A1F2C] mb-2">Сотрудничество</h4>
                  <p className="text-gray-600">Тесная работа с геймдизайнерами, художниками и разработчиками для создания цельного опыта</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#1A1F2C] mb-2">Философия</h4>
                  <p className="text-gray-600">Истории должны вдохновлять, провоцировать размышления и оставаться в памяти надолго</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-light mb-4 text-[#1A1F2C]">Избранные кейсы</h3>
          <p className="text-gray-600 mb-12 text-lg">Детальный разбор процесса и результатов проектов</p>
          
          <div className="space-y-6">
            {caseStudies.map((caseItem) => (
              <Card 
                key={caseItem.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-3xl font-light text-[#1A1F2C] mb-2">{caseItem.title}</h4>
                        <p className="text-gray-600">{caseItem.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{caseItem.year}</p>
                        <p className="text-sm text-primary font-medium">{caseItem.role}</p>
                      </div>
                    </div>

                    <div className={`space-y-6 ${expandedCase === caseItem.id ? 'animate-fade-in' : ''}`}>
                      <div>
                        <h5 className="font-semibold text-[#1A1F2C] mb-2 flex items-center gap-2">
                          <Icon name="Target" size={18} className="text-primary" />
                          Вызов
                        </h5>
                        <p className="text-gray-700">{caseItem.challenge}</p>
                      </div>

                      {expandedCase === caseItem.id && (
                        <>
                          <div>
                            <h5 className="font-semibold text-[#1A1F2C] mb-3 flex items-center gap-2">
                              <Icon name="Workflow" size={18} className="text-primary" />
                              Процесс работы
                            </h5>
                            <ul className="space-y-2">
                              {caseItem.process.map((step, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-700">
                                  <span className="text-primary font-light">{idx + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-[#1A1F2C] mb-2 flex items-center gap-2">
                              <Icon name="Trophy" size={18} className="text-primary" />
                              Результаты
                            </h5>
                            <p className="text-gray-700">{caseItem.outcome}</p>
                          </div>
                        </>
                      )}

                      <Button 
                        variant="ghost" 
                        className="mt-4 text-primary hover:text-primary/80"
                      >
                        {expandedCase === caseItem.id ? (
                          <>Свернуть <Icon name="ChevronUp" size={18} className="ml-2" /></>
                        ) : (
                          <>Подробнее <Icon name="ChevronDown" size={18} className="ml-2" /></>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Works */}
      <section id="upcoming" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-[#1A1F2C]">Текущие проекты</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingWorks.map((work, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-primary hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-[#1A1F2C]">{work.title}</h4>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {work.status}
                  </span>
                </div>
                <p className="text-gray-600">{work.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Открыта к новым проектам и сотрудничеству</p>
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Linkedin" size={16} className="mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Twitter" size={16} className="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;