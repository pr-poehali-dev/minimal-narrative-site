import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const dialogueExample = `{
  "npc_id": "tigra",
  "mood": "neutral",
  "trust_required": 30,
  "lines": [
    {
      "text": "Пламя тухнет быстрее, если дуть на него со страхом.",
      "next": ["option_combat", "option_philosophy"]
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-mono tracking-wider text-primary">АРХИВ_НАРРАТИВОВ.SYS</h1>
          <div className="flex gap-6 text-sm font-mono">
            <a href="#philosophy" className="hover:text-primary transition-colors">[философия]</a>
            <a href="#chronosphere" className="hover:text-primary transition-colors">[хроносфера]</a>
            <a href="#contact" className="hover:text-primary transition-colors">[контакт]</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">///</span> ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight tracking-tight">
            Архитектор миров
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground max-w-3xl">
            Создаю игры, где механика — это язык,<br />а выбор — это история
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed mb-10">
            Специализируюсь на проектировании глубоких персонажей, ветвящихся нарративных систем и интеграции истории в геймплей. Превращаю эмоции в игровые переменные, а темы — в игровые механики.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button 
              onClick={() => setIsDetailOpen(true)}
              className="bg-primary hover:bg-primary/90 font-mono"
            >
              <Icon name="Boxes" size={18} className="mr-2" />
              ПОРТФОЛИО
            </Button>
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10">
              <Icon name="FileText" size={18} className="mr-2" />
              RESUME.PDF
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground animate-pulse">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">///</span> МОДУЛЬ_01: ФИЛОСОФИЯ_СИСТЕМЫ
          </div>
          <h2 className="text-5xl font-light mb-12 leading-tight">
            Нарратив как система
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                Я не просто пишу тексты. Я проектирую эмоциональную логику игрового мира. 
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Каждый диалог — это узел в дереве решений. Каждый персонаж — это набор уникальных переменных и триггеров. История не рассказывается — <span className="text-primary font-medium">в неё играют</span>.
              </p>
            </div>
            
            <Card className="p-6 bg-muted/30 border-primary/20">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">//</span> СХЕМА_НАРРАТИВНОЙ_АРХИТЕКТУРЫ
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-mono">ИДЕЯ</span>
                </div>
                <div className="ml-5 border-l-2 border-primary/30 pl-4 space-y-2">
                  <div className="text-foreground/80">↳ Персонаж <span className="text-xs font-mono">(ось: Контроль ↔ Свобода)</span></div>
                  <div className="text-foreground/80">↳ Дерево диалогов <span className="text-xs font-mono">(формат: JSON)</span></div>
                  <div className="text-foreground/80">↳ Игровой выбор <span className="text-xs font-mono">(триггеры: событий)</span></div>
                  <div className="text-primary">↳ Концовка <span className="text-xs font-mono">(массив: состояний)</span></div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all">
              <Icon name="Network" className="text-primary mb-3" size={28} />
              <h3 className="font-semibold mb-2 text-lg">Системное мышление</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Проектирование взаимосвязанных нарративных механик с учётом последствий каждого выбора
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all">
              <Icon name="GitBranch" className="text-primary mb-3" size={28} />
              <h3 className="font-semibold mb-2 text-lg">Ветвление историй</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Создание нелинейных сюжетов где выборы игрока формируют уникальный опыт прохождения
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all">
              <Icon name="Database" className="text-primary mb-3" size={28} />
              <h3 className="font-semibold mb-2 text-lg">Интеграция с геймплеем</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                История как часть игровых систем: диалоги влияют на механики, механики раскрывают сюжет
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Chronosphere Case */}
      <section id="chronosphere" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">///</span> МОДУЛЬ_02: ЛАБОРАТОРИЯ_ПРОЕКТОВ
          </div>
          <h2 className="text-5xl font-light mb-4 leading-tight">Проект: ХРОНОСФЕРА</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Нарративный дизайн и геймдизайн сюжетной RPG в мире временного Раскола
          </p>

          <Card className="p-8 border-primary/20 mb-8 hover:border-primary/40 transition-all">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                  #NarrativeDesign
                </span>
                <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                  #CharacterDesign
                </span>
                <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                  #BranchingDialogue
                </span>
                <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                  #SystemIntegration
                </span>
              </div>
              
              <h3 className="text-2xl font-light mb-4">Концепция мира</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Мир, расколотый временной катастрофой. Лагерь выживших на границе аномальных зон, где прошлое и будущее сталкиваются. Каждый персонаж — отражение философского вопроса о контроле и свободе.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon name="User" size={20} className="text-primary" />
                    Дизайн персонажа: ТИГРА
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2 font-mono">ПСИХОЛОГИЧЕСКАЯ_ОСЬ</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs">Контроль</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-2/3"></div>
                        </div>
                        <span className="text-xs">Свобода</span>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded border border-primary/10">
                      <p className="text-sm font-mono text-muted-foreground mb-2">СВЯЗЬ_С_МЕХАНИКОЙ:</p>
                      <p className="text-sm leading-relaxed">
                        Чувствительность к временным аномалиям. Показатель <code>trust_level</code> влияет на поведение в бою и доступные диалоги.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Code" size={20} className="text-primary" />
                    Диалог как данные
                  </h4>
                  <div className="bg-muted/50 p-4 rounded font-mono text-xs border border-primary/20">
                    <pre className="text-foreground/80 overflow-x-auto">
{dialogueExample}
                    </pre>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">
                    <span className="text-primary">//</span> Пример JSON-структуры диалоговой системы
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => setIsDetailOpen(true)}
              className="w-full bg-primary hover:bg-primary/90 font-mono"
            >
              <Icon name="Expand" size={18} className="mr-2" />
              ОТКРЫТЬ_ПОЛНЫЙ_РАЗБОР
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">///</span> МОДУЛЬ_03: ПРОТОКОЛ_СВЯЗИ
          </div>
          <h2 className="text-5xl font-light mb-6 leading-tight">
            Создаём истории вместе
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ищу возможность присоединиться к команде, где ценят глубину персонажей и продуманные нарративные системы. Открыт для удалённой работы, контрактов и интересных коллабораций.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <Button className="bg-primary hover:bg-primary/90 font-mono">
              <Icon name="Mail" size={18} className="mr-2" />
              EMAIL
            </Button>
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10">
              <Icon name="Send" size={18} className="mr-2" />
              TELEGRAM
            </Button>
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10">
              <Icon name="Linkedin" size={18} className="mr-2" />
              LINKEDIN
            </Button>
            <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10">
              <Icon name="Github" size={18} className="mr-2" />
              GITHUB
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">P.S.</span> Веду публичный дневник разработки, где в деталях разбираю процесс. 
            <a href="#" className="text-primary hover:underline ml-1">Ссылка в Telegram →</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">///</span> СИСТЕМА_ЗАГРУЖЕНА © 2024
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card">
          <DialogHeader>
            <DialogTitle className="text-3xl font-light">ХРОНОСФЕРА: Полный разбор</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8 pt-4">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Map" size={20} className="text-primary" />
                Дерево решений квеста
              </h3>
              <Card className="p-6 bg-muted/30">
                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-primary">КВЕСТ: "Огни аномалии"</span>
                  </div>
                  <div className="ml-6 border-l-2 border-primary/30 pl-4 space-y-3">
                    <div>
                      <p className="text-foreground/90">→ Выбор 1: Исследовать аномалию</p>
                      <div className="ml-4 mt-2 space-y-1 text-xs text-muted-foreground">
                        <p>├─ trust_level ≥ 50: Тигра предупреждает о рисках</p>
                        <p>└─ trust_level &lt; 50: Тигра уходит</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-foreground/90">→ Выбор 2: Обойти стороной</p>
                      <div className="ml-4 mt-2 space-y-1 text-xs text-muted-foreground">
                        <p>├─ Сохранение ресурсов (+10 припасов)</p>
                        <p>└─ Потеря информации об аномалиях</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-primary">→ Последствия влияют на концовку</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Grid3x3" size={20} className="text-primary" />
                Система концовок
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="font-mono text-xs text-primary mb-2">КВАДРАНТ_A</div>
                  <h4 className="font-semibold mb-2">Администратор</h4>
                  <p className="text-sm text-muted-foreground">Высокий контроль + Доверие. Создание стабильной системы управления лагерем</p>
                </Card>
                
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="font-mono text-xs text-primary mb-2">КВАДРАНТ_B</div>
                  <h4 className="font-semibold mb-2">Такова реальность</h4>
                  <p className="text-sm text-muted-foreground">Высокий контроль + Прагматизм. Жёсткие решения ради выживания</p>
                </Card>
                
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="font-mono text-xs text-primary mb-2">КВАДРАНТ_C</div>
                  <h4 className="font-semibold mb-2">Хранитель надежды</h4>
                  <p className="text-sm text-muted-foreground">Свобода + Доверие. Коммуна, основанная на взаимопомощи</p>
                </Card>
                
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="font-mono text-xs text-primary mb-2">КВАДРАНТ_D</div>
                  <h4 className="font-semibold mb-2">Анархия</h4>
                  <p className="text-sm text-muted-foreground">Свобода + Прагматизм. Распад структуры, выживание сильнейших</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="FileCode" size={20} className="text-primary" />
                Нарративная механика
              </h3>
              <Card className="p-6 bg-muted/30">
                <p className="text-sm leading-relaxed text-foreground/80 mb-4">
                  Каждое решение игрока сдвигает показатели на осях «Контроль/Свобода» и «Доверие/Прагматизм». 
                  Финальная концовка определяется позицией в координатной сетке этих осей в конце игры.
                </p>
                <div className="font-mono text-xs bg-background/50 p-3 rounded">
                  <code>
                    if (control_axis &gt; 60 && trust_axis &gt; 50) {'{'}<br/>
                    &nbsp;&nbsp;return ENDING_ADMINISTRATOR;<br/>
                    {'}'}
                  </code>
                </div>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;