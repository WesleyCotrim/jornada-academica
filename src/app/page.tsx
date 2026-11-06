
"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Sparkles,
  Github,
} from "lucide-react";

const projetos = [
  {
    semestre: "01",
    periodo: "4º semestre",
    titulo: "Trabalho Claudio",
    categoria: "Engenharia de Software e UML",
    descricao:
      "Projeto acadêmico voltado à análise, modelagem e documentação de sistemas, utilizando conceitos de Engenharia de Software e diagramas UML.",
    tecnologias: ["Engenharia de Software", "UML"],
    imagem:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/WesleyCotrim/trabalho-claudio",
  },
  {
    semestre: "02",
    periodo: "4º semestre",
    titulo: "Cine Nova",
    categoria: "Padrões Criacionais",
    descricao:
      "Projeto experimental desenvolvido para identificar cenários de aplicação e implementar os cinco padrões criacionais de projeto. Não tem como objetivo representar um sistema real de cinema.",
    tecnologias: ["TypeScript", "NestJS", "Design Patterns"],
    imagem:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/WesleyCotrim/cine-nova",
  },
  {
    semestre: "03",
    periodo: "4º semestre",
    titulo: "Confere",
    categoria: "Desenvolvimento Web",
    descricao:
      "Sistema web acadêmico para gerenciamento de conferências e produtores, trabalhando organização de informações e funcionalidades de uma aplicação web.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Supabase"],
    imagem:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/WesleyCotrim/confere-",
  },
  {
    semestre: "04",
    periodo: "4º semestre",
    titulo: "Trabalho de Padrões de Projeto",
    categoria: "Arquitetura de Software",
    descricao:
      "Implementação e demonstração de cinco padrões criacionais em um contexto de sistema de streaming, explorando soluções para criação de objetos e organização do código.",
    tecnologias: ["TypeScript", "Node.js", "Design Patterns"],
    imagem:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/WesleyCotrim/trabalho-padroes-projeto",
  },
];

function calcularTempo(dataAlvo: number, agora: number) {
  const diferenca = Math.max(0, dataAlvo - agora);

  const segundo = 1000;
  const minuto = segundo * 60;
  const hora = minuto * 60;
  const dia = hora * 24;

  return {
    dias: Math.floor(diferenca / dia),
    horas: Math.floor((diferenca % dia) / hora),
    minutos: Math.floor((diferenca % hora) / minuto),
    segundos: Math.floor((diferenca % minuto) / segundo),
  };
}

