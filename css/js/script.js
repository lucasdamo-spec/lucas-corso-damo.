// Função para calcular a estimativa de sementes de milho
function calcularSementes() {
    // Pega o valor da área digitada pelo usuário (em hectares)
    const hectares = document.getElementById('hectares').value;
    const resultadoDiv = document.getElementById('resultado-calculo');

    // Validação simples para garantir que o número é maior que zero
    if (hectares > 0) {
        // Recomendação média técnica: ~60.000 sementes por hectare
        const populacaoMedia = 60000;
        const totalSementes = hectares * populacaoMedia;

        // Formata o número para o padrão local (ex: 120.000)
        const totalFormatado = totalSementes.toLocaleString('pt-BR');

        resultadoDiv.innerHTML = `Para <strong>${hectares} ha</strong>, precisará de aproximadamente <strong>${totalFormatado}</strong> sementes.<br><small>(Baseado numa população recomendada de 60 mil plantas/ha).</small>`;
        resultadoDiv.style.color = "#2e7d32";
    } else {
        resultadoDiv.innerHTML = "Por favor, introduza um valor válido maior que 0.";
        resultadoDiv.style.color = "#d32f2f";
    }
}
