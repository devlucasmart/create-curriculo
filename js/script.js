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
    addLine(doc);
    

    // Adiciona o Resumo
    doc.setFontSize(16);
    doc.text('Resumo', 20, 40);
    doc.setFontSize(12);
    const resumo = document.getElementById('resumo').value;
    doc.text(resumo, 20, 50, { maxWidth: 170 });

    addLine(doc);

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
    addLine(doc);

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
    addLine(doc);

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

function addLine(doc) {
    doc.setDrawColor(0); // Define a cor da linha como preta
    doc.setLineWidth(1); // Define a largura da linha como 1
    doc.line(20, 35, 190, 35); // Desenha a linha 15 unidades abaixo do texto do cabeçalho
}

function adicionarSecao(idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.innerHTML = `
        <div class="form-group mb-3">
            <input type="text" placeholder="Nome da Empresa" class="form-control empresa"> - 
            <input type="text" placeholder="Cargo" class="form-control cargo"><br>
            <input type="text" placeholder="Data de Início - Data de Término" class="form-control data"><br>
            <textarea placeholder="Descreva suas responsabilidades e realizações nesta posição." class="form-control descricao"></textarea>
        </div>
    `;
    ul.appendChild(li);
}

function removerSecao(idLista) {
    var ul = document.getElementById(idLista);
    var lis = ul.getElementsByTagName("li");
    if (lis.length > 1) {
        ul.removeChild(lis[lis.length - 1]);
    }
}