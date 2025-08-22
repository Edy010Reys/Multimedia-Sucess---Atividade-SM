const obterDadosDoPerfil = async () => {
    const url = 'https://raw.githubusercontent.com/edy010reys/portfolio/main/data/profile.json';
    const resposta = await fetch(url);
    return resposta.json();
};
