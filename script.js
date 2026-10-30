document.addEventListener("DOMContentLoaded", function() {
    // Inicializa os ícones da biblioteca Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Controle do Menu Hambúrguer em Telas Pequenas (Mobile)
    const btnMobile = document.getElementById("btn-mobile");
    const menuLinks = document.getElementById("menu-links");

    if (btnMobile && menuLinks) {
        btnMobile.addEventListener("click", () => {
            menuLinks.classList.toggle("active");
        });
    }
});

/**
 * Função para gerar pedido direto no WhatsApp da [Nome da Sua Lanchonete]
 * @param {string} nomeLanche Nome do produto ou kit selecionado
 */
function pedirLanche(nomeLanche) {
    // Número do WhatsApp oficial (Lembre-se de colocar o código do país '55' + DDD + Número)
    // Exemplo: "5511999999999"
    const numeroWhatsApp = "[SeuNumeroDeTelefoneSemEspacos]"; 

    // Mensagem pronta para o lojista
    const mensagem = `Olá [Seu Nome]! Gostaria de fazer um pedido de: *${nomeLanche}*. Pode me passar os detalhes de valores e disponibilidade?`;

    // Abre a conversa no WhatsApp em uma nova aba
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}