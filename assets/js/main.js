// Atualiza as informações básicas do perfil
const atualizarPerfil = (profileData) => {
    const emprego = document.getElementById('profile-job')
    emprego.innerText = profileData.job

    const local = document.getElementById('profile-location')
    local.innerText = profileData.location

    const linkedIn = document.getElementById('profile-linkedin')
    linkedIn.href = profileData.linkedin

    const email = document.getElementById('profile-email');
    email.href = `mailto:${profileData.email}`;
    email.innerText = profileData.email;
}

// Atualiza a lista de soft skills (texto simples)
const atualizarSoftSkills = (profileData) => {
    const softSkills = document.getElementById('skills-soft')
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

// Atualiza a lista de idiomas
const atualizarIdiomas = (profileData) => {
    const idiomas = document.getElementById('languages-list')
    idiomas.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('')
}

// Atualiza os cursos e formações
const atualizarCursos = (profileData) => {
    const cursos = document.getElementById('education-list');
    cursos.innerHTML = profileData.education.map((curso) => {
        const dataInicio = curso.period?.start ?? '--'; // Pega inicio se existir, senão '--'
        const dataFim = curso.period?.end ?? '--';  // Pega fim se existir, senão '--'

        return `
        <li>
            <h3>${curso.training} - ${curso.institution}</h3>
            <p class="period">Início: ${dataInicio} Fim: ${dataFim}</p>
        </li>`;
    }).join('');
}

// Atualiza a experiência profissional
const atualizarExperienciaProfissional = (profileData) => {
    const expProfissionais = document.getElementById('experience-list');
    expProfissionais.innerHTML = profileData.experience.map((experience) => {
        const dataInicio = experience.period?.start ?? '--'; // Pega início se existir, senão '--'
        const dataFim = experience.period?.end ?? '--';       // Pega fim se existir, senão '--'

        return `
        <li>
            <h3 class="title">${experience.name}</h3>
            <h4>${experience.institution}</h4>
            <p class="period">Início: ${dataInicio} Fim: ${dataFim}</p>
        </li>`;
    }).join('');
}

// Função auto-invocada (IIFE) para carregar os dados e atualizar o HTML
(async () => {
    const profileData = await obterDadosDoPerfil()
    atualizarPerfil(profileData)
    atualizarSoftSkills(profileData)
    atualizarIdiomas(profileData)
    atualizarCursos(profileData)
    atualizarExperienciaProfissional(profileData)
})()