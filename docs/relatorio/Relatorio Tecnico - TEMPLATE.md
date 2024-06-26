# Informações do Projeto
`TÍTULO DO PROJETO`  

ARGOS

`CURSO` 

ENGENHARIA DE SOFTWARE

## Participantes
- Luiz Gustavo Fagundes Teixeira
- Emanoel Gonçalves Maia
- Othávio Rodrigues Nunes Santos
- Gabriel Assis
# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)

- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema
> As metrópoles frequentemente enfrentam desafios significativos em termos de segurança pública devido à alta densidade populacional, diversidade, desigualdade socioeconômica e complexidade dos problemas relacionados ao crime. Portanto, as prefeituras podem não ser capazes de atender a toda a demanda por si só. Atualmente, nos centros urbanos, o medo do crime, da violência, da ausência de policiamento e da falta de infraestrutura adequada é uma preocupação generalizada em muitas regiões. Dito isso, percebemos que, devido à enorme zona de ocupação populacional, muitas vezes os órgãos de garantia do bem-estar social não atendem a todas as demandas.
## Objetivos
### Objetivos Gerais
> Como obejtivo fundamental nossa proposta é comlementar o sistema de gerenciamento de quailidade da segurança e infraestrutura oferecida aos cidadãos.
 
### Obejativos Específicos
> Temos como obetivo auxiliar os orgãos governamentais no gerencias da qualidade de vida nas cidades.
> Trasmitir segurança para os cidadãos através do sistema de denuncias compartilhadas e mapeamento em função das ocorências.
> Contribuir com os agentes da lei no momento de investigação de ocorrências com padrão de ocorrências.
> Ampliar os olhares para além das zonas metropolitanas no quesito de invisibilidade reginal.
> Reduzir zonas esteriotipadas negativamente por indices atuais que as caracterizem da maneira correta. 
## Justificativa
>O projeto parte da visão de que existem espaços geográficos nas cidades que não necessariamente são invisíveis aos olhos dos órgãos competentes que mantêm sua integridade, mas sim zonas que possuem seus detalhes que as tornam extremamente mais agradáveis aos seus usuários caso as soluções feitas pelos mesmos sejam atendidas. 
>Buscando atender os pilares mais importantes da sociedade, questões como infraestrutura, segurança patrimonial e saúde pública serão os pontos a serem atacados para que nossa aplicação atinja a base da Segurança Pública. O ponto mais importante se destaca no momento em que percebe-se a necessidade da implementação de uma maneira onde os usuários possam realizar relatos muitas vezes em tempo real de situações cotidianas que podem apresentar baixo grau de gravidade consideradas de modo singular, no entanto, a percepção de um evento que está sendo relatado com frequência, na esfera da Segurança Pública, significa não só a necessidade de correção para o conforto daquela parcela social, como também pode ser usado para entender a complexidade de outros processos ditos problemáticos maiores, uma vez que os próprios cidadãos realizaram o relato e poderão detalhar a situação. 
>Além do viés investigativo, a implementação de tecnologia na área permitirá o compartilhamento de informações entre os usuários com o objetivo de informar sobre as situações atuais em sua zona regional como também em outras. Tais informações poderão ser sinônimos da qualidade de vida no dia a dia de cada cidadão.
## Público-Alvo

> O nosso público se baseia em todos os cidadãos que possuem um senso crítico em relação à sua região de residência ou à região em que mantêm tráfego no seu cotidiano. Buscamos atingir jovens e idosos no quesito de disponibilizar espaço a todos para que denunciem, possibilitando que cada um possa saber quais são os problemas mais enfrentados entre todos. Buscamos atender à parcela da sociedade que, além de residirem em zonas mais carentes das metrópoles, também buscamos atingir os indivíduos que recebem as demandas e as colocam em processo de resolução. A ideia é que nosso software atue também como intermediador entre as pessoas que denunciam e os indivíduos que atendem as solicitações. 
 
# Especificações do Projeto

> Nosso projeto busca inicialmente atender à demanda da população que busca um veículo no qual consiga realizar suas denúncias sobre situações que infringem a sua qualidade de vida atrelada à segurança pública. Para isso, o usuário de nossa plataforma contará com a possibilidade de realizar denúncias relacionadas à infraestrutura pública, segurança civil e riscos à saúde pública. Essas três vertentes são pontos delicados que hoje apresentam muitas fragilidades em todas as regiões. Nossas denúncias contarão com o aspecto da localização onde está a ocorrência para que, com isso, consigamos mapear cada região de acordo com a denúncia que mais ocorre. Com isso, buscamos quebrar estereótipos e de fato marcar aquela região em função das denúncias feitas pelos próprios usuários.

