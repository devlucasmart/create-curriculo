function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adiciona as informações do cabeçalho
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    doc.setFontSize(20);
    doc.text(nome, 20, 20);
    doc.setFontSize(12);
    doc.text(`${endereco} | ${telefone} | ${email}`, 20, 30);

    // Adiciona o Resumo
    doc.setFontSize(16);
    doc.text('Resumo', 20, 40);
    doc.setFontSize(12);
    const resumo = document.getElementById('resumo').value;
    doc.text(resumo, 20, 50, { maxWidth: 170 });

    // Adiciona a Experiência Profissional
    let yOffset = 70;
    doc.setFontSize(16);
    doc.text('Experiência Profissional', 20, yOffset);
    yOffset += 10;
    const experiencias = document.querySelectorAll('.empresa');
    experiencias.forEach((empresa, index) => {
        const cargo = document.querySelectorAll('.cargo')[index].value;
        const data = document.querySelectorAll('.data')[index].value;
        const descricao = document.querySelectorAll('.descricao')[index].value;
        doc.setFontSize(12);
        doc.text(`${empresa.value} - ${cargo}`, 20, yOffset);
        yOffset += 10;
        doc.text(data, 20, yOffset);
        yOffset += 10;
        doc.text(descricao, 20, yOffset, { maxWidth: 170 });
        yOffset += 20;
    });

    // Adiciona a Educação
    doc.setFontSize(16);
    doc.text('Educação', 20, yOffset);
    yOffset += 10;
    const instituicoes = document.querySelectorAll('.instituicao');
    instituicoes.forEach((instituicao, index) => {
        const grau = document.querySelectorAll('.grau')[index].value;
        const data = document.querySelectorAll('.data')[index + experiencias.length].value;
        const descricao = document.querySelectorAll('.descricao')[index + experiencias.length].value;
        doc.setFontSize(12);
        doc.text(`${instituicao.value} - ${grau}`, 20, yOffset);
        yOffset += 10;
        doc.text(data, 20, yOffset);
        yOffset += 10;
        doc.text(descricao, 20, yOffset, { maxWidth: 170 });
        yOffset += 20;
    });

    // Adiciona as Habilidades
    doc.setFontSize(16);
    doc.text('Habilidades', 20, yOffset);
    yOffset += 10;
    const habilidades = document.querySelectorAll('.habilidade');
    habilidades.forEach(habilidade => {
        doc.setFontSize(12);
        doc.text(habilidade.value, 20, yOffset);
        yOffset += 10;
    });

    // Adiciona os Projetos
    doc.setFontSize(16);
    doc.text('Projetos', 20, yOffset);
    yOffset += 10;
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach((projeto, index) => {
        const descricao = document.querySelectorAll('.descricao')[index + experiencias.length + instituicoes.length].value;
        doc.setFontSize(12);
        doc.text(projeto.value, 20, yOffset);
        yOffset += 10;
        doc.text(descricao, 20, yOffset, { maxWidth: 170 });
        yOffset += 20;
    });

    // Adiciona as Certificações
    doc.setFontSize(16);
    doc.text('Certificações', 20, yOffset);
    yOffset += 10;
    const certificacoes = document.querySelectorAll('.certificacao');
    certificacoes.forEach(certificacao => {
        doc.setFontSize(12);
        doc.text(certificacao.value, 20, yOffset);
        yOffset += 10;
    });

    // Adiciona os Idiomas
    doc.setFontSize(16);
    doc.text('Idiomas', 20, yOffset);
    yOffset += 10;
    const idiomas = document.querySelectorAll('.idioma');
    idiomas.forEach(idioma => {
        doc.setFontSize(12);
        doc.text(idioma.value, 20, yOffset);
        yOffset += 10;
    });

    doc.save('curriculo.pdf');
}
