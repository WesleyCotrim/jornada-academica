
"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const projetos = [
  {
    numero: "01",
    nome: "Trabalho Claudio",
    categoria: "Engenharia de Software",
    descricao:
      "Projeto acadêmico voltado aos conceitos de Engenharia de Software, com foco na modelagem e documentação de sistemas utilizando diagramas UML.",
    tecnologias: ["Engenharia de Software", "UML"],
    link: "https://github.com/WesleyCotrim/trabalho-claudio",
    imagem:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    numero: "02",
    nome: "Cine Nova",
    categoria: "Padrões de Projeto",
    descricao:
      "Projeto experimental desenvolvido para identificar e implementar os cinco padrões de projeto criacionais, explorando suas aplicações na organização e criação de objetos.",
    tecnologias: ["TypeScript", "NestJS", "Design Patterns"],
    link: "https://github.com/WesleyCotrim/cine-nova",
    imagem:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200",
  },
  {
    numero: "03",
    nome: "Confere",
    categoria: "Desenvolvimento Web",
    descricao:
      "Aplicação web desenvolvida para auxiliar no gerenciamento de conferências e produtores, reunindo funcionalidades para organizar informações e facilitar a administração.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://github.com/WesleyCotrim/confere-",
    imagem:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
  },
  {
    numero: "04",
    nome: "Trabalho de Padrões de Projeto",
    categoria: "Design Patterns",
    descricao:
      "Implementação dos cinco padrões de projeto criacionais em um contexto de sistema de streaming, aplicando conceitos de reutilização, organização e flexibilidade do código.",
    tecnologias: ["TypeScript", "Node.js", "Design Patterns"],
    link: "https://github.com/WesleyCotrim/trabalho-padroes-projeto",
    imagem:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  },
];

function formatarTempo(valor: number) {
  return String(valor).padStart(2, "0");
}

export default function Home() {
  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const dataFinal = new Date(
      process.env.NEXT_PUBLIC_SEMESTER_END ||
        "2026-12-18T23:59:59-03:00"
    ).getTime();

    function atualizarContador() {
      const agora = new Date().getTime();
      const diferenca = Math.max(0, dataFinal - agora);

      setTempo({
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (diferenca / (1000 * 60 * 60)) % 24
        ),
        minutos: Math.floor((diferenca / (1000 * 60)) % 60),
        segundos: Math.floor((diferenca / 1000) % 60),
      });
    }

    atualizarContador();

    const intervalo = setInterval(atualizarContador, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-simbolo">W.</span>
          <span>PORTFÓLIO</span>
        </a>

        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre mim</a>
        </div>

        <a
          href="https://github.com/WesleyCotrim"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-conteudo">
          <div className="etiqueta">
            <span className="ponto"></span>
            PORTFÓLIO ACADÊMICO
          </div>

          <h1>
            Transformando
            <br />
            ideias em <span>projetos.</span>
          </h1>

          <p className="hero-descricao">
            Uma jornada de aprendizado, desenvolvimento e
            descobertas através da tecnologia. Aqui registro
            minha evolução acadêmica e os projetos que fazem
            parte dessa trajetória.
          </p>

          <div className="hero-botoes">
            <a href="#projetos" className="botao-principal">
              Explorar projetos <ArrowDown size={18} />
            </a>

            <a
              href="https://github.com/WesleyCotrim"
              target="_blank"
              rel="noopener noreferrer"
              className="botao-secundario"
            >
              Meu GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-decoracao">
          <div className="decoracao-card">
            <Code2 size={38} strokeWidth={1.4} />
            <span>CODIFICANDO O FUTURO</span>
            <strong>const journey = "evolution";</strong>
          </div>
          <div className="decoracao-circulo circulo-um"></div>
          <div className="decoracao-circulo circulo-dois"></div>
        </div>

        <a href="#contador" className="hero-scroll">
          ROLE PARA EXPLORAR <ArrowDown size={14} />
        </a>
      </section>

      <section className="contador-section" id="contador">
        <div className="contador-texto">
          <div className="etiqueta">
            <Sparkles size={14} />
            CONTAGEM REGRESSIVA
          </div>

          <h2>
            O semestre está
            <br />
            chegando ao fim.
          </h2>

          <p>
            Cada dia é uma nova oportunidade de aprender,
            desenvolver e evoluir.
          </p>
        </div>

        <div className="contador">
          {[
            { valor: tempo.dias, legenda: "DIAS" },
            { valor: tempo.horas, legenda: "HORAS" },
            { valor: tempo.minutos, legenda: "MINUTOS" },
            { valor: tempo.segundos, legenda: "SEGUNDOS" },
          ].map((item) => (
            <div className="contador-item" key={item.legenda}>
              <strong>{formatarTempo(item.valor)}</strong>
              <span>{item.legenda}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projetos-section" id="projetos">
        <div className="secao-introducao">
          <div>
            <div className="etiqueta">
              <GraduationCap size={15} />
              MINHA TRAJETÓRIA
            </div>

            <h2>
              Projetos que contam
              <br />
              <span>minha evolução.</span>
            </h2>
          </div>

          <p>
            Uma coleção de trabalhos desenvolvidos durante
            minha formação acadêmica, representando desafios,
            experiências e conhecimentos adquiridos.
          </p>
        </div>

        <div className="semestre-cabecalho">
          <div className="semestre-numero">04</div>

          <div>
            <span>FORMAÇÃO ACADÊMICA</span>
            <h3>4º Semestre</h3>
            <p>Projetos desenvolvidos durante o quarto semestre.</p>
          </div>

          <span className="semestre-status">4 PROJETOS</span>
        </div>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <article className="projeto-card" key={projeto.numero}>
              <div className="projeto-imagem">
                <img
                  src={projeto.imagem}
                  alt={`Imagem ilustrativa do projeto ${projeto.nome}`}
                />
                <span className="projeto-numero">
                  {projeto.numero}
                </span>
                <span className="projeto-categoria">
                  {projeto.categoria}
                </span>
              </div>

              <div className="projeto-conteudo">
                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <div className="tecnologias">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>{tecnologia}</span>
                  ))}
                </div>

                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projeto-link"
                >
                  Ver projeto no GitHub
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sobre-section" id="sobre">
        <div className="sobre-icone">
          <GraduationCap size={36} />
        </div>

        <div className="sobre-conteudo">
          <div className="etiqueta">UM POUCO SOBRE MIM</div>

          <h2>
            Aprender, construir
            <br />
            e <span>evoluir.</span>
          </h2>

          <p>
            Este portfólio representa parte da minha jornada
            acadêmica na área de tecnologia. Cada projeto é uma
            oportunidade de colocar conhecimentos em prática,
            experimentar novas soluções e desenvolver minhas
            habilidades como profissional.
          </p>

          <a
            href="https://github.com/WesleyCotrim"
            target="_blank"
            rel="noopener noreferrer"
            className="botao-principal"
          >
            Conheça meu GitHub <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#" className="logo">
          <span className="logo-simbolo">W.</span>
          <span>PORTFÓLIO</span>
        </a>

        <p>Desenvolvido com dedicação e muito aprendizado.</p>

        <a
          href="https://github.com/WesleyCotrim"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </footer>
    </main>
  );
}
