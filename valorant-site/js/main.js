alert("Aproveite o guia sobre Valorant!");

document.addEventListener('DOMContentLoaded', function() {
	const agentesLink = document.querySelector('a[href="https://playvalorant.com/pt-br/agents/"]');
	if (agentesLink) {
		agentesLink.addEventListener('click', function() {
			alert('Você está sendo direcionado para o site de Agentes!');
		});
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const agentesLink = document.querySelector('a[href="#mapas"]');
	if (agentesLink) {
		agentesLink.addEventListener('click', function() {
			alert('Você esta sendo direcionado para a seção de Mapas!');
		});
	}
});
