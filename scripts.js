function showDetails(cursoId) {
    const detalhes = document.querySelectorAll('.detalhes');
    detalhes.forEach(detalhe => detalhe.style.display = 'none');

    const detalhesCurso = document.getElementById(detalhes - ${ cursoId });
    detalhesCurso.style.display = detalhesCurso.style.display === 'block' ? 'none' : 'block';
}