export default function Home() {
  const [agora, setAgora] = useState<number | null>(null);

  useEffect(() => {
    setAgora(Date.now());

    const intervalo = window.setInterval(() => {
      setAgora(Date.now());
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  const dataConfigurada =
    process.env.NEXT_PUBLIC_SEMESTER_END ||
    "2026-12-18T23:59:59-03:00";

  const dataAlvo = new Date(dataConfigurada).getTime();

  const tempo = calcularTempo(dataAlvo, agora ?? Date.now());

  const terminou = agora !== null && agora >= dataAlvo;

  return (
    <main>
      {/* NAVEGAÇÃO */}
      <nav className="nav">
        <a className="marca" href="#">
          <span className="marca-icone">
            <GraduationCap size={21} />
          </span>
          <span>
            Minha jornada<span className="ponto">.</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#contagem">Contagem regressiva</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre mim</a>
        </div>

        <a
          className="nav-botao"
          href="https://github.com/WesleyCotrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* APRESENTAÇÃO */}
      <section className="hero">
        <div className="hero-conteudo">
          <div className="etiqueta">
            <span className="status-ponto" />
            UM SEMESTRE DE CADA VEZ
          </div>

          <h1>
            Aprender.
            <br />
            Construir.
            <br />
            <span>Evoluir.</span>
          </h1>

          <p className="hero-descricao">
            Cada semestre é um novo capítulo. Aqui registro minha
            jornada acadêmica, os projetos que desenvolvi e tudo
            o que ainda quero conquistar.
          </p>

          <a className="botao-principal" href="#projetos">
            Conheça meus projetos <ArrowUpRight size={18} />
          </a>

          <a className="link-scroll" href="#contagem">
            <ArrowDown size={15} />
            Continue explorando
          </a>
        </div>

        <div className="hero-visual">
          <div className="foto-principal">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt="Mesa de trabalho com computador e ambiente de programação"
            />
          </div>

          <div className="cartao-flutuante">
            <div className="cartao-icone">
              <Sparkles size={18} />
            </div>

            <div>
              <strong>Em constante evolução</strong>
              <span>Um projeto de cada vez.</span>
            </div>
          </div>

          <div className="numero-decorativo">01 — 04</div>
        </div>

        <div className="hero-rodape">
          <span>PORTFÓLIO ACADÊMICO</span>
          <span>MINHA HISTÓRIA EM CONSTRUÇÃO © 2026</span>
        </div>
      </section>

      {/* CONTAGEM REGRESSIVA */}
      <section className="contagem secao" id="contagem">
        <div className="secao-cabecalho">
          <div>
            <span className="sobretitulo">
              O TEMPO ESTÁ PASSANDO
            </span>

            <h2>
              O próximo capítulo
              <br />
              está chegando<span className="ponto">.</span>
            </h2>
          </div>

          <p className="cabecalho-descricao">
            Cada segundo é uma oportunidade para aprender algo
            novo e chegar mais perto dos meus objetivos.
          </p>
        </div>

        <div className="contador">
          {[
            { valor: tempo.dias, rotulo: "DIAS" },
            { valor: tempo.horas, rotulo: "HORAS" },
            { valor: tempo.minutos, rotulo: "MINUTOS" },
            { valor: tempo.segundos, rotulo: "SEGUNDOS" },
          ].map((item) => (
            <div className="contador-item" key={item.rotulo}>
              <span className="contador-numero">
                {String(item.valor).padStart(2, "0")}
              </span>

              <span className="contador-rotulo">
                {item.rotulo}
              </span>
            </div>
          ))}
        </div>

        <div className="contador-rodape">
          <span className="contador-status">
            <span className="status-ponto" />

            {agora === null
              ? "Calculando..."
              : terminou
                ? "O semestre chegou ao fim!"
                : "Contagem regressiva em andamento"}
          </span>

          <span>
            Término previsto:{" "}
            {new Date(dataAlvo).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              timeZone: "America/Sao_Paulo",
            })}
          </span>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="projetos secao" id="projetos">
        <div className="secao-cabecalho">
          <div>
            <span className="sobretitulo">
              MINHA TRAJETÓRIA
            </span>

            <h2>
              Projetos que contam
              <br />
              minha história<span className="ponto">.</span>
            </h2>
          </div>

          <p className="cabecalho-descricao">
            Trabalhos desenvolvidos durante minha formação,
            desafios que enfrentei e conhecimentos que coloquei
            em prática.
          </p>
        </div>

        {/* IDENTIFICAÇÃO DO SEMESTRE */}
        <div className="semestre-cabecalho">
          <div className="semestre-numero">04</div>

          <div>
            <span className="sobretitulo">
              MINHA EVOLUÇÃO ACADÊMICA
            </span>
            <h3>4º Semestre</h3>
            <p>Quatro projetos desenvolvidos durante esta etapa.</p>
          </div>
        </div>

        {/* CARDS DOS PROJETOS */}
        <div className="linha-tempo">
          {projetos.map((projeto) => (
            <article className="projeto" key={projeto.semestre}>
              <div className="projeto-marcador">
                <span>{projeto.semestre}</span>
              </div>

              <div className="projeto-card">
                <div className="projeto-imagem">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    loading="lazy"
                  />

                  <span className="projeto-periodo">
                    {projeto.periodo}
                  </span>
                </div>

                <div className="projeto-info">
                  <span className="projeto-categoria">
                    {projeto.categoria}
                  </span>

                  <h3>{projeto.titulo}</h3>

                  <p>{projeto.descricao}</p>

                  <div className="tecnologias">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <a
                    className="projeto-link"
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} />
                    Ver projeto no GitHub
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="aviso-projetos">
          Projetos acadêmicos desenvolvidos durante o 4º semestre
          da minha formação.
        </p>

        <a
          className="botao-principal github-geral"
          href="https://github.com/WesleyCotrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos os repositórios <Github size={17} />
        </a>
      </section>

      {/* SOBRE */}
      <section className="sobre secao" id="sobre">
        <div className="sobre-icone">
          <Code2 size={28} />
        </div>

        <span className="sobretitulo">ALÉM DO CÓDIGO</span>

        <h2>
          O melhor projeto
          <br />
          é quem estou me tornando<span className="ponto">.</span>
        </h2>

        <p>
          Este portfólio é um registro da minha evolução.
          Cada experiência, erro e descoberta faz parte da
          construção do profissional que quero ser.
        </p>

        <a
          className="botao-principal"
          href="https://github.com/WesleyCotrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça meu GitHub <Github size={17} />
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <a className="marca" href="#">
          <span className="marca-icone">
            <GraduationCap size={21} />
          </span>

          <span>
            Minha jornada<span className="ponto">.</span>
          </span>
        </a>

        <span>
          Feito com dedicação, um semestre de cada vez.
        </span>

        <a href="#">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
