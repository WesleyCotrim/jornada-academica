
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
    semestre: "01",
    periodo: "1º semestre",
    titulo: "Primeiros passos na programação",
    categoria: "Lógica e algoritmos",
    descricao:
      "Meu início na programação: algoritmos, resolução de problemas e os primeiros programas.",
    tecnologias: ["Lógica", "Algoritmos"],
    imagem:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "02",
    periodo: "2º semestre",
    titulo: "Meu primeiro site",
    categoria: "Desenvolvimento web",
    descricao:
      "Uma página web criada para praticar estrutura, organização de conteúdo e estilos.",
    tecnologias: ["HTML", "CSS"],
    imagem:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "03",
    periodo: "3º semestre",
    titulo: "Aplicação interativa",
    categoria: "Programação",
    descricao:
      "Uma aplicação para praticar lógica, funções, eventos e interação com o usuário.",
    tecnologias: ["JavaScript", "Git"],
    imagem:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "04",
    periodo: "4º semestre",
    titulo: "Banco de dados",
    categoria: "Dados e sistemas",
    descricao:
      "Modelagem de dados e organização das informações de um sistema.",
    tecnologias: ["SQL", "Modelagem"],
    imagem:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "05",
    periodo: "5º semestre",
    titulo: "Projeto full stack",
    categoria: "Aplicação web",
    descricao:
      "Integração entre interface, regras de negócio e armazenamento de informações.",
    tecnologias: ["React", "API"],
    imagem:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "06",
    periodo: "6º semestre",
    titulo: "Experiência do usuário",
    categoria: "Design e tecnologia",
    descricao:
      "Planejamento de telas e componentes com foco em clareza e facilidade de uso.",
    tecnologias: ["UI/UX", "Prototipação"],
    imagem:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "07",
    periodo: "7º semestre",
    titulo: "Projeto integrador",
    categoria: "Trabalho em equipe",
    descricao:
      "Um projeto para reunir conhecimentos técnicos e resolver um problema real.",
    tecnologias: ["Equipe", "Desenvolvimento"],
    imagem:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    semestre: "08",
    periodo: "8º semestre",
    titulo: "Projeto de conclusão",
    categoria: "Conclusão de curso",
    descricao:
      "A etapa final da jornada: consolidar aprendizados e apresentar um projeto completo.",
    tecnologias: ["Projeto final", "Portfólio"],
    imagem:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
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
    const intervalo = window.setInterval(() => setAgora(Date.now()), 1000);
    return () => window.clearInterval(intervalo);
  }, []);

  const dataConfigurada =
    process.env.NEXT_PUBLIC_SEMESTER_END || "2026-12-18T23:59:59-03:00";
  const dataAlvo = new Date(dataConfigurada).getTime();
  const tempo = calcularTempo(dataAlvo, agora ?? Date.now());
  const terminou = agora !== null && agora >= dataAlvo;

  return (
    <main>
      <nav className="nav">
        <a className="marca" href="#">
          <span className="marca-icone">
            <GraduationCap size={21} />
          </span>
          <span>Minha jornada<span className="ponto">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#contagem">Contagem regressiva</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre mim</a>
        </div>
        <a className="nav-botao" href="#projetos">
          Explorar <ArrowUpRight size={16} />
        </a>
      </nav>

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
            Cada semestre é um novo capítulo. Aqui registro minha jornada
            acadêmica, os projetos que desenvolvi e tudo o que ainda quero
            conquistar.
          </p>
          <a className="botao-principal" href="#projetos">
            Conheça meus projetos <ArrowUpRight size={18} />
          </a>
          <a className="link-scroll" href="#contagem">
            <ArrowDown size={15} /> Continue explorando
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
            <div className="cartao-icone"><Sparkles size={18} /></div>
            <div>
              <strong>Em constante evolução</strong>
              <span>Um projeto de cada vez.</span>
            </div>
          </div>
          <div className="numero-decorativo">01 — 08</div>
        </div>
        <div className="hero-rodape">
          <span>PORTFÓLIO ACADÊMICO</span>
          <span>MINHA HISTÓRIA EM CONSTRUÇÃO © 2026</span>
        </div>
      </section>

      <section className="contagem secao" id="contagem">
        <div className="secao-cabecalho">
          <div>
            <span className="sobretitulo">O TEMPO ESTÁ PASSANDO</span>
            <h2>O próximo capítulo<br />está chegando<span className="ponto">.</span></h2>
          </div>
          <p className="cabecalho-descricao">
            Cada segundo é uma oportunidade para aprender algo novo e chegar
            mais perto dos meus objetivos.
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
              <span className="contador-rotulo">{item.rotulo}</span>
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

      <section className="projetos secao" id="projetos">
        <div className="secao-cabecalho">
          <div>
            <span className="sobretitulo">MINHA TRAJETÓRIA</span>
            <h2>Projetos que contam<br />minha história<span className="ponto">.</span></h2>
          </div>
          <p className="cabecalho-descricao">
            Ideias que saíram do papel, habilidades que evoluíram e desafios
            que me ensinaram algo novo a cada etapa.
          </p>
        </div>

        <div className="linha-tempo">
          {projetos.map((projeto, indice) => (
            <article className="projeto" key={projeto.semestre}>
              <div className="projeto-marcador">
                <span>{projeto.semestre}</span>
                {indice < projetos.length - 1 && <div className="linha" />}
              </div>
              <div className="projeto-card">
                <div className="projeto-imagem">
                  <img src={projeto.imagem} alt={projeto.titulo} loading="lazy" />
                  <span className="projeto-periodo">{projeto.periodo}</span>
                </div>
                <div className="projeto-info">
                  <span className="projeto-categoria">{projeto.categoria}</span>
                  <h3>{projeto.titulo}</h3>
                  <p>{projeto.descricao}</p>
                  <div className="tecnologias">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>{tecnologia}</span>
                    ))}
                  </div>
                </div>
                <div className="projeto-seta"><ArrowUpRight size={20} /></div>
              </div>
            </article>
          ))}
        </div>
        <p className="aviso-projetos">
          Os projetos apresentados são exemplos editáveis. Substitua-os pelos
          seus trabalhos reais ao personalizar o portfólio.
        </p>
      </section>

      <section className="sobre secao" id="sobre">
        <div className="sobre-icone"><Code2 size={28} /></div>
        <span className="sobretitulo">ALÉM DO CÓDIGO</span>
        <h2>O melhor projeto<br />é quem estou me tornando<span className="ponto">.</span></h2>
        <p>
          Este portfólio é um registro da minha evolução. Cada experiência,
          erro e descoberta faz parte da construção do profissional que quero
          ser.
        </p>
        <a className="botao-principal" href="#projetos">
          Voltar aos projetos <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <a className="marca" href="#">
          <span className="marca-icone"><GraduationCap size={21} /></span>
          <span>Minha jornada<span className="ponto">.</span></span>
        </a>
        <span>Feito com dedicação, um semestre de cada vez.</span>
        <a href="#">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
