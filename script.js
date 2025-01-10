const messages = [
    {
      id: 1,
      frase: `"Confie em seu potencial, mesmo quando ninguém mais acreditar."`,
      explicacao: "Às vezes, a maior prova de fé é aquela que depositamos em nós mesmos. A autoconfiança pode ser o primeiro passo para despertar o interesse e o respeito de quem está ao seu redor."
    },
    {
      id: 2,
      frase: `"Você não precisa enxergar o caminho todo, apenas se mover na direção certa."`,
      explicacao: "Pensar em tudo o que falta pode ser paralisante, mas dar um passo de cada vez ajuda a lidar melhor com as incertezas. O progresso começa na ação."
    },
    {
      id: 3,
      frase: `"Até a menor das sementes carrega a força para se tornar uma grande árvore."`,
      explicacao: "Não subestime pequenos começos. Assim como uma semente, suas ideias e ações podem crescer e transformar seu entorno se forem nutridas com persistência."
    },
    {
      id: 4,
      frase: `"A cada dificuldade superada, surge uma versão mais forte de você mesmo."`,
      explicacao: "Obstáculos testam nossa resiliência e nos permitem descobrir capacidades que, às vezes, nem sabíamos possuir. Encare-os como oportunidades de amadurecimento."
    },
    {
      id: 5,
      frase: `"Ser grato pelo que se tem é o caminho mais curto para a felicidade genuína."`,
      explicacao: "Quando reconhecemos o valor das pequenas coisas, mudamos nossa forma de ver o mundo. A gratidão pode transformar obstáculos em aprendizado."
    },
    {
      id: 6,
      frase: `"Seus sonhos merecem o seu melhor empenho, não a sua dúvida."`,
      explicacao: "A incerteza pode nos impedir de agir, mas todo sonho, por maior que seja, depende de dedicação constante. Escolher focar no potencial em vez do medo é decisivo."
    },
    {
      id: 7,
      frase: `"Respeitar seu ritmo não significa andar devagar, mas caminhar com equilíbrio."`,
      explicacao: "Nem sempre o caminho mais rápido é o mais saudável. Saber dosar energia e descanso torna o percurso mais prazeroso e sustentável."
    },
    {
      id: 8,
      frase: `"Você não está atrasado; está exatamente onde deve estar para aprender o que precisa."`,
      explicacao: "Comparar seu caminho com o de outros só gera ansiedade. Cada um trilha a própria jornada no tempo necessário para crescer de forma autêntica."
    },
    {
      id: 9,
      frase: `"O sucesso é construído nos bastidores das pequenas escolhas diárias."`,
      explicacao: "Pensar em grandes feitos é inspirador, mas são os hábitos e as decisões corriqueiras que formam a base de qualquer conquista duradoura."
    },
    {
      id: 10, 
      frase: `"A coragem não é a ausência de medo, mas a decisão de agir apesar dele."`,
      explicacao: "Sentir medo é normal; o que faz a diferença é não deixá-lo te paralisar. Toda ação tomada em meio ao receio fortalece o caráter."
    },
    {
      id: 11,
      frase: `"A ação correta no momento certo vale mais que mil intenções adiadas."`,
      explicacao: "Procrastinar pode levar a oportunidades perdidas. Quando você se compromete a agir, libera um ciclo positivo de realizações."
    },
    {
      id: 12,
      frase: `"As flores mais fortes nascem após as tempestades mais intensas."`,
      explicacao: "A adversidade desafia, mas também fortalece. Quando se supera uma situação difícil, a vida ganha um novo sentido e maior determinação."
    },
    {
      id: 13,
      frase: `"Ampliar a mente começa por questionar nossas próprias certezas."`,
      explicacao: "É fácil ficar na zona de conforto, mas a evolução surge do desejo de entender perspectivas diferentes e descobrir novas possibilidades."
    },
    {
      id: 14,
      frase: `"Você não precisa de aprovação para ser quem é, apenas de coragem para se expressar."`,
      explicacao: "Buscar aceitação pode nos afastar de nossa essência. Priorizar sua identidade e viver com autenticidade requer coragem e autoconhecimento."
    },
    {
      id: 15,
      frase: `"Um dia ruim não define sua história inteira."`,
      explicacao: "Todos enfrentamos momentos difíceis, mas eles não representam quem somos por completo. A vida é feita de fases, e cada fase é uma oportunidade de evolução."
    },
    {
      id: 16,
      frase: `"Seu limite de hoje pode se tornar o seu aquecimento de amanhã."`,
      explicacao: "O que parece impossível hoje pode se tornar rotina quando trabalhamos de forma consistente. O crescimento é um processo e não um evento único."
    },
    {
      id: 17,
      frase: `"Aproveite a chance de recomeçar quantas vezes forem necessárias."`,
      explicacao: "Nem sempre conseguimos acertar na primeira tentativa. Começar de novo é um privilégio que permite corrigir rotas e evoluir."
    },
    {
      id: 18,
      frase: `"A verdadeira fortaleza surge quando você descobre que a vulnerabilidade também é parte de ser humano."`,
      explicacao: "Abraçar nossa fragilidade nos torna mais compreensivos e empáticos, pois nos permite enxergar que ninguém é perfeito o tempo todo."
    },
    {
      id: 19,
      frase: `"Cultivar uma mente curiosa faz da vida uma aventura constante."`,
      explicacao: "A rotina pode ficar monótona quando deixamos de fazer perguntas. Curiosidade traz renovação, aprendizado e, muitas vezes, soluções criativas."
    },
    {
      id: 20,
      frase: `"Você pode ser o ponto de virada na vida de alguém ao acreditar genuinamente nele."`,
      explicacao: "Ao oferecer encorajamento e confiança, ajudamos as pessoas a enxergar caminhos que antes lhes pareciam impossíveis. É um poder transformador."
    },
    {
      id: 21,
      frase: `"Há beleza em cada passo, mesmo nos caminhos mais tortuosos."`,
      explicacao: "A jornada não precisa ser perfeita para ser valiosa. É na imperfeição que encontramos recursos internos para inovar e nos adaptar."
    },
    {
      id: 22, 
      frase: `"Aprender a dizer não é tão importante quanto saber a hora de dizer sim para si mesmo."`,
      explicacao: "Quando estabelecemos limites e prioridades claras, nossa energia flui para o que realmente importa, gerando maior satisfação pessoal."
    },
    {
      id: 23,
      frase: `"A próxima porta se abre quando você decide fechar a que já não te serve mais."`,
      explicacao: "Às vezes, insistir no que já não faz sentido nos impede de enxergar novas oportunidades. O desapego cria espaço para o que é realmente significativo."
    },
    {
      id: 24,
      frase: `"Transforme a comparação em inspiração: admire o que te encanta e use como combustível."`,
      explicacao: "Comparar-se de forma saudável pode motivar o crescimento. Em vez de se sentir menor, procure aprender com aquilo que te inspira."
    },
    {
      id: 25,
      frase: `"O erro é apenas um mestre disfarçado, ensinando lições valiosas no caminho."`,
      explicacao: "Acertar sempre não garante aprendizado. Muitas vezes, são as falhas que nos mostram os ajustes necessários para evoluir."
    },
    {
      id: 26,
      frase: `"Às vezes, o maior ato de coragem é admitir que não precisamos enfrentar tudo sozinhos."`,
      explicacao: "Pedir ajuda não é fraqueza, mas uma forma de conectar-se e aprender com os outros. Dividir a carga pode tornar o desafio mais leve."
    },
    {
      id: 27,
      frase: `"Seja paciente com suas próprias transições, pois grandes mudanças pedem tempo."`,
      explicacao: "A vida não é um processo linear. Ter paciência consigo mesmo aumenta a chance de sustentar as conquistas a longo prazo."
    },
    {
      id: 28,
      frase: `"A fé em si mesmo pode abrir portas que até então pareciam trancadas."`,
      explicacao: "Quando você acredita que é capaz, enfrenta o mundo de outro jeito. Essa força interna costuma ser notada e valorizada pelas pessoas ao redor."
    },
    {
      id: 29,
      frase: `"O silêncio também fala, principalmente sobre o que vale a pena ouvir."`,
      explicacao: "Em meio à correria, o silêncio pode ser revelador. Ele nos faz perceber sentimentos, necessidades e reflexões que passariam despercebidas no barulho."
    },
    {
      id: 30,
      frase: `"Sonhar é o começo, planejar é o meio, agir é o que torna tudo real."`,
      explicacao: "Não basta ter grandes ideias; é preciso estruturá-las e buscar concretizá-las passo a passo. A execução é o verdadeiro motor da transformação."
    },
    {
      id: 31,
      frase: `"Sua história pode inspirar outras pessoas, mesmo se você ainda não perceber isso."`,
      explicacao: "Cada experiência vivida é única e pode ser um ponto de luz para quem enfrenta algo semelhante. Compartilhar o que aprendemos pode fazer toda a diferença."
    },
    {
        id: 32,
        frase: `"Quando você pede a Deus para vencer uma maratona, ele te envia um par de tênis, não uma medalha."`,
        explicacao: "Isso reforça a ideia de que, muitas vezes, não recebemos a conquista final de imediato, mas sim as ferramentas para lutar por ela. O verdadeiro valor está em enfrentar o processo e crescer durante a jornada."
      },
      {
        id: 33,
        frase: `"A vida não espera que você esteja pronto para acontecer; ela segue em frente, e você aprende no caminho."`,
        explicacao: "Por mais que tentemos planejar tudo, existem surpresas e oportunidades que surgem ao longo do percurso. É na vivência prática que descobrimos nossas forças e desenvolvemos novas habilidades."
      },
      {
        id: 34,
        frase: `"Pequenos ajustes de rota podem levar a destinos totalmente diferentes."`,
        explicacao: "Às vezes, não é necessário mudar tudo de uma só vez. Ajustes graduais e constantes podem resultar em transformações enormes ao longo do tempo."
      },
      {
        id: 35,
        frase: `"Amadurecer é entender que não precisamos de controle absoluto, mas de equilíbrio interior."`,
        explicacao: "Às vezes queremos ter tudo sob controle, mas a vida é feita de incertezas. Cultivar um estado de paz interna nos ajuda a lidar melhor com mudanças e desafios."
      },
      {
        id: 36,
        frase: `"Seus limites de hoje podem ser sua zona de conforto de amanhã, se você continuar avançando."`,
        explicacao: "Aquilo que agora parece difícil pode tornar-se natural com persistência. Quando você persiste, o impossível gradualmente se transforma em rotina."
      },
      {
        id: 37,
        frase: `"Carregar menos bagagem emocional faz a caminhada ser mais leve e proveitosa."`,
        explicacao: "Perdoar, entender e deixar ir o que não nos serve permite avançar com mais clareza. Aliviar pesos do passado abre espaço para conquistas futuras."
      },
      {
        id: 38,
        frase: `"Esperar o momento perfeito pode te fazer perder a chance ideal."`,
        explicacao: "Agir mesmo diante de incertezas é muitas vezes o que diferencia quem realiza de quem apenas sonha. O instante perfeito raramente existe; é você quem o constrói."
      },
      {
        id: 39,
        frase: `"A vida te dá várias folhas em branco; o que você escreve nelas depende apenas de você."`,
        explicacao: "Cada dia é uma oportunidade de começar algo novo ou de continuar algo bom. Sua história se constrói a partir das decisões e atitudes que você escolhe ter."
      },
      {
        id: 40,
        frase: `"Todo mundo carrega uma história complexa por trás do sorriso que mostra ao mundo."`,
        explicacao: "Lembrar que cada pessoa enfrenta suas próprias batalhas nos torna mais empáticos. O apoio e a compreensão que oferecemos podem ter um impacto profundo."
      },
      {
        id: 41,
        frase: `"Há dias em que plantar a semente é a maior vitória possível; o tempo se encarrega do resto."`,
        explicacao: "A ansiedade pelo resultado imediato pode ofuscar o valor do processo. Faça a sua parte hoje, e confie que cada esforço sincero gera frutos no momento certo."
      },
      {
        id: 42,
        frase: `"Para ver a aurora, é preciso atravessar a escuridão da madrugada."`,
        explicacao: "Em muitos casos, passamos por momentos difíceis antes de alcançarmos uma fase de luz. A perseverança durante a ‘noite’ prepara você para apreciar o nascer de um novo dia."
      },
      {
        id: 43,
        frase: `"Quem faz o que ama transpira paixão até mesmo nos detalhes mais simples."`,
        explicacao: "Quando a energia vem de dentro, o esforço deixa de ser pesado e se torna uma extensão do que te inspira. É nesse estado que o verdadeiro potencial floresce."
      },
      {
        id: 44,
        frase: `"Seguir em frente não significa esquecer, mas aprender a levar a saudade com carinho e coragem."`,
        explicacao: "Muitas vezes, carregar lembranças pode ser um ato de amor e superação. O passado não precisa ser um peso se você o enxerga como parte do que te moldou."
      },
      {
        id: 45,
        frase: `"Você não precisa ser perfeito para inspirar alguém; basta ser verdadeiro."`,
        explicacao: "A vulnerabilidade e a honestidade criam conexões reais. Quando você se mostra humano, imperfeito, acaba encorajando outros a acreditarem também em suas forças e fraquezas."
      },
      {
        id: 46,
        frase: `"O maior impedimento para a sua evolução pode ser o medo de largar aquilo que já não te impulsiona."`,
        explicacao: "Podemos ficar presos em situações familiares por receio de mudanças. Mas libertar-se do que não agrega é abrir espaço para novas oportunidades."
      },
      {
        id: 47,
        frase: `"Ser humilde não significa se colocar abaixo de todos, mas reconhecer que há sempre algo a aprender."`,
        explicacao: "A humildade nos torna receptivos a novos conhecimentos e experiências. Quando estamos abertos a aprender, crescemos constantemente, independente do nível que julgamos ter."
      },
      {
        id: 48,
        frase: `"Você não é o seu erro, mas o aprendizado que tira dele"`,
        explicacao: "Cometer falhas faz parte de qualquer trajetória. O diferencial está em extrair a lição e adaptar-se, transformando deslizes em degraus para o sucesso."
      },
      {
        id: 49,
        frase: `"Um passo ousado pode revelar um caminho que você jamais imaginou existir."`,
        explicacao: "Às vezes, só descobrimos novas possibilidades quando arriscamos sair do conhecido. É no território inexplorado que surgem os maiores crescimentos."
      },
      {
        id: 50,
        frase: `"Para quem busca crescer, não existem derrotas definitivas, apenas reorientações temporárias."`,
        explicacao: "Fracassos podem ser vistos como pontos de virada. Se absorvemos o aprendizado e ajustamos a rota, cada queda se transforma em impulso renovado."
      },
      {
        id: 51,
        frase: `"A cada recomeço, você leva consigo um novo acervo de experiências."`,
        explicacao: "Recomeçar não zera o que você já viveu; pelo contrário, agrega todo o conhecimento adquirido. É como abrir um novo capítulo com bagagem mais rica."
      },
      {
        id: 52,
        frase: `"Quanto mais você agradece, mais motivos encontra para continuar agradecendo."`,
        explicacao: "A gratidão treina a mente para enxergar oportunidades e conquistas. É uma corrente de positividade que transforma o modo como você vê o mundo."
      },
      {
        id: 53,
        frase: `"O primeiro ‘não’ pode te proteger de muitos arrependimentos futuros."`,
        explicacao: "Aprender a estabelecer limites é parte fundamental do autocuidado. Saber dizer ‘não’ na hora certa evita desgastes e mantém seu foco no que realmente importa."
      },
      {
        id: 54,
        frase: `"Sair da zona de conforto nem sempre é fácil, mas ficar nela pode custar caro demais."`,
        explicacao: "Acomodar-se é tentador a curto prazo, mas às vezes impede crescimento e realização. Encarar o incômodo de evoluir é um investimento que traz recompensas duradouras."
      },
      {
        id: 55,
        frase: `"A vida não exige perfeição, mas coragem para melhorar a cada dia."`,
        explicacao: "Não se trata de alcançar um ideal inatingível, mas de progredir passo a passo. Ao reconhecer nossa humanidade, encontramos forças para dar o próximo salto."
      },
      {
        id: 56,
        frase: `"A paciência floresce quando entendemos que o tempo tem seu próprio tempo."`,
        explicacao: "Nem tudo acontece no ritmo que desejamos. Cultivar a paciência é aprender a respeitar processos, a maturação de ideias e as oportunidades que ainda estão por vir."
      },
      {
        id: 57,
        frase: `"Você é muito mais forte do que o seu momento mais frágil."`,
        explicacao: "Às vezes, um tropeço faz parecer que tudo está perdido, mas você carrega recursos internos que, se despertados, podem te levar além do que imagina."
      },
      {
        id: 58,
        frase: `"O seu ‘hoje’ pode ser o futuro que alguém sonhou; valorize-o."`,
        explicacao: "Em meio à correria, esquecemos que nossas conquistas de hoje são desejos realizados. Celebrar o presente ajuda a manter a motivação e a sensação de plenitude."
      },
      {
        id: 59,
        frase: `"O verdadeiro significado da conquista está nas renúncias que fizemos para alcançá-la."`,
        explicacao: "Qualquer vitória carrega um histórico de escolhas, sacrifícios e ajustes de rota. Honrar esse processo torna a vitória ainda mais especial."
      },
      {
        id: 60,
        frase: `"Quando você cuida de si mesmo, acaba cuidando melhor das pessoas ao seu redor."`,
        explicacao: "Colocar-se em primeiro lugar não é egoísmo, mas sabedoria. Estando bem, você se torna mais disponível para apoiar e inspirar quem te acompanha."
      },
      {
        id: 61,
        frase: `"A vida é curta demais para viver de forma rasa."`,
        explicacao: "Mergulhar fundo em cada experiência, relacionamento e aprendizado traz riqueza à nossa história. Cada momento tem potencial para ser transformador."
      },
      {
        id: 62,
        frase: `"Um passo atrás pode ser o impulso perfeito para saltar mais longe."`,
        explicacao: "Muitas vezes, recuar um pouco é fundamental para recarregar as energias e enxergar o caminho com mais clareza. Use essa pausa estratégica a seu favor."
      },
      {
        id: 63,
        frase: `"Olhar para dentro é o ponto de partida para encontrar soluções fora."`,
        explicacao: "O autoconhecimento revela forças e fraquezas. Compreender a si mesmo ajuda a tomar decisões mais coerentes com seus valores e objetivos."
      },
      {
        id: 64,
        frase: `"Você é a única pessoa que pode decidir se vai desistir ou seguir em frente."`,
        explicacao: "As opiniões externas podem influenciar, mas é a sua determinação que define o rumo que você dará à própria vida."
      },
      {
        id: 65,
        frase: `"Pequenos acertos diários constroem grandes conquistas a longo prazo."`,
        explicacao: "Focar em melhorar um pouco a cada dia é mais sustentável do que tentar uma transformação radical de uma só vez."
      },
      {
        id: 66,
        frase: `"Cada semente plantada hoje é uma colheita promissora amanhã."`,
        explicacao: "O esforço presente, mesmo que pareça pequeno, pode gerar resultados surpreendentes no futuro. Plantar é acreditar."
      },
      {
        id: 67,
        frase: `"São os desafios que desenham a melhor versão de quem você pode ser."`,
        explicacao: "Mesmo que seja desconfortável, encarar o que nos desafia é o que realmente nos faz crescer e descobrir novas habilidades."
      },
      {
        id: 68,
        frase: `"Ter foco é saber dizer não para muitas coisas que distraem do seu objetivo."`,
        explicacao: "Não se trata apenas de escolher o que fazer, mas de ter a coragem de recusar o que não aproxima do seu verdadeiro propósito."
      },
      {
        id: 69,
        frase: `"A felicidade não está no topo da montanha, mas na forma como você sobe até lá."`,
        explicacao: "Valorizar a jornada e cada passo dado permite que você encontre motivos de alegria antes mesmo de chegar ao destino final."
      },
      {
        id: 70,
        frase: `"Às vezes, você não precisa de um novo caminho, mas de um novo olhar para o caminho já existente."`,
        explicacao: "Mudanças de perspectiva podem revelar oportunidades onde antes só se via obstáculos. A realidade pode ser a mesma, mas você pode se transformar."
      },
      {
        id: 71,
        frase: `"Quando a vida te derrubar, faça dela o trampolim que te lança mais alto."`,
        explicacao: "O fracasso pode ser o princípio de um sucesso ainda maior, se você usar a queda como aprendizado e motivação."
      },
      {
        id: 72,
        frase: `"O amanhã será sempre resultado dos investimentos que você faz hoje."`,
        explicacao: "As sementes plantadas se refletem em conquistas futuras. Cuidar bem delas agora é a melhor forma de garantir um bom desfecho."
      },
      {
        id: 73,
        frase: `"Todos nós temos cicatrizes que contam quem somos, mas é a nossa decisão que define para onde vamos."`,
        explicacao: "O passado compõe nossa história, mas não precisa ditar nosso futuro. Escolher o próximo passo cabe a cada um de nós."
      },
      {
        id: 74,
        frase: `"Por trás de cada 'eu não consigo' há um 'ainda não tentei o suficiente'."`,
        explicacao: "Desafiar suas próprias certezas negativas pode abrir portas para possibilidades que você ainda não explorou."
      },
      {
        id: 75,
        frase: `"A vida é um livro: se você não virar as páginas, viverá para sempre no mesmo capítulo."`,
        explicacao: "Cada nova escolha é uma oportunidade de descobrir algo inédito. Não se prenda ao que já passou."
      },
      {
        id: 76,
        frase: `"Até mesmo uma pequena faísca pode reacender grandes sonhos adormecidos."`,
        explicacao: "Por menor que seja, qualquer sinal de esperança pode reacender a motivação para continuar perseguindo algo que parecia perdido."
      },
      {
        id: 77,
        frase: `"O que hoje é desconfortável, amanhã pode ser a sua nova zona de conforto."`,
        explicacao: "A adaptação é uma capacidade humana impressionante. Com persistência, o que parecia difícil logo vira uma nova base de crescimento."
      },
      {
        id: 78,
        frase: `"Duvide das suas fraquezas tanto quanto você duvida das suas forças."`,
        explicacao: "Colocar as fraquezas em xeque pode ajudá-lo a perceber que elas talvez não sejam tão grandes quanto você imagina."
      },
      {
        id: 79,
        frase: `"Nenhuma promessa vale mais do que aquela que você faz a si mesmo."`,
        explicacao: "O compromisso pessoal é a chave para manter a disciplina e a determinação, independentemente do apoio externo."
      },
      {
        id: 80,
        frase: `"Quem encontra sentido no que faz, encontra coragem para seguir."`,
        explicacao: "Ter um propósito claro impulsiona a vontade de continuar mesmo diante de dificuldades e incertezas."
      },
      {
        id: 81,
        frase: `"É no silêncio do coração que as grandes ideias ganham voz."`,
        explicacao: "Desligar-se do barulho externo permite acessar a criatividade e a intuição que impulsionam a inovação pessoal."
      },
      {
        id: 82,
        frase: `"Cada sonho precisa de um passo concreto para se tornar realidade."`,
        explicacao: "Transformar desejos em planos faz com que a realização deixe de ser apenas uma fantasia e se aproxime do possível."
      },
      {
        id: 83,
        frase: `"Quanto mais você celebra, mais razões encontra para celebrar."`,
        explicacao: "A gratidão e a comemoração pelas pequenas vitórias criam um ciclo positivo que atrai ainda mais conquistas."
      },
      {
        id: 84,
        frase: `"Renove-se sempre, pois até as grandes árvores trocam suas folhas para continuar crescendo."`,
        explicacao: "Mudar não é sinal de fraqueza, mas de adaptação e resiliência. Renovar-se permite que você mantenha a vitalidade."
      },
      {
        id: 85,
        frase: `"Não há nada de errado em parar para respirar; errado é desistir de tentar."`,
        explicacao: "Pausas fazem parte do processo de crescimento e ajudam a reorganizar pensamentos e sentimentos antes de avançar."
      },
      {
        id: 86,
        frase: `"Os melhores resultados vêm de quem entende que falhar faz parte de aprender."`,
        explicacao: "Cada tentativa frustrada traz um aprendizado valioso. Enxergar o erro como parte do trajeto torna o caminho mais leve."
      },
      {
        id: 87,
        frase: `"Seus passos podem ser lentos, mas sua determinação pode ser gigante."`,
        explicacao: "O ritmo não importa tanto quanto a persistência. Avançar devagar ainda é melhor do que ficar parado."
      },
      {
        id: 88,
        frase: `"Ninguém pode fazer você se sentir incapaz sem o seu consentimento."`,
        explicacao: "A autoconfiança é uma arma poderosa. Não dê aos outros a chave para abalar sua crença em si mesmo."
      },
      {
        id: 89,
        frase: `"A vida te ensina o que a pressa te impede de aprender."`,
        explicacao: "Cada etapa tem uma lição a ser absorvida. Quando você acelera demais, corre o risco de perder sabedorias valiosas."
      },
      {
        id: 90,
        frase: `"Você não precisa de permissão para ser incrível."`,
        explicacao: "A validação externa é opcional. A confiança em si mesmo é o que impulsiona ações que mudam a própria história."
      },
      {
        id: 91,
        frase: `"Se quiser encontrar novos horizontes, precisa olhar além do que os olhos já se acostumaram a ver."`,
        explicacao: "Aceitar o inexplorado e buscar aprender com o diferente ampliam seus limites e redefinem suas possibilidades."
      },
      {
        id: 92,
        frase: `"Seja a luz que ilumina o próprio caminho e, de quebra, inspira quem vier atrás."`,
        explicacao: "Ao se fortalecer, você pode servir de exemplo para outros que precisam apenas de uma faísca de motivação."
      },
      {
        id: 93,
        frase: `"Carregue fé no bolso e esperança no coração."`,
        explicacao: "Essas duas companheiras vão te sustentar quando o trajeto parecer incerto e te darão coragem para prosseguir."
      },
      {
        id: 94,
        frase: `"Existe grande poder em parar de questionar o que você pode conquistar e passar a agir para conquistá-lo."`,
        explicacao: "Duvidar de si mesmo é natural, mas não pode ser um freio constante. A ação é o melhor antídoto para a insegurança."
      },
      {
        id: 95,
        frase: `"Seja firme, mas saiba ser flexível quando o vento mudar de direção."`,
        explicacao: "Manter-se fiel aos objetivos não significa ser inflexível. Adaptar-se às circunstâncias é fundamental para o sucesso."
      },
      {
        id: 96,
        frase: `"Cada dia é um convite para aperfeiçoar a sua melhor versão."`,
        explicacao: "Encare suas tarefas e desafios diários como oportunidades de evoluir, em vez de obstáculos intransponíveis."
      },
      {
        id: 97,
        frase: `"Ao invés de apagar as dúvidas, transforme-as em combustível para provar o seu valor."`,
        explicacao: "Dúvidas podem paralisar ou motivar. Use-as como motivação para aprender mais e ir além do que você imagina."
      },
      {
        id: 98,
        frase: `"Uma mente em paz tem a força de mil exércitos."`,
        explicacao: "Equilíbrio interno é capaz de superar obstáculos gigantescos. A serenidade não é fraqueza, mas um poder silencioso."
      },
      {
        id: 99,
        frase: `"O fracasso é a forma que o sucesso encontra para perguntar se você ainda o deseja."`,
        explicacao: "Cada obstáculo testa a profundidade da sua vontade. Persistir mostra ao universo que sua determinação é real."
      },
      {
        id: 100,
        frase: `"Você não precisa ser extraordinário para começar, mas precisa começar para se tornar extraordinário."`,
        explicacao: "A base de qualquer trajetória de sucesso é a iniciativa. Grandes feitos surgem de passos simples e constantes."
      },
      {
        id: 101,
        frase: `"A disciplina é a ponte entre a intenção e a realização."`,
        explicacao: "Ter sonhos é importante, mas colocar em prática, todos os dias, o que é necessário para alcançá-los é o verdadeiro desafio."
      },
      {
        id: 102,
        frase: `"Mudar dói, mas não tanto quanto permanecer estagnado num lugar que não te faz feliz."`,
        explicacao: "O processo de transformação pode ser desconfortável, porém oferece a possibilidade de uma vida mais alinhada com seu propósito."
      },
      {
        id: 103,
        frase: `"Se você pode sonhar com isso, pode trabalhar para que aconteça."`,
        explicacao: "Sonhar é o primeiro passo; o segundo é arregaçar as mangas e agir em direção ao seu objetivo."
      },
      {
        id: 104,
        frase: `"Busque o equilíbrio: ser gentil consigo e ao mesmo tempo se cobrar na medida certa."`,
        explicacao: "O segredo para o progresso está em respeitar seus limites e, ao mesmo tempo, manter a disciplina para superá-los gradualmente."
      },
      {
        id: 105,
        frase: `"Nada floresce na pressa, mas tudo pode crescer no tempo certo."`,
        explicacao: "A paciência é amiga da evolução. Cada etapa cumpre o seu papel no desenvolvimento de algo grandioso."
      },
      {
        id: 106,
        frase: `"Você não está competindo com o mundo, mas com a sua própria hesitação."`,
        explicacao: "A maior barreira muitas vezes é interna. Vencer o medo de agir é mais decisivo do que superar qualquer concorrente externo."
      },
      {
        id: 107,
        frase: `"Mais vale o passo lento de quem persiste do que a corrida veloz de quem desiste na primeira curva."`,
        explicacao: "A maratona da vida não é vencida só por velocidade, mas por constância e força de vontade ao longo do caminho."
      },
      {
        id: 108,
        frase: `"Seu futuro é construído pelos esforços e escolhas que você faz agora."`,
        explicacao: "Cada pequena decisão tomada hoje molda o cenário em que você viverá amanhã. Cada ação conta."
      },
      {
        id: 109,
        frase: `"Onde há vontade sincera, o impossível perde força."`,
        explicacao: "A determinação move barreiras. Quando você realmente quer alcançar algo, cria oportunidades para chegar lá."
      },
      {
        id: 110,
        frase: `"Escolha as batalhas que valham a pena lutar; nem toda luta merece o seu desgaste."`,
        explicacao: "Manter o foco em objetivos relevantes é essencial para não desperdiçar energia. Cuidado para não se perder em conflitos triviais."
      },
      {
        id: 111,
        frase: `"Seus valores são o mapa que guiam suas ações."`,
        explicacao: "Saber o que é importante para você funciona como bússola para seguir no caminho certo, mesmo em meio a decisões difíceis."
      },
      {
        id: 112,
        frase: `"Quando as palavras faltarem, deixe as ações falarem por você."`,
        explicacao: "O exemplo prático tem um peso maior do que qualquer discurso. Demonstrar é sempre mais impactante do que apenas declarar."
      },
      {
        id: 113,
        frase: `"Nem toda solidão é ausência; muitas vezes, é só o espaço necessário para se reencontrar."`,
        explicacao: "Estar sozinho pode ser saudável, pois permite refletir, recarregar energias e voltar mais fortalecido para as conexões sociais."
      },
      {
        id: 114,
        frase: `"Aquele que não teme errar também não teme tentar algo novo."`,
        explicacao: "Livrar-se do medo de fracassar é fundamental para explorar territórios desconhecidos e descobrir novas potencialidades."
      },
      {
        id: 115,
        frase: `"Você não está aqui por acaso; seu propósito é maior do que imagina."`,
        explicacao: "Cada pessoa tem algo único a oferecer. Encontrar e exercer esse diferencial faz toda a diferença na sua satisfação pessoal."
      },
      {
        id: 116,
        frase: `"Quando nada parece dar certo, lembre-se de que crises também são oportunidades para recomeçar."`,
        explicacao: "Em meio a dificuldades, há chance de repensar estratégias e renascer com mais força. O recomeço carrega a semente da inovação."
      },
      {
        id: 117,
        frase: `"A sua coragem de hoje pode ser o ânimo que alguém precisa amanhã."`,
        explicacao: "Nossas atitudes ecoam e podem inspirar quem nos acompanha. O bem que você faz não se limita à sua própria vida."
      },
      {
        id: 118,
        frase: `"Libertar-se do passado não é esquecer, mas sim entender que você é maior do que ele."`,
        explicacao: "Memórias são importantes, mas não devem definir todo o seu presente. Use o que passou para crescer e seguir em frente."
      },
      {
        id: 119,
        frase: `"Quando a mente acredita, o corpo obedece."`,
        explicacao: "O poder do pensamento positivo e da autoconfiança é subestimado. Alimente sua fé em si mesmo e veja resultados no plano físico."
      },
      {
        id: 120,
        frase: `"Todo erro se torna acerto quando bem compreendido e aplicado no futuro."`,
        explicacao: "O aprendizado transforma as falhas em oportunidades. Nada se perde quando você absorve a lição e a utiliza para melhorar."
      },
      {
        id: 121,
        frase: `"A constância vence o talento que não se dedica."`,
        explicacao: "Por mais habilidade que alguém tenha, a dedicação persistente costuma levar mais longe do que o talento inconstante."
      },
      {
        id: 122,
        frase: `"O respeito por si mesmo é a base de qualquer relacionamento saudável."`,
        explicacao: "Tratar-se bem ensina os outros a fazerem o mesmo. Quando você se valoriza, fica mais fácil estabelecer laços equilibrados."
      },
      {
        id: 123,
        frase: `"O sucesso floresce onde a gratidão se torna hábito."`,
        explicacao: "Agradecer abre portas para enxergar ainda mais motivos para prosperar. Essa energia positiva influencia o seu modo de agir."
      },
      {
        id: 124,
        frase: `"Sempre haverá alguém fazendo diferente; faça o seu melhor do seu jeito."`,
        explicacao: "Comparar-se demais impede seu brilho próprio de aparecer. A originalidade costuma ser uma vantagem, não um defeito."
      },
      {
        id: 125,
        frase: `"Decidir não lutar é diferente de escolher a paz; a verdadeira paz exige sabedoria para se impor quando necessário."`,
        explicacao: "Paz não significa apatia, mas equilíbrio em saber quando se defender e quando recuar. É uma escolha consciente, não passiva."
      },
      {
        id: 126,
        frase: `"As palavras têm poder, mas as atitudes falam mais alto."`,
        explicacao: "Discurso e prática precisam caminhar juntos para inspirar confiança e credibilidade, tanto para si quanto para os outros."
      },
      {
        id: 127,
        frase: `"Valorize quem você é hoje, pois foi esse ‘você’ que venceu as batalhas de ontem."`,
        explicacao: "Cada conquista, grande ou pequena, formou a pessoa que está aqui agora. Reconhecer esse fato alimenta a autoestima."
      },
      {
        id: 128,
        frase: `"Ser verdadeiro consigo mesmo é o primeiro passo para encontrar a verdadeira felicidade."`,
        explicacao: "A autenticidade liberta, pois elimina a necessidade de encarar a vida sob máscaras que só geram desgaste emocional."
      },
      {
        id: 129,
        frase: `"Para aquecer seu mundo, não basta esperar pelo sol. Seja você mesmo a chama que ilumina o caminho."`,
        explicacao: "A iniciativa e a positividade interior podem gerar a luz que se espalha ao redor, atraindo coisas boas para a sua trajetória."
      },
      {
        id: 130,
        frase: `"Enquanto você continuar plantando esperança, sua colheita será de possibilidades infinitas."`,
        explicacao: "A fé em dias melhores fortalece o espírito para não desistir, incentivando a ação e o foco nos resultados desejados."
      },
      {
        id: 131,
        frase: `"Seja o autor da sua vida, não um mero espectador do que acontece ao seu redor."`,
        explicacao: "Assumir o protagonismo implica tomar decisões conscientes e responsabilizar-se pelos rumos que você escolhe trilhar."
      },
      {
        id: 132,
        frase: `"Para quem cultiva paciência, o tempo nunca é desperdiçado, mas sim um investimento."`,
        explicacao: "A pressa pode atropelar processos importantes. Saber aguardar o momento certo faz a diferença no resultado final."
      },
      {
        id: 133,
        frase: `"O amor-próprio não é egoísmo, mas a fundação de todas as outras formas de amor."`,
        explicacao: "Aprender a se amar ensina como amar e cuidar dos outros de forma saudável e equilibrada."
      },
      {
        id: 134,
        frase: `"Nenhuma mudança significativa acontece sem um pouco de desconforto."`,
        explicacao: "Sair do habitual requer coragem para enfrentar a incerteza. É nesse passo fora do comum que as transformações ocorrem."
      },
      {
        id: 135,
        frase: `"O sucesso nasce quando a mente se torna aliada e não inimiga."`,
        explicacao: "Pensar positivamente e acreditar nas próprias capacidades é metade do caminho para realizar grandes objetivos."
      },
      {
        id: 136,
        frase: `"Todo sol brilhante enfrentou nuvens escuras antes de surgir no horizonte."`,
        explicacao: "A adversidade pode fazer parte do percurso de qualquer vitória. Permanecer firme é o que garante o brilho após a tempestade."
      },
      {
        id: 137,
        frase: `"Ação sem propósito é como correr em círculos: cansa, mas não leva a lugar algum."`,
        explicacao: "Definir objetivos claros direciona o seu esforço e otimiza o seu tempo, evitando desgastes desnecessários."
      },
      {
        id: 138,
        frase: `"Melhor do que falar sobre sonhos é caminhar na direção deles todos os dias."`,
        explicacao: "A verdadeira conquista vem da consistência nas pequenas atitudes cotidianas que colocam o sonho em prática."
      },
      {
        id: 139,
        frase: `"Um coração grato encontra alegria mesmo em terrenos áridos."`,
        explicacao: "A gratidão modifica o olhar para as circunstâncias e abre espaço para encontrar abundância onde a maioria só vê escassez."
      },
      {
        id: 140,
        frase: `"Procurar a perfeição é menos produtivo do que celebrar o progresso."`,
        explicacao: "O medo de não ser perfeito pode paralisar. Reconhecer o avanço, ainda que parcial, estimula você a continuar evoluindo."
      },
      {
        id: 141,
        frase: `"Se a dúvida te ronda, enfrente-a com conhecimento e prática."`,
        explicacao: "Estudar, pesquisar e colocar em prática são as melhores formas de vencer inseguranças que se baseiam em falta de clareza."
      },
      {
        id: 142,
        frase: `"Seu verdadeiro potencial só é revelado quando você ultrapassa seus próprios limites."`,
        explicacao: "A zona de conforto pode te enganar. Explore além dela para descobrir forças que você nem imaginava ter."
      },
      {
        id: 143,
        frase: `"A pessoa que você mais precisa impressionar é aquela que vê seu rosto no espelho."`,
        explicacao: "A autoconfiança cresce quando você se valoriza, ao invés de buscar aprovações externas."
      },
      {
        id: 144,
        frase: `"Quando a incerteza vier, lembre-se de que ela também pode ser uma oportunidade de expansão."`,
        explicacao: "Nem tudo que é desconhecido é ruim; muitas vezes, é no incerto que se esconde o potencial de reinventar-se."
      },
      {
        id: 145,
        frase: `"Seus sonhos não precisam caber em nenhuma moldura, apenas precisam caber no seu coração."`,
        explicacao: "Quando você se permite sonhar grande, abre espaço para novas possibilidades e não fica limitado pelas convenções."
      },
      {
        id: 146,
        frase: `"Cada segundo investido em seu propósito é um passo a menos rumo ao arrependimento."`,
        explicacao: "A dedicação contínua a algo que faz sentido para você evita o vazio de perceber, lá na frente, que poderia ter feito mais."
      },
      {
        id: 147,
        frase: `"Rir de si mesmo é um antídoto poderoso contra os medos e inseguranças."`,
        explicacao: "Levar a vida com leveza e humor ajuda a encarar os desafios com uma perspectiva mais positiva."
      },
      {
        id: 148,
        frase: `"Seja sempre aprendiz, pois o conhecimento de hoje pode não resolver o desafio de amanhã."`,
        explicacao: "Em um mundo em constante evolução, manter a mente aberta garante a adaptação contínua."
      },
      {
        id: 149,
        frase: `"Ser feliz não é sobre acumular coisas, mas sobre cultivar momentos."`,
        explicacao: "A alegria duradoura vem de experiências significativas, não apenas de bens materiais."
      },
      {
        id: 150,
        frase: `"Você não precisa ter todas as respostas; basta a coragem de procurar por elas."`,
        explicacao: "Admitir que ainda não sabe é o primeiro passo para aprender algo novo e seguir avançando."
      },
      {
        id: 151,
        frase: `"Ser fiel aos seus valores é o melhor investimento que você pode fazer a longo prazo."`,
        explicacao: "Quando suas ações condizem com seus princípios, você constrói uma base sólida de satisfação pessoal e respeito alheio."
      },
      {
        id: 152,
        frase: `"Se o plano A falhar, lembre-se de que o alfabeto ainda tem muitas letras."`,
        explicacao: "Há sempre novas maneiras de tentar ou caminhos para explorar. Persistir é reinventar."
      },
      {
        id: 153,
        frase: `"Algumas batalhas são vencidas apenas ao admitir que é hora de mudar o caminho."`,
        explicacao: "Reconhecer quando uma rota não funciona é sinal de sabedoria, não de desistência."
      },
      {
        id: 154,
        frase: `"Quem se conhece de verdade não teme o julgamento dos outros."`,
        explicacao: "A segurança interna nasce do autoconhecimento e da aceitação de quem se é, com falhas e virtudes."
      },
      {
        id: 155,
        frase: `"Seus sonhos são o combustível que alimenta a coragem de sair do lugar."`,
        explicacao: "Ter uma visão do que se deseja alcançar motiva a ação, mesmo em meio às dificuldades."
      },
      {
        id: 156,
        frase: `"A magia acontece quando você se dá permissão para tentar, mesmo sem garantia de sucesso."`,
        explicacao: "Enfrentar o medo de falhar é essencial para descobrir o que realmente está ao seu alcance."
      },
      {
        id: 157,
        frase: `"Você não é apenas o que faz, mas também o que aprende enquanto faz."`,
        explicacao: "Cada experiência agrega conhecimento e molda sua trajetória de forma singular."
      },
      {
        id: 158,
        frase: `"A vida não se resume a vencer ou perder, mas a aprender e evoluir."`,
        explicacao: "Com cada tropeço, surgem lições valiosas que podem ser levadas para os próximos passos."
      },
      {
        id: 159,
        frase: `"Sonhos são roteiros que o coração escreve, mas que suas mãos precisam executar."`,
        explicacao: "A ação é o elo que transforma ideias abstratas em realizações concretas."
      },
      {
        id: 160,
        frase: `"Sua determinação é a bússola que aponta para a direção do seu sucesso."`,
        explicacao: "Não importa a dificuldade, se você mantiver o foco, chegará onde deseja."
      },
      {
        id: 161,
        frase: `"Quando você honra suas pequenas vitórias, está nutrindo sua grande conquista final."`,
        explicacao: "Cada realização, por menor que pareça, é um passo essencial na construção de algo maior."
      },
      {
        id: 162,
        frase: `"Nenhum obstáculo é tão grande quanto a sua vontade de superá-lo."`,
        explicacao: "A força interior desperta soluções criativas e perseverança para contornar barreiras aparentemente intransponíveis."
      },
      {
        id: 163,
        frase: `"O sabor da liberdade está em ser quem você é, sem pedir permissão."`,
        explicacao: "Assumir a própria identidade é um ato de coragem que libera o seu potencial genuíno."
      },
      {
        id: 164,
        frase: `"Antes de desistir, lembre-se do motivo que te fez começar."`,
        explicacao: "Recuperar o propósito inicial pode renovar as energias e motivar a continuidade."
      },
      {
        id: 165,
        frase: `"A vida ganha novos tons quando você descobre beleza no que parecia comum."`,
        explicacao: "Há detalhes que só percebemos quando estamos abertos a enxergar algo além do óbvio."
      },
      {
        id: 166,
        frase: `"É preciso cultivar a mente tanto quanto se cuida do corpo."`,
        explicacao: "Pensamentos saudáveis geram atitudes positivas, fortalecendo suas ações diárias."
      },
      {
        id: 167,
        frase: `"O que você faz hoje determina as histórias que contará amanhã."`,
        explicacao: "Cada escolha presente alimenta o enredo que você carregará consigo no futuro."
      },
      {
        id: 168,
        frase: `"Ninguém faz o seu caminho por você. Mas muitos podem torcer e ajudar, se você permitir."`,
        explicacao: "Assumir a responsabilidade pelas próprias escolhas é essencial, mas abrir-se ao apoio pode fazer toda a diferença."
      },
      {
        id: 169,
        frase: `"A beleza de viver está em entender que cada passo, por menor que seja, te afasta de onde você não quer mais estar."`,
        explicacao: "Mesmo lentos, os movimentos constantes evitam a estagnação e te aproximam dos objetivos."
      },
      {
        id: 170,
        frase: `"Confie nos sinais que a vida te dá. Às vezes, o desvio no caminho é o atalho para algo melhor."`,
        explicacao: "Saber adaptar-se às mudanças é fundamental para aproveitar oportunidades inesperadas."
      },
      {
        id: 171,
        frase: `"Somente quem tem coragem de cair pode sentir o alívio de ter se reerguido."`,
        explicacao: "Superar uma queda reforça a confiança de que é possível enfrentar novos desafios."
      },
      {
        id: 172,
        frase: `"Deixar ir não é fraqueza; é a força que abre espaço para o novo."`,
        explicacao: "Muitas vezes, o apego ao que já passou impede o surgimento de oportunidades mais alinhadas com o presente."
      },
      {
        id: 173,
        frase: `"Você vale mais do que os rótulos que tentam te dar."`,
        explicacao: "Rótulos limitam quem você pode ser. Permita-se ultrapassar as definições que não cabem mais na sua realidade."
      },
      {
        id: 174,
        frase: `"Coragem é insistir em meio às dúvidas, pois a ação é mais transformadora que a hesitação."`,
        explicacao: "É normal sentir incerteza, mas é perseverando que se encontram as respostas e, sobretudo, o crescimento."
      },
      {
        id: 175,
        frase: `"Se você ainda não chegou lá, é porque a sua história ainda está sendo escrita."`,
        explicacao: "Cada capítulo tem sua importância. Abrace o processo enquanto caminha rumo ao desfecho que deseja."
      },
      {
        id: 176,
        frase: `"Não deixe que a pressa de chegar ao futuro faça você esquecer de viver o presente."`,
        explicacao: "Equilíbrio é essencial. Aproveitar o agora não significa desistir dos sonhos, mas valorizar a caminhada."
      },
      {
        id: 177,
        frase: `"Persistir é dar ao universo uma prova de que seu desejo realmente importa."`,
        explicacao: "A constância em buscar um objetivo cria oportunidades e atrai as condições necessárias para realizá-lo."
      },
      {
        id: 178,
        frase: `"Ser gentil com os outros é, antes de tudo, ser gentil consigo mesmo."`,
        explicacao: "A empatia começa internamente, reconhecendo as próprias dores para estender compreensão ao próximo."
      },
      {
        id: 179,
        frase: `"O que parece pequeno hoje, pode ser gigante amanhã se regado com esforço e paciência."`,
        explicacao: "Até mesmo grandes árvores foram mudas um dia. Dedicação e tempo fazem germinar resultados grandiosos."
      },
      {
        id: 180,
        frase: `"O perdão liberta duas pessoas: quem o dá e quem o recebe."`,
        explicacao: "A mágoa mantém ambos presos ao passado; o perdão é a chave que abre a porta de um futuro mais leve."
      },
      {
        id: 181,
        frase: `"Aceitar o que não pode ser mudado é a melhor maneira de poupar energia para transformar o que pode."`,
        explicacao: "Focar nos problemas insolúveis gera desgaste. Direcione seus esforços para aquilo que está ao seu alcance."
      },
      {
        id: 182,
        frase: `"Às vezes, a coisa mais corajosa que você pode fazer é pedir ajuda."`,
        explicacao: "Reconhecer suas limitações e buscar suporte não é fraqueza, mas sim uma prova de maturidade."
      },
      {
        id: 183,
        frase: `"O desconforto de hoje pode ser o alívio de amanhã, se você persistir na mudança."`,
        explicacao: "Transformações exigem esforço, porém liberam potencial para uma vida mais autêntica e significativa."
      },
      {
        id: 184,
        frase: `"Você não precisa de um cenário perfeito para começar; basta a vontade sincera de fazer dar certo."`,
        explicacao: "O contexto ideal raramente existe. Iniciar apesar das adversidades é o que separa a realização da mera intenção."
      },
      {
        id: 185,
        frase: `"O maior erro é deixar de tentar por medo de falhar."`,
        explicacao: "Errar faz parte do processo. Deixar de agir, porém, impede qualquer chance de êxito."
      },
      {
        id: 186,
        frase: `"Palavras de incentivo podem salvar um dia nublado. Use-as tanto para si mesmo quanto para os outros."`,
        explicacao: "O poder de uma frase positiva é capaz de mudar o ânimo e reacender a esperança em quem ouve."
      },
      {
        id: 187,
        frase: `"Passado e futuro só existem na sua mente; a vida real acontece no agora."`,
        explicacao: "Aproveitar o momento presente traz plenitude e atenção plena ao que se está fazendo."
      },
      {
        id: 188,
        frase: `"Inove seus passos, mas mantenha intacta a essência que te trouxe até aqui."`,
        explicacao: "Evoluir não significa abandonar valores e características únicas; é adaptá-los para novos contextos."
      },
      {
        id: 189,
        frase: `"Gentileza e respeito são linguagens universais que abrem portas sem precisar de chave."`,
        explicacao: "Relacionamentos saudáveis têm como base a empatia, construindo pontes em qualquer ambiente."
      },
      {
        id: 190,
        frase: `"Não espere o ano novo para escrever novas metas; cada dia é uma folha em branco esperando por você."`,
        explicacao: "Todo amanhecer traz a oportunidade de recomeçar ou de começar algo inédito, independente de datas comemorativas."
      },
      {
        id: 191,
        frase: `"Superar limites é aceitar que o maior obstáculo, muitas vezes, mora dentro de nós mesmos."`,
        explicacao: "Entender as barreiras internas facilita quebrá-las e possibilita conquistar metas que pareciam distantes."
      },
      {
        id: 192,
        frase: `"O mundo ao seu redor reflete a forma como você se enxerga."`,
        explicacao: "Sua percepção interna influencia diretamente como você interpreta e reage ao que acontece externamente."
      },
      {
        id: 193,
        frase: `"Quando você se permite ser vulnerável, descobre que não está sozinho na jornada."`,
        explicacao: "Mostrar fragilidade aproxima as pessoas e traz suporte mútuo, tornando a trajetória mais enriquecedora."
      },
      {
        id: 194,
        frase: `"Nada é tão poderoso quanto uma mente focada em um objetivo claro."`,
        explicacao: "A clareza de propósito canaliza a energia e potencializa suas ações rumo ao resultado desejado."
      },
      {
        id: 195,
        frase: `"Mais vale um passo consciente do que correr às cegas em direções incertas."`,
        explicacao: "Agir com sabedoria e planejamento aumenta a eficácia, evitando desperdício de tempo e esforço."
      },
      {
        id: 196,
        frase: `"Abraçar o fracasso é entender que ninguém acerta sem antes errar algumas vezes."`,
        explicacao: "Cada tropeço ensina o que é preciso ajustar para alcançar uma performance melhor na próxima tentativa."
      },
      {
        id: 197,
        frase: `"A inspiração surge quando você cria espaço na mente para ela aparecer."`,
        explicacao: "Excesso de preocupações e distrações pode sufocar ideias criativas. O ócio produtivo é valioso."
      },
      {
        id: 198,
        frase: `"A essência do sonho não é alcançá-lo, mas se transformar ao longo do caminho para chegar lá."`,
        explicacao: "O processo de evoluir rumo a um desejo pode ser tão valioso quanto a própria conquista final."
      },
      {
        id: 199,
        frase: `"Foque no que você pode construir e não apenas no que precisa consertar."`,
        explicacao: "Ter uma visão positiva incentiva a criação de algo novo, em vez de sempre tentar remediar o que já existe."
      },
      {
        id: 200,
        frase: `"Em cada encerramento há a possibilidade de um renascimento."`,
        explicacao: "O término de um ciclo pode ser a chance perfeita para iniciar outro ainda melhor."
      },
      {
        id: 201,
        frase: `"Tudo o que você precisa para começar está dentro de você; o resto, você encontra na jornada."`,
        explicacao: "A vontade interna é a força-motriz. As ferramentas surgem ou são descobertas quando se está em movimento."
      },
      {
        id: 202,
        frase: `"Tenha um relacionamento saudável com o espelho: enxergue ali alguém disposto a melhorar."`,
        explicacao: "A forma como você se vê influencia sua autoestima e, consequentemente, sua capacidade de ação."
      },
      {
        id: 203,
        frase: `"As conquistas que mais brilham são aquelas que exigem paciência na espera e força na execução."`,
        explicacao: "Grandes objetivos requerem constância. É preciso saber lidar com o tempo e manter a dedicação."
      },
      {
        id: 204,
        frase: `"Não deixe que o seu potencial durma enquanto suas dúvidas ficam acordadas."`,
        explicacao: "Suas capacidades precisam de movimento. Agir mesmo com medo é melhor do que ficar paralisado."
      },
      {
        id: 205,
        frase: `"Persistência não é teimosia, mas a firmeza de propósito de quem sabe o que quer."`,
        explicacao: "A teimosia ignora a realidade; a persistência a enfrenta com estratégias inteligentes e foco no objetivo."
      },
      {
        id: 206,
        frase: `"Seja qual for a tempestade, a sua mente precisa ser o porto seguro."`,
        explicacao: "Cultivar serenidade interna ajuda a manter o rumo, mesmo quando tudo à volta parece conturbado."
      },
      {
        id: 207,
        frase: `"O valor da sua caminhada não se mede pelos aplausos, mas pelos passos que você dá no silêncio."`,
        explicacao: "O reconhecimento externo pode falhar, mas o verdadeiro mérito está no esforço constante de avançar."
      },
      {
        id: 208,
        frase: `"Você é único, e é justamente isso que faz seu potencial ser inigualável."`,
        explicacao: "Comparar-se demais com os outros limita o uso das suas habilidades autênticas."
      },
      {
        id: 209,
        frase: `"Quem mantém a esperança viva aprende a extrair o mel até mesmo das situações amargas."`,
        explicacao: "Uma visão otimista pode amenizar os impactos negativos e revelar saídas criativas."
      },
      {
        id: 210,
        frase: `"Amadurecer é quando você entende que nem todas as opiniões merecem sua energia."`,
        explicacao: "Selecione o que realmente importa e foque nas vozes que contribuem para o seu crescimento."
      },
      {
        id: 211,
        frase: `"Não existe força maior do que aquela que surge de uma necessidade genuína de mudança."`,
        explicacao: "Quando a transformação se torna indispensável, o empenho para realizá-la se multiplica."
      },
      {
        id: 212,
        frase: `"Seus medos podem dizer muito sobre seus limites, mas sua coragem dirá quem você se tornará."`,
        explicacao: "A forma como você lida com as inseguranças define o quão longe pode ir."
      },
      {
        id: 213,
        frase: `"Nem sempre quem corre mais rápido chega primeiro; quem persiste ultrapassa os cansaços do caminho."`,
        explicacao: "A longas distâncias, a regularidade tende a superar a velocidade inicial de quem não sabe dosar forças."
      },
      {
        id: 214,
        frase: `"Quando você deseja algo de todo o coração, as impossibilidades se tornam desafios superáveis."`,
        explicacao: "O querer genuíno desbloqueia caminhos que pareciam obstruídos pela falta de empenho ou de fé."
      },
      {
        id: 215,
        frase: `"Nada é tão contagiante quanto uma pessoa que acredita na própria vitória."`,
        explicacao: "O entusiasmo autêntico inspira pessoas ao redor e cria uma atmosfera propícia para o sucesso coletivo."
      },
      {
        id: 216,
        frase: `"Cada renúncia abre espaço para algo maior que está por vir."`,
        explicacao: "Às vezes, soltar o que pesa é necessário para poder segurar o que realmente vale a pena."
      },
      {
        id: 217,
        frase: `"Você não é resultado do que aconteceu contigo, mas do que decidiu fazer a partir do que aconteceu."`,
        explicacao: "O passado influencia, mas é a sua reação aos fatos que verdadeiramente determina o seu destino."
      },
      {
        id: 218,
        frase: `"O ‘eu acredito em você’ mais poderoso vem da sua própria voz interior."`,
        explicacao: "O apoio externo é valioso, mas a convicção pessoal é o que solidifica o caminho para a realização."
      },
      {
        id: 219,
        frase: `"O melhor remédio para a dúvida é o conhecimento, e a melhor cura para a inércia é a ação."`,
        explicacao: "Estudar e fazer são as ferramentas que dissipam incertezas e constroem resultados concretos."
      },
      {
        id: 220,
        frase: `"Pequenos passos mantidos com constância alcançam destinos que grandes saltos nem sempre conseguem."`,
        explicacao: "A regularidade nas ações cotidianas forma a base de projetos duradouros."
      },
      {
        id: 221,
        frase: `"Quando você se coloca como prioridade, descobre que cuidar de si é a melhor forma de cuidar dos outros também."`,
        explicacao: "A saúde emocional e física é fundamental para ter energia e compartilhar positividade com o mundo."
      },
      {
        id: 222,
        frase: `"A felicidade não vai vir depois que você alcançar seus objetivos. Se você não aprender a ser feliz agora, no meio da jornada, os seus maiores sonhos vão parecer vazios quando você os alcançar."`,
        explicacao: "A alegria genuína é construída diariamente, não só na linha de chegada. Aprender a valorizar o presente é o que traz sentido às suas conquistas futuras."
      },
      {
        id: 223,
        frase: `"Nenhuma transformação ocorre sem uma decisão firme de sair do lugar."`,
        explicacao: "O primeiro passo pode parecer pequeno, mas ele é fundamental para abrir caminho para as grandes mudanças."
      },
      {
        id: 224,
        frase: `"A maneira como você vê o mundo reflete a maneira como você vê a si mesmo."`,
        explicacao: "Pensamentos positivos geram atitudes mais confiantes e abrem portas para oportunidades que antes passavam despercebidas."
      },
      {
        id: 225,
        frase: `"Toda dor traz em si uma semente de força para o recomeço."`,
        explicacao: "Aprender com o sofrimento transforma obstáculos em ensinamentos que nos tornam mais resistentes e sábios."
      },
      {
        id: 226,
        frase: `"Você não é o que te aconteceu, mas o que você escolhe fazer com o que aconteceu."`,
        explicacao: "Cada experiência pode ser uma alavanca de crescimento se enxergarmos o aprendizado que ela carrega."
      },
      {
        id: 227,
        frase: `"Alguns caminhos se abrem na sua vida depois que você fecha as portas que já não fazem sentido."`,
        explicacao: "O desapego é fundamental para criar espaço a novas possibilidades e oportunidades."
      },
      {
        id: 228,
        frase: `"O sorriso é a ponte mais curta entre a dúvida e a esperança."`,
        explicacao: "Muitas vezes, a alegria interna vence barreiras e motiva outros a acreditarem que a situação pode melhorar."
      },
      {
        id: 229,
        frase: `"Para cada desistência, há uma chance perdida de descobrir seu verdadeiro potencial."`,
        explicacao: "Persistir é insistir em se conhecer melhor e alcançar áreas de competência que você nem imaginava ter."
      },
      {
        id: 230,
        frase: `"A alma encontra descanso quando aceitamos que nem tudo é para ser controlado."`,
        explicacao: "Confiar no fluxo natural das coisas liberta a mente e permite foco naquilo que realmente podemos transformar."
      },
      {
        id: 231,
        frase: `"Se você quer resultados diferentes, pare de repetir as mesmas atitudes."`,
        explicacao: "Às vezes, pequenas mudanças em hábitos ou estratégias podem gerar grandes impactos positivos."
      },
      {
        id: 232,
        frase: `"Não tema o silêncio; é nele que a sua voz interior ganha força."`,
        explicacao: "Num mundo barulhento, encontrar momentos de introspecção ajuda a alinhar pensamento, desejo e ação."
      },
      {
        id: 233,
        frase: `"Fé é confiar mesmo quando a vida não dá garantias."`,
        explicacao: "Acreditar no seu caminho, ainda que incerto, fortalece a determinação para continuar."
      },
      {
        id: 234,
        frase: `"Um pequeno passo hoje pode ser o grande salto de amanhã."`,
        explicacao: "O crescimento é gradual. Cada ação, por menor que seja, leva você mais perto do seu objetivo."
      },
      {
        id: 235,
        frase: `"A empatia tem o poder de transformar críticas em diálogos construtivos."`,
        explicacao: "Compreender o ponto de vista alheio abre espaço para soluções em vez de conflitos."
      },
      {
        id: 236,
        frase: `"A distância entre onde você está e onde quer chegar pode ser encurtada pelo esforço contínuo."`,
        explicacao: "Metas grandes não precisam ser intimidadoras; dividir o caminho em etapas faz a jornada mais leve."
      },
      {
        id: 237,
        frase: `"Quando você se abre para o novo, descobre forças que nem sabia que tinha."`,
        explicacao: "A zona de conforto é segura, mas limita o crescimento. Experimentar desafios pode revelar talentos ocultos."
      },
      {
        id: 238,
        frase: `"São as escolhas de hoje que determinam as histórias que você contará amanhã."`,
        explicacao: "Cada decisão, por menor que pareça, constrói a sua narrativa de vida."
      },
      {
        id: 239,
        frase: `"Não adie o amor-próprio para quando alcançar a próxima meta; sem ele, qualquer conquista será superficial."`,
        explicacao: "Cuidar de si mesmo é o alicerce que sustenta sua motivação e felicidade em qualquer etapa."
      },
      {
        id: 240,
        frase: `"Mais vale um objetivo simples que gera ação, do que um sonho grandioso paralisado pelo medo."`,
        explicacao: "Metas realistas e acionáveis são mais eficazes do que planos perfeitos que nunca saem do papel."
      },
      {
        id: 241,
        frase: `"Quem olha para trás com gratidão, encontra mais motivos para seguir em frente."`,
        explicacao: "Reconhecer as vitórias e aprendizados passados amplia a confiança para encarar novos desafios."
      },
      {
        id: 242,
        frase: `"Quando a estrada é longa, aprender a apreciar a paisagem faz toda a diferença."`,
        explicacao: "Aproveitar o trajeto em vez de focar só no destino ajuda a manter a motivação elevada."
      },
      {
        id: 243,
        frase: `"Crie metas que alimentem o seu coração, não apenas o seu bolso."`,
        explicacao: "O verdadeiro sucesso é fruto de objetivos alinhados com os valores pessoais."
      },
      {
        id: 244,
        frase: `"Não se desespere se a colheita for pequena; a semeadura que virá pode te surpreender."`,
        explicacao: "A natureza do crescimento é cíclica. Haverá fases de abundância quando for a hora certa."
      },
      {
        id: 245,
        frase: `"Menos culpa, mais atitude: é assim que se vira o jogo."`,
        explicacao: "Parar de se lamentar e focar no que pode ser feito traz renovação de esperança e resultados efetivos."
      },
      {
        id: 246,
        frase: `"O que nos une não é a perfeição, mas a vontade de encontrar sentido na jornada."`,
        explicacao: "Conectar-se com quem busca crescimento e propósito fortalece o caminho de todos."
      },
      {
        id: 247,
        frase: `"Um coração sereno enxerga além do caos."`,
        explicacao: "Buscar equilíbrio interno permite lidar com adversidades de forma mais racional e criativa."
      },
      {
        id: 248,
        frase: `"Quem aprende a se reinventar nunca fica preso a uma só versão de si mesmo."`,
        explicacao: "A capacidade de adaptação abre portas para um crescimento sem limites."
      },
      {
        id: 249,
        frase: `"Já pensou que o medo pode ser sinal de que você está perto de algo grandioso?"`,
        explicacao: "Sentir receio frequentemente indica que você está em terreno novo, onde pode ocorrer grande evolução."
      },
      {
        id: 250,
        frase: `"Cuidar do seu eu interior é tão importante quanto qualquer vitória externa."`,
        explicacao: "A saúde mental e emocional garantem a solidez necessária para sustentar conquistas e superar desafios."
      },
      {
        id: 251,
        frase: `"Às vezes, o que falta não é força, mas a clareza de qual rumo tomar."`,
        explicacao: "Ter direção poupa energia e torna suas ações mais eficazes, evitando dispersão."
      },
      {
        id: 252,
        frase: `"O sucesso pode nascer de um simples 'por que não?' em vez de um 'será?'."`,
        explicacao: "A curiosidade e a disposição para tentar são combustíveis potentes para realizar novos projetos."
      },
      {
        id: 253,
        frase: `"Quando o passado insiste em bater na porta, ofereça a ele uma nova perspectiva."`,
        explicacao: "Revisitar velhas histórias com outros olhos ajuda a liberar mágoas e encontrar aprendizados."
      },
      {
        id: 254,
        frase: `"Mais do que ter um objetivo, é importante entender o 'por quê' dele existir."`,
        explicacao: "O propósito verdadeiro é o que sustenta a motivação, mesmo nos momentos de incerteza."
      },
      {
        id: 255,
        frase: `"Você não controla as ondas, mas pode aprender a surfar."`,
        explicacao: "Nem sempre podemos mudar as circunstâncias, mas é possível se adaptar para tirar proveito delas."
      },
      {
        id: 256,
        frase: `"A simplicidade pode revelar tesouros que a complexidade esconde."`,
        explicacao: "Descomplicar atitudes e pensamentos abre espaço para enxergar soluções mais diretas e eficientes."
      },
      {
        id: 257,
        frase: `"Quando a esperança se torna hábito, qualquer cenário ganha cores de otimismo."`,
        explicacao: "Esperar o melhor não é ilusão; é o combustível que nos leva a encontrar ou criar oportunidades."
      },
      {
        id: 258,
        frase: `"O autocuidado é o presente que você dá para o futuro."`,
        explicacao: "Zelar pelo seu bem-estar agora garante energia e saúde para encarar os desafios que estão por vir."
      },
      {
        id: 259,
        frase: `"A vontade de vencer cresce na mesma proporção que o compromisso com o trabalho duro."`,
        explicacao: "Só desejar não basta; é o empenho consistente que transforma a vontade em realizações."
      },
      {
        id: 260,
        frase: `"Seja o tipo de pessoa que faz o bem sem esperar aplausos."`,
        explicacao: "Agir por princípios gera uma satisfação interna que transcende o reconhecimento externo."
      },
      {
        id: 261,
        frase: `"Há sempre um 'eu consegui' esperando depois de cada 'eu não posso mais'."`,
        explicacao: "Por vezes, a superação acontece exatamente no instante em que quase desistimos."
      },
      {
        id: 262,
        frase: `"O tempo não cura tudo, mas ensina a lidar com quase tudo."`,
        explicacao: "A maturidade desenvolvida ao longo das experiências torna problemas anteriores menos assustadores."
      },
      {
        id: 263,
        frase: `"Limites podem ser reais, mas a imaginação para superá-los também pode ser infinita."`,
        explicacao: "Despertar a criatividade é uma maneira de abrir portas que antes pareciam trancadas."
      },
      {
        id: 264,
        frase: `"Ter paciência com o processo é respeitar o ritmo que as coisas precisam ter para florescer."`,
        explicacao: "A pressa pode sufocar as etapas necessárias para o crescimento natural de um projeto."
      },
      {
        id: 265,
        frase: `"Sentir-se pronto não é pré-requisito para iniciar; o caminho também ensina."`,
        explicacao: "Muitas vezes, a prática traz o amadurecimento que a teoria sozinha não é capaz de oferecer."
      },
      {
        id: 266,
        frase: `"O mundo muda quando você muda, pois você se torna parte de uma nova realidade."`,
        explicacao: "Ao transformar crenças e hábitos, tudo ao redor começa a reagir de forma diferente à sua energia."
      },
      {
        id: 267,
        frase: `"A insegurança grita, mas a autoconfiança fala em tom firme e sereno."`,
        explicacao: "Aprender a silenciar as vozes internas de dúvida permite que a certeza do próprio valor prevaleça."
      },
      {
        id: 268,
        frase: `"Desafios são como degraus que elevam você a um nível que antes parecia inalcançável."`,
        explicacao: "Sem dificuldades, não há elevação. Elas servem como alicerce para o amadurecimento."
      },
      {
        id: 269,
        frase: `"O 'agora' é mais poderoso do que qualquer plano para 'depois'."`,
        explicacao: "A ação imediata, mesmo que simples, vale mais do que ideias grandiosas nunca colocadas em prática."
      },
      {
        id: 270,
        frase: `"São nos dias cinzentos que seu brilho interior se torna mais evidente."`,
        explicacao: "A adversidade realça a sua luz pessoal, provando que você pode se manter resiliente em qualquer situação."
      },
      {
        id: 271,
        frase: `"Seus sonhos merecem um lugar de destaque no seu dia, não apenas na sua noite."`,
        explicacao: "Reservar tempo e energia para dar passos concretos rumo às aspirações mantém a chama da motivação acesa."
      },
      {
        id: 272,
        frase: `"Quando tudo estiver confuso, volte ao básico: respire, reflita e retome o foco."`,
        explicacao: "Em meio ao caos, as ações simples e conscientes podem restaurar clareza e direção."
      },
      {
        id: 273,
        frase: `"Às vezes, perder é a melhor forma de se reencontrar."`,
        explicacao: "Alguns fracassos são libertadores, pois mostram o que realmente importa e o que não merece mais atenção."
      },
      {
        id: 274,
        frase: `"Aprenda a ser seu próprio porto-seguro para que nenhum vendaval te tire do lugar."`,
        explicacao: "Fortalecer a autoconfiança evita que fatores externos minem sua estabilidade e sonhos."
      },
      {
        id: 275,
        frase: `"Quando você faz do amor sua motivação, o cansaço se torna mais leve e a caminhada mais bela."`,
        explicacao: "O sentimento genuíno por aquilo que se faz injeta energia extra nos momentos de dificuldade."
      },
      {
        id: 276,
        frase: `"Abra espaço para o novo sem se esquecer das raízes que te sustentam."`,
        explicacao: "É possível evoluir sem perder a essência que constitui o seu ponto de partida."
      },
      {
        id: 277,
        frase: `"Consertar o que está quebrado às vezes é mais valioso do que comprar algo novo."`,
        explicacao: "Aprender a restaurar mostra compromisso e cria laços profundos com o que se valoriza."
      },
      {
        id: 278,
        frase: `"Dê ao seu futuro motivos para te agradecer pelos passos que você deu hoje."`,
        explicacao: "Construir um legado positivo depende das atitudes consistentes que você toma no presente."
      },
      {
        id: 279,
        frase: `"Descubra seus talentos adormecidos explorando lugares onde nunca esteve antes."`,
        explicacao: "A novidade incentiva a criatividade e pode revelar habilidades que você não conhecia."
      },
      {
        id: 280,
        frase: `"Quando estiver na escuridão, lembre-se de que até a menor chama se destaca e ilumina."`,
        explicacao: "Não subestime a força de pequenos gestos de coragem ou bondade; eles fazem grande diferença."
      },
      {
        id: 281,
        frase: `"Não deixe a voz da perfeição calar a expressão da sua verdade."`,
        explicacao: "Busque autenticidade em vez de um ideal irrealizável; é ela que conecta você com o mundo."
      },
      {
        id: 282,
        frase: `"Saiba a hora de parar de pensar e começar a realizar."`,
        explicacao: "Planejar é importante, mas sem ação o planejamento não passa de intenção."
      },
      {
        id: 283,
        frase: `"Quem agradece o que tem recebe da vida mais motivos para agradecer."`,
        explicacao: "A gratidão cria uma mentalidade de abundância, que atrai mais oportunidades e realizações."
      },
      {
        id: 284,
        frase: `"Você pode descobrir novos horizontes quando se permite questionar as respostas prontas."`,
        explicacao: "Pensar criticamente e buscar alternativas amplia o seu campo de visão e gera inovações."
      },
      {
        id: 285,
        frase: `"A vitória não está apenas em cruzar a linha de chegada, mas em aproveitar cada passo que te levou até lá."`,
        explicacao: "Celebrar o processo de crescimento faz com que você valorize cada esforço despendido."
      },
      {
        id: 286,
        frase: `"Descubra quem você é antes de correr atrás do que você quer."`,
        explicacao: "O autoconhecimento direciona seus objetivos para algo que realmente trará satisfação."
      },
      {
        id: 287,
        frase: `"Alguns nãos nos protegem de caminhos que não eram para ser nossos."`,
        explicacao: "A recusa ou obstáculo que parece ruim pode, no fundo, estar poupando você de maiores frustrações."
      },
      {
        id: 288,
        frase: `"Não deixe que o medo de falhar seja maior do que a vontade de vencer."`,
        explicacao: "Perder oportunidades por receio de errar é bem pior do que errar tentando."
      },
      {
        id: 289,
        frase: `"Seja corajoso o suficiente para escrever sua história, mesmo que ela não saia como o planejado."`,
        explicacao: "A vida é dinâmica; o que vale é a determinação para reescrever os capítulos sempre que preciso."
      },
      {
        id: 290,
        frase: `"O olhar gentil que você dirige a si mesmo se reflete em como você enxerga o mundo."`,
        explicacao: "A autocompaixão expande sua capacidade de empatia e faz a vida ao redor parecer mais harmoniosa."
      },
      {
        id: 291,
        frase: `"Não é a montanha que vencemos, mas a nós mesmos durante a escalada."`,
        explicacao: "Grandes desafios são oportunidades de superar inseguranças e desenvolver perseverança."
      },
      {
        id: 292,
        frase: `"Em tempos de incerteza, a esperança é um abrigo que mantém a chama acesa."`,
        explicacao: "Cultivar otimismo no caos dá energia para persistir e encontrar soluções."
      },
      {
        id: 293,
        frase: `"Você é a soma dos livros que leu, das músicas que ouviu e dos sonhos que decidiu perseguir."`,
        explicacao: "Tudo o que absorvemos e decidimos carregar constrói a nossa identidade e visão de mundo."
      },
      {
        id: 294,
        frase: `"Renovar a fé em si mesmo não é recusar o passado, mas aprender com ele e seguir em frente."`,
        explicacao: "Errar faz parte. Recomeçar não anula as lições; apenas as coloca em prática em um novo cenário."
      },
      {
        id: 295,
        frase: `"Sempre haverá alguém esperando o seu fracasso, mas isso só importa se você desistir de si mesmo."`,
        explicacao: "Valorize sua própria aprovação. A melhor resposta a qualquer crítica é continuar avançando."
      },
      {
        id: 296,
        frase: `"Nem toda tempestade é castigo; algumas são limpeza para que o novo possa florescer."`,
        explicacao: "A adversidade pode preparar o terreno para oportunidades que não conseguiriam brotar em outra circunstância."
      },
      {
        id: 297,
        frase: `"Resgatar os seus pedaços é se tornar inteiro para escrever um capítulo melhor."`,
        explicacao: "Encarar as partes fragmentadas da sua história permite reconstruir a si mesmo com mais consciência e força."
      },
      {
        id: 298,
        frase: `"Agir apesar do medo é a diferença entre quem sonha e quem realiza."`,
        explicacao: "Não esperar a coragem surgir sozinha, mas criá-la ao enfrentar aquilo que assusta, é o passo decisivo."
      },
      {
        id: 299,
        frase: `"Para muitas perguntas, a resposta está na prática e não no pensamento."`,
        explicacao: "Experimentar na vida real esclarece dúvidas que nunca teriam solução apenas na teoria."
      },
      {
        id: 300,
        frase: `"Errar é aprender qual caminho não seguir, mas desistir é recusar as outras estradas disponíveis."`,
        explicacao: "A falha mostra direções que não funcionam; a persistência lembra que há inúmeras rotas a serem tentadas."
      },
      {
        id: 301,
        frase: `"Confiança é construída com passos diários de autorrespeito e honestidade consigo mesmo."`,
        explicacao: "Quando suas ações refletem aquilo que você diz e pensa, a segurança interior cresce."
      },
      {
        id: 302,
        frase: `"Ser resiliente não é suportar tudo sem reclamar, mas sim aprender a se reconstruir após cada queda."`,
        explicacao: "A capacidade de se refazer diante dos problemas é o que mantém acesa a chama da motivação e do crescimento."
      },
      {
        id: 303,
        frase: `"A força do hábito pode ser tanto sua maior aliada quanto seu maior desafio."`,
        explicacao: "Bons hábitos ajudam a progredir quase sem esforço, enquanto hábitos ruins exigem disciplina para serem superados."
      },
      {
        id: 304,
        frase: `"Crescer é descobrir que nem toda derrota precisa do seu lamento, mas sim da sua compreensão."`,
        explicacao: "Chorar o fracasso pode ser momentâneo, mas entendê-lo libera a sabedoria para fazer melhor na próxima tentativa."
      },
      {
        id: 305,
        frase: `"Apegue-se aos seus sonhos, mas não esqueça de cuidar de quem você é enquanto os persegue."`,
        explicacao: "O equilíbrio entre buscar objetivos e manter a saúde física e emocional é fundamental para sustentar suas conquistas."
      },
      {
        id: 306,
        frase: `"Nunca subestime o poder de uma mente calma em meio à tempestade."`,
        explicacao: "Manter-se centrado permite decisões mais lúcidas e estratégias mais eficientes em situações extremas."
      },
      {
        id: 307,
        frase: `"Cada início carrega a emoção de uma oportunidade; cada recomeço, a sabedoria do que foi vivido."`,
        explicacao: "Desafiar-se a começar de novo não é retrocesso, mas a chance de aplicar lições já aprendidas."
      },
      {
        id: 308,
        frase: `"O que você ganha ao superar um medo é sempre maior do que aquilo que o medo te impedia de conquistar."`,
        explicacao: "O bloqueio mental torna algumas barreiras enormes, mas elas se tornam minúsculas quando enfrentadas de frente."
      },
      {
        id: 309,
        frase: `"Confiar no próprio ritmo é entender que o verdadeiro progresso não se mede em comparação aos outros."`,
        explicacao: "Focar no seu tempo e nas suas etapas faz com que cada vitória seja mais autêntica e satisfatória."
      },
      {
        id: 310,
        frase: `"A felicidade repousa em encontrar encanto no que se tem, enquanto se constrói o que se deseja."`,
        explicacao: "Viver o presente com gratidão e simultaneamente traçar planos futuros é a chave para uma vida equilibrada."
      },
      {
        id: 311,
        frase: `"Seus sonhos são bússolas internas; se você ignorá-los, pode se perder em caminhos sem significado."`,
        explicacao: "A intuição e a paixão direcionam escolhas com mais clareza do que simplesmente buscar aprovação ou padrões externos."
      },
      {
        id: 312,
        frase: `"Ninguém precisa ser perfeito para espalhar luz onde quer que vá."`,
        explicacao: "A imperfeição humana não impede gestos de bondade, inspiração e acolhimento; pelo contrário, a torna mais empática."
      },
      {
        id: 313,
        frase: `"Algumas estradas ficam mais claras quando você abandona a necessidade de um caminho totalmente iluminado."`,
        explicacao: "Confiar no passo a passo, mesmo sem ver o percurso inteiro, é um exercício de fé na própria competência."
      },
      {
        id: 314,
        frase: `"Vá devagar se for preciso, mas não pare de avançar."`,
        explicacao: "O ritmo pode variar, mas manter o movimento contínuo garante que você chegue cada vez mais perto do objetivo."
      },
      {
        id: 315,
        frase: `"Quando a mente está livre, até o menor dos espaços pode abrigar grandes ideias."`,
        explicacao: "Não é preciso muito para criar; basta estar aberto ao novo e sem amarras que limitem a imaginação."
      },
      {
        id: 316,
        frase: `"O melhor resultado da autoconfiança não é só o sucesso, mas a paz de saber que você fez o seu melhor."`,
        explicacao: "Quando você acredita em si mesmo e age, independentemente do resultado, fica a satisfação de ter se empenhado."
      },
      {
        id: 317,
        frase: `"Existe poder em reconhecer que você é um eterno aprendiz."`,
        explicacao: "A humildade para aprender com cada experiência e pessoa abre portas para uma evolução constante."
      },
      {
        id: 318,
        frase: `"A sabedoria não se mede pela idade, mas pela disposição de aprender com cada situação vivida."`,
        explicacao: "Pessoas de todas as idades podem se tornar sábias quando cultivam a curiosidade e a reflexão."
      },
      {
        id: 319,
        frase: `"Aquilo que você faz repetidamente molda quem você se torna."`,
        explicacao: "Os hábitos diários definem o rumo do seu desenvolvimento pessoal e o resultado das suas metas."
      },
      {
        id: 320,
        frase: `"Não deixe que o barulho do mundo sufoque a voz do seu coração."`,
        explicacao: "Focar nas próprias prioridades nem sempre agrada a todos, mas traz autenticidade para a sua vida."
      },
      {
        id: 321,
        frase: `"O verdadeiro triunfo vem quando nos transformamos em nossa melhor versão, não quando derrotamos os outros."`,
        explicacao: "Comparar-se é desperdiçar energia. Evoluir a si mesmo é o que gera conquistas duradouras."
      },
      {
        id: 322,
        frase: `"Cuidado ao dizer 'é impossível' — pode ser apenas algo que você ainda não sabe como realizar."`,
        explicacao: "Às vezes, o que falta não é possibilidade, mas sim conhecimento ou tentativa."
      },
      {
        id: 323,
        frase: `"Um dia sem aprender algo novo é um dia em que deixamos de evoluir."`,
        explicacao: "A busca constante por conhecimento mantém a mente ativa e abre caminhos para oportunidades inusitadas."
      },
      {
        id: 324,
        frase: `"A maior vitória não é nunca cair, mas ter força para se levantar quantas vezes forem necessárias."`,
        explicacao: "A persistência na superação das quedas é o que define o sucesso a longo prazo."
      },
      {
        id: 325,
        frase: `"Quem carrega gratidão no peito dificilmente anda de mãos dadas com a infelicidade."`,
        explicacao: "Agradecer pelas conquistas, mesmo que pequenas, faz florescer uma visão positiva da vida."
      },
      {
        id: 326,
        frase: `"Aproveite o tempo que você tem, pois ele nunca volta, mas pode deixar grandes legados."`,
        explicacao: "Viver com propósito a cada instante evita o arrependimento de ter deixado a vida passar sem significado."
      },
      {
        id: 327,
        frase: `"Seja grato pelas críticas, pois elas podem indicar onde está a chave para o seu próximo avanço."`,
        explicacao: "Muitas críticas trazem verdades que não queremos enxergar, mas que podem nos ajudar a progredir."
      },
      {
        id: 328,
        frase: `"Troque a reclamação pela ação e veja como as portas começam a se abrir."`,
        explicacao: "Focar na solução, em vez de lamentar o problema, é a atitude fundamental para gerar mudanças."
      },
      {
        id: 329,
        frase: `"Você não vai agradar a todos, mas precisa se agradar para ser genuinamente feliz."`,
        explicacao: "Fazer escolhas alinhadas com seus valores é mais importante do que buscar aprovação indiscriminada."
      },
      {
        id: 330,
        frase: `"É na simplicidade dos gestos que muitas vezes encontramos as grandes verdades da vida."`,
        explicacao: "Às vezes, o essencial se esconde em situações do cotidiano, esperando apenas o nosso olhar atento."
      },
      {
        id: 331,
        frase: `"Pensar grande não significa esquecer dos detalhes, mas integrá-los num objetivo maior."`,
        explicacao: "Sonhar alto e cuidar do passo a passo formam a combinação perfeita para realizar algo significativo."
      },
      {
        id: 332,
        frase: `"Desafiar-se é uma forma de respeito próprio: é acreditar que você pode ir além do óbvio."`,
        explicacao: "Cada barreira ultrapassada reforça a confiança e a noção de que nosso potencial é maior do que imaginamos."
      },
      {
        id: 333,
        frase: `"Nem toda mudança é fácil, mas toda mudança traz a oportunidade de ser melhor do que antes."`,
        explicacao: "Aceitar a transformação requer desapego, mas costuma recompensar com crescimento e descobertas."
      },
      {
        id: 334,
        frase: `"Quem se ama de verdade sabe enxergar os próprios defeitos sem se punir por eles."`,
        explicacao: "O amor-próprio não ignora falhas, mas as aborda com compreensão e vontade de evoluir."
      },
      {
        id: 335,
        frase: `"A cada dia, uma decisão: ficar preso onde está ou dar mais um passo adiante."`,
        explicacao: "Tudo na vida é escolha. Manter-se estagnado é mais uma delas, mas evoluir pode ser bem mais gratificante."
      },
      {
        id: 336,
        frase: `"Não há acaso que supere a força de quem trabalha com foco e propósito."`,
        explicacao: "O esforço direcionado e persistente geralmente supera a sorte ou coincidências favorecidas."
      },
      {
        id: 337,
        frase: `"Lições valiosas nem sempre vêm embrulhadas em presentes, mas sim em tempestades."`,
        explicacao: "Grandes aprendizados frequentemente surgem de situações difíceis, quando precisamos nos reinventar."
      },
      {
        id: 338,
        frase: `"Todos somos livros abertos, mas poucos se dispõem a ler com atenção."`,
        explicacao: "A empatia requer interesse genuíno pelo outro; é assim que se descobrem histórias inspiradoras."
      },
      {
        id: 339,
        frase: `"Quem sabe onde quer chegar não se intimida com pequenas falhas ao longo do percurso."`,
        explicacao: "Ter um objetivo maior em mente faz com que os erros pareçam degraus, não abismos."
      },
      {
        id: 340,
        frase: `"Tudo tem seu tempo, mas nada acontece se você não estiver disposto a agir."`,
        explicacao: "Esperar a hora certa sem nenhum movimento é desperdiçar oportunidades que podem surgir a qualquer instante."
      },
      {
        id: 341,
        frase: `"Um problema bem definido já está meio caminho resolvido."`,
        explicacao: "Claridade ao identificar a raiz de um obstáculo permite encontrar soluções de forma mais eficiente."
      },
      {
        id: 342,
        frase: `"Sorrir não resolve tudo, mas ajuda a lembrar que a esperança ainda está viva."`,
        explicacao: "Um gesto simples pode reacender a fé em dias melhores e espalhar leveza por onde passa."
      },
      {
        id: 343,
        frase: `"A vontade de vencer deve ser maior do que o medo de fracassar."`,
        explicacao: "O sucesso floresce onde a coragem de tentar supera o receio de errar."
      },
      {
        id: 344,
        frase: `"Ser feliz não é negar as dificuldades, mas escolher não se tornar refém delas."`,
        explicacao: "Reconhecer os problemas como parte da jornada permite encará-los de frente sem perder a alegria de viver."
      },
      {
        id: 345,
        frase: `"O ontem pode explicar muito, mas só o hoje tem o poder de construir o seu amanhã."`,
        explicacao: "O passado deve servir de aprendizado, mas as ações presentes é que moldam efetivamente o futuro."
      },
      {
        id: 346,
        frase: `"Permita-se aprender algo novo todos os dias, mesmo que seja sobre si mesmo."`,
        explicacao: "O autoconhecimento e a busca constante por saber mais mantém o cérebro ativo e a alma inspirada."
      },
      {
        id: 347,
        frase: `"Só é realmente impossível aquilo que você não tenta."`,
        explicacao: "Colocar em prática é a melhor forma de quebrar paradigmas e limites imaginários."
      },
      {
        id: 348,
        frase: `"Um dia você percebe que a sua maior riqueza sempre esteve dentro de você: seu valor e sua coragem."`,
        explicacao: "Coisas externas podem ser perdidas ou tiradas, mas o que você constrói internamente permanece."
      },
      {
        id: 349,
        frase: `"Aprecie os pequenos avanços. São eles que, somados, criam grandes revoluções na sua vida."`,
        explicacao: "Todo grande feito começa com etapas modestas que, juntas, transformam o cenário por completo."
      },
      {
        id: 350,
        frase: `"Você não precisa gritar suas vitórias; a verdadeira conquista fala por si só."`,
        explicacao: "Trabalhar em silêncio e deixar resultados aparecerem naturalmente é mais significativo do que buscar holofotes."
      },
      {
        id: 351,
        frase: `"Ser diferente é a sua vantagem, não a sua fraqueza."`,
        explicacao: "Características únicas são o que permitem a inovação e a originalidade no caminho pessoal e profissional."
      },
      {
        id: 352,
        frase: `"O sucesso de hoje é a soma do seu esforço de ontem e do seu foco de agora."`,
        explicacao: "Cada conquista recente é reflexo da dedicação anterior, e manter-se firme hoje garante conquistas futuras."
      },
      {
        id: 353,
        frase: `"Ao invés de temer o desconhecido, veja nele a oportunidade de expandir seus horizontes."`,
        explicacao: "Ter coragem para se aventurar além do familiar pode revelar potencialidades adormecidas e novas paixões."
      },
      {
        id: 354,
        frase: `"A maior validação vem de dentro; nenhum aplauso supera a voz que diz 'eu posso'."`,
        explicacao: "Ser o seu próprio incentivador fortalece a base emocional, independente do reconhecimento externo."
      },
      {
        id: 355,
        frase: `"Antes de culpar o mundo, revise se não há ajustes internos que podem mudar sua realidade."`,
        explicacao: "Muitas vezes, as transformações começam na mente. Mudando a si mesmo, podemos enxergar soluções que antes não apareciam."
      },
      {
        id: 356,
        frase: `"Reclamar é fácil, mas solucionar exige coragem e prática."`,
        explicacao: "Sair do discurso e colocar a mão na massa é o que separa quem sonha de quem realiza."
      },
      {
        id: 357,
        frase: `"A vida anda para a frente, e o seu olhar também deveria seguir na mesma direção."`,
        explicacao: "Seguir em frente envolve desapegar do que passou, aprendendo a focar nos próximos passos."
      },
      {
        id: 358,
        frase: `"Escolha ser a pessoa que você gostaria de ter por perto."`,
        explicacao: "Praticar a empatia e a bondade cria uma atmosfera de respeito e afeição que beneficia a todos."
      },
      {
        id: 359,
        frase: `"Enquanto alguns lamentam o outono, outros enxergam a beleza das folhas que caem."`,
        explicacao: "A perspectiva determina se você vê os ciclos de mudança como perdas ou oportunidades para renascer."
      },
      {
        id: 360,
        frase: `"Seus atos de hoje são o prelúdio das lembranças que você carregará para o futuro."`,
        explicacao: "Viver de forma coerente com seus valores garante memórias dignas de serem revividas."
      },
      {
        id: 361,
        frase: `"Duvidar de si mesmo é natural, mas deixar essa dúvida vencer é opcional."`,
        explicacao: "A autoconfiança se constrói enfrentando as incertezas, não se rendendo a elas."
      },
      {
        id: 362,
        frase: `"A superação mora na coragem de dizer 'hoje é o dia de mudar'."`,
        explicacao: "Muitas vezes, basta decidir o momento de dar o primeiro passo para que a transformação comece."
      },
      {
        id: 363,
        frase: `"Por trás de cada obstáculo, existe uma lição esperando ser aprendida."`,
        explicacao: "Dificuldades não são punições; são chances de adquirir experiência e amadurecer."
      },
      {
        id: 364,
        frase: `"Persistência é o idioma que o sucesso entende."`,
        explicacao: "Não é questão de falar mais alto, mas de continuar tentando até que o resultado apareça."
      },
      {
        id: 365,
        frase: `"Quando alguém desacreditar de você, lembre-se de que quem faz seu destino é você mesmo."`,
        explicacao: "Criticar é fácil, mas só você vive suas lutas e sabe do seu potencial para vencer cada uma delas."
      },
      {
        id: 366,
        frase: `"A história que você conta a si mesmo define o quão longe você pode chegar."`,
        explicacao: "Se suas palavras internas forem de encorajamento e positividade, você abrirá caminho para realizar grandes feitos."
      }                  
    ];

