const obterDadosDoPerfil = async () => {
    const url = 'https://github.com/Edy010Reys/portfolio/main/data/profile.json';
    const resposta = await fetch(url);
    return resposta.json();
};
