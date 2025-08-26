document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});

function exibir(id) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(painel => painel.style.display = 'none');

  const selecionado = document.getElementById(id);
  if (selecionado) {
    selecionado.style.display = 'block';
  }
}

 function createCalendar(year, month) {
      let divCalendar = document.getElementById("calendar");

      // Nome dos meses
      let months = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
      ];

      // Cabeçalho do calendário
      let date = new Date(year, month);
      let table = "<h2>" + months[month] + " " + year + "</h2>";
      table += "<table><tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th></tr><tr>";

      // Preenche dias antes do início do mês
      for (let i = 0; i < date.getDay(); i++) {
        table += "<td></td>";
      }

      // Dias do mês
      while (date.getMonth() === month) {
        let today = new Date();
        let classToday = (date.getDate() === today.getDate() &&
                          date.getMonth() === today.getMonth() &&
                          date.getFullYear() === today.getFullYear()) ? "today" : "";

        table += `<td class="${classToday}">${date.getDate()}</td>`;

        if (date.getDay() === 6) {
          table += "</tr><tr>"; // Quebra de linha no sábado
        }

        date.setDate(date.getDate() + 1);
      }

      table += "</tr></table>";
      divCalendar.innerHTML = table;
    }

    // Cria o calendário do mês atual
    let today = new Date();
    createCalendar(today.getFullYear(), today.getMonth());
