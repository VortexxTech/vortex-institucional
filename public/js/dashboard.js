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
        centro: ['Bela Vista', 'Bom Retiro', 'Cambuci', 'Consolação', 'Sé', 'Higienópolis', 'Liberdade', 'República', 'Santa Cecília'],
        norte: ['Brasilândia', 'Casa Verde', 'Freguesia do Ó', 'Jaraguá', 'Jaçanã', 'Limão', 'Mandaqui', 'Santana', 'Tremembé', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Vila Medeiros', 'Vila Nova Cachoeirinha'],
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


function preco_atual() {
    var preco = 6.867;
    var tamanhoTerreno = tamanho_terreno.value;

    var resultado = preco * tamanhoTerreno;

    document.getElementById('preco_atual').innerText = resultado.toFixed(3);
}

function preco_futuro() {
    var preco_futuro = 7.100;
    var tamanhoTerreno = tamanho_terreno.value;

    var resultado = preco_futuro * tamanhoTerreno;

    document.getElementById('preco_futuro').innerText = resultado.toFixed(3);
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

function obterRendaPerCapta() {
    fetch(`/rendaPerCapta/buscarRendaPerCapta`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarRendaPerCapta(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarRendaPerCapta(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let borderColors = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [],
            fill: false,
            borderColor: borderColors,
            backgroundColor: borderColors,
            tension: 0.1
        }]
    };

    const colorPalette = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(0, 255, 127)',
        'rgb(255, 0, 255)'
    ];

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.religiao);
        dados.datasets[0].data.push(registro.quantidade);

        let colorIndex = i % colorPalette.length;
        borderColors.push(colorPalette[colorIndex]);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    let myChart2 = new Chart(
        document.getElementById(`religion_canvas`),
        config
    );

}
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

function obterValorizacao() {
    fetch(`/precoM2/buscarValorizacao`, { cache: 'no-store' })
        .then(function (response) {
            // Verifica se a resposta foi bem-sucedida (status 200-299)
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            // Verifica se a resposta tem conteúdo
            return response.text().then(function (text) {
                if (text) {
                    return JSON.parse(text);  // Só tenta fazer o parse se houver conteúdo
                } else {
                    throw new Error('Resposta vazia');
                }
            });
        })
        .then(function (resposta) {
            console.log(`Dados de valorização da cidade na KPI recebidos: ${JSON.stringify(resposta)}`);

            const bairro = resposta.bairro;
            const zona = resposta.zona;
            const valorizacao = resposta.percentualValorizacao;

            // Preenchendo as KPIs
            document.querySelector('.titulo_kpi').textContent = `Subprefeitura com a maior valorização do preço do m² no mês(R$):`;
            document.querySelector('.texto_kpi').textContent = `${bairro} - ${zona}`;
            document.getElementById('valorizacao-kpi').textContent = `${valorizacao}%`;
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}


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
                document.getElementById('valorizacao-zona').textContent = `${zona} - ${valorizacao}%`;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados para KPI: ${error.message}`);
        });
}


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

                // Preenchendo as KPIs
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

document.addEventListener("DOMContentLoaded", buscarDataAtualizacao);

function buscarDataAtualizacao() {
    fetch(`/precoM2/buscarDataAtualizacao`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados de atualização recebidos: ${JSON.stringify(resposta)}`);

                const data = resposta.ultima_data_insercao;
                // Preenchendo as KPIs
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




function obterIdh() {
    fetch(`/idh/buscarIdh`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarIdh(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarIdh(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let borderColors = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [],
            fill: false,
            borderColor: borderColors,
            backgroundColor: borderColors,
            tension: 0.1
        }]
    };

    const colorPalette = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(0, 255, 127)',
        'rgb(255, 0, 255)'
    ];

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.religiao);
        dados.datasets[0].data.push(registro.quantidade);

        let colorIndex = i % colorPalette.length;
        borderColors.push(colorPalette[colorIndex]);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    let myChart2 = new Chart(
        document.getElementById(`religion_canvas`),
        config
    );

}

