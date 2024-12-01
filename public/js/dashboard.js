function pesquisar_insights() {
    kpi_pesquisa.style.display = "flex";
    container_chartpesquisa.style.display = "flex";
    div_vazia1.style.display = "none";
}

function pesquisar_previsao() {
    kpis_previsao.style.display = "flex";
    grafico_futurom2.style.display = "flex";
    div_vazia1.style.display = "none";
}

document.getElementById('filtrarBtn').addEventListener('click', () => {
    const zona = document.getElementById('zona-regiao-pesquisa').value;
    const regiao = document.getElementById('regiao-bairro-pesquisa').value;
    const nomeCidadeElement = document.getElementById('nome_cidade');

    if (zona && regiao) {
        nomeCidadeElement.textContent = `Análise para Zona ${zona.charAt(0).toUpperCase() + zona.slice(1)} - ${regiao}`;
    } else {
        alert('Por favor, selecione uma região e uma cidade.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const zonaRegiaoPesquisa = document.getElementById('zona-regiao-pesquisa');
    const regiaoCidadePesquisa = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');
    const filtrarBtn2 = document.getElementById('filtrarBtn2');
    const nomeCidade = document.getElementById('nome_cidade');
    configurarDropdownBairros();

    const cidadesPorRegiao = {
        centro: ['A', 'Bom Retiro', 'Cambuci', 'Consolação', 'Sé', 'Higienópolis', 'Liberdade', 'República', 'Santa Cecília'],
        norte: ['B', 'Casa Verde', 'Freguesia do Ó', 'Jaraguá', 'Jaçanã', 'Limão', 'Mandaqui', 'Santana', 'Tremembé', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Vila Medeiros', 'Vila Nova Cachoeirinha'],
        sul: ['Campo Belo', 'Campo Grande', 'Campo Limpo', 'Capão Redondo', 'Cidade Ademar', 'Cidade Dutra', 'Cursino', 'Grajaú', 'Ipiranga', 'Jabaquara', 'Jardim Ângela', 'Jardim São Luís', 'Moema', 'Saúde', 'Sacomã', 'Santo Amaro', 'Vila Andrade', 'Vila Mariana'],
        oeste: ['Barra Funda', 'Butantã', 'Itaim Bibi', 'Jardim Paulista', 'Lapa', 'Morumbi', 'Perdizes', 'Pinheiros', 'Vila Leopoldina'],
        leste: ['Água Rasa', 'Aricanduva', 'Artur Alvim', 'Belenzinho', 'Brás', 'Cangaíba', 'Cidade Líder', 'Cidade Tiradentes', 'Ermelino Matarazzo', 'Guaianases', 'Iguatemi', 'Itaim Paulista', 'Itaquera', 'Jardim Helena', 'José Bonifácio', 'Mooca', 'Pari', 'Penha', 'São Lucas', 'São Mateus', 'Sapopemba', 'Tatuapé', 'Vila Carrão', 'Vila Formosa', 'Vila Matilde', 'Vila Prudente'],
        metropolitana: ['São Paulo', 'Barueri', 'Biritiba Mirim', 'Caieiras', 'Cajamar', 'Carapicuíba', 'Cotia', 'Diadema', 'Embu', 'Embu-Guaçu', 'Ferraz de Vasconcelos', 'Francisco Morato', 'Franco da Rocha', 'Guararema', 'Guarulhos', 'Itapecerica da Serra', 'Itapevi', 'Itaquaquecetuba', 'Jandira', 'Juquitiba', 'Mairiporã', 'Mauá', 'Mogi das Cruzes', 'Osasco', 'Pirapora do Bom Jesus', 'Poá', 'Ribeirão Pires', 'Rio Grande da Serra', 'Salesópolis', 'Santa Isabel', 'Santana do Parnaíba', 'Santo André', 'São Bernardo do Campo', 'São Caetano do Sul', 'São Lourenço da Serra', 'Suzano', 'Taboão da Serra', 'Vargem Grande Paulista'],
    };

    zonaRegiaoPesquisa.addEventListener('change', function () {
        const regiaoSelecionada = this.value;
        regiaoCidadePesquisa.innerHTML = '<option value="">Selecione uma cidade</option>';

        if (regiaoSelecionada && cidadesPorRegiao[regiaoSelecionada]) {
            cidadesPorRegiao[regiaoSelecionada].forEach(function (cidade) {
                const option = document.createElement('option');
                option.textContent = cidade;
                option.value = cidade;  // Agora o value será o nome da cidade
                regiaoCidadePesquisa.appendChild(option);
            });
        }
    });
});

document.getElementById('filtrarBtn2').addEventListener('click', () => {
    const zonaPrevista = document.getElementById('zona-regiao-prevista').value;
    const regiaoPrevista = document.getElementById('regiao-bairro-prevista').value;
    const tamanhoTerreno = document.querySelector('input[type="number"]').value;
    const kpiRespostaElement = document.getElementById('kpi_percapita');

    if (zonaPrevista && regiaoPrevista && tamanhoTerreno) {
        const resposta = `Análise para ${zonaPrevista.charAt(0).toUpperCase() + zonaPrevista.slice(1)} - ${regiaoPrevista}.`;

        const nomeCidadeElements = document.querySelectorAll('#nome_cidade_previsao');
        nomeCidadeElements.forEach(element => {
            element.textContent = resposta;
        });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const zonaRegiaoPrevista = document.getElementById('zona-regiao-prevista');
    const regiaoCidadePrevista = document.getElementById('regiao-bairro-prevista');
    const cidadesPorRegiao = {
        centro: ['A', 'Bom Retiro', 'Cambuci', 'Consolação', 'Sé', 'Higienópolis', 'Liberdade', 'República', 'Santa Cecília'],
        norte: ['B', 'Casa Verde', 'Freguesia do Ó', 'Jaraguá', 'Jaçanã', 'Limão', 'Mandaqui', 'Santana', 'Tremembé', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Vila Medeiros', 'Vila Nova Cachoeirinha'],
        sul: ['Campo Belo', 'Campo Grande', 'Campo Limpo', 'Capão Redondo', 'Cidade Ademar', 'Cidade Dutra', 'Cursino', 'Grajaú', 'Ipiranga', 'Jabaquara', 'Jardim Ângela', 'Jardim São Luís', 'Moema', 'Saúde', 'Sacomã', 'Santo Amaro', 'Vila Andrade', 'Vila Mariana'],
        oeste: ['Barra Funda', 'Butantã', 'Itaim Bibi', 'Jardim Paulista', 'Lapa', 'Morumbi', 'Perdizes', 'Pinheiros', 'Vila Leopoldina'],
        leste: ['Água Rasa', 'Aricanduva', 'Artur Alvim', 'Belenzinho', 'Brás', 'Cangaíba', 'Cidade Líder', 'Cidade Tiradentes', 'Ermelino Matarazzo', 'Guaianases', 'Iguatemi', 'Itaim Paulista', 'Itaquera', 'Jardim Helena', 'José Bonifácio', 'Mooca', 'Pari', 'Penha', 'São Lucas', 'São Mateus', 'Sapopemba', 'Tatuapé', 'Vila Carrão', 'Vila Formosa', 'Vila Matilde', 'Vila Prudente'],
        metropolitana: ['São Paulo', 'Barueri', 'Biritiba Mirim', 'Caieiras', 'Cajamar', 'Carapicuíba', 'Cotia', 'Diadema', 'Embu', 'Embu-Guaçu', 'Ferraz de Vasconcelos', 'Francisco Morato', 'Franco da Rocha', 'Guararema', 'Guarulhos', 'Itapecerica da Serra', 'Itapevi', 'Itaquaquecetuba', 'Jandira', 'Juquitiba', 'Mairiporã', 'Mauá', 'Mogi das Cruzes', 'Osasco', 'Pirapora do Bom Jesus', 'Poá', 'Ribeirão Pires', 'Rio Grande da Serra', 'Salesópolis', 'Santa Isabel', 'Santana do Parnaíba', 'Santo André', 'São Bernardo do Campo', 'São Caetano do Sul', 'São Lourenço da Serra', 'Suzano', 'Taboão da Serra', 'Vargem Grande Paulista'],
    };

    zonaRegiaoPrevista.addEventListener('change', function () {
        const regiaoSelecionada = this.value;
        regiaoCidadePrevista.innerHTML = '<option value="">Selecione uma cidade</option>';

        if (regiaoSelecionada && cidadesPorRegiao[regiaoSelecionada]) {
            cidadesPorRegiao[regiaoSelecionada].forEach(function (cidade) {
                const option = document.createElement('option');
                option.textContent = cidade;
                option.value = cidade;
                regiaoCidadePrevista.appendChild(option);
            });
        }
    });
});

function preco_futuro() {

    var preco_futuro = 7.100;
    var tamanhoTerreno = tamanho_terreno.value;

    var resultado = preco_futuro * tamanhoTerreno;

    document.getElementById('preco_futuro').innerText = resultado.toFixed(3);
}

async function preco_futuro() {
    const tooltipElement = document.querySelector(".tooltip");
    const zona = document.querySelector("#zona-regiao-prevista").value;
    const tamanhoTerreno = document.querySelector("#tamanho_terreno").value;
    const bairro = document.querySelector("#regiao-bairro-prevista").value;
    const precoTerreno = document.querySelector(".preco_terreno").textContent;
    const precoFuturo = document.querySelector("#preco_futuro");

    const pergunta = `Levando em consideração um terreno com tamanho de: ${tamanhoTerreno} M² custando ${precoTerreno},
    localizado na zona ${zona} de são paulo,
    no bairro ${bairro}, quanto irá valer o mesmo terreno daqui a 6 meses?(mostre somente o valor e nada mais)`;

    const res = await fetch("/gemini/perguntar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pergunta })
    });

    const data = await res.json();

    precoFuturo.innerHTML = data;
}

async function pesquisar_empreendimento() {
    const bairro = document.querySelector("#regiao-bairro-prevista").value;
    const precoMetro = document.querySelector("#preco_metro").textContent;
    const mensagemIA = document.querySelector(".mensagem_ia");

    const pergunta = `Com base na densidade da região(faça uma pesquisa),
        Renda per capita média(faça uma pesquisa),
        e preço do m² sendo ${precoMetro}, do bairro ${bairro},
        qual tipo de imovel é recomendado? (mostre somente um tipo de imovel e nada mais e com formatação somente de "imovel comercial" ou "imovel residencial")`;

    const res = await fetch("/gemini/perguntar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pergunta })
    });

    const data = await res.json();

    mensagemIA.innerHTML = data;
}

function geral() {

    div_graficos.style.display = "flex";
    container_pesquisa.style.display = "none";
    div_previsao.style.display = "none";
    slc_infgerais.style.color = "#909DB6";
    slc_pesquisaregiao.style.color = "#FFFFFF";
    div_previsao.style.display = "none";
    slc_previsao.style.color = "#FFFFFF";

}

function aparecer_pesquisa() {

    div_graficos.style.display = "none";
    container_pesquisa.style.display = "flex";
    div_previsao.style.display = "none";
    slc_pesquisaregiao.style.color = "#909DB6";
    slc_infgerais.style.color = "#FFFFFF";
    slc_previsao.style.color = "#FFFFFF";

}

function aparecer_previsao() {

    div_graficos.style.display = "none";
    container_pesquisa.style.display = "none";
    div_previsao.style.display = "flex";
    slc_pesquisaregiao.style.color = "#FFFFFF";
    slc_infgerais.style.color = "#FFFFFF";
    slc_previsao.style.color = "#909DB6";

}


//primeiro grafico primeira sessão
function obterPrecoM2() {
    fetch(`/precoM2/buscarPreco`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                const labels = resposta.map(item => item.mes);
                const data = resposta.map(item => parseFloat(item.mediaValorM2));

                plotarPrecoM2(labels, data);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarPrecoM2(labels, data) {
    const ctx = document.getElementById('grafico');
    const grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Variação mensal do preço do m² em SP nos últimos 6 meses (R$):',
                data: data,
                backgroundColor: '#909DB6',
                borderColor: '#001F31',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#001F31',
                    }
                },
                x: {
                    ticks: {
                        color: '#001F31'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#001F31',
                        font: {
                            size: 15,
                        }
                    }
                }
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", obterValorizacao);
//primeira kpi primeira sessão
function obterValorizacao() {
    fetch(`/precoM2/buscarValorizacao`, { cache: 'no-store' })
        .then(function (response) {

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            // Verifica se a resposta tem conteúdo
            return response.text().then(function (text) {
                if (text) {
                    return JSON.parse(text);
                } else {
                    throw new Error('Resposta vazia');
                }
            });
        })
        .then(function (resposta) {
            console.log(`Dados de valorização da cidade na KPI 1: ${JSON.stringify(resposta)}`);

            const bairro = resposta.bairro;
            const zona = resposta.zona;
            const valorizacao = resposta.percentualValorizacao;

            // Preenchendo as KPIs

            document.querySelector('.texto_kpi').textContent = `${bairro} / ${zona}`;
            document.getElementById('valorizacao-kpi').textContent = `${valorizacao}%`;
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}

//kpi 2 primeira sessão
document.addEventListener("DOMContentLoaded", obterValorizacaoZona);

function obterValorizacaoZona() {
    fetch(`/precoM2/buscarZonasComMaiorPreco`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados de valorização recebidos: ${JSON.stringify(resposta)}`);


                const zona = resposta.zona;
                const valorizacao = resposta.percentualValorizacao;

                // Preenchendo as KPIs
                document.querySelector('.titulo_kpi').textContent = `Zona com valorização mais alta do m² no mês(R$):`;
                document.getElementById('valorizacao-zona').textContent = `${zona} / ${valorizacao}%`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}

//terceira kpi primeira sessão
document.addEventListener("DOMContentLoaded", buscarTopsIdh);

function buscarTopsIdh() {
    fetch(`/precoM2/buscarTopsIdh`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados de valorização recebidos: ${JSON.stringify(resposta)}`);


                const bairroPrimeiro = resposta[0].bairro;
                const valorizacaoPrimeiro = resposta[0].idh;
                const bairroSegundo = resposta[1].bairro;
                const valorizacaoSegundo = resposta[1].idh;
                const bairroTerceiro = resposta[2].bairro;
                const valorizacaoTerceiro = resposta[2].idh;


                document.getElementById('resposta-idh').textContent = `${bairroPrimeiro}`;
                document.getElementById('valorizacao-kpi-Primeiro').textContent = `1. ${bairroPrimeiro} - IDH: ${valorizacaoPrimeiro}`;
                document.getElementById('valorizacao-kpi-Segundo').textContent = `2. ${bairroSegundo} - IDH: ${valorizacaoSegundo}`;
                document.getElementById('valorizacao-kpi-Terceiro').textContent = `3. ${bairroTerceiro} - IDH: ${valorizacaoTerceiro}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}
//kpi 4 primeira sessão
document.addEventListener("DOMContentLoaded", buscarDataAtualizacao);

function buscarDataAtualizacao() {
    fetch(`/precoM2/buscarDataAtualizacao`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados de atualização recebidos: ${JSON.stringify(resposta)}`);

                const data = resposta.ultima_data_insercao;

                document.getElementById('resposta-data').textContent = `${data}`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}



// segundo grafico primeira sessão
document.addEventListener("DOMContentLoaded", function () {
    obterPrecoM2();
});


fetch('/precoM2/buscarCapitaDemografica')
    .then(response => response.json())
    .then(data => {
        const bairros = data.map(item => item.bairro);
        const densidades = data.map(item => -item.densidadeDemografica); // Multiplicando por -1
        const rendas = data.map(item => item.rendaPerCapita);

        const ctx2 = document.getElementById('grafico2');
        const grafico2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: bairros,
                datasets: [
                    {
                        label: 'Densidade demográfica (hab/km²)',
                        data: densidades, // Valores negativos
                        backgroundColor: '#909DB6'
                    },
                    {
                        label: 'Renda per Capita',
                        data: rendas,
                        backgroundColor: '#001F31'
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return Math.abs(value); // Mostrando valores absolutos
                            },
                            color: '#001F31'
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            color: '#001F31'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#001F31',
                            font: {
                                size: 7
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Principais Cidades em Densidade Demográfica e Renda Per Capita Juntas',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erro ao buscar dados para o gráfico:', error);
    });

//grafico bairros com maior preço primeira sessão- segundo grafico
const ctx3 = document.getElementById('grafico3');
fetch('/precoM2/buscarRegioesComMaiorPreco')

    .then(response => response.json())
    .then(data => {
        const labels = data.map(item => item.bairro);  // Agora pega os bairros
        const datasetData = data.map(item => item.mediaValorM2);  // Agora pega o preço médio do m²

        const grafico3 = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Bairros com o maior preço do m² (R$)',
                    data: datasetData,
                    backgroundColor: '#909DB6'
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: '#001F31'
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            color: '#001F31'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#001F31',
                            boxWidth: 0
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Erro ao carregar dados do gráfico:', error));



//PRIMEIRO grafico sessão pesquisa
let idhChart = null;
var selectedValue = null;

document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');

    function pesquisar_insights() {
        const selectedValue = bairroSelect.value;
        console.log('Bairro selecionado:', selectedValue);

        if (selectedValue) {
            fetch(`/idh/idh-grafico?selectedNome=${encodeURIComponent(selectedValue)}`)
                .then(resposta => {
                    if (resposta.ok) {
                        return resposta.json();
                    } else {
                        throw new Error(`Erro na resposta do servidor: ${resposta.status}`);
                    }
                })
                .then(dados => {
                    console.log('Dados recebidos:', dados);
                    renderizarGrafico(dados.idh);
                })
                .catch(error => {
                    console.error(`Erro na obtenção dos dados: ${error.message}`);
                });
        } else {
            console.log('Nenhum bairro selecionado.');
        }
    }

    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});

function renderizarGrafico(idhAtual) {
    const ctxIdh = document.getElementById('idhChart').getContext('2d');

    if (idhChart) {
        idhChart.data.datasets[0].data = [idhAtual, 0.85];
        idhChart.update();
    } else {
        idhChart = new Chart(ctxIdh, {
            type: 'doughnut',
            data: {
                labels: [`IDH atual da região`, 'IDH médio do estado de SP'],
                datasets: [{
                    label: 'IDH',
                    data: [idhAtual, 0.90],
                    backgroundColor: ['#001F31', '#909DB6'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Mantém a proporção original   
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuad',
                    onComplete: function () {
                        console.log('Animação Completa');
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Comparativo IDH: SP(média) vs Bairro',
                    }
                }
            }
        });
    }
}

// segundo grafico pesquisa
let grafico5 = null;
document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');

    function pesquisar_insights() {
        const selectedValue = bairroSelect.value;
        console.log('Bairro selecionado:', selectedValue);

        if (selectedValue) {
            const urlGraficoM2 = `/idh/media-m2-grafico?selectedNome=${encodeURIComponent(selectedValue)}`;

            fetch(urlGraficoM2, { method: "GET" })
                .then(function (resposta) {
                    if (resposta.ok) {
                        resposta.json().then(function (dados) {
                            console.log("Dados recebidos para o gráfico de linha:", dados);

                            const labels = dados.map(item => item.mes);
                            const valores = dados.map(item => parseFloat(item.mediaValorM2));

                            const ctx5 = document.getElementById('grafico5').getContext('2d');

                            if (grafico5) {
                                grafico5.data.labels = labels;
                                grafico5.data.datasets[0].data = valores;
                                grafico5.update();
                            } else {
                                grafico5 = new Chart(ctx5, {
                                    type: 'line',
                                    data: {
                                        labels: labels,
                                        datasets: [{
                                            label: 'Média Valor m²',
                                            data: valores,
                                            backgroundColor: '#909DB6',
                                            borderColor: '#001F31',
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        animation: {
                                            duration: 1500,  // Tempo de animação
                                            easing: 'easeOutQuad',  // Tipo de animação
                                            onComplete: function () {
                                                console.log('Animação Completa');
                                            }
                                        },
                                        scales: {
                                            y: {
                                                beginAtZero: true,
                                                ticks: { color: '#001F31' }
                                            },
                                            x: {
                                                ticks: { color: '#001F31' },
                                                grid: { display: false }
                                            }
                                        },
                                        plugins: {
                                            legend: {
                                                labels: {
                                                    color: '#001F31',
                                                }
                                            },
                                            title: {
                                                display: true,
                                                text: 'Variação mensal do preço do m² nos últimos 4 meses',
                                                font: { size: 12 },
                                                padding: { top: 10, bottom: 10 }
                                            }
                                        }
                                    }
                                });
                            }
                        });
                    } else {
                        console.error("Erro na resposta do servidor para gráfico de linha: ", resposta.status);
                    }
                })
                .catch(function (error) {
                    console.error(`Erro ao buscar dados do gráfico de linha: ${error.message}`);
                });
        }
    }

    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});


//terceira grafica pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');

    function pesquisar_insights() {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            return;
        }

        const urlRenda = `/idh/porcentagem-renda?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlRenda)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.porcentagemMaior !== undefined) {
                    console.log('Dados recebidos:', data);

                    const ctx6 = document.getElementById('grafico6');


                    if (ctx6.chart) {
                        ctx6.chart.destroy();
                    }

                    const grafico6 = new Chart(ctx6, {
                        type: 'bar',
                        data: {
                            labels: ['São Paulo', selectedValue],
                            datasets: [{
                                label: '',
                                data: [3443, data.rendaPerCapita],
                                backgroundColor: ['#909DB6', '#001F31']
                            }]
                        },
                        options: {
                            indexAxis: 'x',
                            responsive: true, // Ajusta ao tamanho do contêiner
                            maintainAspectRatio: false, // Mantém a proporção original 
                            animation: {
                                duration: 1500,
                                easing: 'easeOutQuad',
                                onComplete: function () {
                                    console.log('Animação Completa');
                                }
                            },
                            scales: {
                                x: {
                                    beginAtZero: true,
                                    ticks: {
                                        color: '#001F31'
                                    },
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    ticks: {
                                        color: '#001F31'
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        boxWidth: 0,
                                        color: '#001F31'
                                    }
                                },
                                title: {
                                    display: true,
                                    text: `Comparação de Renda Per Capita: SP vs ${selectedValue}`
                                }
                            }
                        }
                    });


                    ctx6.chart = grafico6;

                    const kpiPercapitaSpan = document.querySelector('#kpi_percapita span');
                    const maiorOuMenor = data.porcentagemMaior >= 0 ? 'maior' : 'menor';
                    kpiPercapitaSpan.innerHTML = `${Math.abs(data.porcentagemMaior)}% ${maiorOuMenor}`;
                } else {
                    console.error('Erro: porcentagemMaior não está disponível.');
                }
            })
            .catch(error => console.error('Erro na obtenção dos dados:', error));
    }


    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});







//kpi 1 pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');

    function pesquisar_insights() {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            return;
        }

        const urlDensidade = `/idh/densidade-bairro?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlDensidade)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos para KPI de densidade:', data);


                titulo_densidade.innerHTML = `Densidade demográfica do bairro (Hab/Km²) (${data.dtInsercao}):`;
                numero_densidade.innerHTML = data.densidadeDemografica;
            })
            .catch(error => {
                console.error('Erro na obtenção dos dados:', error);

                const kpiTitulo = document.querySelector('.titulo_kpi');
                const kpiTexto = document.querySelector('.texto_kpi');

                kpiTitulo.innerHTML = `Densidade demográfica do bairro (Hab/Km²) (Dados não disponíveis):`;
                kpiTexto.innerHTML = 'N/A';
            });
    }

    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});







//KPI2
document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');


    function pesquisar_insights() {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            return;
        }

        const urlRanking = `/idh/ranking-bairro?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlRanking)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Dados recebidos para o ranking:", data);

                const kpiRankingTitulo = document.querySelector('.titulo_kpi');
                const kpiRankingTexto = document.querySelector('.texto_kpi');

                kpiRankingTitulo.innerHTML = `Classificação no ranking dos metros quadrados mais valorizados de São Paulo: `;
                kpi_colocacao.innerHTML = `${data.ranking}° colocada`;
            })
            .catch(error => console.error('Erro ao buscar ranking do bairro:', error));
    };

    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});

//kpi3

document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');

    function pesquisar_insights() {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            return;
        }

        const urlTaxaValorizacao = `/idh/taxa-valorizacao?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlTaxaValorizacao)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Dados recebidos para a taxa de valorização:", data);

                porcentagem_localizacao.innerHTML = `${data.taxa_valorizacao}%`;
                taxa_atual.innerHTML = `2024 - ${data.dado_atual}`;
                taxa_anopassado.innerHTML = `2023 - ${data.dado_anopassado}`;
            })
            .catch(error => {
                console.error('Erro ao buscar taxa de valorização:', error);
            });
    }

    filtrarBtn.addEventListener('click', function () {
        pesquisar_insights();
    });
});