> Disponibilizaremos relatórios regionais em função das denúncias que foram feitas naquela região. Buscamos mostrar as mais recorrentes, porém sem excluir as demais. Com isso, poderemos passar um feedback para nossos usuários, como também contribuir como terceiros olhos para os órgãos que gerenciam os três pilares de denúncias que disponibilizaremos. Com isso, aumentamos a possibilidade de correção, como também mitigamos as chances de proliferação da denúncia/ocorrência.

> Será possível que nossos usuários façam o cadastro da região onde moram, assim como também poderão, no momento da denúncia, alterar a localização caso a ocorrência seja fora de sua localidade normal. Em caso de erro, também será possível fazer a exclusão da denúncia, assim como poderão realizar a denúncia de forma anônima, visando a segurança de nossos usuários. A visualização das regiões em função das ocorrências mais frequentes visa manter a integridade dos usuários/cidadãos, uma vez que a ocorrência daquela região pode oferecer riscos para outras, além de inovar a forma com que as solicitações chegam aos órgãos competentes.

## Personas e Mapas de Empatia

> Inicialmente, identificamos os agentes da lei como os primeiros representantes deste bloco social. Nossa aplicação contribuirá significativamente para essas pessoas, uma vez que nossas denúncias serão divididas por regiões, com a possibilidade de detalhamento. Assim, agentes da lei, como Policiais Militares do Estado, poderão conferir as regiões mais afetadas pelo que buscam e, com isso, economizar tempo de busca e aumentar a eficiência das patrulhas diárias. Quanto à parcela de moradores das regiões, identificamos estas pessoas no momento em que percebemos o sentimento de invisibilidade existente entre eles no quesito de atendimento de seus pedidos de melhoria da região onde residem. Ao usarem nosso programa poderão relatar acontecimentos, fatos e ocorrências que sintam necessidade e que irão contribuir para a melhoria de sua qualidade de vida. Com isso, incentivaremos a vontade de expressarem suas opiniões e, adicionalmente, registrarem sua indignação em relação a alguma fragilidade que se encaixe no escopo da denúncia. O elemento chave é que a denúncia será feita por um único usuário e o resultado deste fator é que teremos o maior detalhamento da ocorrência e também poderemos medir sua frequência. Portanto, será visualizado pelos órgãos superiores que é necessário intervir para atender a demanda dos moradores.

> **Exemplo de Persona**
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/4e6dfd4f-b7c2-4ec2-babc-247bcae4978d)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/50b59827-e1ec-4282-9904-6c17f8462bd0)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/c9678a61-8a0e-4584-91d2-fce26b050e63)






## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ...  |PARA ... /VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Morador da zona leste de BH | gostaria de uma forma de enviar uma foto de um assalto que flagrei hoje| que todos poçam ver como esta rua esta ficando perigosa|
|Policial                    | preciso de uma forma de localizar as novas zonas de criminalidade      | conseguir posicionar melhor minhas viaturas e ser mais eficientes nas patrulhas diárias |
|Motorista de aplicativo| poder vizualizar previamente se o destino do meu passageiro é seguro |conseguir buscar meios alternativos de chegar ao endereço e também ter masi cautela |
|Mãe| de algum modo informar sobre o quanto as ruas perto da escola do meu filho são movimentadas na saída dos "meininos" | para assim colocarem um guarda para regular o trasito |


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Descrição |
|------|-----------------------------------------|----|----|
|RF-001| Tela de login | ALTA |Permitir que nossos uduários façam uso personalizado da nossa plataforma.  |
|RF-002| Cadastro de Usuário | ALTA |Fazer cadastro do usuário que não tem login|
|RF-003| Cadastro da denúncia| ALTA |Aba em que o usuário poderá colocar as informações de sua denúncia e fazer a postagem|
|RF-004| Ligue Já| ALTA |Usuário terá acesso a telefones úteis em situação de emergência  |
|RF-005| Perfil do Usuário | ALTA |Mostrará o perfil do usuário jutamente com suas postagens já feitas.|
|RF-006| Gráfico da Região| MÉDIA | Mostrará um gráfico informando o tipo da denúncia e a frequência com que essa denúncia ocorre naquela região|
|RF-007| Comentários na postagem | MÉDIA | Será possível a interação entre os usuários aravés de comentários na postagem da denúncia|


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve manter os dados dos usuário em segurança |  BAIXA |
|RNF-003| O software contemplara todos os navegadores |  MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não pode contamplar áreas que fogem da Segurança Pública, infraestrutura civil e riscos a saúde|



