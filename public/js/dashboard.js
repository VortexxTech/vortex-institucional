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
    const regiao = document.getElementById('regiao-cidade-pesquisa').value;
    const nomeCidadeElement = document.getElementById('nome_cidade');

    if (zona && regiao) {
        nomeCidadeElement.textContent = `Análise para ${zona.charAt(0).toUpperCase() + zona.slice(1)} - ${regiao}`;
    } else {
        alert('Por favor, selecione uma região e uma cidade.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const zonaRegiaoPesquisa = document.getElementById('zona-regiao-pesquisa');
    const regiaoCidadePesquisa = document.getElementById('regiao-cidade-pesquisa');
    const filtrarBtn = document.getElementById('filtrarBtn');
    const filtrarBtn2 = document.getElementById('filtrarBtn2');
    const nomeCidade = document.getElementById('nome_cidade');

    const cidadesPorRegiao = {
        centro: ['Bela Vista', 'Bom Retiro', 'Cambuci', 'Consolação', 'Sé', 'Higienópolis', 'Liberdade', 'República', 'Santa Cecília'],
        norte: ['Brasilândia', 'Casa Verde', 'Freguesia do Ó', 'Jaraguá', 'Jaçanã', 'Limão', 'Mandaqui', 'Santana', 'Tremembé', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Vila Medeiros', 'Vila Nova Cachoeirinha'],
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
                regiaoCidadePesquisa.appendChild(option);
            });
        }
    });

    // // zonaRegiaoPrevista.addEventListener('change', function () {
    // //     const regiaoSelecionada = this.value;
    // //     regiaoCidadePrevista.innerHTML = '<option value="">Selecione uma cidade</option>';

    // //     if (regiaoSelecionada && cidadesPorRegiao[regiaoSelecionada]) {
    // //         cidadesPorRegiao[regiaoSelecionada].forEach(function (cidade) {
    // //             const option = document.createElement('option');
    // //             option.textContent = cidade;
    // //             regiaoCidadePrevista.appendChild(option);
    // //         });
    // //     }
    // });


});





///segunda sessao

document.getElementById('filtrarBtn2').addEventListener('click', () => {
    const zonaPrevista = document.getElementById('zona-regiao-prevista').value;
    const regiaoPrevista = document.getElementById('regiao-cidade-prevista').value;
    const tamanhoTerreno = document.querySelector('input[type="number"]').value; // Obtém o tamanho do terreno
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
    const regiaoCidadePrevista = document.getElementById('regiao-cidade-prevista');
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
                regiaoCidadePrevista.appendChild(option);
            });
        }
    });
});


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





const ctx = document.getElementById('grafico');
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
        datasets: [{
            label: 'Variação mensal do m² em SP',
            data: [6.867, 6.700, 6.760, 6.758, 6.740, 6.800, 6.900, 7.000, 7.100],
            backgroundColor: ['#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6'],
            borderColor: ['#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6', '#001F31', '#909DB6'],
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
                    color: '#001F31',

                }
            }
        }
    }
});

const ctx2 = document.getElementById('grafico2');
const grafico2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Mooca', 'Pinheiros', 'Liberdade', 'Jardins', 'Maio'],
        datasets: [
            {
                label: 'Densidade demografica',
                data: [11.948, 10.137, 16.454, 12.46, 7.527],
                backgroundColor: '#909DB6'
            },
            {
                label: 'Renda per Capita',
                data: [-4.098, -7.000, -2.333, -5.144, -2.492],
                backgroundColor: '#001F31'
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                min: -8,
                max: 16,
                ticks: {
                    callback: function (value) {
                        return Math.abs(value);
                    },

                    color: '#001F31'
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: '#001F31',

                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#001F31'
                }
            }
        }
    }
});


const ctx3 = document.getElementById('grafico3');
const grafico3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['São Caetano', 'Pinheiros', 'Pinheiros', 'Moema', 'Osasco', 'Perdizes'],
        datasets: [{
            label: 'Preço do m² (R$)',
            data: [7.604, 7.210, 7.600, 7.200, 6.900, 6.500],
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
                    color: '#001F31'
                }
            }
        }
    }
});

const ctxIdh = document.getElementById('idhChart').getContext('2d');
const idhChart = new Chart(ctxIdh, {
    type: 'doughnut',
    data: {
        labels: ['IDH atual de Pinheiros', 'IDH médio do estado de SP'],
        datasets: [{
            label: 'IDH',
            data: [0.9, 0.85],
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
                labels: {
                    boxWidth: 15,
                    padding: 2,
                    font: {
                        size: 9,
                    },

                    generateLabels: function (chart) {
                        const original = Chart.overrides.doughnut.plugins.legend.labels.generateLabels;
                        const labels = original.call(this, chart);
                        labels.forEach(label => {
                            label.hidden = chart.getDatasetMeta(label.datasetIndex).hidden;
                        });
                        return labels;
                    }
                }
            },
            title: {
                display: true,
                text: 'Comparação do IDH',
                font: {
                    size: 12,
                },
                padding: {
                    top: 10,
                    bottom: 10
                },
            }
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                }
            }
        }
    }
});


const ctx5 = document.getElementById('grafico5');
const grafico5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Junho', 'Julho', 'Agosto', 'Setembro'],
        datasets: [{
            label: '',
            data: [6.800, 6.900, 7.000, 7.100],
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
                text: 'Variação mensal do m² nos últimos 4 meses',
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
            data: [6.900, 6.500],
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

