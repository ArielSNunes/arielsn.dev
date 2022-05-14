export default function getJobs() {
	return [
		{
			location: 'São José dos Campos/SP',
			place: 'Henrique Consultoria Tributária',
			isCurrent: false,
			startDate: new Date(2019, 4, 16),
			endDate: new Date(2020, 10, 13),
			responsibilities: [
				'Desenvolvimento de software e sistemas utilizando Bootstrap 4, jQuery, PHP 7 e MySQL',
				'Otimização de performance de banco de dados',
				'Participação no desenvolvimento de sistemas de análise fiscal, utilizando documentos como EFD ICMS-IPI e GIA',
				'Desenvolvimento de sistema para leitura, interpretação e análise de documentos de crédito acumulado de acordo com portarias da Secretaria da Fazenda',
				'Arquitetura e desenvolvimento de sistema de verificação e validação de informações para transmissão para a Receita Federal do Brasil',
				'Desenvolvimento de API Rest utilizando Laravel e MySQL',
				'Desenvolvimento de soluções para automatização de tarefas voltadas à area de análise fiscal'
			],
			role: 'Auxiliar de TI'
		},
		{
			location: 'São José dos Campos/SP',
			place: 'Dynamic System e VISH! Internet e Sistemas LTDA',
			isCurrent: true,
			startDate: new Date(2020, 12, 1),
			endDate: new Date(2020, 10, 13),
			responsibilities: [
				'Desenvolvimento de software e sistemas utilizando Bootstrap 4, jQuery, PHP 7 e MySQL',
				'Desenvolvimento de API utilizando NodeJS e PHP 7',
				'Desenvolvimento de rotinas de processamento assíncrono',
				'Desenvolvimento de rotinas e lógicas para processamento de dados geoespaciais',
				'Desenvolvimento de mapas interativos com Leaflet e ArcGIS'
			],
			role: 'Desenvolvedor Pleno II'
		}
	].sort((a,b) => b.startDate - a.startDate)
}
