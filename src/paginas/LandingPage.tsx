/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Crown, Video, Sparkles, Calendar, TrendingUp, Layers, Magnet, FileText, Bot, Smile, Infinity, Clapperboard, Lock, MessageSquare, Cpu, Rocket, Unlock } from 'lucide-react';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1 className="!text-[27px]">Você apaga vídeos porque<br />não sabe <span className="accent">o que falar?</span></h1>
          <p className="sub !text-[18px] !text-[#c7c7c7] !font-sans !leading-relaxed"><strong className="!text-white !font-semibold">Pare de travar na hora de gravar</strong> e saiba exatamente o que falar para criar vídeos que <strong className="!text-white !font-semibold">prendem até o final</strong> com o <strong className="!text-[var(--gold)] !font-semibold">Protocolo da Retenção Total</strong>.</p>
          <div className="hero-img">
            <img src="/imagens-da-landing-page/hero-antes-depois-v2.png" alt="Antes: mulher cansada sem conseguir gravar. Depois: a mesma mulher feliz após gravar seu vídeo." />
            <div className="hero-img-caption">
              <span className="cap-antes">Antes</span>
              <span className="cap-depois">Depois</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Resultado real</div>
          <h2 className="section-title !text-[18px]">Veja o resultado de um dos meus alunos<br />usando o <em>Protocolo da Retenção Total</em></h2>
          <div className="proof-grid">
            <div className="proof-col">
              <img src="/imagens-da-landing-page/testemunho-antes.jpeg" alt="Perfil antes" />
              <div className="tag tag-antes">Antes</div>
            </div>
            <div className="proof-col">
              <img src="/imagens-da-landing-page/testemunho-depois.jpeg" alt="Perfil depois" />
              <div className="tag tag-depois">Depois</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOR ===== */}
      <section className="dor">
        <div className="container !max-w-5xl">
          <div className="dor-head">
            <span className="dor-kicker">Isso acontece com você?</span>
            <h2>Você não aguenta mais <strong>gravar e apagar vídeos.</strong></h2>
            <p className="dor-transition">E sofre com <span>pensamentos</span> como...</p>
          </div>
          <div className="dor-stage">
            <div className="dor-img">
              <img src="/imagens-da-landing-page/mulher-cansada.png" alt="Frustração ao gravar" />
            </div>
            <div className="dor-thoughts">
              <div className="thought t1">Eu queria só sentar, gravar e postar.</div>
              <div className="thought t2">Sem roteiro eu me perco.</div>
              <div className="thought t3">Eu travo quando aperto o botão de gravar.</div>
              <div className="thought t4">O ChatGPT escreve bonito, mas não escreve do meu jeito.</div>
              <div className="thought t5">Cara... eu sei explicar isso conversando, mas na câmera eu travo.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AGITAÇÃO ===== */}
      <section className="agita">
        <div className="container">
          <span className="agita-kicker">Chega de roteiro genérico</span>
          <p className="agita-lead">Você não aguenta mais montar roteiros ruins feitos com o ChatGPT que as pessoas pulam nos primeiros segundos.</p>
          <div className="agita-divider" />
          <p className="agita-eyebrow">Agora eu te pergunto</p>
          <h2 className="agita-question">Se você pudesse ter acesso à estrutura de roteiros que <span className="highlight">convertem seguidores todos os dias</span>, você iria adquirir?</h2>
          <p className="agita-close">Se a resposta for <strong>sim</strong>, então o Protocolo da Retenção Total é para você.</p>
          <a href="#oferta" className="cta-btn">QUERO ACESSAR O PROTOCOLO</a>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section>
        <div className="container">
          <h2 className="section-title">Com o Protocolo da Retenção Total você vai:</h2>
          <div className="benef-grid">
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <span className="check">
                <Compass size={16} strokeWidth={2.5} />
              </span>
              <p>Ter uma estrutura tão clara que nem precisa pensar muito.</p>
            </motion.div>
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="check">
                <Crown size={16} strokeWidth={2.5} />
              </span>
              <p>Virar referência no nicho por causa da comunicação.</p>
            </motion.div>
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <span className="check">
                <Video size={16} strokeWidth={2.5} />
              </span>
              <p>Sentar, gravar e postar no mesmo dia.</p>
            </motion.div>
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <span className="check">
                <Sparkles size={16} strokeWidth={2.5} />
              </span>
              <p>Não depender mais de trends ou dancinhas.</p>
            </motion.div>
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <span className="check">
                <Calendar size={16} strokeWidth={2.5} />
              </span>
              <p>Conseguir criar conteúdo todos os dias sem sofrimento.</p>
            </motion.div>
            <motion.div 
              className="benef"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <span className="check">
                <TrendingUp size={16} strokeWidth={2.5} />
              </span>
              <p>Conseguir vender só com os próprios vídeos no orgânico.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ENTREGÁVEIS DETALHADOS ===== */}
      <section>
        <div className="container">
          <h2 className="section-title !text-[24px]">Veja tudo que você vai receber<br />no <em>Protocolo da Retenção Total</em></h2>
          <div className="deliverables">
            <div className="deliver-item">
              <div className="deliver-num">
                <Layers size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Método Protocolo da Retenção Total</h4>
                <p>A estrutura completa em 3 passos para transformar qualquer ideia em um roteiro que prende do primeiro ao último segundo. Mesmo que você trave na frente da câmera.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num">
                <FileText size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Roteiro Modelo "Preenche e Grava" <span className="tag-bonus">Bônus</span></h4>
                <p>Um roteiro estruturado com lacunas pra você preencher e gravar na hora. Sem travar, sem tela em branco. É só copiar, adaptar e publicar.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num">
                <Magnet size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Banco de Ganchos por Objetivo <span className="tag-bonus">Bônus</span></h4>
                <p>Dezenas de aberturas organizadas por objetivo: engajamento, venda, autoridade. É só escolher o que você quer gerar e adaptar pro seu conteúdo.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num">
                <Bot size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Prompt de IA: Seu Assistente de Roteiro <span className="tag-bonus">Bônus</span></h4>
                <p>Um prompt treinado pra escrever roteiros no seu tom, do seu jeito. Chega de resposta genérica. A IA vai trabalhar do jeito que você precisa.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num">
                <Infinity size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Calendário de 30 Ideias de Conteúdo <span className="tag-bonus">Bônus</span></h4>
                <p>30 ideias prontas pra um mês inteiro de conteúdo. Nunca mais vai ficar sem saber o que postar. É só pegar uma ideia e gravar.</p>
              </div>
            </div>
            <div className="deliver-item">
              <div className="deliver-num">
                <Smile size={22} strokeWidth={2.2} />
              </div>
              <div className="deliver-text">
                <h4>Checklist Grave Sem Travar <span className="tag-bonus">Bônus</span></h4>
                <p>Um checklist rápido pra você seguir antes de cada gravação e entrar na câmera com confiança. Sem aquela trava de não saber por onde começar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== É PARA VOCÊ QUE ===== */}
      <section className="foryou">
        <div className="container">
          <h2 className="section-title !text-[23px]">O Protocolo da Retenção Total<br />é para <em>você que:</em></h2>
          <div className="foryou-list">
            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><Clapperboard size={13} strokeWidth={2.5} /></span>
              <p>Quer produzir seus próprios vídeos sem depender de ninguém.</p>
            </motion.div>

            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><Lock size={13} strokeWidth={2.5} /></span>
              <p>Trava na hora de gravar e nunca termina o que começa.</p>
            </motion.div>

            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><MessageSquare size={13} strokeWidth={2.5} /></span>
              <p>Não sabe o que falar e fica semanas sem postar nada.</p>
            </motion.div>

            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><Cpu size={13} strokeWidth={2.5} /></span>
              <p>Já tentou usar o ChatGPT mas o roteiro sempre sai robótico.</p>
            </motion.div>

            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><Rocket size={13} strokeWidth={2.5} /></span>
              <p>Quer crescer no Instagram e no TikTok só com conteúdo orgânico.</p>
            </motion.div>

            <motion.div 
              className="foryou-item cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "#dfc382", 
                boxShadow: "0 0 25px rgba(223,195,130,0.4), inset 0 0 10px rgba(223,195,130,0.15)" 
              }}
            >
              <span className="dot"><Unlock size={13} strokeWidth={2.5} /></span>
              <p>Não tem tempo nem cabeça pra criar tudo do zero e precisa de algo que destrave a execução.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OFERTA ===== */}
      <section className="oferta" id="oferta">
        <div className="container">
          <div className="offer-layout">
          <img src="/imagens-da-landing-page/mockup.png" alt="Mockup Protocolo da Retenção Total" className="offer-mockup" />
          <div className="offer-card">
            <h3 className="!text-[21px]">Protocolo da Retenção Total</h3>
            <p className="subline !text-[18px]">Tudo que você precisa para nunca mais travar na frente da câmera</p>

            <div className="stack-item main">
              <span className="name"><span className="icon">✓</span> Método Protocolo da Retenção Total</span>
              <span className="price">R$127</span>
            </div>
            <div className="stack-item">
              <span className="name"><span className="icon">★</span> Roteiro Modelo "Preenche e Grava"</span>
              <span className="price">R$47</span>
            </div>
            <div className="stack-item">
              <span className="name"><span className="icon">★</span> Banco de Ganchos por Objetivo</span>
              <span className="price">R$37</span>
            </div>
            <div className="stack-item">
              <span className="name"><span className="icon">★</span> Prompt de IA: Seu Assistente de Roteiro</span>
              <span className="price">R$37</span>
            </div>
            <div className="stack-item">
              <span className="name"><span className="icon">★</span> Calendário de 30 Ideias de Conteúdo</span>
              <span className="price">R$27</span>
            </div>
            <div className="stack-item">
              <span className="name"><span className="icon">★</span> Checklist Grave Sem Travar</span>
              <span className="price">R$22</span>
            </div>

            <div className="total-box">
              <div className="de">De <s>R$297</s> por apenas</div>
              <div className="price-final">R$67</div>
              <div className="parcelas">ou em até 12x no cartão</div>
            </div>

            <a href="https://sun.eduzz.com/40QRV7AP9B" className="cta-btn" target="_blank" rel="noopener noreferrer">Quero acessar o Protocolo agora</a>
          </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Simples assim</div>
          <h2 className="section-title">Adquira agora e receba<br />seu acesso <em>imediatamente</em></h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Acesse seu e-mail</h4>
              <p>Assim que finalizar a compra, você recebe seu acesso direto no e-mail.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Acesse o material</h4>
              <p>Todos os entregáveis liberados na hora, sem espera e sem burocracia.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Tudo pronto!</h4>
              <p>Agora é só aplicar o método e criar seus vídeos que prendem ainda hoje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DUAS ESCOLHAS ===== */}
      <section>
        <div className="container">
          <div className="section-label label">A decisão é sua</div>
          <h2 className="section-title">Agora você tem <em>duas escolhas</em></h2>
          <div className="choices">
            <div className="choice bad">
              <div className="opt-label">Opção 1</div>
              <h4>Continuar travado</h4>
              <p>Seguir apagando vídeos, adiando pra semana que vem, pro próximo mês, pro "quando der tempo". E ver o tempo passar sem sair do lugar.</p>
            </div>
            <div className="choice good">
              <div className="opt-label">Opção 2</div>
              <h4>Destravar hoje</h4>
              <p>Acessar o Protocolo da Retenção Total, aplicar a estrutura e ter seus vídeos prendendo a atenção da audiência a partir de agora.</p>
            </div>
          </div>
          <p className="choices-note">Eu sei, e você também sabe: a <em>opção 2</em> é a mais inteligente.</p>
          <a href="https://sun.eduzz.com/40QRV7AP9B" className="cta-btn cta-pulse" target="_blank" rel="noopener noreferrer" style={{ display: 'block', maxWidth: '420px', margin: '32px auto 0', textAlign: 'center' }}>QUERO DESTRAVAR AGORA</a>
        </div>
      </section>

      {/* ===== QUEM É O GIO ===== */}
      <section className="about">
        <div className="container">
          <div className="about-card">
            <img src="/imagens-da-landing-page/foto-giovanni.png" alt="Gio Seed" className="about-photo" />
            <div className="section-label label" style={{ textAlign: 'center' }}>Quem está por trás</div>
            <h3>O criador do Protocolo é o <em>Gio Seed</em></h3>
            <p>Giovanni Santos de Oliveira nasceu no interior do Amazonas, em Itacoatiara. Trabalhou desde os 12 anos, passou um ano fazendo freelance em supermercados de Jaraguá do Sul e aprendeu edição sozinho, no YouTube, gravando com o próprio celular.</p>
            <p>Por muito tempo ele postava vídeos que ninguém assistia. Vinte, trinta visualizações. Até descobrir que o problema nunca foi a câmera. <strong>Era a falta de roteiro.</strong> Quando começou a aplicar storytelling, um dos seus vídeos passou de <strong>400 mil visualizações</strong>.</p>
            <p>Hoje ele tem mais de <strong>14 mil seguidores</strong>, mora em Balneário Camboriú e atende clientes com a sua produtora. O Protocolo da Retenção Total é exatamente o método que ele usou pra chegar até aqui. Pronto pra você copiar e aplicar.</p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section>
        <div className="container">
          <div className="section-label label">Perguntas frequentes</div>
          <h2 className="section-title">Ainda com <em>dúvidas?</em></h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Qual é a forma de pagamento?</summary>
              <div className="faq-body">Você pode pagar via Pix ou cartão de crédito, em até 12x. O acesso é liberado na hora após a confirmação.</div>
            </details>
            <details className="faq-item">
              <summary>O pagamento é seguro?</summary>
              <div className="faq-body">Sim. O processamento é feito por plataforma de pagamento segura, com criptografia. Seus dados ficam protegidos do início ao fim.</div>
            </details>
            <details className="faq-item">
              <summary>Funciona pra mim?</summary>
              <div className="faq-body">Se você quer produzir vídeos que prendem a atenção e não sabe por onde começar, funciona. O método serve tanto pra quem está no zero quanto pra quem já grava mas não vê resultado.</div>
            </details>
            <details className="faq-item">
              <summary>Preciso de câmera ou equipamento caro?</summary>
              <div className="faq-body">Não. Tudo foi pensado pra ser feito só com o celular. O foco é o roteiro e a estrutura, não o equipamento.</div>
            </details>
            <details className="faq-item">
              <summary>Como vou acessar o material?</summary>
              <div className="faq-body">Assim que a compra for confirmada, você recebe todos os entregáveis no seu e-mail, com acesso imediato e vitalício.</div>
            </details>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-cta">
          <img src="/imagens-da-landing-page/logo.jpeg" alt="Gio Seed" className="footer-logo" />
        </div>
        <p>Tem alguma dúvida? Fale com a gente: <a className="footer-mail" href="mailto:gioseed@icloud.com">gioseed@icloud.com</a></p>
        <p className="disclaimer">Este site não é afiliado ao Instagram, TikTok ou a qualquer outra plataforma. A compra deste material não garante nenhum tipo de resultado. Os resultados dependem da aplicação individual de cada pessoa. Fazemos todos os esforços para apresentar de forma clara e honesta a proposta do produto.</p>
        <p style={{ marginTop: '20px' }}>Protocolo da Retenção Total · Todos os direitos reservados ©</p>
      </footer>
    </>
  );
}
