const obterDadosDoPerfil = async () => {
    const url = 'https://raw.githubusercontent.com/Edy010Reys/portfolio/main/data/profile.json';
    const resposta = await fetch(url);
    return resposta.json();
};