# Projeto de Interface

## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/c1620a05-c0ee-40ee-b66c-bd68a27dc8b4)





## Wireframes
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/e7644276-e683-46cf-8216-beb198994319)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/ead204b1-923b-41fe-a748-6a23a053a471)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/da3915f9-b014-4a0a-a470-50615c24c475)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/76c37409-1b41-4dee-970c-0f7ad061b113)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/28bee82c-d272-44bd-8f6f-00555b73f9b0)




# Metodologia
> Nossa equipe conta com reuniões todos os sábados marcadas às 10:00 AM para verificarmos as demandas e definirmos tarefas a serem cumpridas até a próxima reuniam, sendo que nas aulas em sala, já apresentamos um protótipo do que foi demandado no sábado para que a proxíma reunião seja somente de ajustes e novas demandas. 
> Utilizamos como inicio do desenvolvimento o processo de Desing Thinking para buscarmos informações, descobrirmos nosso público alvo e montar nossa proposta baseada em software.
> Nossas reuniões são feitas através da plataforma do Discord e fazemos o uso do Git Hub para controlarmos as versões do nosso código fonte.
  


## Divisão de Papéis

|Integrante| Sprint 2  | Sprint 3|
|--|-------------------------------------------------------|-|
|Luiz | Cadastro de Denúncia | Busca Denúncia e Tela Home| 
|Othavio| Cadastro de User | Gráficos de Denúncias |
|Gabriel | Tela de Perfil | Comentarios de Denúncia | 
|Emanuel| Tela de Login | Mapa de Denúncia |



## Ferramentas



| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com/app/board/uXjVNiWnpFo=/ ](https://miro.com/app/board/uXjVNiWnpFo=/)| 
|Repositório de código | GitHub | [https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica.git ](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica.git)| 
|Hospedagem do site | Heroku |  [https://pages.github.com/](https://pages.github.com/) | 
|Protótipo Interativo | Figma | [https://figma.com/file/khROXXMgWYX9XuuoefHuff/Projeto-Facul?type=design&node-id=0%3A1&mode=design&t=ABGQSVNxlnvK9z10-1](https://www.figma.com/file/khROXXMgWYX9XuuoefHuff/Projeto-Facul?type=design&node-id=0%3A1&mode=design&t=ABGQSVNxlnvK9z10-1) | 




## Controle de Versão

> Todo controle de Versão esta sendo feito através do Git Hub




# Projeto da Solução

> Partimos da premissa da criminalidade nas regiões metroplitanas e as ações arcaicas que eram necessárias para realizar uma denúncia, como por exemplo se deslocar ate uma delegacia ou então ligar por rede telefonica. Pensando nisso, em entendimento do porder das redes sociais, implementamos uma aplicação web que permite que o usuário no momento da ocoreência ou então no flagrante dela resgistre dados sobre o ocorrido. A amanipulação destes dados em nossa aplicação gerará o conhecimento das ocorrências daquela região e também a índole das mesmas, a aplicação destes dados com nossas ferramentas trará como retorno os índices de frenquência daquele tipo de denúncia em função da região em que ocorreu, será permitida também a interação entre os usuários para que debatam sobre a denúncia e seus detalhes. Somado a isso, teremos também a possíbilidade de mapeamento das denúncias onde a medida que os usuários fazem suas denúncias um mapa é preenchido assim mostrando as áreas geográficas com maior número de ocorrências, com isso buscamos que essa ferramente seja usada para miticar as ocorrências e também gerar base de dados para a atuação de órgãos responsáveis pela esfera em que a denúncia se encaixa.

## Tecnologias Utilizadas
>Neste trabalho utilizamos de várias tecnologias e ferramentas para criar uma aplicação completa e funcional. Primeiramente, utillizamos HTML para estruturar o conteúdo do site, garantindo que todos os elementos necessários estivessem presentes. Com CSS, estilizamos a página, aplicando design e layout que proporcionam uma boa experiência visual aos usuários.

>Para adicionar interatividade e funcionalidades dinâmicas ao site, utilizamos JavaScript. Com essa linguagem, conseguimos manipular o DOM, responder a eventos de usuário e implementar lógica complexa no front-end. Além disso, usamos o localStorage para armazenar dados localmente no navegador do usuário, permitindo que informações persistam entre sessões, como preferências de usuário ou estado de formulários.

>Para desenvolver o projeto, utilizamos o Visual Studio Code, um editor de código robusto e com diversas extensões que facilitaram trabalho, como auto-complete, debugging e integração com Git. Em relação ao Git Hub usamos esta ferramenta para o versionamento de código, criando um repositório no GitHub. Dessa forma, consegui manter um histórico das mudanças, colaborar com outros desenvolvedores do nosso time e gerenciar diferentes versões do projeto de forma eficiente.

>Por fim, para hospedar o site e torná-lo acessível ao público, adotamos o GitHub Pages. Essa funcionalidade do GitHub permite que eu publique diretamente do repositório, facilitando o processo de deploy e garantindo que as atualizações sejam refletidas rapidamente no site publicado.


## Arquitetura da solução

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/b6421566-245a-4042-9997-d016393584b0)


# Avaliação da Aplicação
>Nesta aplicação, um cenário ideal para testes seria a implementação em um condomínio de grande porte. Com essa perspectiva, temos os seguintes elementos: uma sociedade baseada em cidadania, estruturas civis, interações humanas e políticas internas. Com esses elementos, seria possível simular uma sociedade integrada a nível federal, permitindo testar a funcionalidade e eficiência da ferramenta.
>No futuro, após um período determinado de uso, seria interessante disponibilizar os dados para órgãos como a Polícia Militar e a Defesa Civil. O objetivo seria analisar e formular opiniões sobre a utilidade da ferramenta para a manutenção e mitigação dos casos apresentados nas denúncias. Dessa forma, teríamos dados concretos para análise e poderíamos realizar as alterações necessárias na aplicação, visando disponibilizá-la para um teste mais elaborado ou até mesmo aplicá-la publicamente.

![Adicionar nome do projeto](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/707ca9c8-98a3-4012-a8d0-8ef87e3c973a)


## Plano de Testes

> 1° caso de teste:Realização da Denúncia
> Descrição: Usuário realizar denúncias e as mesmas apareceram na página home.
> 
> 2° caso de teste:Detalhes da Denúncia
> Descrição:Na página home verificar se os detalhes das denúncias aparecem corretamente.
> 
> 3° caso de teste:Capacidade
> Descrição: Verificar como a página de home de comporta com a inserção de quantidade anormal de denúncias por tempo.


## Registros de Testes

>1° caso de teste: Verificamos que mesmo com algum campo da denúncia faltando preenchimento a mesma ainda é registrada. No entanto vale ressaltar que nem sempre em uma situação de desconforto não se sabe dados como endereço exato do local de ocorrÊncia da denúncia, no entanto não descarta a necessidade de reporte. Verificaremos a opção de acesso ao local exato onde o dispositivo que realiza a denúncia se encontra.

>2° caso de teste: Tivemos bons resultados, todos os detalhes são exibidos com clareza e corretamente. Unico ponto a atentar é o fato de quando abribos uma aba de descrição, todas as mesmas abas abrem juntas. Entraremos com o estudo da estrutura usada para realizar a correção. 

>3° caso de teste: Observamos que mesmo com a limitação de 5MB fornecidade pelo local storage o grande número de denúncias não afetou nenhum tipo de característica do site.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> TOTVS. Saiba como transformar sua empresa em um negócio ágil! Disponível em: https://www.totvs.com/blog/negocios/metodologia-agil/. Acesso em: 11 jun. 2024.
> SCRUM.ORG. The Art of Product Backlog Refinement. Disponível em: https://www.scrum.org/resources/blog/art-product-backlog-refinement. Acesso em: 25 març. 2024.
> SCRUM.ORG. The Scrum Process Explained. Disponível em: https://www.scrum.org/resources/blog/scrum-process-explained. Acesso em: 01 jun. 2024.
> HIGHSMITH, Jim. Agile Project Management: Creating Innovative Products. 2. ed. Boston: Addison-Wesley, 2009.
> SOMMERVILLE, Ian. Engenharia de Software. 10. ed. São Paulo: Pearson, 2011.
