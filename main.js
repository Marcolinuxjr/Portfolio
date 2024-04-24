const username = 'Marcolinuxjr';

const getGitHubProfileInfos = () => {
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.avatarImage').src = data.avatar_url;
            document.querySelector('.userName').textContent = data.name || 'Nome do Usuário';
            document.querySelector('.userDescription').textContent = data.bio || 'Descrição do usuário';
            document.querySelector('.userGithub').href = data.html_url || '#';
            document.querySelector('.userNick').textContent = data.login || 'Apelido do Usuário';
        })
        .catch(error => {
            console.error('Ocorreu um erro ao obter dados do GitHub:', error);
        });
};

getGitHubProfileInfos();



