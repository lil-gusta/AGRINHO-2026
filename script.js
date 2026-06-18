/* ==========================================================================
   AGRINHO 2026 - LÓGICA E INTERATIVIDADE (script.js)
   ========================================================================== */

// Garante que o código só vai rodar após o HTML estar totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // FEATURE 1: Validação Dinâmica do Formulário de Contato
    // ----------------------------------------------------------------------
    const formulario = document.querySelector('#contato form');
    
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            // Impede o envio padrão do formulário para podermos validar antes
            evento.preventDefault(); 
            
            // Captura os campos (ajuste os IDs se os seus forem diferentes no HTML)
            const nome = document.querySelector('#nome')?.value.trim();
            const email = document.querySelector('#email')?.value.trim();
            const mensagem = document.querySelector('#mensagem')?.value.trim();
            
            // Verifica se algum campo está vazio
            if (!nome || !email || !mensagem) {
                alert('⚠️ Por favor, preencha todos os campos antes de enviar.');
                return;
            }
            
            // Se tudo estiver certo, exibe mensagem de sucesso
            alert(`✅ Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade foi enviada.`);
            formulario.reset(); // Limpa os campos do formulário
        });
    }

    // ----------------------------------------------------------------------
    // FEATURE 2: Mudar a cor do Menu (Header) ao rolar a página (Scroll)
    // ----------------------------------------------------------------------
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Se o usuário rolar mais de 50 pixels para baixo, adiciona uma classe
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#2e7d32'; // Fica verde sólido
            header.style.transition = '0.4s ease';
        } else {
            header.style.backgroundColor = '#ffffff'; // Volta a ser branco no topo
        }
    });

    // ----------------------------------------------------------------------
    // FEATURE 3: Mensagem de Boas-vindas no Console (Apenas para checar se o JS funcionou)
    // ----------------------------------------------------------------------
    console.log("🌱 Projeto Agrinho 2026: Script carregado com sucesso de forma externa!");
});
