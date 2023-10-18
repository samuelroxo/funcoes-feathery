const mes = {
	'Janeiro': '01',
	'Fevereiro': '02',
	'Março': '03',
	'Abril': '04',
	'Maio': '05',
	'Junho': '06',
	'Julho': '07',
	'Agosto': '08',
	'Setembro': '09',
	'Outubro': '10',
	'Novembro': '11',
	'Dezembro': '12'
};

let funcOnAction = function(context) {
};

let funcOnLoad = function(context) {
};

let funcOnView = function(context) {
};

let funcOnChange = function(context) {
	context.fields.data_nascimento.value = context.fields.nasc_dia.value + '/' + mes[context.fields.nasc_mes.value] + '/' + context.fields.nasc_ano.value;

	let cep_pre = document.getElementById("cep_pre"),
	tel_principal = document.getElementById("tel_principal"),
	cpf_do_lead = document.getElementById("cpf_do_lead");

	if(cep_pre){
		cep_pre.addEventListener('blur', (e) => {
			if (!/^[0-9]{5}-[0-9]{3}$/.test(context.fields.cep_pre.value)) {
				context.fields.cep_pre.setError('CEP incompleto');
			}
		});
	}

	if(tel_principal){
		tel_principal.addEventListener('blur', (e) => {
			if (!/\((\d{2})\) \d{4,5}-\d{4}/.test(context.fields.tel_principal.value)) {
				context.fields.tel_principal.setError('Celular incompleto');
			}
		});
	}

	if(cpf_do_lead) {
		cpf_do_lead.addEventListener('blur', (e) => {
			if (!CPF.validate(context.fields.cpf_do_lead.value)) {
				context.fields.cpf_do_lead.setError('CPF Inválido');
			}
		});
	}
};
