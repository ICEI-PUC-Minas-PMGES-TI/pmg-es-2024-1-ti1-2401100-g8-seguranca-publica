# Informações do Projeto
`TÍTULO DO PROJETO`  

ARGOS

`CURSO` 

ENGENHARIA DE SOFTWARE

## Participantes
- Luiz Gustavo Fagundes Teixeira
- Emanoel Gonçalves Maia
- Heleno Vasconcelos Rodrigues
- Otávio Rodrigues Nunes Santos
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
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
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





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ...  |PARA ... /VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Morador da zona leste de BH | gostaria de uma forma de enviar uma foto de um assalto que flagrei hoje| que todos poçam ver como esta rua esta ficando perigosa|
|Policial                    | preciso de uma forma de localizar as novas zonas de criminalidade      | conseguir posicionar melhor minhas viaturas e ser mais eficientes nas patrulhas diárias |
|Motorista de aplicativo| poder vizualizar previamente se o destino do meu passageiro é seguro |conseguir buscar meios alternativos de chegar ao endereço e também ter masi cautela |
|Mãe| de algum modo informar sobre o quanto as ruas perto da escola do meu filho são movimentadas na saída dos "meininos" | para assim colocarem um guarda para regular o trasito |
|Administrador| Alterar permissões| Permitir que possam administrar contas |
|Administrador| Alterar permissões| Permitir que possam administrar contas |
|Administrador| Alterar permissões| Permitir que possam administrar contas |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Descrição |
|------|-----------------------------------------|----|----|
|RF-001| Tela de login | ALTA |Permitir que nossos uduários façam uso personalizado da nossa plataforma.  |
|RF-002| Cadastro de Usuário | ALTA |Fazer cadastro do usuário que não tem login|
|RF-003| Cadastro da denúncia| ALTA |Aba em que o usuário poderá colocar as informações de sua denúncia e fazer a postagem|
|RF-004| Aba de informações do projeto/sobre nós| ALTA |Região de informações sobre o projeto, origem do nome, quem somos... |
|RF-005| Perfil do Usuário | ALTA |Mostrará o perfil do usuário jutamente com suas postagens já feitas.|
|RF-004| Gráficos de cada região| ALTA |Mostrará um relatório das Regioes Cadastradas (CARDEAIS E COLATERAIS DA BÚSSOLA ) em função das denúnicias feitas em cada uma delas |
|RF-006| Editar denuncia | MÉDIA |Uma vez que ele fez a denúncia podera editar os dados da mesma caso esteja errada|
|RF-005| Denuncia anônima | MÉDIA |Devido o carater da denúncia, nosso usuário poderá fazer uma denúnicia anónima visando manter sua segurança|
|RF-008| Excluir denúnica | MÉDIA |Será possível que exclua uma denúncia que antes foi feita.|
|RF-009| Botões de verificação da denuncia| MÉDIA |Estes botões ficaram logo abaixo de cada publicação de denuncia e através deles saberemos pela interação dos outros usuários sobre a veracidade da publicação da denúncia.  |
|RF-009| Busca Região | MÉDIA |Usuário poderá escolher uma região para obter informações da mesma   |
|RF-009| Gráfico da Região| MÉDIA | Mostrará um gráfico informando o tipo da denúncia e a frequência com que essa denúncia ocorre naquela região|


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

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/e00937e0-bc52-47b7-9ab3-44baa9c1539d)


## Wireframes

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/e7851dda-00bc-4e07-a54a-103a1f317585)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/53666e22-d994-467c-aa2f-530dd26ebc77)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/12dfab8e-fa0e-4584-b336-9920f1504681)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/311ece2a-f1ed-49e1-b38e-b47d527d38eb)
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica/assets/154926815/a82d0e19-df27-4197-882b-dbbc2591199a)

# Metodologia
> Nossa equipe conta com reuniões todos os sábados marcadas às 10:00 AM para verificarmos as demandas e definirmos tarefas a serem cumpridas até a próxima reuniam, sendo que nas aulas em sala, já apresentamos um protótipo do que foi demandado no sábado para que a proxíma reunião seja somente de ajustes e novas demandas. 
> Utilizamos como inicio do desenvolvimento o processo de Desing Thinking para buscarmos informações, descobrirmos nosso público alvo e montar nossa proposta baseada em software.
> Nossas reuniões são feitas através da plataforma do Discord e fazemos o uso do Git Hub para controlarmos as versões do nosso código fonte. 

## Divisão de Papéis

|Integrante| Sprint 2  | Sprint 3|
|--|-------------------------------------------------------|-|
|Luiz | Tela de login | Gráficos e Busca Região| 
|Othavio| Cadastro de User | Denuncia Anônima | 
|Eleno| Sobre nós | Excluir denúnica | 
|Gabriel | Cadastro de Denuncia | Editar Denúncia | 
|Emanuel| Aba de Perfil | Botão de Verificação da Denúncia | 



## Ferramentas



| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com/XXXXXXX ](https://miro.com/app/board/uXjVNiWnpFo=/)| 
|Repositório de código | GitHub | [https://github.com/XXXXXXX ](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g8-seguranca-publica.git)| 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | Figma | [https://figma.com/XXXXXXX](https://www.figma.com/file/khROXXMgWYX9XuuoefHuff/Projeto-Facul?type=design&node-id=0%3A1&mode=design&t=ABGQSVNxlnvK9z10-1) | 


> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

> Todo controle de Versão esta sendo feito através do Git Hub

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
