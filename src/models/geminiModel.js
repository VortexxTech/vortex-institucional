const { GoogleGenerativeAI } = require("@google/generative-ai");

// configurando o gemini (IA)
const chatIA = new GoogleGenerativeAI(process.env.CHAVE_GEMINI);

function perguntar(pergunta) {
    const resposta = gerarResposta(pergunta);

    return resposta;
}

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {
    // obtendo o modelo de IA
    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    try {
        // gerando conteúdo com base na pergunta
        const resultado = await modeloIA.generateContent(mensagem);
        const resposta = await resultado.response.text();
        
        console.log(resposta);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    perguntar
}