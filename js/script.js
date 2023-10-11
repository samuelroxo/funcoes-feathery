let funcOnAction = function(context){
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
		context.fields.data_nascimento.value = context.fields.Dropdown1.value + '/' + mes[context.fields.Dropdown2.value] + '/' + context.fields.Dropdown3.value;
};

let funcOnLoad = function(context) {
};

let funcOnChange = function(context) {
	document.getElementById("cep_pre").addEventListener('blur', (e) => {
		if (!/^[0-9]{5}-[0-9]{3}$/.test(context.fields.cep_pre.value)) {
			context.fields.cep_pre.setError('CEP incompleto');
		}
	});
	document.getElementById("tel_principal").addEventListener('blur', (e) => {
		if (!/\((\d{2});\) \d{4,5}-\d{4}/.test(context.fields.tel_principal.value)) {
			context.fields.tel_principal.setError('Celular incompleto');
		}
	});
	document.getElementById("cpf_do_lead").addEventListener('blur', (e) => {
		if (!CPF.validate(context.fields.cpf_do_lead.value)) {
			context.fields.cpf_do_lead.setError('CPF Inválido');
		}
	});
};
