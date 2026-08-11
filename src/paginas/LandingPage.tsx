import { Compass, Crown, Video, Sparkles, Calendar, TrendingUp, Layers, Magnet, FileText, Bot, Smile, Infinity, Clapperboard, Lock, MessageSquare, Cpu, Unlock } from 'lucide-react';
import { motion } from 'motion/react';

const CHECKOUT = "https://sun.eduzz.com/40QRV7AP9B";

function trackCheckout() {
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'InitiateCheckout');
  }
}

export default function LandingPage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1>
            Você não precisa saber falar bem na câmera.<br />
            <span className="accent">Precisa saber o que falar.</span>
          </h1>
          <p className="sub">
            Descubra o método de 3 passos que transforma qualquer ideia em um roteiro fácil de gravar. Sem decorar, sem improvisar, sem parecer um robô.
          </p>
          <div className="hero-cta-wrap">
            <a href="#oferta" className="cta-btn">
              QUERO SABER O QUE FALAR
            </a>
          </div>
          <div className="hero-img">
            <img
              src="/imagens-da-landing-page/hero-antes-depois.webp"
              alt="Antes: travando na câmera. Depois: gravando com facilidade."
              width="1200" height="675"
              fetchPriority="high" decoding="async"
            />
            <div className="hero-img-caption">
              <span className="cap-antes">Antes</span>
              <span className="cap-depois">Depois</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. IDENTIFICAÇÃO ===== */}
      <section className="dor">
        <div className="container !max-w-5xl">
          <div className="dor-head">
            <span className="dor-kicker">Você se identifica com isso?</span>
            <h2>A câmera liga. <strong>Sua cabeça vai a zero.</strong></h2>
            <p className="dor-transition">E você fica pensando...</p>
          </div>
          <div className="dor-stage">
            <div className="dor-img">
              <img src="/imagens-da-landing-page/mulher-cansada.webp" alt="Frustração ao gravar" width="800" height="1000" loading="lazy" decoding="async" />
            </div>
            <div className="dor-thoughts">
              <div className="thought t1">Sem roteiro eu me perco. Com roteiro eu pareço um robô.</div>
              <div className="thought t2">Eu travo quando aperto o botão de gravar.</div>
              <div className="thought t3">Conversando eu sou desenrolada. Gravando eu viro outra pessoa.</div>
              <div className="thought t4">O ChatGPT escreve bonito, mas não escreve do meu jeito.</div>
              <div className="thought t5">Eu sei o que quero dizer, mas na câmera some tudo.</div>
            </div>
          </div>
          <div className="identifica-end">
            <p className="identifica-texto">Seu problema não é<br />simplesmente saber falar.</p>
            <p className="identifica-destaque">É saber o que falar.</p>
          </div>
        </div>
      </section>

      {/* ===== 3. CONTRADIÇÃO ===== */}
      <section className="contra">
        <div className="container">
          <h2 className="section-title !text-[20px]">
            Você não precisa escolher entre <em>ficar perdida e parecer um robô.</em>
          </h2>
          <p className="contra-sub">Existe um terceiro caminho.</p>
          <div className="contra-grid">
            <div className="contra-col contra-bad">
              <div className="contra-label">Sem roteiro</div>
              <ul className="contra-list">
                <li><span className="contra-x">✕</span>Você trava</li>
                <li><span className="contra-x">✕</span>Esquece tudo</li>
                <li><span className="contra-x">✕</span>Se perde no meio</li>
                <li><span className="contra-x">✕</span>Improvisa demais</li>
                <li><span className="contra-x">✕</span>Apaga o vídeo</li>
              </ul>
            </div>
            <div className="contra-col contra-mid">
              <div className="contra-label">Roteiro tradicional</div>
              <ul className="contra-list">
                <li><span className="contra-x">✕</span>Precisa decorar</li>
                <li><span className="contra-x">✕</span>Fica artificial</li>
                <li><span className="contra-x">✕</span>Parece que está lendo</li>
                <li><span className="contra-x">✕</span>Perde a naturalidade</li>
                <li><span className="contra-x">✕</span>Fica engessado</li>
              </ul>
            </div>
            <div className="contra-col contra-best">
              <div className="contra-label">Protocolo da Retenção Total</div>
              <ul className="contra-list">
                <li><span className="contra-ok">✓</span>Estrutura clara</li>
                <li><span className="contra-ok">✓</span>Sabe o que falar</li>
                <li><span className="contra-ok">✓</span>Fala naturalmente</li>
                <li><span className="contra-ok">✓</span>Sem decorar</li>
                <li><span className="contra-ok">✓</span>Grava com facilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. APRESENTAÇÃO DO PROTOCOLO ===== */}
      <section className="proto-intro">
        <div className="container">
          <div className="section-label label">O método</div>
          <h2 className="section-title">Conheça o <em>Protocolo da Retenção Total.</em></h2>
          <p className="proto-desc">Um método de 3 passos para transformar qualquer ideia em um roteiro fácil de gravar.</p>
          <div className="proto-nao-decora">
            <p>Não é para decorar.</p>
            <p>Não é para improvisar.</p>
            <p className="proto-sim">É para você saber exatamente<br />o que falar.</p>
          </div>
        </div>
      </section>

      {/* ===== 5. OS 3 PASSOS ===== */}
      <section className="passos-section">
        <div className="container">
          <div className="section-label label">Método de 3 passos</div>
          <h2 className="section-title">Como funciona</h2>
          <div className="passos-grid">
            <div className="passo-card">
              <div className="passo-num">01</div>
              <div className="passo-nome">GANCHO</div>
              <p>A abertura que faz a pessoa parar o scroll e continuar assistindo nos primeiros segundos.</p>
            </div>
            <div className="passo-seta">→</div>
            <div className="passo-card">
              <div className="passo-num">02</div>
              <div className="passo-nome">HISTÓRIA</div>
              <p>Transforme sua ideia em uma narrativa que conecta. A pessoa se vê no que você está falando.</p>
            </div>
            <div className="passo-seta">→</div>
            <div className="passo-card">
              <div className="passo-num">03</div>
              <div className="passo-nome">CHAMADA</div>
              <p>Direcione a pessoa para uma ação clara, sem forçar e sem perder a naturalidade.</p>
            </div>
          </div>
          <div className="passos-resultado">
            <span className="passos-resultado-label">Resultado:</span> Um roteiro que você consegue gravar. Sem decorar. Sem travar.
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={CHECKOUT} className="cta-btn" onClick={trackCheckout}>
              QUERO SABER O QUE FALAR
            </a>
          </div>
        </div>
      </section>

      {/* ===== 6. PROVA SOCIAL ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Resultado real</div>
          <h2 className="section-title !text-[18px]">
            O antes e depois do próprio <em>Gio Seed</em>
          </h2>
          <div className="proof-grid">
            <div className="proof-col">
              <img src="/imagens-da-landing-page/testemunho-antes-novo.jpeg" alt="Perfil antes" width="500" height="1087" loading="lazy" decoding="async" />
              <div className="tag tag-antes">Antes</div>
            </div>
            <div className="proof-col">
              <img src="/imagens-da-landing-page/testemunho-depois-novo.jpeg" alt="Perfil depois" width="500" height="1087" loading="lazy" decoding="async" />
              <div className="tag tag-depois">Depois</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. É PARA VOCÊ QUE ===== */}
      <section className="foryou">
        <div className="container">
          <h2 className="section-title !text-[23px]">O Protocolo é para você que:</h2>
          <div className="foryou-list">
            {[
              { icon: <Lock size={13} strokeWidth={2.5} />,        text: "Trava quando aperta o botão de gravar e não consegue terminar o vídeo." },
              { icon: <MessageSquare size={13} strokeWidth={2.5} />, text: "Não sabe o que falar e fica semanas sem postar nada." },
              { icon: <Clapperboard size={13} strokeWidth={2.5} />, text: "Conversando é desenrolada, mas na câmera vira outra pessoa." },
              { icon: <Cpu size={13} strokeWidth={2.5} />,         text: "Já tentou o ChatGPT mas o roteiro sai robótico e não parece seu." },
              { icon: <Unlock size={13} strokeWidth={2.5} />,      text: "Quer saber o que falar antes de apertar o botão. Sem improvisar. Sem decorar." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="foryou-item cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -4, borderColor: "#dfc382", boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" }}
              >
                <span className="dot">{item.icon}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. BENEFÍCIOS ===== */}
      <section>
        <div className="container">
          <h2 className="section-title">Com o Protocolo você vai:</h2>
          <div className="benef-grid">
            {[
              { icon: <Compass size={16} strokeWidth={2.5} />,    text: "Saber exatamente por onde começar cada vídeo. Nada de olhar pra câmera sem ter o que dizer." },
              { icon: <Video size={16} strokeWidth={2.5} />,      text: "Transformar qualquer ideia em uma estrutura de roteiro sem passar horas escrevendo." },
              { icon: <Sparkles size={16} strokeWidth={2.5} />,   text: "Gravar sem precisar decorar cada palavra e ainda assim soar completamente natural." },
              { icon: <Calendar size={16} strokeWidth={2.5} />,   text: "Parar de depender de inspiração e ter uma estrutura sempre que a câmera ligar." },
              { icon: <TrendingUp size={16} strokeWidth={2.5} />, text: "Parar de gravar dez vezes o mesmo vídeo e apagar tudo no final." },
              { icon: <Crown size={16} strokeWidth={2.5} />,      text: "Usar o método em qualquer ideia. Toda vez que precisar gravar, a estrutura está pronta." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="benef"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <span className="check">{item.icon}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. QUEM É O GIO ===== */}
      <section className="about">
        <div className="container">
          <div className="about-card">
            <img src="/imagens-da-landing-page/foto-giovanni.webp" alt="Gio Seed" className="about-photo" width="400" height="600" loading="lazy" decoding="async" />
            <div className="section-label label" style={{ textAlign: 'center' }}>Quem está por trás</div>
            <h3>O criador do Protocolo é o <em>Gio Seed</em></h3>
            <p>Giovanni Santos de Oliveira nasceu no interior do Amazonas, em Itacoatiara. Trabalhou desde os 12 anos, passou um ano fazendo freelance em supermercados de Jaraguá do Sul e aprendeu edição sozinho, no YouTube, gravando com o próprio celular.</p>
            <p>Por muito tempo ele postava vídeos que ninguém assistia. Vinte, trinta visualizações. Até descobrir que o problema nunca foi a câmera. <strong>Era a falta de roteiro.</strong> Quando começou a aplicar storytelling, um dos seus vídeos passou de <strong>400 mil visualizações</strong>.</p>
            <p>Hoje ele tem mais de <strong>30 mil seguidores</strong> (18 mil no Instagram e 12 mil no TikTok), mora em Balneário Camboriú e atende clientes com a sua produtora. O Protocolo da Retenção Total é exatamente o método que ele usou pra chegar até aqui.</p>
          </div>
        </div>
      </section>

      {/* ===== 10. O QUE VOCÊ RECEBE ===== */}
      <section>
        <div className="container">
          <h2 className="section-title !text-[24px]">O que você recebe no <em>Protocolo da Retenção Total</em></h2>
          <div className="deliverables">
            <div className="deliver-item">
              <div className="deliver-num"><Layers size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Método Protocolo da Retenção Total</h4>
                <p>A estrutura completa em 3 passos para transformar qualquer ideia em um roteiro que você consegue gravar, mesmo que você trave na frente da câmera.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num"><FileText size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Roteiro Modelo "Preenche e Grava" <span className="tag-bonus">Bônus</span></h4>
                <p>Um roteiro com lacunas para você preencher e gravar na hora. Sem travar, sem tela em branco.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num"><Magnet size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Banco de Ganchos por Objetivo <span className="tag-bonus">Bônus</span></h4>
                <p>Dezenas de aberturas organizadas por objetivo: engajamento, venda, autoridade. É só escolher e adaptar.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num"><Bot size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Prompt de IA: Assistente de Roteiro <span className="tag-bonus">Bônus</span></h4>
                <p>Um prompt treinado para escrever roteiros no seu tom e do seu jeito. A IA trabalha a favor da sua voz.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num"><Infinity size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Calendário de 30 Ideias de Conteúdo <span className="tag-bonus">Bônus</span></h4>
                <p>30 ideias prontas para um mês inteiro. Nunca mais vai ficar sem saber o que postar.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num"><Smile size={22} strokeWidth={2.2} /></div>
              <div className="deliver-text">
                <h4>Checklist Grave Sem Travar <span className="tag-bonus">Bônus</span></h4>
                <p>Um checklist rápido para seguir antes de cada gravação e entrar na câmera com clareza.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. OBJEÇÃO CHATGPT ===== */}
      <section className="chatgpt-obj">
        <div className="container">
          <div className="section-label label" style={{ textAlign: 'center', marginBottom: '20px' }}>E o ChatGPT?</div>
          <h2 className="section-title !text-[22px]">"Mas eu posso pedir pro ChatGPT<br />escrever meu roteiro."</h2>
          <div className="chatgpt-resp">
            <p><strong>Pode.</strong></p>
            <p>O problema é que um texto bonito na tela não significa que você sabe como falar aquilo naturalmente diante da câmera.</p>
            <p>O ChatGPT entrega um texto. O Protocolo te ensina uma estrutura.</p>
            <p>Com o Protocolo você aprende <em>como pensar</em> cada vídeo. Com a sua voz, do seu jeito. Não um texto para decorar.</p>
          </div>
        </div>
      </section>

      {/* ===== 12. OFERTA ===== */}
      <section className="oferta" id="oferta">
        <div className="container">
          <h2 className="section-title !text-[22px]" style={{ marginBottom: '40px' }}>
            Você está a poucos passos<br />de parar de travar.
          </h2>
          <div className="offer-layout">
            <img
              src="/imagens-da-landing-page/mockup.webp"
              alt="Protocolo da Retenção Total"
              className="offer-mockup"
              width="1200" height="675"
              loading="lazy" decoding="async"
            />
            <div className="offer-card">
              <h3 className="!text-[21px]">Protocolo da Retenção Total</h3>
              <p className="subline">Seu método de 3 passos para saber o que falar antes de apertar o botão de gravar.</p>

              <div className="stack-item main">
                <span className="name"><span className="icon">✓</span> Método Protocolo da Retenção Total</span>
              </div>
              <div className="stack-item">
                <span className="name"><span className="icon">★</span> Roteiro Modelo "Preenche e Grava"</span>
              </div>
              <div className="stack-item">
                <span className="name"><span className="icon">★</span> Banco de Ganchos por Objetivo</span>
              </div>
              <div className="stack-item">
                <span className="name"><span className="icon">★</span> Prompt de IA: Assistente de Roteiro</span>
              </div>
              <div className="stack-item">
                <span className="name"><span className="icon">★</span> Calendário de 30 Ideias de Conteúdo</span>
              </div>
              <div className="stack-item">
                <span className="name"><span className="icon">★</span> Checklist Grave Sem Travar</span>
              </div>

              <div className="total-box">
                <div className="price-final">R$67</div>
                <div className="parcelas">ou em até 12x no cartão</div>
              </div>

              <a href={CHECKOUT} className="cta-btn" style={{ display: 'block', textAlign: 'center' }} onClick={trackCheckout}>
                QUERO SABER O QUE FALAR
              </a>

              <div className="garantia-badge">
                <span className="garantia-icon">🛡️</span>
                <div>
                  <strong>Garantia de 7 dias</strong>
                  <p>Se você não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 13. COMO VOCÊ RECEBE ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Acesso imediato</div>
          <h2 className="section-title">Como você recebe</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Finalize o pedido</h4>
              <p>Escolha a forma de pagamento: Pix ou cartão em até 12x.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Acesse pelo e-mail</h4>
              <p>Assim que o pagamento for confirmado, você recebe o acesso direto no e-mail.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Aplique hoje mesmo</h4>
              <p>Todo o material liberado na hora. É só abrir e começar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 14. FAQ ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Perguntas frequentes</div>
          <h2 className="section-title">Ainda com <em>dúvidas?</em></h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Preciso saber falar bem para usar o método?</summary>
              <div className="faq-body">Não. O Protocolo foi criado exatamente para quem não sabe o que falar. A estrutura te diz por onde começar, o que desenvolver e como terminar. Não precisa ser um comunicador nato.</div>
            </details>
            <details className="faq-item">
              <summary>Preciso decorar o roteiro?</summary>
              <div className="faq-body">Não. O Protocolo não é um roteiro para decorar. É uma estrutura para você saber o que falar. A ideia é que você grave com naturalidade, sem parecer que está lendo ou recitando.</div>
            </details>
            <details className="faq-item">
              <summary>Funciona para quem trava na câmera?</summary>
              <div className="faq-body">Sim. Se você trava é porque não sabe o que falar. É exatamente isso que o Protocolo resolve. Quando você tem uma estrutura clara, a trava diminui porque você sabe por onde começar.</div>
            </details>
            <details className="faq-item">
              <summary>É um curso ou um e-book?</summary>
              <div className="faq-body">É um material digital no formato e-book. O que você está comprando é o método, não páginas. O Protocolo da Retenção Total é uma estrutura de 3 passos que você aplica em qualquer vídeo.</div>
            </details>
            <details className="faq-item">
              <summary>Funciona para diferentes tipos de vídeos?</summary>
              <div className="faq-body">Sim. A estrutura de 3 passos funciona para conteúdo educativo, vídeos de venda, autoridade, entretenimento. Qualquer formato onde você transforma uma ideia em fala.</div>
            </details>
            <details className="faq-item">
              <summary>Preciso de câmera ou equipamento caro?</summary>
              <div className="faq-body">Não. O foco é o roteiro e a estrutura, não o equipamento. Tudo pode ser feito com o celular.</div>
            </details>
            <details className="faq-item">
              <summary>Como recebo o acesso?</summary>
              <div className="faq-body">Assim que o pagamento for confirmado, você recebe todos os materiais direto no seu e-mail, com acesso imediato e vitalício.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ===== 15. CTA FINAL ===== */}
      <section className="cta-final-section">
        <div className="container">
          <div className="cta-final-card">
            <p className="cta-final-dor">
              Da próxima vez que você abrir a câmera,<br />
              você pode continuar pensando:
            </p>
            <p className="cta-final-pergunta">"O que eu vou falar?"</p>
            <p className="cta-final-ou">
              Ou pode ter uma estrutura simples para saber<br />
              exatamente por onde começar.
            </p>
            <h3 className="cta-final-nome">Protocolo da Retenção Total</h3>
            <p className="cta-final-desc">Um método de 3 passos para transformar suas ideias em roteiros fáceis de gravar.</p>
            <div className="cta-final-price">R$67</div>
            <a
              href={CHECKOUT}
              className="cta-btn"
              style={{ display: 'block', maxWidth: '420px', margin: '0 auto', textAlign: 'center' }}
              onClick={trackCheckout}
            >
              QUERO SABER O QUE FALAR
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-cta">
          <img src="/imagens-da-landing-page/logo.webp" alt="Gio Seed" className="footer-logo" width="240" height="240" loading="lazy" decoding="async" />
        </div>
        <p>Tem alguma dúvida? Fale com a gente: <a className="footer-mail" href="mailto:gioseed@icloud.com">gioseed@icloud.com</a></p>
        <p className="disclaimer">Este site não é afiliado ao Instagram, TikTok ou a qualquer outra plataforma. A compra deste material não garante nenhum tipo de resultado. Os resultados dependem da aplicação individual de cada pessoa. Fazemos todos os esforços para apresentar de forma clara e honesta a proposta do produto.</p>
        <p style={{ marginTop: '20px' }}>Protocolo da Retenção Total · Todos os direitos reservados ©</p>
      </footer>
    </>
  );
}