// ====== Seletores do DOM ======
const dailyQuoteEl = document.getElementById("dailyQuote");
const explanationEl = document.getElementById("explanation");
const motivationCard = document.getElementById("motivationCard");

// Botões
const downloadImageBtn = document.getElementById("downloadImageBtn");
const copyTextBtn = document.getElementById("copyTextBtn");

// ====== Embaralhar o array ======
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// ====== Exibir Frase do Dia ======
function showDailyMessage() {
  if (messages.length === 0) {
    return;
  }

  let storedDate = localStorage.getItem("motivationDate");
  let storedIndex = parseInt(localStorage.getItem("motivationIndex"), 10);
  let shuffled = JSON.parse(localStorage.getItem("shuffledMessages") || "[]");

  const today = getCurrentDay();
  if (!Array.isArray(shuffled) || shuffled.length !== messages.length) {
    shuffled = shuffle([...messages]);
    storedIndex = -1;
  }

  // Se É o mesmo dia, NÃO incrementa o índice novamente
  if (storedDate === today) {
    // Então só exibe a frase que já estava armazenada
    if (isNaN(storedIndex) || storedIndex < 0 || storedIndex >= shuffled.length) {
      // Corrigir se for inválido
      storedIndex = 0;
    }
  } else {
    // É dia novo, incrementa
    storedIndex++;
    if (storedIndex >= shuffled.length) {
      shuffled = shuffle([...messages]);
      storedIndex = 0;
    }
    localStorage.setItem("motivationDate", today);
    localStorage.setItem("shuffledMessages", JSON.stringify(shuffled));
    localStorage.setItem("motivationIndex", storedIndex);
  }

  if (isNaN(storedIndex) || storedIndex < 0 || storedIndex >= shuffled.length) {
    console.error("Índice inválido.");
    dailyQuoteEl.textContent = "Erro ao carregar a mensagem.";
    explanationEl.textContent = "";
    return;
  }

  const dailyMsg = shuffled[storedIndex];
  dailyQuoteEl.textContent = dailyMsg.frase;
  explanationEl.textContent = dailyMsg.explicacao;
}