function obterDensidadeDemografica() {
    fetch(`/densidadeDemografica/buscarDensidadeDemografica`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarDensidadeDemografica(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarDensidadeDemografica(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let borderColors = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [],
            fill: false,
            borderColor: borderColors,
            backgroundColor: borderColors,
            tension: 0.1
        }]
    };

    const colorPalette = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(0, 255, 127)',
        'rgb(255, 0, 255)'
    ];

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.religiao);
        dados.datasets[0].data.push(registro.quantidade);

        let colorIndex = i % colorPalette.length;
        borderColors.push(colorPalette[colorIndex]);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    let myChart2 = new Chart(
        document.getElementById(`religion_canvas`),
        config
    );

}

// const ctx = document.getElementById('grafico');
// const grafico = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
//         datasets: [{
//             label: 'Variação mensal do preço do m² em SP nos últimos 9 meses(R$):',
//             data: [6.867, 6.700, 6.760, 6.758, 6.740, 6.800, 6.900, 7.000, 7.100],
//             backgroundColor: ['#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6'],
//             borderColor: ['#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 min: 6,
//                 max: 7.5,
//                 ticks: {
//                     color: '#001F31',

//                 }
//             },
//             x: {
//                 ticks: {
//                     color: '#001F31'
//                 },
//                 grid: {
//                     display: false
//                 }
//             }
//         },
//         plugins: {
//             legend: {

//                 labels: {
//                     color: '#001F31',
//                     boxWidth: 0,
//                     font: {
//                         size: 15,
//                     }
//                 }
//             }
//         }
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    obterPrecoM2();
});

// Suponha que os dados sejam recebidos como resposta JSON da API.
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
                labels: bairros, // Usando os nomes reais dos bairros
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

// vou ter que pegar o value do option que o cliente selecionar e fazer um select com esse value
// var selectedValue = null; // Declara a variável globalmente

// document.addEventListener('DOMContentLoaded', function () {
//     // Pegando o select do HTML
//     const bairroSelect = document.getElementById('regiao-bairro-pesquisa');

//     // Adiciona evento de mudança ao select
//     bairroSelect.addEventListener('change', function () {
//         selectedValue = this.value; // Atualiza a variável global com o valor selecionado
//         console.log('Bairro selecionado:', selectedValue);
//     });
// });


// // Função para atualizar o gráfico de IDH
// let idhChart; // Variável global para o gráfico