const ctx7 = document.getElementById('grafico7');
const grafico7 = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{
            label: 'Previsão dos próximos 6 meses do m² (R$):',
            data: [6.867, 6.700, 6.760, 6.758, 6.740, 6.800, 6.900, 7.000, 7.100],
            backgroundColor: ['#909DB6', '#001F31', '#909DB6', '#228B22', '#FF0000', '#228B22', '#228B22', '#228B22', '#228B22'],
            borderColor: ['#909DB6', '#001F31', '#909DB6', '#228B22', '#FF0000', '#228B22', '#228B22', '#228B22', '#228B22'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Previsão de Futuro do m²',
                color: '#001F31',
                font: {
                    size: 16,
                }
            },
            legend: {
                labels: {
                    color: '#001F31',
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 6,
                max: 7.5,
                ticks: {
                    color: '#001F31',
                }
            },
            x: {
                ticks: {
                    color: '#001F31'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

/////// 1 kpi 3 sessao

document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-prevista');
    const filtrarBtn = document.getElementById('filtrarBtn2');
    const precoAtualSpan = document.getElementById('preco_local');

    filtrarBtn.addEventListener('click', function () {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            precoAtualSpan.innerHTML = 'Selecione um bairro válido.';
            return;
        }

        const urlvalorm2 = `/idh/valor-local?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlvalorm2)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos para mostrar preço:', data);



                titulo_preco_local.innerHTML = `Preço do m² em ${selectedValue} lugar: (${data.dtInsercao})`
                precoAtualSpan.innerHTML = `R$ ${data.valorM2}`;
            })
            .catch(error => {
                console.error('Erro ao buscar valor do m²:', error);
                precoAtualSpan.innerHTML = 'Erro ao buscar valor.';
            });
    });
});

//kpi2 terceira sessão
document.addEventListener('DOMContentLoaded', function () {
    const bairroSelect = document.getElementById('regiao-bairro-prevista');
    const filtrarBtn = document.getElementById('filtrarBtn2');
    const tamanhoTerrenoInput = document.getElementById('tamanho_terreno');
    const precoAtualSpan = document.getElementById('preco_atual');

    filtrarBtn.addEventListener('click', function () {
        const selectedValue = bairroSelect.value.trim();
        console.log('Bairro selecionado:', selectedValue);

        if (!selectedValue) {
            console.error("Nenhum valor válido foi selecionado.");
            precoAtualSpan.innerHTML = 'Selecione um bairro válido.';
            return;
        }

        const urlvalorm2 = `/idh/valor-m2?selectedNome=${encodeURIComponent(selectedValue)}`;

        fetch(urlvalorm2)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos para cálculo de preço atual:', data);

                const tamanhoTerreno = parseFloat(tamanhoTerrenoInput.value);
                const valorM2 = parseFloat(data.valorM2);

                if (isNaN(tamanhoTerreno) || tamanhoTerreno <= 0) {
                    precoAtualSpan.innerHTML = 'Informe o tamanho do terreno!';
                    return;
                }

                if (isNaN(valorM2)) {
                    precoAtualSpan.innerHTML = 'Erro: valor do m² inválido!';
                    return;
                }

                const resultado = tamanhoTerreno * valorM2;

                // Atualizar a KPI
                precoAtualSpan.innerHTML = `R$ ${resultado}`;
            })
            .catch(error => {
                console.error('Erro ao buscar valor do m²:', error);
                precoAtualSpan.innerHTML = 'Erro ao buscar valor.';
            });
    });
});

function configurarDropdownBairros() {
    const selectBairro = document.getElementById('regiao-bairro-pesquisa');
    const mensagemDiv = document.getElementById('conteudoMensagem');
    const fecharPopup = document.getElementById('fechar');

    selectBairro.addEventListener('change', function () {
        const bairroSelecionado = this.value;

        mensagemDiv.textContent = '';
        dadosDiv.innerHTML = '';

        if (!bairroSelecionado) {
            exibirPopup('Por favor, selecione um bairro.');
            return;
        }

        axios.get(`/ApiArquivos/verificarBairro/${bairroSelecionado}`)
            .then(response => {
                const { valorM2, densidade, idh } = response.data;

                if (valorM2 && densidade && idh) {
                    carregarDadosDoBanco(bairroSelecionado);
                } else {
                    const mensagens = [];
                    if (!valorM2) mensagens.push('valor por m²');
                    if (!densidade) mensagens.push('densidade demográfica');
                    if (!idh) mensagens.push('IDH');

                    mensagemDiv.textContent = `Os seguintes dados não foram disponibilizados pelo Censo/IBGE: ${mensagens.join(', ')}.`;

                    exibirPopup(`Os seguintes dados não foram disponibilizados pelo Censo/IBGE: ${mensagens.join(', ')}.`);
                }
            })
            .catch(error => {
                console.log('Erro ao verificar os dados: ' + error.message);
            });
    });

    function exibirPopup(mensagem) {
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.display = 'block';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000);
    }

    fecharPopup.onclick = function () {
        mensagemDiv.style.display = 'none';
    };
}