// ====== getCurrentDay: Lógica das 06h ======
function getCurrentDay() {
  const now = new Date();
  if (now.getHours() < 6) {
    now.setDate(now.getDate() - 1);
  }
  return now.toDateString();
}

// ====== Compartilhar / Salvar como Imagem ======
async function shareCard() {
  if (!messages || messages.length === 0) {
    console.warn("Nenhuma mensagem disponível para compartilhar.");
    return;
  }
  try {
    const canvas = await html2canvas(motivationCard, {
      useCORS: true,
      scale: 2,
      logging: false,
      allowTaint: true,
    });
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `motivacao_${formatDate(new Date())}.png`;
    link.href = dataURL;
    link.click();
  } catch (error) {
    console.error("Erro ao baixar a imagem:", error);
  }
}

// ====== Copiar Texto ======
function copyTextToClipboard() {
  const quote = dailyQuoteEl.textContent;
  const explanation = explanationEl.textContent;
  const fullText = `${quote}\n\n${explanation}`;

  navigator.clipboard.writeText(fullText)
    .then(() => {
      console.log("Texto copiado com sucesso!");
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
      alert("Falha ao copiar o texto.");
    });
}

// ====== Formatar Data ======
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

// ====== scheduleNextUpdate ======
function scheduleNextUpdate() {
  const now = new Date();
  const next6AM = new Date();
  next6AM.setHours(6, 0, 0, 0);

  if (now >= next6AM) {
    next6AM.setDate(next6AM.getDate() + 1);
  }

  const timeout = next6AM - now;
  setTimeout(() => {
    showDailyMessage();
    scheduleNextUpdate();
  }, timeout);
}

// ====== registerServiceWorker ======
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js")
        .then(reg => {
          console.log("Service Worker registrado:", reg.scope);
        })
        .catch(err => {
          console.log("Falha ao registrar Service Worker:", err);
        });
    });
  }
}

// ====== Inicialização ======
document.addEventListener("DOMContentLoaded", () => {
  showDailyMessage();
  registerServiceWorker();
  downloadImageBtn.addEventListener("click", shareCard);
  copyTextBtn.addEventListener("click", copyTextToClipboard);
  scheduleNextUpdate();
});