// function atualizarGraficoIdh(bairro) {
//     fetch(`/idh/idh-grafico?bairro=${bairro}`) // Enviando o bairro como query param
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Erro na requisição: ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then(resposta => {
//             console.log(`Dados de IDH para gráfico recebidos:`, resposta);

//             const idhBairro = resposta.idhBairro || 0; // Valor do bairro
//             const idhSP = resposta.idhEstadoSP || 0.85; // Valor padrão do estado de SP

//             const ctxIdh = document.getElementById('idhChart').getContext('2d');

//             // Destroi o gráfico existente, se houver
//             if (idhChart) {
//                 idhChart.destroy();
//             }

//             // Cria o novo gráfico
//             idhChart = new Chart(ctxIdh, {
//                 type: 'doughnut',
//                 data: {
//                     labels: ['IDH atual dessa subprefeitura', 'IDH médio do estado de SP'],
//                     datasets: [{
//                         label: 'IDH',
//                         data: [idhBairro, idhSP],
//                         backgroundColor: ['#001F31', '#909DB6'],
//                         borderColor: '#ffffff',
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             display: true,
//                             position: 'top',
//                             labels: {
//                                 boxWidth: 15,
//                                 padding: 2,
//                                 font: {
//                                     size: 9,
//                                 }
//                             }
//                         },
//                         title: {
//                             display: true,
//                             text: 'Comparativo IDH: SP(média) vs Bairro',
//                             font: {
//                                 size: 12,
//                             },
//                             padding: {
//                                 top: 10,
//                                 bottom: 10
//                             },
//                         }
//                     }
//                 }
//             });
//         })
//         .catch(error => {
//             console.error(`Erro ao buscar dados para o gráfico: ${error.message}`);
//         });
// }



// Variável global para armazenar o gráfico
let idhChart = null;
var selectedValue = null;
// Captura o valor do select e faz a requisição ao servidor
document.addEventListener('DOMContentLoaded', function () {
   // Declara a variável globalmente


        // Pegando o select do HTML
        const bairroSelect = document.getElementById('regiao-bairro-pesquisa');

        // Adiciona evento de mudança ao select
        bairroSelect.addEventListener('change', function () {
            selectedValue = this.value; // Atualiza a variável global com o valor selecionado
            console.log('Bairro selecionado:', selectedValue);
      
        if (selectedValue) {
            // Faz a requisição ao servidor
            fetch(`/idh/idh-grafico?selectedNome=${encodeURIComponent(selectedValue)}`)
                .then(resposta => {
                    if (resposta.ok) {
                        return resposta.json(); // Converte para JSON
                    } else {
                        throw new Error(`Erro na resposta do servidor: ${resposta.status}`);
                    }
                })
                .then(dados => {
                    console.log('Dados recebidos:', dados);

                    // Atualiza ou cria o gráfico
                    renderizarGrafico(dados.idh);
                })
                .catch(error => {
                    console.error(`Erro na obtenção dos dados: ${error.message}`);
                });
        } else {
            console.log('Nenhum bairro selecionado.');
        }
    });
});

// Função para renderizar ou atualizar o gráfico
function renderizarGrafico(idhAtual) {
    const ctxIdh = document.getElementById('idhChart').getContext('2d');

    if (idhChart) {
        // Atualiza os dados do gráfico existente
        idhChart.data.datasets[0].data = [idhAtual, 0.85]; // Atualiza com o IDH recebido
        idhChart.update();
    } else {
        // Cria o gráfico se ainda não existir
        idhChart = new Chart(ctxIdh, {
            type: 'doughnut',
            data: {
                labels: [`IDH atual da região ${selectedValue}`, 'IDH médio do estado de SP'],
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

//grafico funcioando estatico
// const ctxIdh = document.getElementById('idhChart').getContext('2d');
// const idhChart = new Chart(ctxIdh, {
//     type: 'doughnut',
//     data: {
//         labels: ['IDH atual dessa subprefeitura', 'IDH médio do estado de SP'],
//         datasets: [{
//             label: 'IDH',
//             data: [0.9, 0.85],
//             backgroundColor: ['#001F31', '#909DB6'],
//             borderColor: '#ffffff',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     boxWidth: 15,
//                     padding: 2,
//                     font: {
//                         size: 9,
//                     },

//                     generateLabels: function (chart) {
//                         const original = Chart.overrides.doughnut.plugins.legend.labels.generateLabels;
//                         const labels = original.call(this, chart);
//                         labels.forEach(label => {
//                             label.hidden = chart.getDatasetMeta(label.datasetIndex).hidden;
//                         });
//                         return labels;
//                     }
//                 }
//             },
//             title: {
//                 display: true,
//                 text: 'Comparativo IDH: SP(média) vs Bairro',
//                 font: {
//                     size: 12,
//                 },
//                 padding: {
//                     top: 10,
//                     bottom: 10
//                 },
//             }
//         }
//     }
// });


const ctx5 = document.getElementById('grafico5');
const grafico5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Junho', 'Julho', 'Agosto', 'Setembro'],
        datasets: [{
            label: '',
            data: [6.800, 6.600, 7.000, 7.100],
            backgroundColor: ['#001F31', '#909DB6', '#001F31', '#909DB6'],
            borderColor: ['#001F31', '#909DB6', '#001F31', '#909DB6'],
            borderWidth: 1
        }]
    },
    options: {
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
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0,
                    color: '#001F31',

                }
            }, title: {
                display: true,
                text: 'Variação mensal do preço do m² nos últimos 4 meses',
                font: {
                    size: 12,
                },
                padding: {
                    top: 10,
                    bottom: 10
                },
            }
        }
    }
});

const ctx6 = document.getElementById('grafico6');
const grafico6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['São Paulo', 'Bairro'],
        datasets: [{
            label: '',
            data: [6.00, 6.60],
            backgroundColor: '#909DB6'
        }]
    },
    options: {
        indexAxis: 'x',
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
            }
        }
    }
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

